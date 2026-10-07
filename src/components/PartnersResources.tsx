import React from 'react';
import { ExternalLink, ShieldCheck, Briefcase, GraduationCap, Globe } from 'lucide-react';

const PartnersResources: React.FC = () => {
  const resources = [
    {
      category: "Official Government Portals",
      icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
      links: [
        { name: "Public Service Commission (PSCK)", url: "https://psckjobs.go.ke/", description: "Official portal for government and public service job applications in Kenya." },
        { name: "National Employment Authority (NEA)", url: "https://neaims.go.ke/", description: "Government agency managing employment and job seeker registration." },
        { name: "Kenya Revenue Authority (KRA) Careers", url: "https://www.kra.go.ke/careers", description: "Official career opportunities at the Kenya Revenue Authority." }
      ]
    },
    {
      category: "Top Job Boards & Recruitment",
      icon: <Briefcase className="h-6 w-6 text-red-600" />,
      links: [
        { name: "BrighterMonday Kenya", url: "https://www.brightermonday.co.ke/", description: "Kenya's leading online job board for verified vacancies." },
        { name: "MyJobMag Kenya", url: "https://www.myjobmag.co.ke/", description: "Comprehensive directory of the latest jobs in Kenya across all sectors." },
        { name: "Fuzu Kenya", url: "https://www.fuzu.com/kenya", description: "Career growth platform offering jobs, courses, and career advice." },
        { name: "Jobweb Kenya", url: "https://jobwebkenya.com/", description: "Popular portal for NGO, teaching, and private sector jobs in Kenya." }
      ]
    },
    {
      category: "Career Advice & HR Services",
      icon: <GraduationCap className="h-6 w-6 text-green-600" />,
      links: [
        { name: "Corporate Staffing Services", url: "https://corporatestaffing.co.ke/", description: "Leading recruitment and HR consultancy firm in Nairobi." },
        { name: "Career Point Kenya", url: "https://www.careerpointkenya.co.ke/", description: "Top resource for CV writing tips and career development advice." }
      ]
    }
  ];

  return (
    <section id="resources" className="py-16 sm:py-20 bg-white w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Career <span className="text-red-600">Resources</span> & Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We've partnered with and curated the most reputable career platforms in Kenya to help you succeed in your professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((section, idx) => (
            <div key={idx} className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white rounded-2xl shadow-sm mr-4">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{section.category}</h3>
              </div>
              <ul className="space-y-6">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx} className="group">
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-start group-hover:text-red-600 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center font-bold text-gray-900 group-hover:text-red-600 mb-1">
                          {link.name}
                          <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {link.description}
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100 flex items-center justify-center text-center">
          <p className="text-blue-800 text-sm font-medium">
            <Globe className="inline h-4 w-4 mr-2" />
            Note: These are external resources. Quickmart is not responsible for the content on third-party websites.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersResources;
