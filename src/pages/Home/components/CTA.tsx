import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden bg-jet-blue">
        {/* Background Patterns */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-jet-blue opacity-90" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-jetOrange/20 rounded-full blur-3xl -ml-20 -mb-20" />

        <div className="relative z-10 py-16 px-8 md:px-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to build your <br/><span className="text-jetOrange">digital success story?</span>
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-lg">
              Join 500+ businesses who trust FactoryJet. Whether you need a stunning website or a powerful store, we deliver in days, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-jet-blue hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2">
                Schedule Free Call <ArrowRight size={20} />
              </button>
              <button className="bg-blue-800/50 hover:bg-blue-800 text-white border border-blue-400/30 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                <Phone size={20} /> +91-96999-77699
              </button>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="absolute inset-0 bg-jetOrange blur-[60px] opacity-40 rounded-full" />
             <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-white">
                    <p className="text-sm uppercase tracking-widest opacity-70 mb-2">Guaranteed</p>
                    <p className="text-4xl font-bold mb-1">7 Days</p>
                    <p className="text-sm">Delivery for Standard Sites</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
