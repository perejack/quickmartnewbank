import React, { useEffect } from 'react';
import { MapPin, Search, Navigation, Phone } from 'lucide-react';

const LocationsPage: React.FC = () => {
  useEffect(() => {
    document.title = "Quickmart Store Locations Kenya | Find Jobs Near You";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Find Quickmart Supermarket locations across Kenya. We have over 150 stores in Nairobi, Mombasa, Kisumu, Nakuru, and more. Apply for jobs at a store near you.");
    }
  }, []);

  const regions = [
    {
      name: "Nairobi & Environs",
      stores: ["Westlands", "Lavington", "Kilimani", "CBD - Tom Mboya", "CBD - Moi Avenue", "Embassy", "Waiyaki Way", "Thika Road", "Ruaka", "Karen"]
    },
    {
      name: "Coast Region",
      stores: ["Mombasa CBD", "Nyali", "Bamburi", "Mtwapa", "Diani", "Malindi"]
    },
    {
      name: "Rift Valley",
      stores: ["Nakuru CBD", "Eldoret", "Naivasha", "Kericho", "Kitale"]
    },
    {
      name: "Western & Nyanza",
      stores: ["Kisumu CBD", "Kisii", "Kakamega", "Bungoma"]
    },
    {
      name: "Central & Mt. Kenya",
      stores: ["Thika", "Nyeri", "Nanyuki", "Meru", "Embu"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
            Our <span className="text-red-600">Locations</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 150 stores across Kenya, there's always a Quickmart near you. Find your local store and start your career today.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-4 mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input 
                type="text" 
                placeholder="Search by town or estate..." 
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 transition-all"
              />
            </div>
            <button className="bg-red-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-700 transition-all flex items-center justify-center">
              <Navigation className="mr-2 h-5 w-5" /> Find Near Me
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="p-6 bg-gray-900 text-white">
                <h2 className="text-xl font-bold flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-red-500" /> {region.name}
                </h2>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {region.stores.map((store, j) => (
                    <li key={j} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                      <span className="text-gray-700 font-medium">{store}</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-md font-bold">Hiring</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Can't find your location?</h3>
            <p className="text-gray-400">We are expanding rapidly. New stores opening every month!</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+254700000000" className="flex items-center justify-center bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl transition-all">
              <Phone className="mr-2 h-5 w-5" /> Contact HR
            </a>
            <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-xl font-bold transition-all">
              View All 150+ Stores
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
