import React from 'react';
import { Clock, TrendingUp, Search, DollarSign, ShieldCheck, HeartHandshake } from 'lucide-react';

const WhyUs: React.FC = () => {
  // Helper component for icon
  function Target(props: React.SVGProps<SVGSVGElement>) {
      return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
        >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
        </svg>
    )
  }

  const features = [
    {
      icon: TrendingUp,
      title: "SMB-Focused Expertise",
      desc: "Unlike agencies chasing enterprise clients, we specialize in growing businesses. We understand your budget and ROI needs."
    },
    {
      icon: Target,
      title: "Specialized Focus",
      desc: "We don't do everything. We focus exclusively on high-performance websites and e-commerce stores."
    },
    {
      icon: Clock,
      title: "7-Day Delivery",
      desc: "Speed matters. We deliver standard websites in 7 days and stores in 4-8 weeks without compromising quality."
    },
    {
      icon: Search,
      title: "AI & SEO Optimized",
      desc: "Optimized for Google (SEO) and AI engines like ChatGPT & Perplexity (AIO/GEO) for maximum visibility."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      desc: "No hidden fees. Clear packages starting at ₹29,999. You know exactly what you're paying for."
    },
    {
      icon: HeartHandshake,
      title: "Ongoing Partnership",
      desc: "We don't disappear. With AMCs starting at ₹2,999/mo, we keep your digital presence secure and updated."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-jet-navy relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-jet-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-jetOrange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-jet-blue font-bold tracking-wide uppercase text-sm mb-3">Why Choose FactoryJet</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Better value, faster delivery, real results.
          </h3>
          <p className="text-gray-400 text-lg">
            We combine the quality of a premium agency with the speed and affordability of a freelancer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl hover:bg-gray-800 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-jet-blue/20 rounded-lg flex items-center justify-center text-jet-blue mb-6 group-hover:bg-jet-blue group-hover:text-white transition-colors">
                <feature.icon size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
