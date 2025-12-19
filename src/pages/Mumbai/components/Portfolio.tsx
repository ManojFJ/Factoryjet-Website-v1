
import React from 'react';
import { Palette, Briefcase, Sparkles, Truck, ShoppingBag, Globe, Zap, Building2, ExternalLink, ArrowRight } from 'lucide-react';

interface PortfolioProps {
  onCtaClick?: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onCtaClick }) => {
  const cases = [
    {
      name: "Impulse Branding Solutions",
      category: "Corporate + Full SEO",
      industry: "Branding Agency",
      metric: "Google P1 Rankings",
      desc: "Built a conversion-focused site with AI Search Optimization (GEO/AEO/AIO).",
      icon: <Palette />,
      color: "bg-orange-50 text-orange-600"
    },
    {
      name: "Formative Concepts",
      category: "Professional Services",
      industry: "Consulting",
      metric: "+300% Organic Traffic",
      desc: "Established domain authority across Google, Perplexity, and Bing AI.",
      icon: <Briefcase />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      name: "Belle Maison",
      category: "B2B + DTC Store",
      industry: "Home & Lifestyle",
      metric: "Dual Revenue Streams",
      desc: "Integrated B2B wholesale portal + consumer store with synced inventory.",
      icon: <ShoppingBag />,
      color: "bg-rose-50 text-rose-600"
    },
    {
      name: "Grofresh Agrofresh Pvt. Ltd.",
      category: "ERP & Transformation",
      industry: "Agritech",
      metric: "100% Digitized",
      desc: "End-to-end ERPNext implementation for finance, HR, and inventory.",
      icon: <Building2 />,
      color: "bg-green-50 text-green-600"
    },
    {
      name: "Mawa UAE",
      category: "International DTC",
      industry: "Consumer Products",
      metric: "Dubai Market Entry",
      desc: "Launched international store with AED currency and Gulf shipping.",
      icon: <Globe />,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      name: "Commerceflo",
      category: "SaaS Tech Platform",
      industry: "E-Commerce Tech",
      metric: "AI Search Dominance",
      desc: "Authority positioning in e-commerce tech through full-stack SEO.",
      icon: <Zap />,
      color: "bg-cyan-50 text-cyan-600"
    },
    {
      name: "Flying Pixel",
      category: "Creative Portfolio",
      industry: "Digital Agency",
      metric: "Award-Worthy Design",
      desc: "Visually stunning portfolio optimized for high-end client leads.",
      icon: <Sparkles />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      name: "Rukman Transport",
      category: "Logistics Platform",
      industry: "Transportation",
      metric: "#1 Ranking Industry",
      desc: "B2B lead generation engine with full service fleet showcase.",
      icon: <Truck />,
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-jet-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-jet-blue font-bold text-sm uppercase tracking-widest mb-4 block">Our Client Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-jet-navy">Real Results from Real Businesses</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cases.map((c, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-jet-light group hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={onCtaClick}>
              <div className={`w-12 h-12 ${c.color} rounded-xl flex items-center justify-center mb-4`}>
                {c.icon}
              </div>
              <span className="text-[10px] font-bold text-jet-blue uppercase tracking-wider mb-2 block">{c.category}</span>
              <h3 className="text-lg font-bold text-jet-navy mb-2 group-hover:text-jet-blue transition-colors">{c.name}</h3>
              <p className="text-xs text-jet-slate mb-4 line-clamp-2">{c.desc}</p>
              <div className="pt-4 border-t border-jet-light flex items-center justify-between">
                <span className="text-[10px] font-bold text-jet-green uppercase">{c.metric}</span>
                <ExternalLink size={14} className="text-jet-light group-hover:text-jet-blue" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-2xl border border-jet-light shadow-sm">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/${i}/100/100`} className="w-10 h-10 rounded-full border-2 border-white" alt="Avatar" />
              ))}
            </div>
            <p className="text-sm font-medium text-jet-slate">8 Success Stories | 4 Industries | 2 Countries (India + UAE) | 100% Client Satisfaction</p>
            <button 
              onClick={onCtaClick}
              className="text-jet-blue font-bold text-sm flex items-center gap-1 hover:underline"
            >
              View Full Case Studies <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
