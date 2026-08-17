/**
 * PayPal REST API v2 Integration Service
 * Handles OAuth2 authentication, server-side Order Creation, and Order Capture.
 */

let cachedToken = null;
let tokenExpiresAt = 0;

function getBaseUrl() {
  const mode = (process.env.PAYPAL_MODE || 'sandbox').toLowerCase();
  return mode === 'live' 
    ? 'https://api-m.paypal.com' 
    : 'https://api-m.sandbox.paypal.com';
}

/**
 * Generate or return cached OAuth 2.0 Access Token
 */
async function getAccessToken() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret || clientId === 'YOUR_PAYPAL_CLIENT_ID_HERE') {
    throw new Error('PayPal Client ID and Secret are not properly configured in .env');
  }

  // Use cached token if still valid (with 60s buffer)
  if (cachedToken && Date.now() < (tokenExpiresAt - 60000)) {
    return cachedToken;
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const url = `${getBaseUrl()}/v1/oauth2/token`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`PayPal OAuth authentication failed (${res.status}): ${errText}`);
  }

  const data = await res.json();
  cachedToken = data.access_token;
  tokenExpiresAt = Date.now() + (data.expires_in * 1000);
  return cachedToken;
}

/**
 * Create a PayPal Order (Server-Side)
 */
async function createOrder({ amount, currency = 'USD', description = "Genesis'26 Symposium Registration", customId = '' }) {
  const accessToken = await getAccessToken();
  const url = `${getBaseUrl()}/v2/checkout/orders`;

  const payload = {
    intent: 'CAPTURE',
    purchase_units: [
      {
        custom_id: customId,
        description: description,
        amount: {
          currency_code: currency,
          value: Number(amount).toFixed(2)
        }
      }
    ],
    application_context: {
      brand_name: "Genesis'26 Symposium - PSVPEC",
      landing_page: 'NO_PREFERENCE',
      user_action: 'PAY_NOW',
      shipping_preference: 'NO_SHIPPING'
    }
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify(payload)
  });

  const order = await res.json();
  if (!res.ok) {
    throw new Error(`Failed to create PayPal Order: ${JSON.stringify(order)}`);
  }

  return order;
}

/**
 * Capture a PayPal Order (Server-Side)
 */
async function captureOrder(orderId) {
  const accessToken = await getAccessToken();
  const url = `${getBaseUrl()}/v2/checkout/orders/${orderId}/capture`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  });

  const captureData = await res.json();
  if (!res.ok) {
    throw new Error(`Failed to capture PayPal Order: ${JSON.stringify(captureData)}`);
  }

  return captureData;
}

module.exports = {
  getAccessToken,
  createOrder,
  captureOrder,
  getBaseUrl
};
