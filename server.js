require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const storage = require('./services/storage');
const paypalService = require('./services/paypal');

const app = express();
const PORT = process.env.PORT || 5000;

// Security Headers with CSP accommodating PayPal SDK, Fonts, CDNs
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          "'unsafe-eval'",
          "https://www.paypal.com",
          "https://www.sandbox.paypal.com",
          "https://*.paypalobjects.com",
          "https://unpkg.com"
        ],
        connectSrc: [
          "'self'",
          "https://www.paypal.com",
          "https://www.sandbox.paypal.com",
          "https://*.paypal.com",
          "https://*.paypalobjects.com"
        ],
        frameSrc: [
          "'self'",
          "https://www.paypal.com",
          "https://www.sandbox.paypal.com"
        ],
        imgSrc: [
          "'self'",
          "data:",
          "blob:",
          "https://*.paypal.com",
          "https://*.paypalobjects.com",
          "https://images.unsplash.com"
        ],
        styleSrc: [
          "'self'",
          "'unsafe-inline'",
          "https://fonts.googleapis.com"
        ],
        fontSrc: [
          "'self'",
          "https://fonts.gstatic.com"
        ],
        objectSrc: ["'none'"],
        upgradeInsecureRequests: []
      }
    },
    crossOriginEmbedderPolicy: false
  })
);

// CORS
const allowedOrigins = (process.env.CORS_ORIGINS || `http://localhost:${PORT},http://127.0.0.1:${PORT}`)
  .split(',')
  .map(o => o.trim());

app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin (like mobile apps, curl, or same-origin)
      if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
        return callback(null, true);
      }
      return callback(new Error('Blocked by CORS policy'));
    },
    credentials: true
  })
);

// Request Parsing
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Rate Limiters
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests from this IP, please try again later.' }
});

const registrationLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 35,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many registration attempts. Please wait a few minutes.' }
});

app.use('/api/', generalLimiter);

// Serve static frontend files
app.use(express.static(path.join(__dirname)));

// Admin PIN Authentication Middleware
function verifyAdminPin(req, res, next) {
  const pin = req.headers['x-admin-pin'] || req.query.pin || (req.body && req.body.pin);
  const correctPin = process.env.ADMIN_PIN || '2026';

  if (!pin || String(pin).trim() !== String(correctPin).trim()) {
    return res.status(401).json({ error: 'Unauthorized: Invalid Admin PIN' });
  }
  next();
}

// -------------------------------------------------------------
// PUBLIC API ROUTES
// -------------------------------------------------------------

/**
 * Health check
 */
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV || 'development'
  });
});

/**
 * Safe public configuration for Frontend
 */
app.get('/api/config', (req, res) => {
  const clientId = process.env.PAYPAL_CLIENT_ID || '';
  const isConfigured = Boolean(
    clientId && 
    clientId !== 'YOUR_PAYPAL_CLIENT_ID_HERE' && 
    process.env.PAYPAL_CLIENT_SECRET && 
    process.env.PAYPAL_CLIENT_SECRET !== 'YOUR_PAYPAL_CLIENT_SECRET_HERE'
  );

  res.json({
    paypalClientId: clientId || 'sb',
    paypalMode: process.env.PAYPAL_MODE || 'sandbox',
    paypalCurrency: process.env.PAYPAL_CURRENCY || 'USD',
    paypalAmount: process.env.PAYPAL_AMOUNT || '2.50',
    feeInr: Number(process.env.REGISTRATION_FEE_INR || 200),
    isPaypalConfigured: isConfigured
  });
});

/**
 * Desk / Cash Registration (Pay at Desk)
 */
