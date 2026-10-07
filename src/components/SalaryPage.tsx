import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, CheckCircle, TrendingUp, Shield, Heart, Star } from 'lucide-react';

const SalaryPage: React.FC = () => {
  useEffect(() => {
    document.title = "Quickmart Salary Scales 2026 | Benefits & Pay Dates Kenya";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Discover Quickmart Supermarket salary scales for 2026. Learn about our guaranteed 5th-of-the-month pay, medical benefits, and career growth opportunities in Kenya.");
    }
  }, []);

  const salaryData = [
    { role: "Cleaners", pay: "Ksh 18,000 - 22,000", frequency: "Monthly" },
    { role: "Cashiers", pay: "Ksh 21,000 - 26,000", frequency: "Monthly" },
    { role: "Sales Attendants", pay: "Ksh 23,000 - 28,000", frequency: "Monthly" },
    { role: "Drivers", pay: "Ksh 25,000 - 35,000", frequency: "Monthly" },
    { role: "Store Keepers", pay: "Ksh 30,000 - 40,000", frequency: "Monthly" },
    { role: "Warehouse Supervisors", pay: "Ksh 35,000 - 50,000", frequency: "Monthly" },
    { role: "Security Guards", pay: "Ksh 27,000 - 32,000", frequency: "Monthly" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
            Salary & <span className="text-green-600">Benefits</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Quickmart, we believe in rewarding our team fairly and on time. Join thousands of Kenyans who enjoy financial stability and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="p-8 border-b border-gray-100 bg-green-600 text-white">
                <h2 className="text-2xl font-bold flex items-center">
                  <DollarSign className="mr-2 h-6 w-6" /> 2026 Salary Scales
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider">
                      <th className="px-8 py-4">Position / Role</th>
                      <th className="px-8 py-4">Monthly Salary (Ksh)</th>
                      <th className="px-8 py-4">Payment Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {salaryData.map((item, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition-colors">
                        <td className="px-8 py-6 font-bold text-gray-800">{item.role}</td>
                        <td className="px-8 py-6 text-green-600 font-black">{item.pay}</td>
                        <td className="px-8 py-6">
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                            Guaranteed 5th
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="mr-2 h-5 w-5 text-red-600" /> Core Benefits
              </h3>
              <ul className="space-y-4">
                {[
                  "Comprehensive Medical Cover",
                  "Performance Bonuses",
                  "Paid Annual Leave",
                  "Maternity & Paternity Leave",
                  "Employee Discounts",
                  "Training & Certification"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl shadow-xl p-8 text-white">
              <Star className="h-10 w-10 mb-4 text-yellow-300" />
              <h3 className="text-xl font-bold mb-2">Career Growth</h3>
              <p className="text-red-100 mb-6">
                85% of our store managers started as cashiers or sales attendants. We promote from within!
              </p>
              <Link to="/apply" className="block text-center bg-white text-red-600 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 h-16 w-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">Job Security</h4>
              <p className="text-gray-600">Permanent positions with long-term contracts and social security benefits.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 text-green-600 h-16 w-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">Timely Payments</h4>
              <p className="text-gray-600">Our automated payroll ensures you get paid on the 5th of every month, without fail.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 text-red-600 h-16 w-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">Work-Life Balance</h4>
              <p className="text-gray-600">Reasonable 8-hour shifts with flexible rotations to suit your lifestyle.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryPage;
