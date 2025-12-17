import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          Whether you're just starting your digital journey or ready to scale, we're here to help.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-jetBlue text-white font-bold rounded-lg shadow-xl shadow-jetBlue/30 hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-2">
            Schedule Free Consultation <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 bg-white text-slate-700 font-bold rounded-lg border border-slate-200 hover:border-jetBlue hover:text-jetBlue transition-colors">
            View Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;