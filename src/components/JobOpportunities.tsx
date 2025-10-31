import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, DollarSign, Truck, Package, ShoppingBag, Calculator, TrendingUp, Clock, Briefcase, UserCheck, ChefHat, Warehouse, Shield } from 'lucide-react';

import image4 from '../assets/downloaded/image_4.jpg';
import image5 from '../assets/downloaded/image_5.jpeg';
import image6 from '../assets/downloaded/image_6.jpg';
import image7 from '../assets/downloaded/image_7.jpg';
import image8 from '../assets/downloaded/image_8.jpg';
import image9 from '../assets/downloaded/image_9.jpg';
import image11 from '../assets/downloaded/image_11.jpg';

interface JobCardProps {
  title: string;
  positions: number;
  salary: string;
  icon: React.ReactNode;
  description: string;
  isPopular?: boolean;
  image: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, positions, salary, icon, description, isPopular, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div 
      className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden group ${
        isPopular 
          ? 'border-2 border-green-500' 
          : 'border border-gray-100 hover:border-red-600/30'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-bold z-20">
          Most Popular
        </div>
      )}

      {/* Background Image */}
      <div className="relative h-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        {/* Icon Overlay */}
        <div className="absolute bottom-4 left-4 z-10">
          <div className={`p-3 rounded-xl transition-all duration-300 ${
            isHovered ? 'bg-red-600 text-white scale-110' : 'bg-white/90 text-red-600'
          }`}>
            {icon}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-black text-red-600 mb-1">{positions}</div>
            <div className="text-xs text-gray-500">positions left</div>
          </div>
        </div>

        {/* Salary */}
        <div className="mb-4">
          <div className="text-2xl font-black text-green-600 mb-1">{salary}</div>
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <DollarSign className="h-3 w-3" />
            <span>Paid monthly on 5th</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Application Progress</span>
            <span>{Math.round((positions / 200) * 100)}% available</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div 
              className="bg-gradient-to-r from-red-600 to-red-500 h-1.5 rounded-full transition-all duration-1000"
              style={{ width: `${(positions / 200) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Apply Button */}
        <button
          className="w-full bg-gradient-to-r from-white to-gray-100 text-red-600 border-2 border-red-600 py-3 rounded-xl font-bold hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg group mb-3"
          onClick={() => navigate('/apply')}
          aria-label={`Apply for ${title}`}
        >
          Apply Now
          <TrendingUp className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
        </button>

        {/* Urgency Indicator */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
            </div>
            <span className="text-xs text-red-600 font-bold">Filling Fast</span>
          </div>
          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <Clock className="h-3 w-3" />
            <span>Apply within 24hrs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const JobOpportunities: React.FC = () => {
  const jobs = [
    {
      title: "Cleaners",
      positions: 43,
      salary: "Ksh 18,000/month",
      icon: <Users className="h-6 w-6" />,
      description: "Maintain store cleanliness and hygiene standards",
      isPopular: false,
      image: image5
    },
    {
      title: "Cashiers",
      positions: 22,
      salary: "Ksh 21,000/month",
      icon: <Calculator className="h-6 w-6" />,
      description: "Handle customer transactions and provide excellent service",
      isPopular: true,
      image: image6
    },
    {
      title: "Store Keepers",
      positions: 68,
      salary: "Ksh 34,000/month",
      icon: <Package className="h-6 w-6" />,
      description: "Manage inventory and stock organization",
      isPopular: false,
      image: image7
    },
    {
      title: "Drivers",
      positions: 20,
      salary: "Ksh 25,000/month",
      icon: <Truck className="h-6 w-6" />,
      description: "Deliver products and maintain delivery schedules",
      isPopular: false,
      image: image8
    },
    {
      title: "Loaders & Off-loaders",
      positions: 82,
      salary: "Ksh 18,000/month",
      icon: <ShoppingBag className="h-6 w-6" />,
      description: "Handle product loading and unloading operations",
      isPopular: false,
      image: image9
    },
    {
      title: "Marketer",
      positions: 50,
      salary: "Ksh 29,000/month",
      icon: <Briefcase className="h-6 w-6" />,
      description: "Develop and implement marketing strategies",
      isPopular: false,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Rj5qzstgL0vz7xleyMmadkRWvqcAzM0HLg&s"
    },
    {
      title: "Sales Attendant",
      positions: 120,
      salary: "Ksh 25,000/month",
      icon: <UserCheck className="h-6 w-6" />,
      description: "Assist customers and drive sales",
      isPopular: true,
      image: image4
    },
    {
      title: "Chef",
      positions: 35,
      salary: "Ksh 23,750/month",
      icon: <ChefHat className="h-6 w-6" />,
      description: "Prepare high-quality meals for our deli",
      isPopular: false,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbQRkmcCsgBXtgg0GFTeIknEmV9VHri3zSQ&s"
    },
    {
      title: "Warehouse Supervisor",
      positions: 15,
      salary: "Ksh 31,000/month",
      icon: <Warehouse className="h-6 w-6" />,
      description: "Oversee and coordinate warehouse activities",
      isPopular: false,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrlZShjXutRnoulWcVg48CxBYN-ZXqjZ4D8A&s"
    },
    {
      title: "Guards",
      positions: 75,
      salary: "Ksh 27,000/month",
      icon: <Shield className="h-6 w-6" />,
      description: "Ensure the safety and security of the premises",
      isPopular: false,
      image: image11
    }
  ];

  return (
    <section id="jobs" className="py-24 bg-gradient-to-b from-green-600 to-green-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white font-semibold mb-6">
            <TrendingUp className="h-4 w-4 mr-2" />
            <span>High Demand Positions</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Available <span className="text-yellow-300">Positions</span>
          </h2>
          <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            Choose from our diverse range of career opportunities. All positions offer competitive salaries, 
            guaranteed monthly payments, and excellent growth prospects with immediate start dates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {jobs.map((job, index) => (
            <JobCard
              key={index}
              title={job.title}
              positions={job.positions}
              salary={job.salary}
              icon={job.icon}
              description={job.description}
              isPopular={job.isPopular}
              image={job.image}
            />
          ))}
        </div>

        {/* Enhanced Total Summary with Quickmart Store Image */}
        <div className="relative bg-gradient-to-r from-red-600 to-red-700 rounded-3xl shadow-2xl overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${image4})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/95 to-red-700/95"></div>
          
          <div className="relative z-10 p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Total Opportunity Overview</h3>
              <p className="text-red-100 text-lg">Join thousands of satisfied employees across Kenya</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-5xl font-black text-white mb-2">467</div>
                <div className="text-red-100 text-lg mb-2">Total Positions Available</div>
                <div className="text-white/80 text-sm">Across all departments</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-5xl font-black text-white mb-2">18K - 34K</div>
                <div className="text-red-100 text-lg mb-2">Monthly Salary Range</div>
                <div className="text-white/80 text-sm">Competitive rates</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-5xl font-black text-white mb-2">5th</div>
                <div className="text-red-100 text-lg mb-2">Guaranteed Pay Date</div>
                <div className="text-white/80 text-sm">Every month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobOpportunities;