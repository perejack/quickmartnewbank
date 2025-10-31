import React from 'react';
import { CreditCard, Calendar, Shield, TrendingUp, Heart, Award, CheckCircle, Banknote, Users } from 'lucide-react';

const Benefits: React.FC = () => {
  const banks = [
    { name: "M-PESA", color: "bg-gradient-to-r from-green-600 to-green-500", logoUrl: "https://play-lh.googleusercontent.com/bRZF74-13jknePwUd1xam5ZCSdAJVuI_wqtkrisBgu7EEh1jobh2boZihlk-4ikY_S3V" },
    { name: "Equity Bank", color: "bg-gradient-to-r from-red-600 to-red-500", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDeOC4kosefZ2gqKe1WndnkjGwOkSjPwU4z0lRdvBz145KwzqDhipvlfIaqHQHjG3GcDk&usqp=CAU" },
    { name: "KCB", color: "bg-gradient-to-r from-green-700 to-green-600", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRZArbjWYM9ZArApg1Rf8C8px6W_t9kCJMBQ&s" },
    { name: "National Bank", color: "bg-gradient-to-r from-blue-600 to-blue-500", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMTh_IYo6NFyUjLv_MHMP26RFRqQSyqkVY7w&s" },
    { name: "ABSA", color: "bg-gradient-to-r from-red-500 to-red-400", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWwC1lBWjmX7wf7khFxo5egdhSPbWoFt49AQ&s" }
  ];

  const benefits = [
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Reliable Payment System",
      description: "Get paid on time, every time. Your salary is guaranteed on the 5th of each month with multiple payment options.",
      highlight: "99.9% Success Rate"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Flexible Working Hours",
      description: "Work-life balance with reasonable shift schedules, time off when needed, and weekend rotations.",
      highlight: "8-Hour Shifts"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Job Security",
      description: "Join a stable, growing company with consistent employment opportunities and long-term career prospects.",
      highlight: "Permanent Positions"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Career Growth",
      description: "Advance your career with comprehensive training programs, mentorship, and promotion opportunities.",
      highlight: "85% Internal Promotions"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Health Benefits",
      description: "Comprehensive healthcare coverage for you and your family including medical, dental, and vision.",
      highlight: "Family Coverage"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Performance Bonuses",
      description: "Earn extra income through our performance-based bonus system, employee recognition programs, and incentives.",
      highlight: "Up to 15% Extra"
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Enhanced Payment System Section */}
        <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-3xl shadow-2xl p-8 md:p-12 text-white overflow-hidden relative mb-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
          
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Banknote className="h-8 w-8 text-white mr-3" />
                  <span className="text-white font-semibold">Payment Guarantee</span>
                </div>
                <h3 className="text-4xl font-bold mb-6">Guaranteed Monthly Payments</h3>
                <p className="text-red-100 mb-8 text-lg leading-relaxed">
                  Your salary is automatically deposited on the 5th of every month through our 
                  secure payment system. Choose from multiple trusted banking partners and enjoy 
                  seamless, reliable transactions.
                </p>
                <div className="flex items-center space-x-6 mb-6">
                  <div className="bg-white text-red-600 px-6 py-3 rounded-xl font-bold text-lg">
                    Payment Date: 5th
                  </div>
                  <div className="flex items-center text-red-100">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span>Never miss a payment</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold mb-6 text-center">Supported Banks:</h4>
                <div className="grid grid-cols-2 gap-4">
                  {banks.map((bank, index) => (
                    <div key={index} className={`${bank.color} p-4 rounded-xl text-center font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                      <img src={bank.logoUrl} alt={bank.name} className="h-8 w-auto mx-auto mb-2" />
                      <div className="text-white">{bank.name}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <span className="text-sm">+ Mobile Money Options</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-600/10 text-red-600 font-semibold mb-6">
            <Award className="h-4 w-4 mr-2" />
            <span>Employee Benefits</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
            Why Choose <span className="text-red-600">Quickmart</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We believe in taking care of our employees. Join thousands of satisfied team members 
            who enjoy competitive benefits, growth opportunities, and a supportive work environment.
          </p>
        </div>

        {/* Enhanced Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 hover:border-red-600/30">
              {/* Show supported banks under Reliable Payment System */}
              {benefit.title === "Reliable Payment System" && (
                <div className="mt-6 mb-2">
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <img src="https://play-lh.googleusercontent.com/bRZF74-13jknePwUd1xam5ZCSdAJVuI_wqtkrisBgu7EEh1jobh2boZihlk-4ikY_S3V" alt="M-Pesa" className="h-8 object-contain" title="M-Pesa" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDeOC4kosefZ2gqKe1WndnkjGwOkSjPwU4z0lRdvBz145KwzqDhipvlfIaqHQHjG3GcDk&usqp=CAU" alt="Equity Bank" className="h-8 object-contain" title="Equity Bank" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMTh_IYo6NFyUjLv_MHMP26RFRqQSyqkVY7w&s" alt="National Bank" className="h-8 object-contain" title="National Bank" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWwC1lBWjmX7wf7khFxo5egdhSPbWoFt49AQ&s" alt="Absa" className="h-8 object-contain" title="Absa" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRZArbjWYM9ZArApg1Rf8C8px6W_t9kCJMBQ&s" alt="KCB" className="h-8 object-contain" title="KCB" />
                  </div>
                </div>
              )}
              <div className="flex items-center mb-6">
                <div className="p-4 bg-red-600/10 text-red-600 rounded-xl group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  {benefit.icon}
                </div>
                <div className="ml-4">
                  <div className="text-sm font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    {benefit.highlight}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Enhanced Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-red-600 to-red-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl font-black text-red-600 mb-2">99.9%</div>
            <div className="text-gray-600 font-semibold">On-time Payments</div>
          </div>
          <div className="text-center group">
            <div className="bg-gradient-to-br from-white to-gray-100 border-2 border-red-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="h-8 w-8 text-red-600" />
            </div>
            <div className="text-4xl font-black text-red-600 mb-2">5,000+</div>
            <div className="text-gray-600 font-semibold">Happy Employees</div>
          </div>
          <div className="text-center group">
            <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl font-black text-red-600 mb-2">150+</div>
            <div className="text-gray-600 font-semibold">Store Locations</div>
          </div>
          <div className="text-center group">
            <div className="bg-gradient-to-br from-gray-800 to-black w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl font-black text-red-600 mb-2">24/7</div>
            <div className="text-gray-600 font-semibold">HR Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;