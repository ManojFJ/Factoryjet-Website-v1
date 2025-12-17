import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-24 bg-jetBlue text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-center text-3xl md:text-4xl font-display font-bold mb-16">Trusted by 500+ Businesses</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
              <Quote className="w-8 h-8 text-jetOrange mb-4 opacity-80" />
              <p className="text-lg leading-relaxed mb-6 font-light opacity-90">"{t.text}"</p>
              <div>
                <p className="font-bold">{t.author}</p>
                <p className="text-sm opacity-70">{t.role}, {t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;