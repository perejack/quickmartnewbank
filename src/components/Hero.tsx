import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/hero.jpg';
import { ArrowRight, Clock, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 14,
    minutes: 23,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Quickmart Store Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-8">
          {/* Enhanced Urgency Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/90 text-red-600 font-bold mb-8 shadow-lg backdrop-blur-sm">
            <Clock className="h-5 w-5 mr-2" />
            <span className="text-lg">Limited Time Offer - Apply Now!</span>
          </div>

          {/* Enhanced Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight drop-shadow-lg">
            Join the
            <span className="text-white block relative">
              Quickmart Family
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-white rounded-full"></div>
            </span>
          </h1>

          {/* Enhanced Subheading */}
          <div className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            <p className="mb-4">
              Build your career with Kenya's fastest-growing retail chain.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-lg">
              <div className="bg-white/90 text-red-600 rounded-full px-4 py-2 font-medium">
                <span className="font-bold">73+</span> Open Positions
              </div>
              <div className="bg-white/90 text-red-600 rounded-full px-4 py-2 font-medium">
                <span className="font-bold">Ksh 18K-34K</span> Monthly
              </div>
              <div className="bg-white/90 text-red-600 rounded-full px-4 py-2 font-medium">
                <span className="font-bold">5th</span> Pay Date
              </div>
            </div>
          </div>

          {/* Application Deadline Timer */}
          <div className="mb-8">
            <p className="text-white/90 mb-4 text-lg">Application Deadline:</p>
            <div className="flex justify-center gap-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-white/90 rounded-lg p-4 min-w-[80px] text-red-600">
                  <div className="text-2xl font-bold">{value.toString().padStart(2, '0')}</div>
                  <div className="text-sm capitalize font-medium">{unit}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
 
            <button className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              Find Locations
            </button>
          </div>

          {/* Compact Statistics */}
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto mt-12 mb-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-2xl font-black text-red-600">73+</div>
              <div className="text-sm text-gray-700">Open Positions</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-2xl font-black text-red-600">150+</div>
              <div className="text-sm text-gray-700">Stores</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-2xl font-black text-red-600">99.9%</div>
              <div className="text-sm text-gray-700">On-Time Pay</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
          <div className="text-white/60 text-sm mt-2">Scroll to explore</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;