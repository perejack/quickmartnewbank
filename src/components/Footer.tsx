import React from 'react';
import { ShoppingCart, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <ShoppingCart className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-2xl font-bold">Quickmart</span>
            </div>
            <p className="text-gray-400 mb-4">
              Kenya's fastest-growing retail chain, committed to providing 
              quality products and exceptional career opportunities.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">t</span>
              </div>
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#jobs" className="text-gray-400 hover:text-white transition-colors duration-200">Available Jobs</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors duration-200">Benefits</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-white transition-colors duration-200">Application Process</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-200">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-red-600" />
                <span className="text-gray-400">careers@quickmart.co.ke</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-red-600" />
                <span className="text-gray-400">Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-red-600" />
                <span className="text-gray-400">Mon-Fri 8AM-6PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Get notified about new job openings and company updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button className="bg-red-600 px-4 py-2 rounded-r-lg hover:bg-red-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4 text-white">Supported Banks & Payments</h3>
            <div className="flex justify-center items-center space-x-6">
              <img src="https://play-lh.googleusercontent.com/bRZF74-13jknePwUd1xam5ZCSdAJVuI_wqtkrisBgu7EEh1jobh2boZihlk-4ikY_S3V" alt="M-Pesa" className="h-8 object-contain" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDeOC4kosefZ2gqKe1WndnkjGwOkSjPwU4z0lRdvBz145KwzqDhipvlfIaqHQHjG3GcDk&usqp=CAU" alt="Equity Bank" className="h-8 object-contain" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMTh_IYo6NFyUjLv_MHMP26RFRqQSyqkVY7w&s" alt="National Bank" className="h-8 object-contain" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWwC1lBWjmX7wf7khFxo5egdhSPbWoFt49AQ&s" alt="Absa" className="h-8 object-contain" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRZArbjWYM9ZArApg1Rf8C8px6W_t9kCJMBQ&s" alt="KCB" className="h-8 object-contain" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Quickmart. All rights reserved. | 
            <span className="text-red-600 font-semibold"> Join Our Team Today!</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;