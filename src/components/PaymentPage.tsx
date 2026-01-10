import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle, XCircle, Shield, ArrowLeft } from 'lucide-react';

const PaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('userId') || 'guest-user';
  const returnUrl = searchParams.get('returnUrl') || '/';

  const [step, setStep] = useState<'info' | 'payment' | 'success' | 'failed'>('info');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState<'pending' | 'success' | 'error'>('');
  const [transactionId, setTransactionId] = useState('-');
  const [failureReason, setFailureReason] = useState('The payment was cancelled by user.');
  const [isProcessing, setIsProcessing] = useState(false);

  const ACTIVATION_FEE = 160;
  let pollInterval: NodeJS.Timeout | null = null;

  const API_URL = '/api';

  const formatPhoneNumber = (input: string): string => {
    let cleaned = input.replace(/\D/g, '');
    if (cleaned.startsWith('0')) {
      cleaned = '254' + cleaned.substring(1);
    }
    if (cleaned.startsWith('+')) {
      cleaned = cleaned.substring(1);
    }
    if (!cleaned.startsWith('254')) {
      cleaned = '254' + cleaned;
    }
    return cleaned;
  };

  const validatePhoneNumber = (phoneNumber: string): boolean => {
    const formatted = formatPhoneNumber(phoneNumber);
    return formatted.length === 12 && formatted.startsWith('254');
  };

  const showError = (message: string) => {
    setErrorMessage(message);
  };

  const showStatus = (message: string, type: 'pending' | 'success' | 'error') => {
    setStatusMessage(message);
    setStatusType(type);
  };

  const hideStatus = () => {
    setStatusMessage('');
    setStatusType('');
  };

  const initiatePayment = async () => {
    if (!validatePhoneNumber(phone)) {
      showError('Please enter a valid Kenyan phone number');
      return;
    }

    clearError();
    setIsProcessing(true);

    try {
      const phoneNumber = formatPhoneNumber(phone);
      const reference = `QMADS-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

      try {
        await fetch(`${API_URL}/submit-application`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            phone: phoneNumber,
            userId: userId,
            paymentReference: reference
          })
        });
        console.log('Application data saved');
      } catch (err) {
        console.error('Failed to save application:', err);
      }

      const response = await fetch(`${API_URL}/initiate-payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phoneNumber,
          userId,
          amount: ACTIVATION_FEE,
          description: 'SurvayPay Account Activation'
        })
      });

      const data = await response.json();
      console.log('Initiate payment response:', JSON.stringify(data));

      if (data.success && data.data) {
        const paymentReference = data.data.requestId || data.data.checkoutRequestId || data.data.transactionRequestId || data.data.externalReference;
        console.log('Extracted payment reference:', paymentReference);

        if (paymentReference) {
          showStatus('STK Push sent. Please complete the payment on your phone.', 'pending');
          startPolling(paymentReference);
        } else {
          console.error('No payment reference found in response');
          showError('Payment reference not received');
          showStatus('Payment initiation failed. Please try again.', 'error');
          setIsProcessing(false);
        }
      } else {
        showError(data.message || 'Failed to initiate payment');
        showStatus('Payment initiation failed. Please try again.', 'error');
        setIsProcessing(false);
      }
    } catch (error) {
      console.error('Payment initiation error:', error);
      showError('Network error. Please try again later.');
      showStatus('Connection error. Please check your internet and try again.', 'error');
      setIsProcessing(false);
    }
  };

  const startPolling = (reference: string) => {
    if (pollInterval) {
      clearInterval(pollInterval);
    }

    pollInterval = setInterval(async () => {
      try {
        const response = await fetch(`${API_URL}/payment-status?reference=${reference}`);
        const data = await response.json();

        if (data.success && data.payment) {
          if (data.payment.status === 'success' || data.payment.status === 'SUCCESS') {
            if (pollInterval) clearInterval(pollInterval);
            showStatus('Congratulations! Application completed successfully!', 'success');

            if (data.payment.mpesaReceiptNumber) {
              setTransactionId(data.payment.mpesaReceiptNumber);
            } else {
              setTransactionId(reference);
            }

            setTimeout(() => {
              setStep('success');
              setIsProcessing(false);
            }, 1500);
          } else if (data.payment.status === 'failed' || data.payment.status === 'FAILED') {
            if (pollInterval) clearInterval(pollInterval);

            if (data.payment.resultDescription) {
              setFailureReason(data.payment.resultDescription);
            } else {
              setFailureReason('The payment was cancelled by user.');
            }

            setTimeout(() => {
              setStep('failed');
              setIsProcessing(false);
            }, 1000);
          }
        }
      } catch (error) {
        console.error('Error checking payment status:', error);
      }
    }, 5000);
  };

  const clearError = () => {
    setErrorMessage('');
  };

  useEffect(() => {
    return () => {
      if (pollInterval) {
        clearInterval(pollInterval);
      }
    };
  }, []);

  const handleCancel = () => {
    navigate(returnUrl + '?status=cancelled');
  };

  const handleContinue = () => {
    navigate(returnUrl + '?status=success');
  };

  const handleRetry = () => {
    setStep('payment');
    hideStatus();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8">
        {step === 'info' && (
          <div className="animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Activate Your Account</h1>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    Your account is inactive. Activate now to complete your withdrawal to M-Pesa.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Benefits of Activation:</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Access to premium surveys (250+ KSH)
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Increased withdrawal limits
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Improved account security
                </li>
              </ul>
            </div>

            <button
              onClick={() => setStep('payment')}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-500 text-white font-bold text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Activate Account
            </button>
            <button
              onClick={handleCancel}
              className="w-full py-3 mt-3 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold transition-all duration-300"
            >
              Not Now
            </button>
          </div>
        )}

        {step === 'payment' && (
          <div className="animate-fade-in">
            <button
              onClick={() => {
                if (pollInterval) clearInterval(pollInterval);
                setStep('info');
              }}
              className="flex items-center text-gray-600 hover:text-gray-800 mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>

            <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">Secure Payment Gateway</h1>
            <p className="text-center text-gray-600 mb-6">Pay securely using your M-Pesa number via Secure Payment Gateway</p>

            <p className="text-sm text-gray-600 text-center mb-6">
              You will receive an SMS notification for interview scheduling and requirements.
            </p>

            <label className="block text-sm font-semibold text-gray-700 mb-2">M-Pesa Phone Number</label>
            <div className="mb-4">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 0712345678"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
              />
              {errorMessage && (
                <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
              )}
            </div>

            {statusMessage && (
              <div className={`p-4 rounded-lg mb-4 ${
                statusType === 'pending' ? 'bg-yellow-50 text-yellow-700' :
                statusType === 'success' ? 'bg-green-50 text-green-700' :
                'bg-red-50 text-red-700'
              }`}>
                {statusMessage}
              </div>
            )}

            <button
              onClick={initiatePayment}
              disabled={isProcessing}
              className={`w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-500 text-white font-bold text-lg shadow-lg transition-all duration-300 ${
                isProcessing ? 'opacity-50 cursor-not-allowed' : 'transform hover:scale-105'
              }`}
            >
              {isProcessing ? 'Processing...' : 'Proceed to Pay'}
            </button>
          </div>
        )}

        {step === 'success' && (
          <div className="animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Congratulations!</h1>

            <p className="text-center text-gray-700 mb-6">
              Application complete! We will contact you within 24 hours.
            </p>

            <div className="bg-green-50 rounded-lg p-4 mb-6">
              <p className="text-gray-700"><strong>Amount Paid:</strong> KSH 160</p>
              <p className="text-gray-700"><strong>Transaction ID:</strong> {transactionId}</p>
            </div>

            <button
              onClick={handleContinue}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-500 text-white font-bold text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Continue to App
            </button>
          </div>
        )}

        {step === 'failed' && (
          <div className="animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                <XCircle className="w-10 h-10 text-red-600" />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-center text-red-600 mb-6">Payment Cancelled</h1>

            <p className="text-center text-gray-700 mb-6">
              Your payment was cancelled or failed. No charges were made to your account.
            </p>

            <div className="bg-red-50 rounded-lg p-4 mb-6">
              <p className="text-gray-700">{failureReason}</p>
            </div>

            <button
              onClick={handleRetry}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-500 text-white font-bold text-lg shadow-lg transition-all duration-300 transform hover:scale-105 mb-3"
            >
              Try Again
            </button>
            <button
              onClick={handleCancel}
              className="w-full py-3 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold transition-all duration-300"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
