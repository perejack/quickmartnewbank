import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const BlogListPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
            Quickmart <span className="text-red-600">Career Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice, salary guides, and success stories to help you land your dream job at Quickmart Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <Link to={`/blog/${post.id}`}>
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>
              </Link>
              
              <div className="p-6">
                <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                  <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" /> {post.date}</span>
                  <span className="flex items-center"><Clock className="h-3 w-3 mr-1" /> {post.readTime}</span>
                </div>
                
                <Link to={`/blog/${post.id}`}>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-red-600 font-bold hover:underline group"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;
