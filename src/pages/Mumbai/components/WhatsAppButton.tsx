
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/919999999999?text=Hi%20FactoryJet"
      className="hidden md:flex fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-3 bg-white text-jet-navy px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-jet-light">
        Chat with us on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
