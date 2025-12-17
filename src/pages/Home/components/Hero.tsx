import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Star, MousePointer, BarChart3, Rocket } from 'lucide-react';

const Hero: React.FC = () => {
  const benefits = [
    "Trusted by 500+ businesses",
    "25+ years expertise",
    "7-day delivery guarantee",
    "Full SEO & AI Optimization"
  ];

  return (
    <section className="relative overflow-hidden pt-28 pb-12 lg:pt-36 lg:pb-24 bg-[#0052CC] min-h-[90vh] flex items-center">

      {/* 1. Stunning Jet Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0052CC] via-[#053885] to-[#02122b]"></div>

      {/* 2. Light Leaks for Depth */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>

      {/* 3. Texture & Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-xs backdrop-blur-md shadow-lg shadow-blue-500/20 mb-6 hover:bg-white/20 transition-colors cursor-default w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-cyan-50 tracking-wide uppercase font-bold">New: AI-Enhanced Development</span>
            </div>

            {/* Headline - Fits in 3 Lines */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] mb-5 drop-shadow-lg tracking-tight">
              Build World-Class <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-100">Websites</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white">Stores</span> <br className="hidden lg:block" />
              That Drive Revenue.
            </h1>

            <p className="text-base md:text-lg text-blue-100/90 mb-8 leading-relaxed max-w-lg font-medium">
              FactoryJet is India's trusted partner for SMBs. We build high-converting digital storefronts that attract customers and drive real results.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="relative overflow-hidden bg-jetOrange hover:bg-orange-600 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-[0_0_40px_-10px_rgba(255,107,53,0.6)] hover:shadow-[0_0_60px_-10px_rgba(255,107,53,0.8)] hover:-translate-y-1 flex items-center justify-center gap-2 group">
                <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-in-out -skew-x-12 -ml-4 w-[120%]"></div>
                <Rocket size={18} className="fill-white/20 relative z-10" />
                <span className="relative z-10">Start Your Project</span>
              </button>

              <button className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3.5 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-white/5 hover:-translate-y-1">
                View Portfolio <ArrowRight size={18} />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-blue-50 text-sm font-medium">
                  <div className="bg-cyan-500/20 rounded-full p-0.5 shrink-0">
                    <CheckCircle className="text-cyan-300" size={14} />
                  </div>
                  {benefit}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero Visual/Dashboard Mockup - Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Glow behind the mockup */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-blue-500/30 blur-[60px] rounded-full -z-10 mix-blend-screen"></div>

            <div className="w-full max-w-lg relative rounded-xl bg-gray-900/80 border border-white/10 shadow-2xl backdrop-blur-md p-2 overflow-hidden ring-1 ring-white/20 transform rotate-1 hover:rotate-0 transition-transform duration-700">
               {/* Decorative "Browser" Header */}
               <div className="flex items-center gap-2 mb-2 px-1">
                 <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                    <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                 </div>
                 <div className="flex-1 bg-black/40 rounded-sm h-5 ml-3 flex items-center px-2 text-[9px] text-gray-400 font-mono border border-white/5">
                    <span className="text-gray-500 mr-1">https://</span>factoryjet-client.com
                 </div>
               </div>

               {/* Mock Website UI */}
               <div className="bg-white rounded-b-md overflow-hidden w-full aspect-[16/10] flex flex-col shadow-inner relative">

                  {/* Mock Navbar */}
                  <div className="bg-white border-b border-gray-100 px-3 py-2 flex justify-between items-center z-20 relative">
                     <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 bg-black rounded flex items-center justify-center text-white text-[8px] font-bold">L</div>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-black">LUXE.CO</span>
                     </div>
                     <div className="hidden sm:flex gap-3 text-[8px] font-medium text-gray-600">
                        <span className="text-black font-bold">Shop</span>
                        <span>Stories</span>
                        <span>About</span>
                     </div>
                     <div className="flex gap-1.5">
                        <div className="w-4 h-4 rounded-full border border-gray-200 flex items-center justify-center">
                            <div className="w-2 h-2 border-[1px] border-black rounded-full"></div>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-black text-white text-[7px] flex items-center justify-center">2</div>
                     </div>
                  </div>

                  {/* Mock Content */}
                  <div className="flex-1 overflow-hidden relative flex">
                      {/* Sidebar / Hero Banner */}
                      <div className="relative w-2/3 h-full group">
                          <img
                            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Fashion Website Hero"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                          <div className="absolute bottom-4 left-4 flex flex-col justify-end">
                              <span className="text-[7px] bg-white text-black px-1.5 py-0.5 rounded-full w-fit font-bold uppercase tracking-widest mb-1.5 shadow-sm">New Season</span>
                              <h3 className="text-white font-display font-bold text-xl leading-none mb-2 drop-shadow-md">Summer <br/>Essentials</h3>
                              <button className="bg-white text-black text-[8px] font-bold px-3 py-1.5 w-fit rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                                  Explore
                              </button>
                          </div>
                      </div>

                      {/* Right Side / Product Grid */}
                      <div className="w-1/3 bg-gray-50 h-full p-2 overflow-hidden">
                          <h4 className="text-[8px] font-bold text-gray-900 mb-2">Trending</h4>
                          <div className="flex flex-col gap-2">
                              {[
                                  { price: "₹2.4k", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80" },
                                  { price: "₹5.9k", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=300&q=80" },
                              ].map((item, i) => (
                                  <div key={i} className="bg-white p-1.5 rounded-lg border border-gray-100 shadow-sm flex items-center gap-2">
                                      <div className="w-8 h-8 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                                          <img src={item.img} className="w-full h-full object-cover" alt="Product" />
                                      </div>
                                      <div>
                                        <div className="h-1 w-8 bg-gray-200 rounded mb-0.5"></div>
                                        <div className="text-[8px] font-bold text-gray-900">{item.price}</div>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>

                  {/* Cursor Animation Overlay */}
                  <motion.div
                     initial={{ x: "60%", y: "60%", opacity: 0 }}
                     animate={{ x: "70%", y: "40%", opacity: 1 }}
                     transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
                     className="absolute top-0 left-0 z-30 pointer-events-none drop-shadow-xl"
                  >
                     <MousePointer className="text-black fill-white" size={20} />
                     <div className="ml-3 mt-1 bg-black text-white text-[8px] px-1.5 py-0.5 rounded font-bold whitespace-nowrap shadow-lg">
                        Click
                     </div>
                  </motion.div>
               </div>

               {/* Floating Badges - Analytics */}
               <motion.div
                 animate={{ y: [0, -6, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute -right-4 top-16 bg-white/90 backdrop-blur-md p-2 rounded-lg shadow-xl shadow-blue-900/20 hidden md:block z-30 border border-white/50 max-w-[120px]"
               >
                 <div className="flex items-center gap-2 mb-1.5">
                   <div className="bg-blue-100 p-1 rounded text-blue-600">
                     <BarChart3 size={12} />
                   </div>
                   <div>
                     <p className="text-[8px] text-gray-500 font-bold uppercase">Revenue</p>
                     <p className="text-gray-900 font-bold text-xs">₹12.4 Lakh</p>
                   </div>
                 </div>
                 {/* Mini Chart */}
                 <div className="flex items-end gap-0.5 h-6 mt-0.5 border-b border-gray-100 pb-0.5">
                    <div className="w-1/5 bg-blue-100 h-[40%] rounded-t-[1px]"></div>
                    <div className="w-1/5 bg-blue-100 h-[60%] rounded-t-[1px]"></div>
                    <div className="w-1/5 bg-blue-200 h-[30%] rounded-t-[1px]"></div>
                    <div className="w-1/5 bg-blue-600 h-[85%] rounded-t-[1px] relative shadow-lg shadow-blue-500/50"></div>
                    <div className="w-1/5 bg-blue-100 h-[50%] rounded-t-[1px]"></div>
                 </div>
               </motion.div>

               {/* Floating Badges - Rating */}
               <motion.div
                 animate={{ y: [0, 6, 0] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                 className="absolute -left-4 bottom-12 bg-white/90 backdrop-blur-md p-2 rounded-lg shadow-xl shadow-blue-900/20 hidden md:block z-30 border border-white/50"
               >
                 <div className="flex items-center gap-2">
                    <div className="bg-orange-100 p-1.5 rounded">
                      <Star className="text-orange-500 fill-orange-500" size={12} />
                    </div>
                    <div>
                      <p className="text-[8px] text-gray-500 font-bold uppercase">Rating</p>
                      <div className="flex items-baseline gap-1">
                          <p className="text-gray-900 font-bold text-xs">4.9</p>
                          <span className="text-[8px] text-gray-400 font-medium">Trusted</span>
                      </div>
                    </div>
                 </div>
               </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
