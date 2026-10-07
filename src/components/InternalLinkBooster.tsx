import React from 'react';
import { Link } from 'react-router-dom';
import { jobs } from '../data/jobsData';
import { blogPosts } from '../data/blogData';
import { Zap, TrendingUp, Search } from 'lucide-react';

const InternalLinkBooster: React.FC = () => {
  // Get a mix of jobs and blog posts for cross-linking
  const featuredJobs = jobs.slice(0, 4);
  const featuredBlogs = blogPosts.slice(0, 2);

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <Zap className="h-6 w-6 text-yellow-500 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">Trending <span className="text-red-600">Career Searches</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Dynamic Job Links */}
          {featuredJobs.map((job) => (
            <Link 
              key={job.id} 
              to={`/jobs/${job.id}`}
              className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-gray-800 group-hover:text-red-600">{job.title} Jobs</span>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <p className="text-xs text-gray-500 mt-1">Apply for {job.title} positions in Kenya</p>
            </Link>
          ))}

          {/* Dynamic Blog Links */}
          {featuredBlogs.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.id}`}
              className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-gray-800 group-hover:text-red-600">Career Advice</span>
                <Search className="h-4 w-4 text-blue-500" />
              </div>
              <p className="text-xs text-gray-500 mt-1 truncate">{post.title}</p>
            </Link>
          ))}

          {/* Static High-Value Links */}
          <Link 
            to="/salary"
            className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-gray-800 group-hover:text-red-600">Salary Guide 2026</span>
              <Zap className="h-4 w-4 text-yellow-500" />
            </div>
            <p className="text-xs text-gray-500 mt-1">View latest Quickmart pay scales</p>
          </Link>

          <Link 
            to="/locations"
            className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-gray-800 group-hover:text-red-600">Jobs Near Me</span>
              <TrendingUp className="h-4 w-4 text-red-500" />
            </div>
            <p className="text-xs text-gray-500 mt-1">Find Quickmart stores in your area</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InternalLinkBooster;
