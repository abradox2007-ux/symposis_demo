const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const REGISTRATIONS_FILE = path.join(DATA_DIR, 'registrations.json');
const PAYMENTS_FILE = path.join(DATA_DIR, 'payments.json');

// Ensure data directory exists
function initStorage() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(REGISTRATIONS_FILE)) {
    fs.writeFileSync(REGISTRATIONS_FILE, JSON.stringify([], null, 2), 'utf8');
  }
  if (!fs.existsSync(PAYMENTS_FILE)) {
    fs.writeFileSync(PAYMENTS_FILE, JSON.stringify([], null, 2), 'utf8');
  }
}

initStorage();

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
    return [];
  }
}

function writeFile(filePath, data) {
  try {
    const tempFile = `${filePath}.tmp`;
    fs.writeFileSync(tempFile, JSON.stringify(data, null, 2), 'utf8');
    fs.renameSync(tempFile, filePath);
    return true;
  } catch (err) {
    console.error(`Error writing ${filePath}:`, err);
    return false;
  }
}

// Public Storage Methods
module.exports = {
  getRegistrations() {
    return readFile(REGISTRATIONS_FILE);
  },

  addRegistration(reg) {
    const list = readFile(REGISTRATIONS_FILE);
    const newRecord = {
      id: 'GEN26-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase(),
      fullName: (reg.fullName || '').trim(),
      year: reg.year,
      department: (reg.department || '').trim(),
      college: (reg.college || '').trim(),
      email: (reg.email || '').trim().toLowerCase(),
      phone: (reg.phone || '').trim(),
      events: Array.isArray(reg.events) ? reg.events : [],
      eventSummary: Array.isArray(reg.events) ? reg.events.join(', ') : (reg.eventSummary || ''),
      paid: Boolean(reg.paid),
      paymentMethod: reg.paymentMethod || 'cash_on_desk', // 'paypal' | 'cash_on_desk'
      paymentId: reg.paymentId || null,
      orderId: reg.orderId || null,
      amount: reg.amount || 200,
      currency: reg.currency || 'INR',
      submittedAt: reg.submittedAt || new Date().toISOString()
    };

    list.unshift(newRecord);
    writeFile(REGISTRATIONS_FILE, list);
    return newRecord;
  },

  updateRegistrationPayment(id, paidStatus, paymentDetails = {}) {
    const list = readFile(REGISTRATIONS_FILE);
    const index = list.findIndex(r => r.id === id || r.orderId === id || r.paymentId === id);
    if (index === -1) return null;

    list[index].paid = Boolean(paidStatus);
    if (paymentDetails.paymentId) list[index].paymentId = paymentDetails.paymentId;
    if (paymentDetails.orderId) list[index].orderId = paymentDetails.orderId;
    if (paymentDetails.paymentMethod) list[index].paymentMethod = paymentDetails.paymentMethod;
    if (paymentDetails.payer) list[index].payer = paymentDetails.payer;
    list[index].updatedAt = new Date().toISOString();

    writeFile(REGISTRATIONS_FILE, list);
    return list[index];
  },

  deleteRegistration(id) {
    const list = readFile(REGISTRATIONS_FILE);
    const index = list.findIndex(r => r.id === id);
    if (index === -1) return false;

    const [deleted] = list.splice(index, 1);
    writeFile(REGISTRATIONS_FILE, list);
    return deleted;
  },

  clearRegistrations() {
    writeFile(REGISTRATIONS_FILE, []);
    return true;
  },

  recordPayment(paymentRecord) {
    const payments = readFile(PAYMENTS_FILE);
    payments.unshift({
      ...paymentRecord,
      timestamp: new Date().toISOString()
    });
    writeFile(PAYMENTS_FILE, payments);
  }
};
