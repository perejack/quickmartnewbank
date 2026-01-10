import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-100 to-red-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-black text-center text-red-600 mb-8">Terms of Service</h1>
        
        <div className="text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Quickmart Careers job application portal, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">2. Purpose of Service</h2>
            <p>
              This portal is designed for individuals to apply for employment opportunities at Quickmart Supermarket branches across Kenya. All applications are subject to review and approval by our HR department.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">3. Application Requirements</h2>
            <p className="font-semibold mb-2">To apply, you must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Be at least 18 years of age</li>
              <li>Be a Kenyan citizen or legal resident</li>
              <li>Provide accurate and complete information</li>
              <li>Pay the application processing fee of 160 KSH</li>
              <li>Have valid identification documents</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">4. Application Processing Fee</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mb-4">
              <p className="font-semibold text-yellow-800">Important Information About the Fee:</p>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Amount:</strong> 160 KSH (Kenya Shillings)</li>
              <li><strong>Payment Method:</strong> M-Pesa via SwiftPay</li>
              <li><strong>Purpose:</strong> Administrative processing costs</li>
              <li><strong>Refund Policy:</strong> This fee is refundable if your application is not successful within 30 days</li>
              <li><strong>Refund Process:</strong> Contact careers@quickmart.co.ke with your refund code and M-Pesa transaction ID</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">5. User Responsibilities</h2>
            <p className="font-semibold mb-2">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide truthful, accurate, and current information</li>
              <li>Not submit multiple applications for the same position</li>
              <li>Not use false identities or misleading information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">6. Application Process</h2>
            <p className="font-semibold mb-2">The application process includes:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Submission of personal and professional information</li>
              <li>Payment of application processing fee</li>
              <li>Review and screening by HR department</li>
              <li>Interview scheduling (if selected)</li>
              <li>Final decision and communication</li>
            </ol>
            <p className="mt-3">
              <strong>Note:</strong> Submission of an application and payment of the fee does not guarantee employment. All hiring decisions are at the sole discretion of Quickmart Supermarket.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">7. Communication</h2>
            <p>
              Successful applicants will be contacted via email, SMS, or phone call within 24-48 hours after application submission. Please ensure your contact information is accurate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">8. Prohibited Activities</h2>
            <p className="font-semibold mb-2">You may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use automated systems to submit applications</li>
              <li>Interfere with the operation of this portal</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Submit fraudulent or misleading applications</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">9. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to this portal if you violate these Terms of Service or engage in fraudulent activity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">10. Limitation of Liability</h2>
            <p>
              Quickmart Supermarket shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this portal, including but not limited to lost profits or data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">11. Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of Kenya. Any disputes shall be resolved in the courts of Nairobi, Kenya.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">12. Refund Policy</h2>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg mb-4">
              <p className="font-semibold text-green-800">Refund Guarantee:</p>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full refund (160 KSH) if application is not successful</li>
              <li>Refund requests must be made within 30 days of application</li>
              <li>Required documents: Refund code + M-Pesa transaction ID</li>
              <li>Processing time: 5-7 business days</li>
              <li>Contact: careers@quickmart.co.ke</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">13. Contact Information</h2>
            <p>For questions about these Terms of Service, please contact:</p>
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

export default TermsOfService;