app.post('/api/registrations/desk', registrationLimiter, (req, res) => {
  try {
    const { fullName, year, department, college, email, phone, events } = req.body;

    if (!fullName || fullName.trim().length < 2) {
      return res.status(400).json({ error: 'Full name is required (min 2 characters).' });
    }
    if (!year) {
      return res.status(400).json({ error: 'Year of study is required.' });
    }
    if (!department || !college) {
      return res.status(400).json({ error: 'Department and College name are required.' });
    }
    if (!events || !Array.isArray(events) || events.length === 0) {
      return res.status(400).json({ error: 'Please select at least one event.' });
    }

    const newRecord = storage.addRegistration({
      fullName,
      year,
      department,
      college,
      email,
      phone,
      events,
      paid: false,
      paymentMethod: 'cash_on_desk',
      amount: Number(process.env.REGISTRATION_FEE_INR || 200),
      currency: 'INR'
    });

    res.status(201).json({
      success: true,
      message: 'Registration confirmed. Fee payable at desk.',
      registration: newRecord
    });
  } catch (err) {
    console.error('Error creating desk registration:', err);
    res.status(500).json({ error: 'Failed to save registration. Please try again.' });
  }
});

// -------------------------------------------------------------
// PAYPAL CHECKOUT API ROUTES
// -------------------------------------------------------------

/**
 * 1. Create PayPal Order
 */
app.post('/api/paypal/create-order', registrationLimiter, async (req, res) => {
  try {
    const { fullName, year, department, college, email, phone, events } = req.body;

    // Validate registration fields
    if (!fullName || fullName.trim().length < 2) {
      return res.status(400).json({ error: 'Full name is required.' });
    }
    if (!year || !department || !college) {
      return res.status(400).json({ error: 'All participant details are required.' });
    }
    if (!events || !Array.isArray(events) || events.length === 0) {
      return res.status(400).json({ error: 'At least one event must be selected.' });
    }

    // Save pending registration record
    const regRecord = storage.addRegistration({
      fullName,
      year,
      department,
      college,
      email,
      phone,
      events,
      paid: false,
      paymentMethod: 'paypal',
      amount: Number(process.env.PAYPAL_AMOUNT || 2.50),
      currency: process.env.PAYPAL_CURRENCY || 'USD'
    });

    const paypalCurrency = process.env.PAYPAL_CURRENCY || 'USD';
    const paypalAmount = process.env.PAYPAL_AMOUNT || '2.50';

    // If PayPal keys are not yet configured or placeholder in dev, allow sandbox fallback
    const isMock = !process.env.PAYPAL_CLIENT_SECRET || process.env.PAYPAL_CLIENT_SECRET === 'YOUR_PAYPAL_CLIENT_SECRET_HERE';
    if (isMock) {
      // Return a simulated order ID for sandbox testing if credentials haven't been entered yet
      return res.json({
        id: 'MOCK-ORDER-' + Date.now(),
        registrationId: regRecord.id,
        simulated: true,
        amount: paypalAmount,
        currency: paypalCurrency
      });
    }

    const order = await paypalService.createOrder({
      amount: paypalAmount,
      currency: paypalCurrency,
      customId: regRecord.id,
      description: `AuraFeast'26 Symposium Entry: ${fullName}`
    });

    // Attach order ID to registration
    storage.updateRegistrationPayment(regRecord.id, false, { orderId: order.id });

    res.json({
      id: order.id,
      registrationId: regRecord.id
    });
  } catch (err) {
    console.error('Error creating PayPal order:', err);
    res.status(500).json({
      error: 'Failed to initialize PayPal transaction',
      details: err.message
    });
  }
});

/**
 * 2. Capture PayPal Payment & Confirm Registration
 */
