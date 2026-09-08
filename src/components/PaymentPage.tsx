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

  const ACTIVATION_FEE = 160;
  const REFUND_CODE = '2224';
  let pollInterval: NodeJS.Timeout | null = null;

  const handleCopyRefundCode = async () => {
    try {
      await navigator.clipboard.writeText(REFUND_CODE);
      setRefundCodeCopied(true);
      setTimeout(() => setRefundCodeCopied(false), 2000);
    } catch {
      // Ignore clipboard errors (e.g. insecure context) and avoid breaking the flow
    }
  };

  const validatePhoneNumber = (phoneNumber: string): boolean => {
    const digitsOnly = phoneNumber.replace(/\D/g, '');
    if (!digitsOnly) return false;
    // Accept: 07XXXXXXXX, 011XXXXXXX, 254XXXXXXXXX, +254XXXXXXXXX
    if (/^254(7\d{8}|1\d{8})$/.test(digitsOnly)) return true;
    if (/^(7\d{8}|1\d{8})$/.test(digitsOnly)) return true;
    if (/^0(7\d{8}|1\d{8})$/.test(digitsOnly)) return true;
    return false;
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
      showError('Please enter a valid Kenyan phone number (07..., 011..., 254..., or +254...)');
      return;
    }

    clearError();
    setIsProcessing(true);

    try {
      const response = await fetch('/api/payhero/initiate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: phone,
          phoneNumber: phone,
          amount: ACTIVATION_FEE,
          description: 'Refundable onboarding application fee',
          referencePrefix: 'QUICKMART',
        }),
      });

      const data = await response.json();
      console.log('PayHero initiate response:', data);

      if (!response.ok || data.success === false) {
        showError(data.message || `Failed to initiate payment (${response.status})`);
        setPaymentStatus('failed');
        setIsProcessing(false);
        return;
      }

      const checkoutId = data.checkoutId || data.checkoutRequestId;
      if (!checkoutId) {
        showError('Invalid response from payment gateway');
        setPaymentStatus('failed');
        setIsProcessing(false);
        return;
      }

      setCheckoutRequestId(checkoutId);
      setPaymentStatus('pending');
      toast.success('STK Push sent! Check your phone and enter your M-Pesa PIN.');

      pollPaymentStatus(checkoutId);
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
        const response = await fetch('/api/payhero/status', {
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

        // Check mapped state first
        const state = String(data.state ?? '').toLowerCase();
        const mappedStatus = String(data.status ?? '').toLowerCase();

        if (state === 'success' || mappedStatus === 'paid' || mappedStatus === 'success') {
          setPaymentStatus('success');
          setIsProcessing(false);
          setStep('success');
          if (data.receiptNumber) {
            setTransactionId(data.receiptNumber);
          }
          toast.success('Payment confirmed! Your application is complete.');
          return;
        }

        if (state === 'failed' || mappedStatus === 'failed') {
          setPaymentStatus('failed');
          setIsProcessing(false);
          setStep('failed');
          setFailureReason(data.resultDesc || 'Payment failed or was cancelled. Please try again.');
          toast.error(data.resultDesc || 'Payment failed. Please try again.');
          return;
        }

        // Still pending - continue polling
        setTimeout(checkStatus, 5000);
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
    setCheckoutRequestId(null);
    setPaymentStatus('pending');
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
              You will receive an STK push on your phone. Enter your M-Pesa PIN to complete payment.
            </p>

            {/* M-Pesa branding */}
            <div className="flex items-center gap-3 mb-4 p-3 bg-green-50 rounded-xl border border-green-200">
              <div className="w-12 h-8 bg-[#00A859] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">M-PESA</span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">M-Pesa Payment</span>
                <p className="text-xs text-gray-600">Enter your phone number to receive STK push</p>
              </div>
            </div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">M-Pesa Phone Number</label>
            <div className="mb-4">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 0712345678"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-lg"
              />
              <p className="text-xs text-gray-500 mt-1">Enter the phone number registered with M-Pesa</p>
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

            {/* Secure payment notice */}
            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl mb-4">
              <Shield className="w-5 h-5 text-blue-600" />
              <div>
                <span className="text-sm font-medium text-gray-800">Secure Payment Process</span>
                <p className="text-xs text-gray-600">You'll receive an STK push notification on your phone</p>
              </div>
            </div>

            <button
              onClick={initiatePayment}
              disabled={isProcessing || !phone || phone.length < 9}
              className={`w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-500 text-white font-bold text-lg shadow-lg transition-all duration-300 ${
                isProcessing ? 'opacity-50 cursor-not-allowed' : 'transform hover:scale-105'
              }`}
            >
              {isProcessing ? 'Processing... Please wait' : 'Request M-Pesa Prompt'}
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
              <p className="text-gray-700"><strong>Amount Paid:</strong> KSH {ACTIVATION_FEE}</p>
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
