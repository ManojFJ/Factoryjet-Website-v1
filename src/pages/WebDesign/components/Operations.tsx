
import React from 'react';
import { HOSTING_AMC } from '../data';
import { Check, Server, ShieldCheck, Clock, Zap, Globe, Cpu, Activity, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useContactModal } from '../../../context/ContactModalContext';

export const Operations = () => {
  const { openModal } = useContactModal();

  return (
    <>
      <section className="py-32 bg-[#020617] text-white relative overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        
        {/* Grid Lines Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          
          {/* PART 1: HOSTING & INFRASTRUCTURE (COMMAND CENTER UI) */}
          <div className="mb-40">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                SYSTEM_STATUS: OPERATIONAL
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Enterprise Infrastructure</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Built on a global edge network. Fast, secure, and redundant by design.
              </p>
            </div>

            {/* Bento Grid Control Center */}
            <div className="grid lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
              
              {/* Main Card: Global Network */}
              <div className="lg:col-span-8 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-2xl font-bold flex items-center gap-3">
                        <Globe className="w-6 h-6 text-blue-400" /> Global Edge Network
                      </h3>
                      <p className="text-slate-400 text-sm mt-2">Content delivery from 285+ cities worldwide.</p>
                    </div>
                    <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded text-green-400 text-xs font-mono">
                      LATENCY: 24ms
                    </div>
                  </div>
                  
                  {/* Abstract Map Visualization */}
                  <div className="relative h-64 w-full bg-slate-950/50 rounded-xl border border-white/5 overflow-hidden flex items-center justify-center">
                     <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
                     
                     {/* Pulsing Nodes */}
                     {[
                       { t: '20%', l: '20%' }, { t: '40%', l: '50%' }, { t: '30%', l: '80%' }, 
                       { t: '70%', l: '30%' }, { t: '60%', l: '70%' }
                     ].map((pos, i) => (
                        <div key={i} className="absolute w-3 h-3" style={{ top: pos.t, left: pos.l }}>
                           <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-40 animate-ping"></span>
                           <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 mx-auto mt-0.5"></span>
                        </div>
                     ))}
                     <div className="text-slate-600 font-mono text-xs z-10">LIVE TRAFFIC MAP VISUALIZATION</div>
                  </div>
                </div>
              </div>

              {/* Stat Card 1: Uptime */}
              <div className="lg:col-span-4 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative group hover:border-blue-500/30 transition-colors">
                 <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Activity className="w-24 h-24 text-blue-500" />
                 </div>
                 <h3 className="text-slate-400 font-mono text-xs uppercase tracking-widest mb-2">Uptime Guarantee</h3>
                 <div className="text-5xl font-bold text-white mb-4 tracking-tight">99.9%</div>
                 <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                   <div className="h-full bg-green-500 w-[99.9%] shadow-[0_0_10px_#22c55e]"></div>
                 </div>
                 <p className="text-xs text-slate-500 mt-4">SLA Backed Reliability</p>
              </div>

              {/* Stat Card 2: Security */}
              <div className="lg:col-span-4 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-green-500/30 transition-colors group">
                 <div className="mb-4">
                   <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4 text-green-400 border border-green-500/20">
                     <ShieldCheck className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold">Enterprise Security</h3>
                 </div>
                 <ul className="space-y-2 text-sm text-slate-400">
                   <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> DDoS Protection</li>
                   <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Auto-SSL Management</li>
                   <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> WAF Firewall</li>
                 </ul>
              </div>

              {/* Stat Card 3: Performance */}
              <div className="lg:col-span-4 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-orange-500/30 transition-colors group">
                 <div className="mb-4">
                   <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 text-orange-400 border border-orange-500/20">
                     <Cpu className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold">High-Performance</h3>
                 </div>
                 <div className="flex justify-between items-end border-b border-white/10 pb-2 mb-2">
                   <span className="text-slate-400 text-sm">TTFB</span>
                   <span className="text-white font-mono font-bold">&lt; 50ms</span>
                 </div>
                 <div className="flex justify-between items-end">
                   <span className="text-slate-400 text-sm">Cache Hit</span>
                   <span className="text-white font-mono font-bold">95%+</span>
                 </div>
              </div>

              {/* Tech Stack Ticker */}
              <div className="lg:col-span-4 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-neon">
                 <h3 className="font-bold text-white mb-2">Powered By</h3>
                 <div className="flex flex-wrap gap-2 justify-center">
                   {["AWS", "Google Cloud", "Vercel", "Cloudflare"].map((tech, i) => (
                     <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold backdrop-blur-md">{tech}</span>
                   ))}
                 </div>
              </div>

            </div>
          </div>


          {/* PART 2: AMC PRICING (CRYSTAL GLASS UI) */}
          <div className="relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
                Peace of Mind Plans
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Proactive maintenance to keep your digital asset appreciating in value.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
              {HOSTING_AMC.amc.map((plan, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className={`relative flex flex-col h-full rounded-[2rem] transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-slate-900/80 border-2 border-blue-500 shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)] z-20 scale-105' 
                      : 'bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 z-10'
                  }`}
                >
                  {/* Glass Blur Backdrop */}
                  <div className="absolute inset-0 backdrop-blur-2xl rounded-[2rem] -z-10"></div>
                  
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                      Most Popular
                    </div>
                  )}

                  <div className="p-8 md:p-10 flex-grow">
                    <h3 className={`text-lg font-bold uppercase tracking-wider mb-4 ${plan.popular ? 'text-blue-400' : 'text-slate-400'}`}>
                      {plan.name}
                    </h3>
                    
                    <div className="flex items-baseline gap-1 mb-8">
                      <span className="text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
                        {plan.price.split(' ')[0]}
                      </span>
                      {plan.price.includes('-') && <span className="text-xl text-slate-400">+</span>}
                    </div>
                    
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

                    <ul className="space-y-4">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-300">
                          <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                            plan.popular ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-slate-400'
                          }`}>
                            <Check className="w-3 h-3" />
                          </div>
                          <span className={fIdx < 3 ? 'text-white font-medium' : ''}>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-8 pt-0 mt-auto">
                    <button
                      onClick={openModal}
                      className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/25'
                        : 'bg-white text-slate-900 hover:bg-slate-200'
                    }`}>
                      Get Started
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Trust Badges below pricing */}
            <div className="mt-16 flex flex-wrap justify-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Visual placeholder for logos */}
               <div className="flex items-center gap-2 text-slate-500 font-bold"><Lock className="w-4 h-4" /> SSL Secured</div>
               <div className="flex items-center gap-2 text-slate-500 font-bold"><Server className="w-4 h-4" /> Daily Backups</div>
               <div className="flex items-center gap-2 text-slate-500 font-bold"><Activity className="w-4 h-4" /> 99.9% Uptime</div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
