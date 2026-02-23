import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dbpbvoqfexofyxcexmmp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRicGJ2b3FmZXhvZnl4Y2V4bW1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzNDc0NTMsImV4cCI6MjA3NDkyMzQ1M30.hGn7ux2xnRxseYCjiZfCLchgOEwIlIAUkdS6h7byZqc';

const supabase = createClient(supabaseUrl, supabaseKey);

const SWIFTPAY_API_KEY = process.env.VITE_SWIFTPAY_API_KEY;
const SWIFTPAY_TILL_ID = process.env.VITE_SWIFTPAY_TILL_ID;
const SWIFTPAY_BACKEND_URL = 'https://swiftpay-backend-uvv9.onrender.com/api';

// Normalize phone number to 254 format
function normalizePhoneNumber(phone) {
  if (!phone) return null;
  let cleaned = phone.replace(/[\s\-\(\)]/g, '');
  if (cleaned.startsWith('0')) {
    cleaned = '254' + cleaned.substring(1);
  }
  if (cleaned.length !== 12 || !/^\d+$/.test(cleaned)) {
    return null; // Basic validation for Kenyan numbers
  }
  return cleaned;
}

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).send('');
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    if (!SWIFTPAY_API_KEY || !SWIFTPAY_TILL_ID) {
      return res.status(500).json({
        success: false,
        message: 'Server configuration error: SwiftPay credentials not configured'
      });
    }

    let { phoneNumber, amount = 160, description = 'Job Application Processing Fee' } = req.body;

    if (!phoneNumber) {
      return res.status(400).json({ success: false, message: 'Phone number is required' });
    }

    const normalizedPhone = normalizePhoneNumber(phoneNumber);
    if (!normalizedPhone) {
      return res.status(400).json({ success: false, message: 'Invalid phone number format. Use 07XXXXXXXX or 254XXXXXXXXX' });
    }

    const externalReference = `QUICKMART-${Date.now()}`;

    const swiftpayPayload = {
      phone_number: normalizedPhone,
      amount: amount,
      till_id: SWIFTPAY_TILL_ID,
      reference: externalReference,
      description: description
    };

    const response = await fetch(`${SWIFTPAY_BACKEND_URL}/mpesa/stk-push-api`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SWIFTPAY_API_KEY}`,
      },
      body: JSON.stringify(swiftpayPayload),
    });

    let responseData;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      responseData = await response.json();
    } else {
      const textResponse = await response.text();
      console.error('SwiftPay non-JSON response:', textResponse);
      return res.status(500).json({
        success: false,
        message: 'Payment service returned an invalid response',
        error: 'Non-JSON response from payment provider'
      });
    }

    const checkoutRequestId =
      responseData?.checkoutRequestId ||
      responseData?.checkoutRequestID ||
      responseData?.CheckoutRequestID ||
      responseData?.data?.checkoutRequestId ||
      responseData?.data?.checkoutRequestID ||
      responseData?.data?.CheckoutRequestID;

    const responseCode =
      responseData?.ResponseCode ??
      responseData?.responseCode ??
      responseData?.data?.ResponseCode ??
      responseData?.data?.responseCode;

    const statusValue = typeof responseData?.status === 'string' ? responseData.status.toLowerCase() : responseData?.status;

    const isAccepted =
      (response.ok &&
        (statusValue === 'success' ||
          responseData?.success === true ||
          responseCode === '0' ||
          responseCode === 0 ||
          Boolean(checkoutRequestId))) ||
      Boolean(checkoutRequestId);

    if (isAccepted) {
      const resolvedCheckoutId = checkoutRequestId || externalReference;
      const { error: dbError } = await supabase
        .from('transactions')
        .insert({
          transaction_request_id: resolvedCheckoutId,
          status: 'pending',
          amount: amount,
          phone: normalizedPhone,
          reference: externalReference,
          description: description,
          payment_provider: 'swiftpay'
        });

      if (dbError) {
        console.error('Database insert error:', dbError);
      }

      return res.status(200).json({
        success: true,
        message: 'Payment initiated successfully',
        data: {
          externalReference: externalReference,
          checkoutRequestId: resolvedCheckoutId
        }
      });
    } else {
      console.error('SwiftPay error:', responseData);
      return res.status(response.status || 400).json({
        success: false,
        message: responseData.message || responseData.CustomerMessage || responseData.errorMessage || 'Payment initiation failed',
        error: responseData
      });
    }
  } catch (error) {
    console.error('Global error in initiate-payment:', error);
    return res.status(500).json({
      success: false,
      message: 'An unexpected server error occurred',
      error: error.message || String(error)
    });
  }
};
