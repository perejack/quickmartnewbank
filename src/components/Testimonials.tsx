import React from 'react';

import image1 from '../assets/downloaded/image_1.jpeg';
import image2 from '../assets/downloaded/image_2.jpeg';
import image4 from '../assets/downloaded/image_4.jpg';
import { Star, Quote, MapPin, Calendar } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Mary Wanjiku",
      position: "Cashier - Nairobi Branch",
      image: image1,
      text: "Working at Quickmart has been a blessing. The payment is always on time, and the management treats us with respect. I've been able to support my family comfortably and even save for the future.",
      rating: 5,
      tenure: "2 years",
      location: "Westlands"
    },
    {
      name: "John Mwangi",
      position: "Store Keeper - Mombasa Branch",
      image: image2,
      text: "The career growth opportunities here are amazing. I started as a cleaner and now I'm a store keeper. Quickmart invests in their employees' development through training and mentorship programs.",
      rating: 5,
      tenure: "3 years",
      location: "Nyali"
    },
    {
      name: "Grace Akinyi",
      position: "Driver - Kisumu Branch",
      image: "", // Removed due to 404 error
      text: "As a female driver, I was worried about finding a supportive workplace. Quickmart has exceeded my expectations with their inclusive culture, fair treatment, and excellent working conditions.",
      rating: 5,
      tenure: "1.5 years",
      location: "Kisumu"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-600/10 text-red-600 font-semibold mb-6">
            <Star className="h-4 w-4 mr-2" />
            <span>Employee Stories</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
            What Our <span className="text-red-600">Employees Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from our satisfied team members who have built 
            successful careers with Quickmart across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 hover:border-red-600/30">
              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-green-500 mr-4" />
                <div className="flex text-green-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-red-600"
                />
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{testimonial.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{testimonial.tenure}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section with Store Background */}
        <div className="relative bg-gradient-to-r from-red-600 to-red-700 rounded-3xl shadow-2xl overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${image4})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/95 to-red-700/95"></div>
          
          <div className="relative z-10 p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Employee Satisfaction Statistics</h3>
              <p className="text-red-100 text-lg">Real numbers from our team members across Kenya</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-5xl font-black text-white mb-2">98%</div>
                <div className="text-red-100 text-lg mb-2">Employee Satisfaction</div>
                <div className="text-white/80 text-sm">Based on annual survey</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-5xl font-black text-white mb-2">85%</div>
                <div className="text-red-100 text-lg mb-2">Internal Promotions</div>
                <div className="text-white/80 text-sm">Career advancement rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-5xl font-black text-white mb-2">4.8/5</div>
                <div className="text-red-100 text-lg mb-2">Average Rating</div>
                <div className="text-white/80 text-sm">Employee reviews</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-5xl font-black text-white mb-2">3+ Years</div>
                <div className="text-red-100 text-lg mb-2">Average Tenure</div>
                <div className="text-white/80 text-sm">Employee retention</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-gray-600 mb-8">Start your journey with Quickmart today and become our next success story.</p>
          <button className="bg-gradient-to-r from-white to-gray-100 border-2 border-red-600 text-red-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg transform hover:scale-105">
            Apply Now - Join the Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;