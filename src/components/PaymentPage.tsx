import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle, XCircle, Shield, ArrowLeft, Lock, BadgeCheck, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

const PaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('userId') || 'guest-user';
  const returnUrl = searchParams.get('returnUrl') || '/';

  const [step, setStep] = useState<'info' | 'payment' | 'success' | 'failed'>('info');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState<'pending' | 'success' | 'error' | ''>('');
  const [transactionId, setTransactionId] = useState('-');
  const [failureReason, setFailureReason] = useState('The payment was cancelled by user.');
  const [isProcessing, setIsProcessing] = useState(false);
  const [refundCodeCopied, setRefundCodeCopied] = useState(false);
  const [checkoutRequestId, setCheckoutRequestId] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<string>('pending');

  const ACTIVATION_FEE = 10;
  const REFUND_CODE = '2224';
  let pollInterval: NodeJS.Timeout | null = null;

  // SwiftPay API Configuration
  const SWIFTPAY_API_KEY = import.meta.env.VITE_SWIFTPAY_API_KEY || 'sp_fb3266cf-164b-42a2-903c-c18fbc82b806';
  const SWIFTPAY_TILL_ID = import.meta.env.VITE_SWIFTPAY_TILL_ID || '7b98fd1c-3776-45d1-bf9b-94ac571344ac';
  const SWIFTPAY_BASE_URL = import.meta.env.VITE_SWIFTPAY_BASE_URL || 'https://swiftpay-backend-uvv9.onrender.com';

  const handleCopyRefundCode = async () => {
    try {
      await navigator.clipboard.writeText(REFUND_CODE);
      setRefundCodeCopied(true);
      setTimeout(() => setRefundCodeCopied(false), 2000);
    } catch {
      // Ignore clipboard errors (e.g. insecure context) and avoid breaking the flow
    }
  };

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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [step]);

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

      const response = await fetch(`${SWIFTPAY_BASE_URL}/api/mpesa/stk-push-api`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SWIFTPAY_API_KEY}`,
        },
        body: JSON.stringify({
          phone_number: phoneNumber,
          amount: ACTIVATION_FEE,
          till_id: SWIFTPAY_TILL_ID,
          reference: reference,
          description: 'Refundable onboarding application fee',
        }),
      });

      const responseText = await response.text();
      console.log('Response text:', responseText);

      let data;
      try {
        data = JSON.parse(responseText);
      } catch (e) {
        console.error('Failed to parse JSON:', e);
        showError(`Server error (${response.status}). Please try again later.`);
        setPaymentStatus('failed');
        setIsProcessing(false);
        return;
      }

      if (!response.ok || data.status === 'error') {
        showError(data.message || `Failed to initiate payment (${response.status})`);
        setPaymentStatus('failed');
        setIsProcessing(false);
        return;
      }

      if (data.success && data.data?.checkout_id) {
        setCheckoutRequestId(data.data.checkout_id);
        setPaymentStatus('pending');
        toast.success('STK Push sent! Check your phone');

        pollPaymentStatus(data.data.checkout_id);
      } else {
        showError('Invalid response from payment gateway');
        setPaymentStatus('failed');
        setIsProcessing(false);
      }
    } catch (error) {
      console.error('STK Push Error:', error);
      showError('Failed to send STK push. Please try again.');
      setPaymentStatus('failed');
      setIsProcessing(false);
    }
  };

  const pollPaymentStatus = async (checkoutId: string) => {
    const maxAttempts = 30; // 2.5 minutes (5 seconds * 30)
    let attempts = 0;

    const checkStatus = async () => {
      if (attempts >= maxAttempts) {
        toast.error('Payment verification timed out. Please check your M-Pesa messages.');
        setPaymentStatus('timeout');
        setIsProcessing(false);
        return;
      }

      attempts++;

      try {
        const response = await fetch(`${SWIFTPAY_BASE_URL}/api/mpesa-verification-proxy`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            checkoutId: checkoutId,
          }),
        });

        const data = await response.json();
        console.log('Payment status check:', JSON.stringify(data, null, 2));
        console.log('Payment status:', data.payment?.status);
        console.log('Payment resultCode:', data.payment?.resultCode);
        console.log('Payment resultDesc:', data.payment?.resultDesc);

        // Check if payment was successful
        const successStatuses = ['completed', 'success', 'paid', 'succeeded'];
        if (data.success && data.payment?.status && successStatuses.includes(data.payment.status.toLowerCase())) {
          setPaymentStatus('success');
          setIsProcessing(false);
          setStep('success');
          toast.success('Payment confirmed! Your application is complete.');
          return;
        }

        // If payment failed
        const failedStatuses = ['failed', 'cancelled', 'rejected'];
        if (data.success && data.payment?.status && failedStatuses.includes(data.payment.status.toLowerCase())) {
          setPaymentStatus('failed');
          setIsProcessing(false);
          setStep('failed');
          toast.error(data.payment.resultDesc || 'Payment failed. Please try again.');
          return;
        }

        // If payment is still processing, continue polling
        const processingStatuses = ['processing', 'pending'];
        if (data.success && data.payment?.status && processingStatuses.includes(data.payment.status.toLowerCase())) {
          setTimeout(checkStatus, 5000);
          return;
        }

        // Unknown status - log it and continue polling if we haven't exhausted attempts
        console.log('Unknown payment status:', data.payment?.status);
        console.log('Full response:', JSON.stringify(data));
        if (attempts < maxAttempts) {
          setTimeout(checkStatus, 5000);
        } else {
          setPaymentStatus('timeout');
          setIsProcessing(false);
          toast.error('Payment verification timed out.');
        }
      } catch (error) {
        console.error('Status check error:', error);
        // Continue polling even on error
        setTimeout(checkStatus, 5000);
      }
    };

    // Start polling after 5 seconds (give user time to enter PIN)
    setTimeout(checkStatus, 5000);
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
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center shadow-inner">
                <Sparkles className="w-10 h-10 text-blue-600" />
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
              <div className="text-xs font-bold text-gray-600 tracking-wide">STEP 1 OF 2</div>
            </div>

            <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Refundable Onboarding Fee</h1>
            <p className="text-center text-gray-600 mb-6">To secure your approved slot, a refundable onboarding application fee is required.</p>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200/60 p-4 rounded-2xl mb-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <BadgeCheck className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-gray-800">Amount: KSH {ACTIVATION_FEE} (Refundable)</div>
                  <div className="text-xs text-gray-600 mt-1">Keep your M-Pesa transaction code + the refund code below as proof for your refund.</div>
                  <button
                    type="button"
                    onClick={handleCopyRefundCode}
                    className="mt-3 w-full flex items-center justify-between rounded-xl bg-white/80 border border-white px-3 py-2 hover:bg-white transition-colors"
                    title="Click to copy refund code"
                  >
                    <div className="text-xs font-semibold text-gray-600">Refund Code</div>
                    <div className="flex items-center gap-3">
                      <div className="font-mono text-sm font-black text-blue-700">{REFUND_CODE}</div>
                      <div className={`text-[11px] font-bold ${refundCodeCopied ? 'text-green-700' : 'text-gray-500'}`}>
                        {refundCodeCopied ? 'Copied!' : 'Tap to copy'}
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 mb-6">
              <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm">
                <Lock className="h-5 w-5 text-blue-600" />
                <div className="text-sm text-gray-700"><span className="font-bold">Secure</span> M-Pesa STK prompt (no manual paybill confusion)</div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm">
                <Shield className="h-5 w-5 text-green-600" />
                <div className="text-sm text-gray-700"><span className="font-bold">Instant</span> confirmation after you enter your M-Pesa PIN</div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div className="text-sm text-gray-700"><span className="font-bold">Refundable</span> onboarding fee recorded to your application</div>
              </div>
            </div>

            <button
              onClick={() => setStep('payment')}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-500 text-white font-bold text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              type="button"
            >
              Continue to Secure Payment
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

            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
              <div className="text-xs font-bold text-gray-600 tracking-wide">STEP 2 OF 2</div>
            </div>

            <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">Secure Payment Gateway</h1>
            <p className="text-center text-gray-600 mb-2">Pay the <span className="font-bold text-blue-700">refundable onboarding fee</span> via M-Pesa STK prompt.</p>
            <div className="mb-6">
              <div className="text-center text-gray-500 text-sm">Amount: <span className="font-bold text-gray-800">KSH {ACTIVATION_FEE}</span></div>
              <div className="mt-3">
                <button
                  type="button"
                  onClick={handleCopyRefundCode}
                  className="mx-auto flex items-center justify-between gap-3 rounded-xl bg-white/80 border border-gray-100 px-3 py-2 hover:bg-white transition-colors shadow-sm"
                  title="Click to copy refund code"
                >
                  <div className="text-xs font-semibold text-gray-600">Refund Code</div>
                  <div className="font-mono text-sm font-black text-blue-700">{REFUND_CODE}</div>
                  <div className={`text-[11px] font-bold ${refundCodeCopied ? 'text-green-700' : 'text-gray-500'}`}>
                    {refundCodeCopied ? 'Copied!' : 'Tap to copy'}
                  </div>
                </button>
              </div>
            </div>

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
              {isProcessing ? 'Requesting STK Prompt...' : 'Request M-Pesa Prompt'}
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
