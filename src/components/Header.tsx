import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import quickmartLogo from '../assets/quickmartlogo.png';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 pt-2 pb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-[4rem]">
          {/* Enhanced Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
  <img
    src={quickmartLogo}
    alt="Quickmart Careers Logo"
    className="h-14 w-auto object-contain"
  />
  <span className="ml-3 text-3xl font-black text-red-600">Quickmart</span>
</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#jobs" className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-semibold">
              Available Jobs
            </a>
            <a href="#benefits" className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-semibold">
              Benefits
            </a>
            <a href="#process" className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-semibold">
              Application Process
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-semibold">
              Success Stories
            </a>
          </nav>

          {/* Enhanced CTA Section */}
          <div className="hidden md:flex items-center space-x-4">
            
            <button
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 font-bold shadow-lg transform hover:scale-105"
              onClick={() => navigate('/apply')}
              aria-label="Apply for Quickmart Jobs"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t shadow-lg">
              <a href="#jobs" className="block px-3 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200 font-semibold rounded-lg">
                Available Jobs
              </a>
              <a href="#benefits" className="block px-3 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200 font-semibold rounded-lg">
                Benefits
              </a>
              <a href="#process" className="block px-3 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200 font-semibold rounded-lg">
                Application Process
              </a>
              <a href="#testimonials" className="block px-3 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200 font-semibold rounded-lg">
                Success Stories
              </a>
              <div className="px-3 py-2">
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <Phone className="h-4 w-4 mr-2" />
                  <span></span>
                </div>
                <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 font-bold" onClick={() => navigate('/apply')} aria-label="Apply Now">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;