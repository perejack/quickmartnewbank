import React from 'react';

const CookiesPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-100 to-red-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-black text-center text-red-600 mb-8">Cookies Policy</h1>

        <div className="text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">1. Overview</h2>
            <p>
              This Cookies Policy explains how the Quickmart Careers portal uses cookies and similar technologies to
              improve performance, understand usage, and enhance your experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">2. What are cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help the website remember
              information about your visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">3. How we use cookies</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential:</strong> Required for basic site functionality</li>
              <li><strong>Performance:</strong> Helps us understand how the site is used and improve it</li>
              <li><strong>Analytics:</strong> May be used to measure traffic and campaign performance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">4. Managing cookies</h2>
            <p>
              You can control or delete cookies through your browser settings. Disabling cookies may impact parts of the
              site experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">5. Contact</h2>
            <p>
              If you have questions about this Cookies Policy, contact us at careers@quickmart.co.ke.
            </p>
          </section>

          <div className="text-sm text-gray-500 mt-8 pt-4 border-t">
            <p><strong>Last Updated:</strong> January 11, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
