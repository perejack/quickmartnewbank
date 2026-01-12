import { Phone } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '254105575260';
  const message = encodeURIComponent('Hello, I would like to inquire about job opportunities at Quickmart.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Talk to us on WhatsApp"
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
        <div className="relative flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 hover:shadow-green-500/50">
          <Phone size={32} className="text-white" />
        </div>
        <div className="absolute right-full mr-4 px-4 py-2 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          <span className="text-sm font-semibold text-gray-800">Talk to us</span>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
