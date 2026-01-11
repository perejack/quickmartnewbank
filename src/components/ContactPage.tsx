import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-100 to-red-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-black text-center text-red-600 mb-8">Contact Us</h1>

        <div className="text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">Get in touch</h2>
            <p>
              If you have questions about the Quickmart Careers application process, requirements, or your submission,
              contact us using the details below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">Contact details</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Email:</strong> <a className="text-red-600 hover:underline" href="mailto:careers@quickmart.co.ke">careers@quickmart.co.ke</a></p>
              <p><strong>Phone:</strong> +254 796598456</p>
              <p><strong>Address:</strong> Quickmart Supermarket Headquarters, Nairobi, Kenya</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 mb-3">Helpful links</h2>
            <div className="flex flex-wrap gap-3">
              <Link className="text-red-600 hover:underline font-semibold" to="/privacy-policy">Privacy Policy</Link>
              <Link className="text-red-600 hover:underline font-semibold" to="/terms-of-service">Terms of Service</Link>
              <Link className="text-red-600 hover:underline font-semibold" to="/cookies">Cookies Policy</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
