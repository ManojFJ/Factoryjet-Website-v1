import React from 'react';
import { REASONS } from '../constants';
import { Check } from 'lucide-react';

const WhyChoose = () => {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-jetBlue font-semibold uppercase tracking-wider text-sm mb-3">Our Advantage</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Why Clients Choose FactoryJet</h3>
        </div>

        {/* Changed grid to max-width-6xl and fixed cols to 2 on medium+ screens for a 2x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {REASONS.map((reason, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h4 className="text-xl font-bold text-slate-900 mb-2">{reason.title}</h4>
              <p className="text-slate-500 text-sm mb-6 italic">{reason.subtitle}</p>
              
              <ul className="space-y-3 mb-8">
                {reason.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                    <Check className="w-4 h-4 text-jetGreen mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {reason.comparison && (
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span className="text-xs font-bold text-jetBlue uppercase tracking-wide block mb-2">
                    {reason.comparison.label}
                  </span>
                  <ul className="space-y-2">
                     {reason.comparison.items.map((comp, idx) => (
                        <li key={idx} className="text-xs text-slate-700 leading-relaxed font-medium">
                          {idx === 0 ? <span className="text-red-500/80">✕ </span> : <span className="text-jetGreen">✓ </span>}
                          {comp}
                        </li>
                     ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;