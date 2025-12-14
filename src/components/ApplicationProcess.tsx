import React from 'react';
import image10 from '../assets/downloaded/image_10.jpg';
import { FileText, CheckCircle, Users, Briefcase, Clock, Star } from 'lucide-react';

const ApplicationProcess: React.FC = () => {
  const steps = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Submit Application",
      description: "Fill out our simple online application form with your personal details and preferred position.",
      requirement: "Required: Valid KRA PIN",
      duration: "5 minutes"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Document Verification",
      description: "Our HR team will verify your documents and credentials within 24-48 hours.",
      requirement: "Required: Valid ID",
      duration: "24-48 hours"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Interview Process",
      description: "Attend a brief interview either in-person or virtually based on your location.",
      requirement: "Duration: 15-30 minutes",
      duration: "Same week"
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Start Working",
      description: "Complete onboarding and begin your career journey with Quickmart.",
      requirement: "Timeline: 1-2 weeks",
      duration: "Immediate"
    }
  ];

  return (
    <section id="process" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-600/10 text-red-600 font-semibold mb-6">
            <Clock className="h-4 w-4 mr-2" />
            <span>Quick & Easy Process</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
            Simple <span className="text-red-600">Application Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Getting started with Quickmart is easy. Follow these simple steps to begin your career journey with us.
            Most applications are processed within 48 hours.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mb-20">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 opacity-30"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Number */}
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-full font-bold text-2xl mx-auto mb-6 relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                
                {/* Step Content */}
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 text-center transition-all duration-300 transform group-hover:scale-105 border border-gray-100 group-hover:border-red-600/30">
                  <div className="text-red-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                  <div className="space-y-2">
                    <div className="bg-white border-2 border-red-600 text-red-600 px-4 py-2 rounded-full text-sm font-bold">
                      {step.requirement}
                    </div>
                    <div className="text-xs text-gray-500 flex items-center justify-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {step.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories Section with CEO Image */}
        <div className="mb-16 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="flex items-center mb-4">
                <Star className="h-6 w-6 text-green-500 mr-2" />
                <span className="text-red-600 font-semibold">Success Story</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">From Application to Success</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "Our streamlined process has helped thousands of Kenyans start their careers with Quickmart. 
                We believe in quick decisions and fast onboarding to get you earning as soon as possible."
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-red-600/10 text-red-600 px-4 py-2 rounded-lg font-semibold">
                  98% Success Rate
                </div>
                <div className="text-gray-500 text-sm">
                  Average processing time: 2 days
                </div>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image10})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Important Requirements */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-600 mb-16">
          <div className="flex items-start space-x-4">
            <div className="bg-red-600 text-white p-4 rounded-full">
              <FileText className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Important Requirements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Valid KRA PIN number (mandatory for all positions)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Original ID card or passport
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Relevant certificates or qualifications
                  </li>
                </ul>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Two passport-size photos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Bank account details for salary payments
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-red-100 mb-8 text-lg">Join thousands of satisfied employees at Quickmart today. Your new career is just one click away.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105">
              Start Your Application Now
            </button>
            <div className="text-red-100 text-sm">
              ⚡ Fast-track processing available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;