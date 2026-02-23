import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-100 to-red-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-black text-center text-red-600 mb-8">Privacy Policy</h1>
        
        <div className="text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">1. Introduction</h2>
            <p>
              Quickmart Supermarket ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our job application portal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">2. Information We Collect</h2>
            <p className="font-semibold mb-2">We collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> Full name, phone number, email address, ID number, date of birth</li>
              <li><strong>Professional Information:</strong> Education level, location, desired position, employment type preference</li>
              <li><strong>Payment Information:</strong> M-Pesa phone number for application processing fee (160 KSH)</li>
              <li><strong>Technical Information:</strong> IP address, browser type, device information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">3. How We Use Your Information</h2>
            <p className="font-semibold mb-2">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and evaluate your job application</li>
              <li>Contact you regarding interview scheduling and job opportunities</li>
              <li>Facilitate the application processing fee payment</li>
              <li>Improve our recruitment process and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">4. Information Sharing</h2>
            <p className="font-semibold mb-2">We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Payment Processors:</strong> SwiftPay for processing M-Pesa payments</li>
              <li><strong>HR Department:</strong> For application review and interview scheduling</li>
              <li><strong>Legal Authorities:</strong> When required by law</li>
            </ul>
            <p className="mt-3">We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information, including encryption, secure servers, and access controls. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">6. Your Rights</h2>
            <p className="font-semibold mb-2">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-3">To exercise these rights, contact us at: careers@quickmart.co.ke</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">7. Application Processing Fee</h2>
            <p>
              A refundable application processing fee of 160 KSH is required to complete your application. This fee covers administrative costs and is refundable if your application is not successful. The refund code provided must be kept for refund claims.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">8. Data Retention</h2>
            <p>
              We retain your personal information for up to 2 years from the date of application, or as required by law. After this period, your information will be securely deleted or anonymized.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">10. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact:</p>
            <div className="bg-gray-50 p-4 rounded-lg mt-3">
              <p><strong>Email:</strong> careers@quickmart.co.ke</p>
              <p><strong>Phone:</strong> +254 700 000 000</p>
              <p><strong>Address:</strong> Quickmart Supermarket Headquarters, Nairobi, Kenya</p>
            </div>
          </section>

          <div className="text-sm text-gray-500 mt-8 pt-4 border-t">
            <p><strong>Last Updated:</strong> January 10, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
