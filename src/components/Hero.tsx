import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/HERO3.jpg';
import { ArrowRight, Clock, MapPin, Users, Building2, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const navigate = useNavigate();
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%'
          }}
        ></div>
        
        {/* Multi-layer gradient for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-20">
        <div className="flex flex-col items-center text-center">
          
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs sm:text-sm md:text-base mb-4 sm:mb-6 md:mb-8 shadow-2xl animate-pulse">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
            <span className="whitespace-nowrap">Limited Time Offer - Apply Now!</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-white mb-2 sm:mb-3 md:mb-4 lg:mb-6 leading-tight tracking-tight w-full">
            <span className="block">Join the</span>
            <span className="block bg-gradient-to-r from-red-500 via-red-600 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
              Quickmart Family
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 mb-4 sm:mb-6 md:mb-8 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-medium px-2">
            Build your career with Kenya's fastest-growing retail chain
          </p>

          {/* Key Stats - Text Only */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-6 sm:mb-8 md:mb-10 w-full max-w-3xl sm:max-w-4xl px-2">
            <div className="text-center group cursor-default flex-1 min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black text-white group-hover:text-red-400 transition-colors duration-300">73+</div>
              <div className="text-xs sm:text-xs md:text-sm lg:text-base text-white/80 font-medium mt-0.5 sm:mt-1 group-hover:text-white transition-colors">Open Positions</div>
            </div>
            <div className="text-center group cursor-default flex-1 min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black text-white group-hover:text-red-400 transition-colors duration-300">Ksh 18K-34K</div>
              <div className="text-xs sm:text-xs md:text-sm lg:text-base text-white/80 font-medium mt-0.5 sm:mt-1 group-hover:text-white transition-colors">Monthly Salary</div>
            </div>
            <div className="text-center group cursor-default flex-1 min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black text-white group-hover:text-red-400 transition-colors duration-300">5th</div>
              <div className="text-xs sm:text-xs md:text-sm lg:text-base text-white/80 font-medium mt-0.5 sm:mt-1 group-hover:text-white transition-colors">Pay Date</div>
            </div>
          </div>

          {/* Countdown Timer - Text Only */}
          <div className="mb-6 sm:mb-8 md:mb-10 w-full max-w-xl sm:max-w-2xl px-2">
            <p className="text-white/90 text-xs sm:text-sm md:text-base font-semibold mb-2 sm:mb-3 md:mb-4 tracking-wide">Application Deadline:</p>
            <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center flex-1 min-w-[45px] sm:min-w-[55px] md:min-w-[65px]">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black text-white hover:text-red-400 transition-colors duration-300 cursor-default">{value.toString().padStart(2, '0')}</div>
                  <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-white/70 font-semibold capitalize mt-0.5 sm:mt-1">{unit}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 w-full max-w-sm sm:max-w-md md:max-w-lg px-2">
            <button 
              onClick={() => navigate('/apply')}
              className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl md:rounded-2xl font-bold text-sm sm:text-base md:text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-2xl hover:shadow-red-500/50 flex items-center justify-center gap-1.5 sm:gap-2 group"
            >
              <span>Apply Now</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex-1 bg-white/10 backdrop-blur-md border-2 border-white text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl md:rounded-2xl font-bold text-sm sm:text-base md:text-lg hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Find Locations</span>
              <span className="sm:hidden">Locations</span>
            </button>
          </div>

          {/* Additional Stats - Text Only */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 mt-8 sm:mt-10 md:mt-12 w-full max-w-2xl sm:max-w-3xl px-2">
            <div className="text-center group cursor-default flex-1 min-w-[70px] sm:min-w-[80px] md:min-w-[100px]">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-red-500 mx-auto mb-1 sm:mb-2 group-hover:text-red-400 transition-colors" />
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-white group-hover:text-red-400 transition-colors">73+</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-white/80 font-medium">Positions</div>
            </div>
            <div className="text-center group cursor-default flex-1 min-w-[70px] sm:min-w-[80px] md:min-w-[100px]">
              <Building2 className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-red-500 mx-auto mb-1 sm:mb-2 group-hover:text-red-400 transition-colors" />
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-white group-hover:text-red-400 transition-colors">150+</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-white/80 font-medium">Stores</div>
            </div>
            <div className="text-center group cursor-default flex-1 min-w-[70px] sm:min-w-[80px] md:min-w-[100px]">
              <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-red-500 mx-auto mb-1 sm:mb-2 group-hover:text-red-400 transition-colors" />
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-white group-hover:text-red-400 transition-colors">99.9%</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-white/80 font-medium">On-Time Pay</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full p-1 backdrop-blur-sm">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full animate-pulse"></div>
          </div>
          <div className="text-white/60 text-[10px] sm:text-xs md:text-sm mt-1 sm:mt-2">Scroll to explore</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;