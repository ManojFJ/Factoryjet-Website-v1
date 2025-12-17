
import React from 'react';
import { FEATURES_LIST } from '../data';
import { motion } from 'framer-motion';

export const Features = () => {
  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-jet-blue text-xs font-bold tracking-widest uppercase mb-4 border border-blue-100">
            Enterprise Grade
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Essential Website Features</h2>
          <p className="text-xl text-slate-600 font-light">Every FactoryJet website comes equipped with a comprehensive suite of tools for growth.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {FEATURES_LIST.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-jet-blue/20 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-jet-blue group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300 text-slate-700">
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-jet-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
