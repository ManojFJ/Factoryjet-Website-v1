import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQItem } from '../types';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Split FAQs into two columns for better layout
  const midPoint = Math.ceil(FAQS.length / 2);
  const leftColumn = FAQS.slice(0, midPoint);
  const rightColumn = FAQS.slice(midPoint);

  const renderFAQItem = (faq: FAQItem, index: number) => {
    const isOpen = openIndex === index;

    return (
      <div key={index} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
        <button
          onClick={() => setOpenIndex(isOpen ? null : index)}
          className="w-full flex items-start justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors gap-4"
        >
          <span className={`font-semibold text-lg leading-snug ${isOpen ? 'text-jetBlue' : 'text-slate-900'}`}>
            {faq.question}
          </span>
          <div className={`mt-1 bg-slate-100 rounded-full p-1 transition-colors duration-300 ${isOpen ? 'bg-jetBlue text-white' : 'text-slate-400'}`}>
             <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                {faq.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-jetBlue font-semibold uppercase tracking-wider text-sm mb-3">Common Questions</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Everything You Need To Know</h3>
          <p className="text-slate-600">
            Got questions about pricing, timelines, or how we work? We've got answers. If you don't see your question here, just reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumn.map((faq, i) => renderFAQItem(faq, i))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumn.map((faq, i) => renderFAQItem(faq, i + midPoint))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
