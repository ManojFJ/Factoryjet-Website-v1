import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "FactoryJet implemented a robust ERP that digitized our entire operation—from sourcing to finance. We improved efficiency by 70% and replaced Tally completely. Important reports are now just a click away.",
      author: "Bhoop Singh",
      role: "Operations Director",
      company: "GroFresh Agro Food Pvt. Ltd."
    },
    {
      quote: "Designed our website on WIX with powerful lead gen forms. The SEO and AI optimization is incredible—we've generated over 500 leads purely from organic traffic so far.",
      author: "Tejas Bramhbhatt",
      role: "Founder",
      company: "Fliying Pixel"
    },
    {
      quote: "They transformed our digital presence. Our Google rankings and GMB profile improved drastically, leading to a 300% increase in organic traffic.",
      author: "Rajkumar",
      role: "Founder",
      company: "Rukman Transport Pvt. Ltd."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-jet-navy mb-4">
            Trusted by 500+ Businesses
          </h2>
          <p className="text-jet-slate">Don't just take our word for it.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
              <div className="mb-6">
                <Quote className="text-jet-blue/20 fill-current" size={40} />
              </div>
              <p className="text-jet-slate italic mb-8 flex-grow">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center font-bold text-gray-500 shrink-0">
                   {t.author.charAt(0)}
                 </div>
                 <div>
                   <p className="font-bold text-jet-navy text-sm">{t.author}</p>
                   <p className="text-xs text-gray-500">{t.role}, {t.company}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Strip */}
        <div className="mt-20 bg-jet-blue rounded-2xl p-8 md:p-12 text-white shadow-2xl shadow-blue-900/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-400/30">
            <div>
              <div className="text-3xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100 text-sm">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-blue-100 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-100 text-sm">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100 text-sm">Industries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
