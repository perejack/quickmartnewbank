import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import quickmartLogo from '../assets/quickmartlogo.png';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 pt-2 pb-2 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center min-h-[3.5rem] sm:min-h-[4rem]">
          {/* Enhanced Logo */}
          <div className="flex items-center flex-shrink-0">
            <div className="flex items-center">
  <img
    src={quickmartLogo}
    alt="Quickmart Careers Logo"
    className="h-10 sm:h-12 md:h-14 w-auto object-contain"
  />
  <span className="ml-2 sm:ml-3 text-xl sm:text-2xl md:text-3xl font-black text-red-600 whitespace-nowrap">Quickmart</span>
</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/#jobs" className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-semibold">
              Available Jobs
            </Link>
            <Link to="/#benefits" className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-semibold">
              Benefits
            </Link>
            <Link to="/#process" className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-semibold">
              Application Process
            </Link>
            <Link to="/#testimonials" className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-semibold">
              Success Stories
            </Link>
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
              <Link to="/#jobs" className="block px-3 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200 font-semibold rounded-lg">
                Available Jobs
              </Link>
              <Link to="/#benefits" className="block px-3 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200 font-semibold rounded-lg">
                Benefits
              </Link>
              <Link to="/#process" className="block px-3 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200 font-semibold rounded-lg">
                Application Process
              </Link>
              <Link to="/#testimonials" className="block px-3 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200 font-semibold rounded-lg">
                Success Stories
              </Link>
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