
import React, { useState } from 'react';
import { FAQS, TRENDS } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { useContactModal } from '../../../context/ContactModalContext';

interface AccordionItemProps {
  q: string;
  a: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`mb-4 rounded-2xl border transition-all duration-300 ${isOpen ? 'bg-white border-jet-blue/20 shadow-lg' : 'bg-slate-50 border-transparent hover:bg-white hover:border-slate-200'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex justify-between items-start text-left focus:outline-none"
      >
        <span className={`text-base font-semibold leading-relaxed transition-colors pr-4 ${isOpen ? 'text-jet-blue' : 'text-slate-800'}`}>{q}</span>
        <div className={`mt-1 w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-jet-blue text-white' : 'bg-slate-200 text-slate-500'}`}>
           {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0">
               <div className="border-t border-slate-100 pt-4">
                 <p className="text-slate-600 leading-relaxed text-sm">{a}</p>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Info = () => {
  const { openModal } = useContactModal();

  // Split FAQs into two columns
  const midPoint = Math.ceil(FAQS.length / 2);
  const leftFaqs = FAQS.slice(0, midPoint);
  const rightFaqs = FAQS.slice(midPoint);

  return (
    <>
      {/* FAQ Section - Split Accordion */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-jet-blue font-bold tracking-widest uppercase text-sm mb-4 block">Knowledge Base</span>
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600 font-light">Detailed answers to your most pressing questions about web development.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="space-y-0">
              {leftFaqs.map((faq, idx) => (
                <AccordionItem key={`l-${idx}`} q={faq.q} a={faq.a} />
              ))}
            </div>
            <div className="space-y-0">
              {rightFaqs.map((faq, idx) => (
                <AccordionItem key={`r-${idx}`} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trends Section - Crystal UI Cards */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        {/* Subtle mesh background */}
        <div className="absolute inset-0 bg-mesh opacity-30"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">2025 Web Design Trends</h2>
              <p className="text-slate-600">We keep your brand ahead of the curve.</p>
            </div>
            <div className="mt-4 md:mt-0 px-4 py-2 bg-white rounded-full border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500 shadow-sm">
              Future Proofing
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRENDS.map((trend, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-glass hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4 w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-jet-blue">
                   <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-slate-900">{trend.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{trend.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer - Cinematic Parallax */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-jet-blue">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-jet-blue to-blue-800 animate-gradient-x"></div>
          {/* Noise */}
          <div className="absolute inset-0 bg-noise opacity-20"></div>
          {/* Shapes */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
             <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-purple-500/30 blur-[100px] mix-blend-overlay"></div>
             <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-orange-500/30 blur-[100px] mix-blend-overlay"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-8 tracking-tight drop-shadow-lg">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white/80">Dominate</span> <br/>
              Your Market?
            </h2>
            <p className="text-blue-100 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Schedule a free 30-minute strategy session. We'll audit your current state and map out your digital growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={openModal}
                className="group relative px-10 py-5 bg-white text-jet-blue rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Get Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="group flex items-center gap-3 px-10 py-5 rounded-2xl border border-white/30 hover:bg-white/10 text-white font-bold text-lg backdrop-blur-sm transition-all">
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <span className="text-2xl font-bold text-white tracking-tighter">FactoryJet<span className="text-jet-blue">.</span></span>
          </div>
          <div className="flex justify-center gap-8 mb-8 text-sm font-medium">
             <a href="#" className="hover:text-white transition-colors">Services</a>
             <a href="#" className="hover:text-white transition-colors">Portfolio</a>
             <a href="#" className="hover:text-white transition-colors">Process</a>
             <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-slate-600 text-sm">&copy; {new Date().getFullYear()} FactoryJet Digital Services. Built for performance.</p>
        </div>
      </footer>
    </>
  );
};
