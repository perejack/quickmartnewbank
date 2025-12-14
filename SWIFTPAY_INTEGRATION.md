# SwiftPay Integration Guide for QuickMart NewBank

## 1. Overview
This document outlines the SwiftPay M-Pesa payment integration for the QuickMart NewBank job application portal. It covers the necessary API endpoints, data flow, and frontend implementation details.

## 2. SwiftPay Credentials
- **API Key:** `sp_25c79c9c-5980-410e-b8e6-b223796c55a6`
- **Till ID:** `dbdedaea-11d8-4bbe-b94f-84bbe4206d3c`
- **Backend URL:** `https://swiftpay-backend-uvv9.onrender.com/api`

## 3. API Endpoints

### Initiate Payment
- **Endpoint:** `POST /api/initiate-payment`
- **Description:** Triggers an M-Pesa STK push to the user's phone.
- **Request Body:**
  ```json
  {
    "phoneNumber": "0712345678",
    "amount": 160,
    "description": "Job Application Processing Fee"
  }
  ```
- **Success Response:**
  ```json
  {
    "success": true,
    "message": "Payment initiated successfully",
    "data": {
      "externalReference": "QUICKMART-1702566000000",
      "checkoutRequestId": "QUICKMART-1702566000000"
    }
  }
  ```

### Check Payment Status
- **Endpoint:** `GET /api/payment-status?reference=<reference>`
- **Description:** Polls for the status of a transaction using the reference returned from the initiation endpoint.
- **Success Response:**
  ```json
  {
    "success": true,
    "payment": {
      "status": "SUCCESS", // Can be PENDING, SUCCESS, or FAILED
      "amount": 160,
      "provider": "swiftpay"
    }
  }
  ```

### Submit Application
- **Endpoint:** `POST /api/submit-application`
- **Description:** Submits the user's application details after a successful payment.
- **Request Body:**
  ```json
  {
    "phone": "0712345678",
    "userId": "user-id-from-auth",
    "paymentReference": "QUICKMART-1702566000000"
  }
  ```

## 4. Frontend Integration Flow
1.  The user fills out their application details on the `/apply` page.
2.  Upon clicking "Pay & Submit", the frontend calls `/api/initiate-payment`.
3.  A modal appears, instructing the user to check their phone for an M-Pesa prompt.
4.  The frontend begins polling the `/api/payment-status` endpoint every 3-5 seconds.
5.  Once the payment status returns `SUCCESS`, the frontend automatically calls `/api/submit-application` with the form data and the `paymentReference`.
6.  The user is shown a final success message, confirming their application is complete.

## 5. Phone Number Handling
The `initiate-payment` API automatically normalizes phone numbers. It accepts both `07...` and `254...` formats and converts them to the `254...` format required by the M-Pesa API.

## 6. Database and Deployment
- **Database:** The integration uses the existing `transactions` and `applications` tables in your Supabase project.
- **Deployment:** The new API routes (`initiate-payment.js`, `payment-status.js`) are deployed as serverless functions on Vercel. Pushing to the connected GitHub repository will trigger a new deployment.
