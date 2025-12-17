
import React from 'react';
import { METRICS } from '../data';
import { TrendingUp, BarChart2, PieChart, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export const Analysis = () => {
  return (
    <>
      {/* Metrics Section - Data-Ink Minimalism */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Metrics That Matter</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                We don't just track vanity metrics. We focus on data that drives revenue, engagement, and long-term growth.
              </p>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                   <span className="text-sm font-bold text-slate-900">Live Analytics</span>
                </div>
                <p className="text-xs text-slate-500">Real-time dashboards included.</p>
              </div>
            </div>
            
            <div className="lg:col-span-3 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(METRICS).map(([category, items], idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-1 rounded-2xl hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-full p-6 border-l-2 border-slate-100 hover:border-jet-blue transition-colors">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">{category}</h3>
                    <ul className="space-y-4">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700 text-sm font-medium group cursor-default">
                          <div className="w-1 h-1 bg-slate-300 group-hover:bg-jet-blue group-hover:scale-150 transition-all rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section - Holographic/Glass Dashboard */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-slate-900"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8 border border-emerald-500/20">
                <TrendingUp className="w-4 h-4" /> High Impact ROI
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                Your Website Pays for Itself <span className="text-emerald-400">4.6x Over</span>
              </h2>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-lg">
                Stop viewing your website as an expense. It's a high-yield asset. With our conversion-first approach, most clients see full ROI within 3 months.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                 <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <span className="block text-slate-400 text-sm mb-1">Year 1 Investment</span>
                    <span className="text-2xl font-bold text-white">₹1.36L - ₹4.26L</span>
                 </div>
                 <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
                    <span className="block text-emerald-200 text-sm mb-1">Year 1 Revenue</span>
                    <span className="text-2xl font-bold text-emerald-400">₹10L - ₹20L+</span>
                 </div>
              </div>
            </motion.div>
            
            <motion.div
               initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
               whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
               transition={{ duration: 0.8 }}
               className="relative"
               style={{ perspective: 1000 }}
            >
              {/* Floating Dashboard Card */}
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl transform transition-transform hover:rotate-x-2">
                 <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                   <Activity className="w-32 h-32 text-emerald-500" />
                 </div>
                 
                 <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                   ROI Calculation Model
                 </h3>
                 
                 <div className="space-y-4 font-mono text-sm">
                   <div className="flex justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                     <span className="text-slate-400">Leads Generated</span>
                     <span className="font-bold text-emerald-400">75</span>
                   </div>
                   <div className="flex justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                     <span className="text-slate-400">Conversion Rate</span>
                     <span className="font-bold text-emerald-400">15%</span>
                   </div>
                   <div className="flex justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                     <span className="text-slate-400">Avg Deal Value</span>
                     <span className="font-bold text-white">₹1,50,000</span>
                   </div>
                   
                   <div className="my-6 border-t border-dashed border-white/10"></div>
                   
                   <div className="flex justify-between items-end">
                     <div className="text-slate-400 text-xs uppercase tracking-widest">Projected<br/>Revenue</div>
                     <div className="text-right">
                       <span className="block text-3xl font-bold text-white">₹16,87,500</span>
                       <span className="text-emerald-400 font-bold text-sm bg-emerald-500/10 px-2 py-1 rounded inline-block mt-2">
                         +462% Growth
                       </span>
                     </div>
                   </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
