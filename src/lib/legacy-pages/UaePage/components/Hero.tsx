import React, { useEffect, useState } from 'react';
import { Star, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import HeroForm from './HeroForm';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative mt-6 w-full bg-[#0052CC] overflow-hidden hero-section font-sans lg:h-[720px] flex items-center">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0052CC] to-[#0041a8] z-0"></div>
        {/* Diagonal Stripe Pattern */}
        <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #ffffff, #ffffff 2px, transparent 2px, transparent 12px)'
        }}></div>
        {/* Grid Dots Optional */}
        <div className="absolute inset-0 opacity-[0.05] z-0 pointer-events-none" style={{
             backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
             backgroundSize: '32px 32px'
        }}></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 pt-24 pb-10 lg:py-0 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-8 lg:gap-12 items-center w-full">
                
                {/* === LEFT COLUMN === */}
                <div className="w-full max-w-[640px] flex flex-col justify-center order-1 lg:order-1 pt-4 lg:pt-0">
                    
                    {/* 1. Top Badge (Compact) */}
                    <div className={`inline-flex items-center gap-2 bg-[#10B981]/15 border border-[#10B981]/40 px-5 py-2 rounded-full w-fit mb-4 transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
                        <Star size={13} className="text-[#10B981] fill-[#10B981]" />
                        <span className="text-[13px] font-semibold text-white tracking-wide">#1 Rated Web Design Agency in Dubai</span>
                    </div>

                    {/* 2. Main Headline (Optimized Size) */}
                    <h1 className={`font-display text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.1] font-bold text-white tracking-tight mb-5 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        <span className="block">Web Design and Development Agency</span>
                        <span className="block relative w-fit mt-1">
                            Top Website Designing Company
                            <span className="absolute -bottom-2 left-0 w-[100px] h-[3px] bg-[#FF6B35] rounded-sm"></span>
                        </span>
                        <span className="block mt-3">in Dubai</span>
                    </h1>

                    {/* 3. Description (Condensed) */}
                    <p className={`font-sans text-[15px] leading-[1.5] text-white/90 mb-6 max-w-[550px] transition-all duration-700 delay-200 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
                        FactoryJet is Dubai's first <strong className="font-semibold text-white">AI-native</strong> web design agency and website development company, combining cutting-edge artificial intelligence with <strong className="font-semibold text-white">25+ years</strong> of human expertise. Our AI-powered workflows enable our expert team to deliver stunning, high-performance websites <strong className="font-semibold text-white">10x faster</strong> than traditional agencies—without compromising quality.
                    </p>

                    {/* 4. CTA Buttons (Compact) */}
                    <div className={`flex flex-wrap gap-4 mb-6 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        <button 
                            onClick={onOpenModal}
                            className="bg-[#FF6B35] hover:bg-[#e55a28] text-white px-7 py-3 rounded-lg font-semibold text-[15px] shadow-[0_4px_12px_rgba(255,107,53,0.25)] hover:shadow-[0_6px_16px_rgba(255,107,53,0.35)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group h-[48px]"
                        >
                            Get Free Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a
                            href="https://wa.me/919699977699?text=Hi%20FactoryJet%20Dubai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent hover:bg-[#10B981] text-[#10B981] hover:text-white border-2 border-[#10B981] px-6 py-3 rounded-lg font-semibold text-[15px] backdrop-blur-sm transition-all duration-300 flex items-center gap-2 h-[48px]"
                        >
                             <MessageCircle size={18} /> WhatsApp Us
                        </a>
                    </div>

                    {/* 5. Trust Indicators (Compact Inline) */}
                    <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
                         <div className="flex items-center gap-3 bg-white/[0.08] border border-white/[0.12] px-4 py-3 rounded-lg backdrop-blur-md">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#10B981]/20 rounded-full flex items-center justify-center">
                                <Star size={16} className="text-[#10B981] fill-[#10B981]" />
                            </div>
                            <div>
                                <p className="text-[13px] font-bold text-white leading-none mb-1">Top Ranked</p>
                                <p className="text-[11px] text-white/80 leading-none">In UAE Agencies</p>
                            </div>
                         </div>
                         <div className="flex items-center gap-3 bg-white/[0.08] border border-white/[0.12] px-4 py-3 rounded-lg backdrop-blur-md">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#0052CC]/40 rounded-full flex items-center justify-center">
                                <CheckCircle size={16} className="text-blue-200" />
                            </div>
                            <div>
                                <p className="text-[13px] font-bold text-white leading-none mb-1">98% Satisfaction</p>
                                <p className="text-[11px] text-white/80 leading-none">500+ Projects</p>
                            </div>
                         </div>
                    </div>

                </div>

                {/* === RIGHT COLUMN (Contact Form) === */}
                <div className={`flex justify-center items-center h-full relative transition-all duration-1000 delay-300 order-2 lg:order-2 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    <HeroForm />
                </div>

            </div>
        </div>
    </section>
  );
};

export default Hero;