import React, { useState, useMemo } from 'react';
import { POSTS } from './posts';
import { Category, BlogPost } from './types';
import { CategoryFilter } from './components/CategoryFilter';
import { BlogCard } from './components/BlogCard';
import { BlogPostPage } from './components/BlogPostPage';
import { Zap } from 'lucide-react';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return POSTS;
    return POSTS.filter(post => post.category === activeCategory);
  }, [activeCategory]);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handleBackToListing = () => {
    setSelectedPost(null);
  };

  if (selectedPost) {
    return <BlogPostPage post={selectedPost} onBack={handleBackToListing} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-jetBlue selection:text-white">
      
      {/* Navigation Mock (For Context) */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-jetBlue rounded-lg flex items-center justify-center text-white">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <span className="font-display font-bold text-xl text-gray-900">FactoryJet</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-jetBlue">Solutions</a>
            <a href="#" className="text-jetBlue">Blog</a>
            <a href="#" className="hover:text-jetBlue">Pricing</a>
          </div>
          <button className="bg-jetBlue text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Header Section */}
      <header className="pt-12 pb-8 md:pt-20 md:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-jetOrange font-semibold tracking-wide uppercase text-sm mb-2">
            The FactoryJet Journal
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
            Insights for the <span className="text-jetBlue">Modern Manufacturer</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
            Strategies, trends, and success stories to help you scale your manufacturing business in the digital age.
          </p>
        </div>
      </header>

      {/* Filter & Grid Section */}
      <main className="min-h-[800px]">
        <CategoryFilter 
          activeCategory={activeCategory} 
          onSelectCategory={setActiveCategory} 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          
          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No articles found in this category.</p>
              <button 
                onClick={() => setActiveCategory('All')}
                className="mt-4 text-jetBlue font-medium hover:underline"
              >
                View all articles
              </button>
            </div>
          )}

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
            {filteredPosts.map((post, index) => (
              <BlogCard 
                key={post.id} 
                post={post} 
                index={index} 
                onClick={handlePostClick}
              />
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-20 bg-[#0052CC] rounded-3xl p-8 md:p-12 text-center md:text-left relative overflow-hidden">
             {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-jetOrange opacity-10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="font-display font-bold text-3xl text-white mb-4">
                  Join 10,000+ Factory Owners
                </h2>
                <p className="text-blue-100 text-lg">
                  Get the latest manufacturing insights delivered straight to your inbox. No spam, ever.
                </p>
              </div>
              <div className="w-full md:w-auto flex-shrink-0">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your work email" 
                    className="px-6 py-3.5 rounded-xl text-gray-900 bg-white border-0 focus:ring-2 focus:ring-jetOrange outline-none w-full sm:w-80"
                  />
                  <button className="bg-[#FF6B35] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-900/20 whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="text-blue-200 text-xs mt-3 text-center sm:text-left">
                  We care about your data in our privacy policy.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} FactoryJet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;