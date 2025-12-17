import React from 'react';
import { Target, Users, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-jet-blue/5 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Visuals */}
          <div className="relative order-2 lg:order-1">
            {/* Dot Pattern Decoration */}
            <div className="absolute -top-4 -left-4 w-24 h-24 z-0 opacity-20">
              <svg width="100" height="100" fill="none" viewBox="0 0 100 100">
                <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" className="text-jet-blue" fill="currentColor" />
                </pattern>
                <rect width="100" height="100" fill="url(#dot-pattern)" />
              </svg>
            </div>

            <div className="relative z-10">
               {/* Main Image Container */}
               <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-gray-100 bg-white p-1">
                  <div className="rounded-xl overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                      alt="Indian professional team collaborating"
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient Overlay for better text contrast if needed later */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                  </div>
               </div>

               {/* Floating Card: Mission */}
               <div className="absolute -bottom-8 -right-8 md:-right-12 bg-white p-5 rounded-xl shadow-xl border border-gray-100 max-w-[260px] animate-fade-in-up z-20">
                 <div className="flex items-start gap-4">
                   <div className="bg-jetOrange/10 p-3 rounded-lg text-jetOrange shrink-0">
                     <Target size={24} />
                   </div>
                   <div>
                     <p className="font-bold text-jet-navy text-sm mb-1">Our Mission</p>
                     <p className="text-xs text-jet-slate leading-relaxed">
                       World-class websites for every business, without breaking the bank.
                     </p>
                   </div>
                 </div>
               </div>

               {/* Floating Card: SMB Focus */}
               <div className="absolute -top-6 -left-6 md:-left-12 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-20 hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-jet-blue text-white flex items-center justify-center font-bold">
                      <Users size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Focus</p>
                      <p className="text-sm font-bold text-jet-navy">SMB Specialists</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-jet-blue/5 border border-jet-blue/10 text-jet-blue font-semibold text-xs uppercase tracking-wider mb-6">
              Who We Are
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-jet-navy mb-6 leading-tight">
              We help businesses <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-jet-blue">grow online</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-100 -z-0"></span>
              </span> without the enterprise price tag.
            </h2>

            <div className="space-y-6 text-lg text-jet-slate mb-8">
              <p className="leading-relaxed">
                FactoryJet is a specialized web design and e-commerce development agency serving small and medium-sized businesses across India and emerging markets.
              </p>
              <p className="leading-relaxed">
                We're not a large agency with enterprise price tags—we're SMB specialists who understand your unique challenges. <strong className="text-jet-navy font-semibold">Founded on a simple principle:</strong> Every business deserves a world-class website that drives results.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Custom Design on WordPress, Webflow, Framer",
                "Mobile-First & Conversion Focused",
                "7-Day Delivery Guarantee",
                "Full E-Commerce Support (Shopify/Woo)"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-jetGreen shrink-0" size={20} />
                  <span className="text-sm font-medium text-jet-navy">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-100 flex gap-12">
              <div>
                <span className="block text-4xl font-display font-bold text-jet-blue mb-1">500+</span>
                <span className="text-sm font-medium text-gray-500">SMBs Empowered</span>
              </div>
              <div>
                 <span className="block text-4xl font-display font-bold text-jet-navy mb-1">₹100Cr+</span>
                 <span className="text-sm font-medium text-gray-500">Value Generated</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