app.post('/api/paypal/capture-order', registrationLimiter, async (req, res) => {
  try {
    const { orderId, registrationId } = req.body;

    if (!orderId || !registrationId) {
      return res.status(400).json({ error: 'Order ID and Registration ID are required.' });
    }

    const isMock = orderId.startsWith('MOCK-ORDER-');
    let captureResult = null;
    let transactionId = 'TXN-' + Date.now();
    let payerInfo = {};

    if (isMock) {
      // Mock capture for local testing before user inputs live/sandbox credentials
      captureResult = {
        id: orderId,
        status: 'COMPLETED',
        mock: true
      };
      payerInfo = { name: 'Demo Participant', email: 'demo@example.com' };
    } else {
      captureResult = await paypalService.captureOrder(orderId);
      
      if (captureResult.status !== 'COMPLETED') {
        return res.status(400).json({
          error: `Payment status is ${captureResult.status}. Expected COMPLETED.`,
          captureResult
        });
      }

      // Extract capture transaction ID
      const captureDetails = captureResult.purchase_units?.[0]?.payments?.captures?.[0];
      if (captureDetails?.id) {
        transactionId = captureDetails.id;
      }
      if (captureResult.payer) {
        payerInfo = {
          name: `${captureResult.payer.name?.given_name || ''} ${captureResult.payer.name?.surname || ''}`.trim(),
          email: captureResult.payer.email_address,
          payerId: captureResult.payer.payer_id
        };
      }
    }

    // Mark registration as paid
    const updatedReg = storage.updateRegistrationPayment(registrationId, true, {
      paymentId: transactionId,
      orderId: orderId,
      paymentMethod: 'paypal',
      payer: payerInfo
    });

    // Record payment audit entry
    storage.recordPayment({
      registrationId,
      orderId,
      transactionId,
      payer: payerInfo,
      status: 'COMPLETED',
      amount: updatedReg?.amount || process.env.PAYPAL_AMOUNT || '2.50',
      currency: updatedReg?.currency || process.env.PAYPAL_CURRENCY || 'USD'
    });

    res.json({
      success: true,
      message: 'Payment completed successfully!',
      transactionId,
      registration: updatedReg,
      captureResult
    });
  } catch (err) {
    console.error('Error capturing PayPal payment:', err);
    res.status(500).json({
      error: 'Failed to capture PayPal payment.',
      details: err.message
    });
  }
});

// -------------------------------------------------------------
// ADMIN MANAGEMENT API ROUTES (Protected by PIN)
// -------------------------------------------------------------

/**
 * Fetch all registrations and telemetry
 */
app.get('/api/admin/registrations', verifyAdminPin, (req, res) => {
  try {
    const list = storage.getRegistrations();
    res.json({
      success: true,
      count: list.length,
      registrations: list
    });
  } catch (err) {
    console.error('Error fetching registrations:', err);
    res.status(500).json({ error: 'Failed to load roster data' });
  }
});

/**
 * Toggle or set payment status for a record
 */
app.patch('/api/admin/registrations/:id/payment', verifyAdminPin, (req, res) => {
  try {
    const { id } = req.params;
    const { paid, paymentMethod } = req.body;
    const updated = storage.updateRegistrationPayment(id, paid, { paymentMethod });

    if (!updated) {
      return res.status(404).json({ error: 'Registration not found' });
    }

    res.json({ success: true, registration: updated });
  } catch (err) {
    console.error('Error updating payment status:', err);
    res.status(500).json({ error: 'Failed to update payment status' });
  }
});

/**
 * Delete a registration
 */
app.delete('/api/admin/registrations/:id', verifyAdminPin, (req, res) => {
  try {
    const { id } = req.params;
    const deleted = storage.deleteRegistration(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Registration record not found' });
    }

    res.json({ success: true, message: 'Registration removed', deleted });
  } catch (err) {
    console.error('Error deleting registration:', err);
    res.status(500).json({ error: 'Failed to delete registration' });
  }
});

/**
 * Clear all records
 */
app.post('/api/admin/registrations/clear', verifyAdminPin, (req, res) => {
  try {
    storage.clearRegistrations();
    res.json({ success: true, message: 'All registrations cleared' });
  } catch (err) {
    console.error('Error clearing roster:', err);
    res.status(500).json({ error: 'Failed to clear registrations' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`  AuraFeast'26 Backend Server running on port ${PORT}`);
  console.log(`  Local URL: http://localhost:${PORT}`);
  console.log(`  PayPal Mode: ${process.env.PAYPAL_MODE || 'sandbox'}`);
  console.log(`  PayPal Client ID: ${process.env.PAYPAL_CLIENT_ID ? 'Configured' : 'Not Configured'}`);
  console.log(`====================================================`);
});
