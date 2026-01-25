import React from 'react';
import { CheckCircle2, ArrowRight, BadgeCheck, TrendingUp, Clock, DollarSign } from 'lucide-react';

interface SuccessStoriesProps {
  onOpenModal: () => void;
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({ onOpenModal }) => {
  const stories = [
    {
      industry: "Real Estate",
      badgeColor: "bg-[#0052CC]",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      client: "Dubai Real Estate Firm",
      challenge: "Outdated website, 2% conversion rate, no mobile optimization",
      solution: "Custom Next.js site with virtual tours, bilingual support, CRM integration",
      results: ["340% lead increase", "8.5% conversion rate", "12,000+ monthly visitors"],
      timeline: "10 Weeks",
      investment: "AED 45,000"
    },
    {
      industry: "E-Commerce",
      badgeColor: "bg-[#FF6B35]",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      client: "UAE E-Commerce Retailer",
      challenge: "Manual inventory, poor checkout experience, limited payment options",
      solution: "Shopify store with 500+ products, Tabby/Tamara integration, mobile optimization",
      results: ["AED 500k monthly sales", "6.2% conversion rate", "40% mobile revenue"],
      timeline: "8 Weeks",
      investment: "AED 40,000"
    },
    {
      industry: "Hospitality",
      badgeColor: "bg-[#10B981]",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      client: "Dubai Hospitality Group",
      challenge: "Slow booking system, no direct reservations, high OTA commissions",
      solution: "WordPress booking engine, payment integration, review system",
      results: ["55% direct bookings", "AED 150k monthly savings", "4.8★ rating"],
      timeline: "6 Weeks",
      investment: "AED 25,000"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ 
          backgroundImage: 'repeating-linear-gradient(45deg, #0052CC 0, #0052CC 1px, transparent 0, transparent 50%)', 
          backgroundSize: '30px 30px' 
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-navy mb-4">Dubai Success Stories</h2>
          <div className="h-1 w-24 bg-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            See how we've helped leading Dubai businesses transform their digital presence and achieve measurable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col h-full animate-fade-up border border-gray-100"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              {/* Hero Image Area */}
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.client} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80"></div>
                
                {/* Industry Badge */}
                <div className={`absolute top-4 left-4 ${story.badgeColor} text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 tracking-wider uppercase`}>
                   <BadgeCheck size={12} /> {story.industry}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-grow flex flex-col relative">
                {/* Client Name */}
                <div className="flex items-center justify-between mb-6">
                   <h3 className="text-[20px] font-bold text-navy leading-tight">{story.client}</h3>
                   <div className="bg-blue-50 p-1.5 rounded-full text-primary">
                      <BadgeCheck size={16} />
                   </div>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-5 mb-6">
                   <div>
                      <div className="inline-block bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded mb-2 uppercase tracking-wide">Challenge</div>
                      <p className="text-[14px] text-gray-600 leading-relaxed">{story.challenge}</p>
                   </div>
                   <div>
                      <div className="inline-block bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded mb-2 uppercase tracking-wide">Solution</div>
                      <p className="text-[14px] text-gray-600 leading-relaxed">{story.solution}</p>
                   </div>
                </div>

                {/* Results Section */}
                <div className="mt-auto relative group/results">
                   <div className="bg-[#10B981]/5 rounded-xl p-5 border border-[#10B981]/10 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                          <TrendingUp size={16} className="text-[#10B981]" />
                          <span className="font-bold text-navy text-sm">Key Results</span>
                      </div>
                      <ul className="space-y-2">
                          {story.results.map((res, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                  <CheckCircle2 size={14} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                                  <span className="font-medium">{res.split(' ').map((word, w) => 
                                    /\d|%/.test(word) ? <strong key={w} className="font-bold text-navy">{word} </strong> : word + ' '
                                  )}</span>
                              </li>
                          ))}
                      </ul>
                   </div>
                   
                   {/* Hover Reveal Link */}
                   <div 
                     onClick={onOpenModal}
                     className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-primary/10 cursor-pointer shadow-sm"
                   >
                      <span className="text-primary font-bold flex items-center gap-2 text-sm hover:underline">
                          View Full Case Study <ArrowRight size={16} />
                      </span>
                   </div>
                </div>

                {/* Footer Pills */}
                <div className="pt-5 mt-2 flex items-center justify-between border-t border-gray-100">
                   <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wide bg-gray-50 px-3 py-1.5 rounded-full">
                       <Clock size={12} /> {story.timeline}
                   </div>
                   <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wide bg-gray-50 px-3 py-1.5 rounded-full">
                       <DollarSign size={12} /> {story.investment}
                   </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;