import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { ArrowLeft, Calendar, User, Clock, Tag, Share2 } from 'lucide-react';

const BlogDetailPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === postId);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Quickmart Careers Blog`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', post.excerpt);
      }

      // Article Schema
      const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.image,
        "author": {
          "@type": "Organization",
          "name": "Quickmart Supermarket"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Quickmart Careers",
          "logo": {
            "@type": "ImageObject",
            "url": "https://quickmartjobs.site/logo.svg"
          }
        },
        "datePublished": "2026-01-15",
        "description": post.excerpt
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'blog-schema';
      script.innerText = JSON.stringify(schema);
      document.head.appendChild(script);

      return () => {
        const existingScript = document.getElementById('blog-schema');
        if (existingScript) document.head.removeChild(existingScript);
      };
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h1>
        <button onClick={() => navigate('/blog')} className="text-red-600 font-bold hover:underline">
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center text-gray-600 hover:text-red-600 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Career Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500 text-sm flex items-center">
              <Clock className="h-4 w-4 mr-1" /> {post.readTime}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between py-6 border-y border-gray-100">
            <div className="flex items-center">
              <div className="h-12 w-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                Q
              </div>
              <div>
                <p className="font-bold text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
              <Share2 className="h-6 w-6" />
            </button>
          </div>
        </header>

        <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
          <img src={post.image} alt={`${post.title} - Quickmart Careers Blog`} className="w-full h-auto" loading="lazy" />
        </div>

        <div 
          className="prose prose-lg prose-red max-w-none text-gray-700 leading-relaxed mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="pt-8 border-t border-gray-100">
          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map(tag => (
              <span key={tag} className="flex items-center bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-sm">
                <Tag className="h-3 w-3 mr-1" /> {tag}
              </span>
            ))}
          </div>

          <div className="bg-red-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start your career?</h2>
            <p className="text-red-100 mb-8 text-lg">Don't wait for the perfect moment. Apply today and join the Quickmart family.</p>
            <Link 
              to="/apply" 
              className="inline-block bg-white text-red-600 px-10 py-4 rounded-2xl font-black text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
