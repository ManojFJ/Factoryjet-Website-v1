
import React from 'react';
import { motion } from 'framer-motion';
import { SECTION_1_CONTENT, PRINCIPLES, PLATFORMS } from '../data';
import { CheckCircle2, Layout, Code2, Paintbrush, Database, Sparkles, ArrowUpRight, Users, MousePointer2, Smartphone, Palette, Zap, Search, ArrowRight } from 'lucide-react';

const PlatformIcon = ({ name }: { name: string }) => {
  if (name.includes('WordPress')) return <Database className="w-8 h-8 text-white" />;
  if (name.includes('Webflow')) return <Layout className="w-8 h-8 text-white" />;
  if (name.includes('Framer')) return <Paintbrush className="w-8 h-8 text-white" />;
  return <Code2 className="w-8 h-8 text-white" />;
};

const PrincipleIcon = ({ index }: { index: number }) => {
  const icons = [Users, MousePointer2, Smartphone, Palette, Zap, Search];
  const Icon = icons[index] || Sparkles;
  return <Icon className="w-6 h-6" />;
};

export const Services = () => {
  return (
    <>
      {/* Section 1: Intro with Floating Crystal Cards */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-jet-blue font-bold tracking-widest uppercase text-sm mb-4 block">Why It Matters</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                {SECTION_1_CONTENT.title}
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                {SECTION_1_CONTENT.description}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {SECTION_1_CONTENT.points.map((point, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-1 p-1 rounded-full bg-green-100 group-hover:bg-jet-green transition-colors duration-300">
                      <CheckCircle2 className="w-4 h-4 text-jet-green group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block group-hover:text-jet-blue transition-colors">{point.title}</strong>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Abstract decorative background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-jet-blue/20 to-jet-orange/20 rounded-[2rem] blur-2xl transform rotate-6 scale-95"></div>
              
              <div className="relative bg-white/60 backdrop-blur-xl border border-white/50 p-10 rounded-[2rem] shadow-glass">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-jet-blue rounded-xl text-white shadow-lg shadow-blue-500/30">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{SECTION_1_CONTENT.difference.title}</h3>
                </div>
                
                <p className="text-slate-600 mb-8">{SECTION_1_CONTENT.difference.desc}</p>
                
                <div className="space-y-4">
                  {SECTION_1_CONTENT.difference.items.map((item, idx) => {
                    const [bold, rest] = item.split(':');
                    return (
                      <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white/50 hover:bg-white border border-transparent hover:border-slate-100 transition-all duration-300 hover:shadow-sm group">
                        <div className="w-1.5 h-1.5 mt-2 rounded-full bg-slate-300 group-hover:bg-jet-orange transition-colors"></div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          <span className="font-bold text-slate-900 block mb-1 group-hover:text-jet-blue transition-colors">{bold}</span>
                          {rest}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Principles - HubSpot x Apple Bento Grid */}
      <section className="py-32 bg-[#F5F7FA] relative">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-1 w-8 bg-jet-orange rounded-full"></div>
                <span className="text-jet-orange font-bold tracking-widest uppercase text-sm">Our DNA</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-tight tracking-tight">
                Design <br/>
                <span className="text-slate-400">Philosophy</span>
              </h2>
            </div>
            <div className="mt-8 md:mt-0">
               <button className="flex items-center gap-2 text-slate-900 font-bold hover:text-jet-orange transition-colors">
                 See how we work <ArrowRight className="w-4 h-4" />
               </button>
            </div>
          </div>
          
          {/* Apple x HubSpot Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[380px]">
            
            {/* 1. User-Centered: The "Canvas" Card (Large, White, Clean) */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="md:col-span-2 rounded-[2.5rem] p-10 bg-white border border-slate-100 shadow-sm relative overflow-hidden group transition-all"
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-jet-blue group-hover:scale-110 transition-transform duration-500">
                     <Users className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">{PRINCIPLES[0].title}</h3>
                  <p className="text-slate-500 text-lg leading-relaxed max-w-md">{PRINCIPLES[0].desc}</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-jet-blue opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  Read Case Study <ArrowRight className="w-4 h-4" />
                </div>
              </div>
              
              {/* Abstract Visual: Concentric User Rings */}
              <div className="absolute right-[-50px] bottom-[-50px] w-64 h-64 border-[40px] border-blue-50 rounded-full opacity-60 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute right-[-20px] bottom-[-20px] w-40 h-40 border-[20px] border-blue-100 rounded-full opacity-60 group-hover:scale-110 transition-transform duration-700 delay-75"></div>
            </motion.div>

            {/* 2. Conversion: The "Action" Card (Vibrant HubSpot Orange) */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="md:col-span-1 rounded-[2.5rem] p-10 bg-[#FF6B35] text-white shadow-xl shadow-orange-500/20 flex flex-col justify-between group overflow-hidden relative"
            >
              {/* Background Noise */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 text-white group-hover:rotate-12 transition-transform duration-500">
                   <MousePointer2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{PRINCIPLES[1].title}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">{PRINCIPLES[1].desc}</p>
              </div>

              {/* Visual: Cursor clicking a button */}
              <div className="absolute bottom-6 right-6">
                <div className="px-6 py-3 bg-white text-jet-orange font-bold rounded-xl shadow-lg transform group-hover:scale-105 transition-transform">
                  CTA Button
                </div>
                <MousePointer2 className="w-8 h-8 text-slate-900 absolute -bottom-4 -right-4 fill-white stroke-slate-900 stroke-2 transform translate-x-0 translate-y-0 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
              </div>
            </motion.div>

            {/* 3. Mobile First: The "Device" Card (Vertical, Light Grey) */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="md:col-span-1 rounded-[2.5rem] p-10 bg-slate-100 border border-slate-200 shadow-inner flex flex-col relative group overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-slate-900 shadow-sm">
                   <Smartphone className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">{PRINCIPLES[2].title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{PRINCIPLES[2].desc}</p>
              </div>
              
              {/* Visual: Phone Mockup slide up */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-40 h-64 bg-white rounded-[2rem] border-4 border-slate-300 shadow-2xl transform group-hover:-translate-y-10 transition-transform duration-500">
                <div className="w-16 h-4 bg-slate-100 rounded-b-xl mx-auto absolute top-0 left-1/2 -translate-x-1/2"></div>
                <div className="p-4 space-y-2 mt-6 opacity-30">
                  <div className="h-2 w-full bg-slate-200 rounded"></div>
                  <div className="h-2 w-2/3 bg-slate-200 rounded"></div>
                  <div className="h-8 w-full bg-slate-200 rounded mt-4"></div>
                </div>
              </div>
            </motion.div>

            {/* 4. Brand Consistency: The "Art" Card (Mesh Gradient) */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="md:col-span-2 rounded-[2.5rem] p-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-xl relative overflow-hidden group"
            >
              {/* Mesh Blur */}
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.4),transparent)] opacity-50"></div>
              
              <div className="relative z-10 h-full flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="flex-1">
                   <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 text-white border border-white/30">
                      <Palette className="w-7 h-7" />
                   </div>
                   <h3 className="text-3xl font-display font-bold mb-4">{PRINCIPLES[3].title}</h3>
                   <p className="text-white/80 text-lg leading-relaxed">{PRINCIPLES[3].desc}</p>
                </div>
                
                {/* Visual: Brand Palette Cards */}
                <div className="relative w-40 h-40 md:mr-10">
                  <div className="absolute top-0 right-0 w-24 h-32 bg-white rounded-xl shadow-lg transform rotate-6 group-hover:rotate-12 transition-transform duration-500 z-10 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-indigo-500"></div>
                  </div>
                  <div className="absolute top-4 right-8 w-24 h-32 bg-white/90 rounded-xl shadow-lg transform -rotate-6 group-hover:-rotate-12 transition-transform duration-500 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-pink-500"></div>
                  </div>
                </div>
              </div>
            </motion.div>

             {/* 5. Performance: The "Pro" Card (Deep Dark Mode) */}
             <motion.div 
              whileHover={{ scale: 1.01 }}
              className="md:col-span-2 rounded-[2.5rem] p-10 bg-[#1e1e1e] text-white shadow-2xl relative overflow-hidden group"
            >
              <div className="relative z-10">
                 <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 text-emerald-400 border border-emerald-500/20">
                    <Zap className="w-7 h-7" />
                 </div>
                 <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-3xl font-display font-bold mb-4">{PRINCIPLES[4].title}</h3>
                      <p className="text-gray-400 text-lg leading-relaxed max-w-lg">{PRINCIPLES[4].desc}</p>
                    </div>
                    {/* Visual: Speedometer / Score */}
                    <div className="hidden md:block text-right">
                       <div className="text-5xl font-mono font-bold text-emerald-400 tracking-tighter tabular-nums">100</div>
                       <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Performance Score</div>
                    </div>
                 </div>
                 
                 {/* Visual: Loading Bar */}
                 <div className="mt-8 h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-green-400 w-full animate-[shimmer_2s_infinite] relative">
                       <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)]"></div>
                    </div>
                 </div>
              </div>
            </motion.div>

            {/* 6. SEO: The "Search" Card (Clean White) */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="md:col-span-1 rounded-[2.5rem] p-10 bg-white border border-slate-100 shadow-sm flex flex-col justify-between group overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-slate-900 group-hover:bg-jet-blue group-hover:text-white transition-colors">
                   <Search className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">{PRINCIPLES[5].title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{PRINCIPLES[5].desc}</p>
              </div>

              {/* Visual: Google Search Mockup */}
              <div className="absolute bottom-8 left-8 right-8">
                 <div className="h-10 w-full rounded-full border border-slate-200 flex items-center px-4 shadow-sm bg-white group-hover:shadow-md transition-shadow">
                    <Search className="w-4 h-4 text-slate-400 mr-2" />
                    <div className="h-2 w-24 bg-slate-100 rounded-full"></div>
                 </div>
                 <div className="mt-3 ml-2 space-y-1">
                    <div className="h-1.5 w-32 bg-blue-100 rounded-full"></div>
                    <div className="h-1.5 w-20 bg-slate-100 rounded-full"></div>
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Section 3: Platforms - Skeuomorphism 2.0 / Crystal Panels */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        {/* Dark Mode Theme for this section to pop "Tech" feel */}
        <div className="absolute inset-0 bg-mesh opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Platforms & Tech Stack</h2>
            <p className="text-xl text-slate-400 font-light">Choosing the right technology for scalable growth.</p>
          </div>
          
          <div className="grid gap-12">
            {PLATFORMS.map((platform, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative rounded-[2.5rem] p-[1px] bg-gradient-to-b from-white/20 to-white/5 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <div className="bg-slate-900/90 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 h-full grid lg:grid-cols-3 gap-12">
                  {/* Left Column: Visual/Brand */}
                  <div className="flex flex-col justify-between relative border-r border-white/10 pr-0 lg:pr-12">
                    <div>
                      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-neon ${
                        platform.name.includes('WordPress') ? 'bg-blue-600' : 
                        platform.name.includes('Webflow') ? 'bg-indigo-600' :
                        platform.name.includes('Framer') ? 'bg-pink-600' : 'bg-emerald-600'
                      }`}>
                        <PlatformIcon name={platform.name} />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">{platform.name}</h3>
                      <p className="text-slate-400 text-lg leading-relaxed">{platform.desc}</p>
                    </div>
                    
                    <div className="mt-8 flex gap-4">
                      <div className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block mb-1">Cost Range</span>
                        <span className="font-mono text-jet-green font-bold text-lg">{platform.cost}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column: Specs */}
                  <div className="lg:col-span-2 flex flex-col justify-center">
                    <div className="mb-8">
                       <h4 className="text-white/60 text-sm font-bold uppercase tracking-widest mb-4">Ideal Use Case</h4>
                       <p className="text-xl text-white font-medium leading-relaxed">{platform.bestFor}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-white/60 text-sm font-bold uppercase tracking-widest mb-6">Technical Capabilities</h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {platform.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                             <div className="w-1.5 h-1.5 rounded-full bg-jet-blue shadow-[0_0_10px_rgba(0,82,204,0.8)]"></div>
                             <span className="text-slate-300 font-light">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center">
                       <span className="font-mono text-sm text-slate-500">Timeline: {platform.timeline}</span>
                       <button className="flex items-center gap-2 text-white font-bold hover:text-jet-blue transition-colors">
                         View Examples <ArrowUpRight className="w-4 h-4" />
                       </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
