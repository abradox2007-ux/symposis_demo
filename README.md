# ⚡ AuraFeast'26 — Inter-College Technical & Non-Technical Symposium

Official web portal and full-stack registration system for **AuraFeast'26**, the premier national-level inter-college symposium organized by the **Department of Computer Science & Engineering** and the **Department of Information Technology** at **Prince Shri Venkateshwara Padmavathy Engineering College (PSVPEC)**.

---

## 🚀 Key Highlights & Features

- **Cyberpunk / Midnight Dark & Light UI**  
  - Dynamic binary Matrix background rain canvas animation with smooth fading and no flickering.
  - Seamless light and dark theme switcher with persistent local storage preferences.
  - Polished glassmorphism cards, micro-interactions, responsive typography, and scroll reveal animations.

- **Multi-Track Events Showcase**  
  - **Technical Track**: Paper Presentation, Coding Challenge, Web Design Challenge, UIXpert, Bug Busters, CyberQuest.
  - **Non-Technical Track**: Photo Hunt, IPL Auction, Quiz Mania, Meme Mania, MOVQuiz, Chess.
  - Interactive event picker with quick-select buttons for technical, non-technical, or custom combinations.

- **2-Step Registration & Checkout Flow**  
  - **Step 1: Participant Information**: Full student profile, college, branch, year, and multi-event selection with client-side validation.
  - **Step 2: Payment & Pass Issuance**:
    - **PayPal / Debit / Credit Cards**: Integrated PayPal REST API v2 for instant server-verified payments and automatic ticket issuance.
    - **Pay at Desk (Cash / Spot)**: Allows attendees to reserve their spot online and settle the entry fee on-site.
  - **Digital Symposium Pass**: Instant print-ready digital entry pass with unique pass reference numbers (e.g., `AF26-XXXX-XXXX`).

- **Robust & Secure Backend**  
  - Built with **Node.js** and **Express**.
  - Comprehensive security headers via **Helmet** with fine-tuned Content Security Policy (CSP).
  - Rate limiting on API and checkout endpoints via **express-rate-limit** to prevent spam and abuse.
  - Atomic, thread-safe local JSON data persistence for registrations and payment audit trails (`data/registrations.json` and `data/payments.json`).
  - Mock PayPal fallback mode for zero-setup local testing.

- **Organizer Admin Management API**  
  - Protected endpoints with configurable `ADMIN_PIN`.
  - Fetch participant rosters, toggle payment verification status, remove entries, or export records.

---

## 📂 Project Structure

```text
college_genesis_2k26/
├── data/                       # Local persistent JSON storage (auto-initialized)
│   ├── registrations.json      # Stored participant registration entries
│   └── payments.json           # Audit logs for captured payments
├── ref_images/                 # Symposium and college branding assets & logos
├── services/
│   ├── paypal.js               # PayPal REST API v2 OAuth2 & order creation/capture
│   └── storage.js              # Atomic JSON read/write operations for roster
├── .env.example                # Sample environment variables template
├── .gitignore                  # Git ignore configuration
├── index.html                  # Single-page frontend (HTML5, Vanilla CSS, JS)
├── package.json                # Project manifest and scripts
├── package-lock.json           # Dependency lockfile
├── README.md                   # Project documentation
└── server.js                   # Express web server & API routes
```

---

## 🛠️ Tech Stack & Dependencies

- **Frontend**: HTML5, Vanilla CSS3 (Custom Design System & CSS Variables), Modern JavaScript (ES6+), Canvas API, [Lucide Icons](https://lucide.dev/).
- **Backend Runtime**: Node.js
- **Server Framework**: [Express 4](https://expressjs.com/)
- **Security & Middleware**:
  - `helmet`: Secure HTTP headers & CSP directives
  - `cors`: Cross-Origin Resource Sharing control
  - `express-rate-limit`: Endpoint rate limiting
  - `dotenv`: Environment variable management
- **Payment Processing**: PayPal REST API v2

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or later recommended)
- **npm** (bundled with Node.js)

### 1. Clone & Install Dependencies

```bash
git clone <repository-url>
cd college_genesis_2k26
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to create your active `.env` file:

```bash
cp .env.example .env
```

Open `.env` and configure your settings:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# PayPal API Credentials (from https://developer.paypal.com)
# Set to 'sandbox' for testing or 'live' for production
PAYPAL_MODE=sandbox
PAYPAL_CLIENT_ID=YOUR_PAYPAL_CLIENT_ID_HERE
PAYPAL_CLIENT_SECRET=YOUR_PAYPAL_CLIENT_SECRET_HERE

# Payment / Registration Settings
REGISTRATION_FEE_INR=200
PAYPAL_CURRENCY=USD
PAYPAL_AMOUNT=2.50

# Admin PIN for Coordinator Endpoints
ADMIN_PIN=2026

# Allowed Frontend Origins (comma separated)
CORS_ORIGINS=http://localhost:5000,http://127.0.0.1:5000
```

> **Note on PayPal Mock Mode**: If `PAYPAL_CLIENT_SECRET` is left as placeholder or empty, the server automatically operates in simulated sandbox mode so you can test registration and pass generation without needing live credentials.

### 3. Run the Application

#### Development Mode (with automatic file watching):
```bash
npm run dev
```

#### Production Mode:
```bash
npm start
```

Once running, access the symposium portal at:  
👉 **`http://localhost:5000`**

---

## 💳 PayPal Integration Setup (Sandbox / Live)

1. Go to the [PayPal Developer Dashboard](https://developer.paypal.com/dashboard/).
2. Log in and navigate to **Apps & Credentials**.
3. Under **REST API apps**, create a new application or select an existing one.
4. Copy the **Client ID** and **Secret Key**.
5. Paste them into `.env` under `PAYPAL_CLIENT_ID` and `PAYPAL_CLIENT_SECRET`.
6. Set `PAYPAL_MODE=sandbox` for testing or `PAYPAL_MODE=live` for real payments.

---

## 📡 API Reference

### Public Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Server health check and current environment info. |
| `GET` | `/api/config` | Returns safe client configuration (PayPal Client ID, fee, currency). |
| `POST` | `/api/registrations/desk` | Register participant with Pay-at-Desk (Cash) option. |
| `POST` | `/api/paypal/create-order` | Creates a new PayPal v2 order and stores a pending registration. |
| `POST` | `/api/paypal/capture-order` | Captures payment from PayPal and confirms participant registration. |

### Protected Admin Endpoints (`x-admin-pin` header required)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/admin/registrations` | Fetch full list of registered participants and payment statuses. |
| `PATCH` | `/api/admin/registrations/:id/payment` | Update payment status (e.g. mark cash participant as paid). |
| `DELETE` | `/api/admin/registrations/:id` | Delete a single registration record by ID. |
| `POST` | `/api/admin/registrations/clear` | Clear all registration records (requires confirmation). |

---

## 🔒 Security Best Practices

- All administrative mutations require verification against `ADMIN_PIN`.
- Sensitive credentials (`.env`) are excluded from version control via `.gitignore`.
- Rate limiting is strictly enforced on `/api/registrations/` and `/api/paypal/` routes.
- File system updates use atomic file replacement (`.tmp` write followed by rename) to prevent JSON data corruption during concurrent requests.

---

## 👥 Department & Organization

- **Institution**: Prince Shri Venkateshwara Padmavathy Engineering College (PSVPEC)
- **Departments**: Computer Science & Engineering (CSE) & Information Technology (IT)
- **Symposium**: AuraFeast'26

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).
