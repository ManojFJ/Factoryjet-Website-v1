import React from 'react';
import { PlusCircle } from 'lucide-react';

const faqs = [
  "How long does website development take?",
  "What platforms do you recommend?",
  "Do you provide Arabic language support?",
  "What's included in maintenance?",
  "Can you help with content creation?",
  "Do you offer SEO services?",
  "What payment methods do you accept?",
  "Can I update the website myself?",
  "Do you provide hosting?",
  "What's your refund policy?",
  "How do you handle support?",
  "Can you redesign existing websites?"
];

const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(24px,3vw,36px)] font-bold text-navy text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((q, i) => (
            <div key={i} className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:border-primary transition-colors cursor-pointer flex justify-between items-center group">
              <span className="font-medium text-navy text-sm">{q}</span>
              <PlusCircle className="text-gray-400 group-hover:text-primary transition-colors" size={20} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;