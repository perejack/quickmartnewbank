import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { jobs } from '../data/jobsData';
import { ArrowLeft, CheckCircle, Briefcase, DollarSign, MapPin, Calendar, Clock, TrendingUp } from 'lucide-react';

const JobDetailPage: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const job = jobs.find(j => j.id === jobId);

  useEffect(() => {
    if (job) {
      // Update Title and Meta Description
      document.title = `${job.title} Jobs at Quickmart Kenya 2026 | Apply Now`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', `Apply for ${job.title} position at Quickmart Supermarket. Salary: ${job.salary}. Join Kenya's fastest-growing retail chain. ${job.description}`);
      }

      // Inject JobPosting Schema
      const schema = {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": job.title,
        "description": job.fullDescription,
        "identifier": {
          "@type": "PropertyValue",
          "name": "Quickmart",
          "value": job.id
        },
        "datePosted": "2026-01-15",
        "validThrough": "2026-12-31",
        "employmentType": "FULL_TIME",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "Quickmart Supermarket",
          "sameAs": "https://www.quickmartjobs.site",
          "logo": "https://www.quickmartjobs.site/logo.svg"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Various Stores Nationwide",
            "addressLocality": "Nairobi",
            "addressRegion": "Nairobi County",
            "postalCode": "00100",
            "addressCountry": "KE"
          }
        },
        "baseSalary": {
          "@type": "MonetaryAmount",
          "currency": "KES",
          "value": {
            "@type": "QuantitativeValue",
            "value": job.salary.replace(/[^0-9]/g, '').split('-')[0] || "25000",
            "unitText": "MONTH"
          }
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'job-schema';
      script.innerText = JSON.stringify(schema);
      document.head.appendChild(script);

      // Inject Breadcrumb Schema
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.quickmartjobs.site"
        }, {
          "@type": "ListItem",
          "position": 2,
          "name": job.title,
          "item": `https://www.quickmartjobs.site/jobs/${job.id}`
        }]
      };
      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.id = 'breadcrumb-schema';
      breadcrumbScript.innerText = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(breadcrumbScript);

      return () => {
        const existingScript = document.getElementById('job-schema');
        if (existingScript) document.head.removeChild(existingScript);
        const existingBreadcrumb = document.getElementById('breadcrumb-schema');
        if (existingBreadcrumb) document.head.removeChild(existingBreadcrumb);
      };
    }
  }, [job]);

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Job Not Found</h1>
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-red-600 font-bold hover:underline"
        >
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to All Jobs
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-red-600 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Job Listings
        </Link>

        {/* Job Header */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8">
          <div className="relative h-64 sm:h-80">
            <img 
              src={job.image} 
              alt={`${job.title} Job Opportunity at Quickmart Kenya`} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {job.category}
                </span>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {job.positions} Positions Available
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                {job.title}
              </h1>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center p-4 bg-gray-50 rounded-2xl">
                <div className="p-3 bg-green-100 text-green-600 rounded-xl mr-4">
                  <DollarSign className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Monthly Salary</p>
                  <p className="font-bold text-gray-800">{job.salary}</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-2xl">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-bold text-gray-800">Across Kenya</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-2xl">
                <div className="p-3 bg-purple-100 text-purple-600 rounded-xl mr-4">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Pay Date</p>
                  <p className="font-bold text-gray-800">5th Every Month</p>
                </div>
              </div>
            </div>

            <div className="prose prose-red max-w-none">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Description</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {job.fullDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-red-600" />
                    Requirements
                  </h3>
                  <ul className="space-y-3">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <span className="h-1.5 w-1.5 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Briefcase className="mr-2 h-5 w-5 text-red-600" />
                    Responsibilities
                  </h3>
                  <ul className="space-y-3">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <span className="h-1.5 w-1.5 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to join the team?</h3>
              <p className="mb-8 text-red-100">Applications are processed within 48 hours. Apply now to secure your spot.</p>
              <button 
                onClick={() => navigate('/apply')}
                className="bg-white text-red-600 px-12 py-4 rounded-2xl font-black text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
              >
                Apply for this Position
              </button>
              <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-red-100">
                <span className="flex items-center"><Clock className="h-4 w-4 mr-1" /> 5 min application</span>
                <span className="flex items-center"><TrendingUp className="h-4 w-4 mr-1" /> High success rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
