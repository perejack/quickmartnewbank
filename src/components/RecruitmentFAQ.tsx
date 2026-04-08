import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const RecruitmentFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I apply for a job at Quickmart?",
      answer: "You can apply directly through our official recruitment portal at quickmartopportunities.com. Simply select your preferred position, click 'Apply Now', and fill out the 5-minute application form."
    },
    {
      question: "What is the salary for entry-level positions at Quickmart?",
      answer: "Salaries for entry-level roles like Cleaners and Cashiers range from Ksh 18,000 to Ksh 26,000 per month, depending on the location and shift. All salaries are paid promptly on the 5th of every month."
    },
    {
      question: "Does Quickmart charge any application fees?",
      answer: "No, Quickmart Supermarket does NOT charge any fees at any stage of the recruitment process. Be wary of scammers asking for money for medicals or uniforms."
    },
    {
      question: "Where are Quickmart jobs located?",
      answer: "We have over 150 stores across Kenya, including Nairobi, Mombasa, Kisumu, Nakuru, and Eldoret. You can apply for a position at any store near your residence."
    },
    {
      question: "What documents are required for the application?",
      answer: "You will need a valid Kenyan ID, a KRA PIN certificate, a Good Conduct certificate (or proof of application), and your academic certificates."
    }
  ];

  useEffect(() => {
    // Inject FAQ Schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema';
    script.innerText = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('faq-schema');
      if (existingScript) document.head.removeChild(existingScript);
    };
  }, []);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-gray-50 w-full overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-2xl mb-4">
            <HelpCircle className="h-6 w-6 text-red-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Recruitment <span className="text-red-600">FAQ</span>
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about joining Kenya's fastest-growing retail team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-800 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-red-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecruitmentFAQ;
