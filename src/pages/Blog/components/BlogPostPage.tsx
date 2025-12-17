import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlogPost, FAQItem } from '../types';
import { ReadingProgress } from './ReadingProgress';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Rocket,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  List
} from 'lucide-react';

interface BlogPostPageProps {
  post: BlogPost;
  onBack: () => void;
}

const KeyTakeaways = ({ items }: { items: string[] }) => (
  <div className="bg-blue-50/50 border-l-4 border-jetBlue p-6 my-8 rounded-r-xl">
    <div className="flex items-center gap-2 mb-4">
      <Lightbulb className="w-5 h-5 text-jetBlue fill-current" />
      <h3 className="font-display font-bold text-lg text-gray-900">Key Takeaways</h3>
    </div>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-gray-700 text-base">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-jetBlue text-xs font-bold flex items-center justify-center mt-0.5">
            {idx + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const FAQAccordion = ({ faqs }: { faqs: FAQItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-16 bg-slate-50 rounded-2xl p-8 border border-gray-100" id="faqs">
      <h3 className="font-display font-bold text-2xl mb-6 text-gray-900">Frequently Asked Questions</h3>
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className={`font-semibold text-gray-900 ${isOpen ? 'text-jetBlue' : ''}`}>
                  {faq.q}
                </span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-jetBlue" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100/50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 relative">
      <ReadingProgress />

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-jetBlue transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Articles</span>
          </button>
          
          <div className="hidden sm:flex items-center gap-4">
             <span className="text-sm text-gray-500">Share:</span>
             <div className="flex gap-2">
               <button className="p-2 text-gray-400 hover:text-jetBlue hover:bg-blue-50 rounded-full transition-all">
                 <Twitter className="w-4 h-4" />
               </button>
               <button className="p-2 text-gray-400 hover:text-jetBlue hover:bg-blue-50 rounded-full transition-all">
                 <Linkedin className="w-4 h-4" />
               </button>
             </div>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="bg-white border-b border-gray-100 pt-16 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-blue-50 text-jetBlue">
              {post.category}
            </span>
            <span className="flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1.5" />
              {post.readTime}
            </span>
            <span className="flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-1.5" />
              {post.date}
            </span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.1] mb-8"
          >
            {post.title}
          </motion.h1>

          <div className="flex items-center justify-center gap-4">
            <div className="relative">
              <img 
                src={`https://ui-avatars.com/api/?name=${post.author}&background=0052CC&color=fff`} 
                alt={post.author} 
                className="w-12 h-12 rounded-full border-2 border-white shadow-[0_0_30px_-5px_rgba(0,82,204,0.3)]"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900 text-lg leading-tight">{post.author}</p>
              <p className="text-sm text-gray-500">Senior Tech Journalist</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Image */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-12 mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/5 aspect-[21/9] bg-gray-100"
        >
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* REDESIGNED LAYOUT: 8 cols content + 4 cols sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Main Content Area (Wider) */}
          <article className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
              
              {/* Introduction/Excerpt */}
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 font-serif italic border-l-4 border-jetOrange pl-6 py-2 bg-gray-50/50 rounded-r-lg">
                "{post.excerpt}"
              </p>

              {/* AEO: Key Takeaways Module */}
              {post.keyTakeaways && (
                <div id="takeaways">
                  <KeyTakeaways items={post.keyTakeaways} />
                </div>
              )}

              {/* Main Content Body */}
              <div id="content" className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-jetBlue prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-lg prose-p:leading-relaxed prose-li:text-gray-700">
                {post.content}
              </div>

              {/* AEO: FAQ Module */}
              {post.faqs && <FAQAccordion faqs={post.faqs} />}

            </div>
          </article>

          {/* Right Sidebar: Consolidated (CTA + ToC) */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              
              {/* 1. High Converting CTA */}
              <div className="backdrop-blur-md bg-white border border-blue-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/10 rounded-full -ml-12 -mb-12 blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-jetBlue to-blue-600 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-2">
                    Transform Your Factory's Web Presence
                  </h3>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    Don't just read about growth. Get a high-performance, lead-generating website in just 7 days.
                  </p>
                  
                  <button className="w-full bg-[#0052CC] hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 group/btn">
                    Book Free Consultation
                    <ArrowLeft className="w-4 h-4 rotate-180 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-3">No commitment required. Limited slots.</p>
                </div>
              </div>

              {/* 2. Table of Contents (Moved from Left) */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
                  <List className="w-4 h-4 text-gray-400" />
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    In This Article
                  </h3>
                </div>
                <nav>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <a href="#" className="flex items-center text-jetBlue font-medium group">
                        <span className="w-1.5 h-1.5 rounded-full bg-jetBlue mr-3 group-hover:scale-125 transition-transform"></span>
                        Introduction
                      </a>
                    </li>
                    {post.keyTakeaways && (
                      <li>
                        <a href="#takeaways" className="flex items-center text-gray-600 hover:text-jetBlue group transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-3 group-hover:bg-jetBlue transition-colors"></span>
                          Key Takeaways
                        </a>
                      </li>
                    )}
                    <li>
                      <a href="#content" className="flex items-center text-gray-600 hover:text-jetBlue group transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-3 group-hover:bg-jetBlue transition-colors"></span>
                        In-Depth Analysis
                      </a>
                    </li>
                    {post.faqs && (
                      <li>
                        <a href="#faqs" className="flex items-center text-gray-600 hover:text-jetBlue group transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-3 group-hover:bg-jetBlue transition-colors"></span>
                          Expert FAQs
                        </a>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>

            </div>
          </aside>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-6 mb-6">
                <div className="p-3 bg-gray-50 rounded-full hover:bg-blue-50 hover:text-jetBlue transition-colors cursor-pointer">
                  <Share2 className="w-5 h-5" />
                </div>
                <div className="h-8 w-px bg-gray-200"></div>
                <div className="p-3 bg-gray-50 rounded-full hover:bg-blue-50 hover:text-jetBlue transition-colors cursor-pointer">
                  <Twitter className="w-5 h-5" />
                </div>
                <div className="p-3 bg-gray-50 rounded-full hover:bg-blue-50 hover:text-jetBlue transition-colors cursor-pointer">
                  <Linkedin className="w-5 h-5" />
                </div>
            </div>
            <p className="text-gray-500 text-sm font-medium">&copy; 2025 FactoryJet. Designed for Growth.</p>
        </div>
      </footer>
    </div>
  );
};