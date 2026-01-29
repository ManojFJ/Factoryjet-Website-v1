'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, DollarSign, Target, Play, ChevronRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 bg-[#0052CC] overflow-hidden selection:bg-orange-500 selection:text-white">

      {/* Background Matrix/Code Texture - Lightened for Blue BG */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }}
      />

      {/* Background Aurora Glow - White/Light Blue for depth */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-white/10 blur-[120px] rounded-full pointer-events-none mix-blend-overlay" />
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-sky-300/20 blur-[100px] rounded-full pointer-events-none mix-blend-overlay" />

      <div className="relative z-10 max-w-[1200px] mx-auto text-center flex flex-col items-center">

        {/* Status Badge */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[12px] text-white flex items-center gap-4 shadow-lg"
        >
          <span className="flex items-center gap-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Accepting New Projects
          </span>
          <span className="w-px h-3 bg-white/20"></span>
          <span className="font-medium">Made in North America</span>
        </motion.div>

        {/* Main Headline with Contrast */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 relative"
        >
          <h1 className="text-[42px] md:text-[64px] lg:text-[80px] leading-[1.1] font-bold tracking-tight text-white">
            <span className="opacity-90 block md:inline">Professional Web Designing</span>{' '}
            <span className="block md:inline">Company in New York City.</span>
            <span className="block text-[24px] md:text-[32px] lg:text-[40px] mt-4 font-normal text-white/90">
              Websites That Drive Revenue in 7 Days
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          The Only AI-Native Web Development Company Delivering Enterprise-Quality Websites at SMB Prices. FactoryJet combines 25+ years of experience with cutting-edge AI.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4"
        >
          <button className="group relative px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Your Project Today
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>

          <button className="px-8 py-4 rounded-lg bg-white text-[#0052CC] font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 shadow-lg border border-transparent">
             <Play className="w-4 h-4 fill-current" />
             View Portfolio
          </button>
        </motion.div>

        {/* Badges/Trust Indicators */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-white/20 w-full max-w-4xl"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/90 font-medium">
              <div className="flex items-center justify-center gap-3">
                <Rocket className="w-5 h-5 text-white" />
                <span>Launch in 7 Days</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <DollarSign className="w-5 h-5 text-green-400" />
                <span>Save 60-70% vs Agencies</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Target className="w-5 h-5 text-orange-400" />
                <span>98% Client Satisfaction</span>
              </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
};
