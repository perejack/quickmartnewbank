import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import submitApplication from './api/submit-application.js';
import initiatePayment from './api/initiate-payment.js';
import paymentStatus from './api/payment-status.js';
import payheroInitiate from './api/payhero/initiate.js';
import payheroStatus from './api/payhero/status.js';

dotenv.config();

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Error handling
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: err.message });
});

// API endpoints
app.post('/api/submit-application', (req, res) => {
  submitApplication(req, res);
});

app.post('/api/initiate-payment', (req, res) => {
  initiatePayment(req, res);
});

app.get('/api/payment-status', (req, res) => {
  paymentStatus(req, res);
});

// PayHero API endpoints
app.post('/api/payhero/initiate', (req, res) => {
  payheroInitiate(req, res);
});

app.post('/api/payhero/status', (req, res) => {
  payheroStatus(req, res);
});

const server = app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
  console.log(`Test the payment flow at http://localhost:5173`);
});

// Handle server errors
server.on('error', (err) => {
  console.error('Server error:', err);
});

// Keep process alive
process.on('SIGINT', () => {
  console.log('Shutting down gracefully...');
  server.close(() => {
    process.exit(0);
  });
});
