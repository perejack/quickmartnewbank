import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Users, DollarSign, Truck, Package, ShoppingBag, Calculator, TrendingUp, Clock, Briefcase, UserCheck, ChefHat, Warehouse, Shield, ArrowRight } from 'lucide-react';
import { jobs } from '../data/jobsData';

interface JobCardProps {
  id: string;
  title: string;
  positions: number;
  salary: string;
  icon: React.ReactNode;
  description: string;
  isPopular?: boolean;
  image: string;
}

const JobCard: React.FC<JobCardProps> = ({ id, title, positions, salary, icon, description, isPopular, image }) => {
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

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            className="w-full bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg group"
            onClick={() => navigate(`/jobs/${id}`)}
            aria-label={`View details for ${title}`}
          >
            View Details & Requirements
            <ArrowRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          
          <button
            className="w-full bg-white text-red-600 border-2 border-red-600 py-3 rounded-xl font-bold hover:bg-red-50 transition-all duration-300"
            onClick={() => navigate('/apply')}
            aria-label={`Apply for ${title}`}
          >
            Quick Apply
          </button>
        </div>

        {/* Urgency Indicator */}
        <div className="flex items-center justify-between mt-4">
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
  const getIcon = (title: string) => {
    switch (title) {
      case "Cleaners": return <Users className="h-6 w-6" />;
      case "Cashiers": return <Calculator className="h-6 w-6" />;
      case "Store Keepers": return <Package className="h-6 w-6" />;
      case "Drivers": return <Truck className="h-6 w-6" />;
      case "Loaders & Off-loaders": return <ShoppingBag className="h-6 w-6" />;
      case "Marketer": return <Briefcase className="h-6 w-6" />;
      case "Sales Attendant": return <UserCheck className="h-6 w-6" />;
      case "Chef": return <ChefHat className="h-6 w-6" />;
      case "Warehouse Supervisor": return <Warehouse className="h-6 w-6" />;
      case "Guards": return <Shield className="h-6 w-6" />;
      default: return <Briefcase className="h-6 w-6" />;
    }
  };

  return (
    <section id="jobs" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-green-600 to-green-400 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/20 text-white font-semibold mb-4 sm:mb-6">
            <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            <span className="text-sm sm:text-base">High Demand Positions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
            Available <span className="text-yellow-300">Positions</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-green-100 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed px-2">
            Choose from our diverse range of career opportunities. All positions offer competitive salaries, 
            guaranteed monthly payments, and excellent growth prospects with immediate start dates.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20 w-full">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              id={job.id}
              title={job.title}
              positions={job.positions}
              salary={job.salary}
              icon={getIcon(job.title)}
              description={job.description}
              isPopular={job.isPopular}
              image={job.image}
            />
          ))}
        </div>

        {/* Enhanced Total Summary */}
        <div className="relative bg-gradient-to-r from-red-600 to-red-700 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/95 to-red-700/95"></div>
          
          <div className="relative z-10 p-6 sm:p-8 md:p-12 text-white w-full">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Total Opportunity Overview</h3>
              <p className="text-red-100 text-base sm:text-lg">Join thousands of satisfied employees across Kenya</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center w-full">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-1 sm:mb-2">467</div>
                <div className="text-red-100 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Total Positions Available</div>
                <div className="text-white/80 text-xs sm:text-sm">Across all departments</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-1 sm:mb-2">18K - 34K</div>
                <div className="text-red-100 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Monthly Salary Range</div>
                <div className="text-white/80 text-xs sm:text-sm">Competitive rates</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-1 sm:mb-2">5th</div>
                <div className="text-red-100 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Guaranteed Pay Date</div>
                <div className="text-white/80 text-xs sm:text-sm">Every month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobOpportunities;
