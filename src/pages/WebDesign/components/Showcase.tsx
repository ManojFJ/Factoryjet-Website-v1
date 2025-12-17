
import React from 'react';
import { PORTFOLIO } from '../data';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export const Showcase = () => {
  return (
    <section className="py-32 bg-slate-950 text-white relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Selected Work</h2>
            <p className="text-slate-400 text-lg max-w-xl">Digital experiences that drive measurable growth.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-slate-900 transition-all duration-300 mt-4 md:mt-0 font-medium group">
            View Full Portfolio <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {PORTFOLIO.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group cursor-pointer ${idx === 0 ? 'md:col-span-2' : ''}`}
            >
              <div className={`relative overflow-hidden rounded-[2rem] bg-slate-800 ${idx === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}>
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay Card */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-20">
                   <div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold mb-4">
                        <span className="text-jet-green">{item.result}</span>
                      </div>
                      <div className="p-6 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 max-w-xl">
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-slate-400 text-sm mb-4 line-clamp-2">{item.challenge} - {item.solution}</p>
                        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase">
                          <span>{item.tech}</span>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-bold">
            View Full Portfolio <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
