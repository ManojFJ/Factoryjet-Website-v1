
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const StickyMobileBar: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-6 left-6 right-6 z-[60] bg-white/80 backdrop-blur-xl border border-white/40 p-3 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
      <div className="flex gap-3">
        <a 
          href="https://wa.me/919999999999?text=Hi%20FactoryJet%2C%20I%20need%20a%20website" 
          className="flex-1 bg-jet-green text-white py-3.5 rounded-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-widest shadow-lg shadow-green-500/20 active:scale-95 transition-transform"
        >
          <MessageCircle size={18} /> WhatsApp
        </a>
        <a 
          href="tel:+919999999999" 
          className="flex-1 bg-jet-navy text-white py-3.5 rounded-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-widest shadow-lg shadow-slate-900/20 active:scale-95 transition-transform"
        >
          <Phone size={18} /> Call Us
        </a>
      </div>
    </div>
  );
};

export default StickyMobileBar;
