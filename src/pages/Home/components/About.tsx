import React from 'react';
import { Target, Users, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-10 md:-mr-20 -mt-10 md:-mt-20 w-48 md:w-96 h-48 md:h-96 bg-gray-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-10 md:-ml-20 -mb-10 md:-mb-20 w-36 md:w-72 h-36 md:h-72 bg-jet-blue/5 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left Column: Visuals */}
          <div className="relative order-2 lg:order-1">
            {/* Dot Pattern Decoration */}
            <div className="absolute -top-4 -left-4 w-16 md:w-24 h-16 md:h-24 z-0 opacity-20 hidden sm:block">
              <svg width="100" height="100" fill="none" viewBox="0 0 100 100">
                <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" className="text-jet-blue" fill="currentColor" />
                </pattern>
                <rect width="100" height="100" fill="url(#dot-pattern)" />
              </svg>
            </div>

            <div className="relative z-10">
               {/* Main Image Container */}
               <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl shadow-blue-900/10 border border-gray-100 bg-white p-1">
                  <div className="rounded-lg md:rounded-xl overflow-hidden relative aspect-[3/2]">
                    <img
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=648&q=75"
                      srcSet="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=75 400w, https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=648&q=75 648w, https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=75 800w"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      alt="Indian professional team collaborating"
                      width={648}
                      height={432}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient Overlay for better text contrast if needed later */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                  </div>
               </div>

               {/* Floating Card: Mission */}
               <div className="absolute -bottom-4 -right-2 md:-bottom-8 md:-right-12 bg-white p-3 md:p-5 rounded-lg md:rounded-xl shadow-lg md:shadow-xl border border-gray-100 max-w-[200px] md:max-w-[260px] animate-fade-in-up z-20">
                 <div className="flex items-start gap-2 md:gap-4">
                   <div className="bg-jetOrange/10 p-2 md:p-3 rounded-lg text-jetOrange shrink-0">
                     <Target size={18} className="md:w-6 md:h-6" />
                   </div>
                   <div>
                     <p className="font-bold text-jet-navy text-xs md:text-sm mb-0.5 md:mb-1">Our Mission</p>
                     <p className="text-[10px] md:text-xs text-jet-slate leading-relaxed">
                       World-class websites for every business, without breaking the bank.
                     </p>
                   </div>
                 </div>
               </div>

               {/* Floating Card: SMB Focus */}
               <div className="absolute -top-3 -left-2 md:-top-6 md:-left-12 bg-white p-2 md:p-4 rounded-lg md:rounded-xl shadow-lg md:shadow-xl border border-gray-100 z-20 hidden sm:block">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-jet-blue text-white flex items-center justify-center font-bold">
                      <Users size={14} className="md:w-[18px] md:h-[18px]" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs text-gray-500 font-semibold uppercase tracking-wider">Focus</p>
                      <p className="text-xs md:text-sm font-bold text-jet-navy">SMB Specialists</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-2.5 md:px-3 py-1 rounded-full bg-jet-blue/5 border border-jet-blue/10 text-jet-blue font-semibold text-[10px] md:text-xs uppercase tracking-wider mb-4 md:mb-6">
              Who We Are
            </div>

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-jet-navy mb-4 md:mb-6 leading-tight">
              We help businesses <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-jet-blue">grow online</span>
                <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-2 md:h-3 bg-blue-100 -z-0"></span>
              </span> without the enterprise price tag.
            </h2>

            <div className="space-y-4 md:space-y-6 text-sm md:text-lg text-jet-slate mb-6 md:mb-8">
              <p className="leading-relaxed">
                FactoryJet is a specialized web design and e-commerce development agency serving small and medium-sized businesses across India and emerging markets.
              </p>
              <p className="leading-relaxed">
                We're not a large agency with enterprise price tags-we're SMB specialists who understand your unique challenges. <strong className="text-jet-navy font-semibold">Founded on a simple principle:</strong> Every business deserves a world-class website that drives results.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              {[
                "Custom Design on WordPress, Webflow, Framer",
                "Mobile-First & Conversion Focused",
                "7-Day Delivery Guarantee",
                "Full E-Commerce Support (Shopify/Woo)"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-3">
                  <CheckCircle2 className="text-jetGreen shrink-0 w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm font-medium text-jet-navy">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 md:pt-6 border-t border-gray-100 flex gap-8 md:gap-12">
              <div>
                <span className="block text-2xl md:text-4xl font-display font-bold text-jet-blue mb-0.5 md:mb-1">500+</span>
                <span className="text-xs md:text-sm font-medium text-gray-500">SMBs Empowered</span>
              </div>
              <div>
                 <span className="block text-2xl md:text-4xl font-display font-bold text-jet-navy mb-0.5 md:mb-1">₹100Cr+</span>
                 <span className="text-xs md:text-sm font-medium text-gray-500">Value Generated</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
