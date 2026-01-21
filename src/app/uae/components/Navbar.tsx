import React, { useState } from 'react';
import { Menu, X, Phone, ArrowRight, MessageCircle } from 'lucide-react';
import { NavItem } from '../types';

interface NavbarProps {
  onOpenModal: () => void;
}

const navItems: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
];

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card-dark text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="font-bold text-lg">F</span>
            </div>
            <span className="font-bold text-xl tracking-tight">FactoryJet</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium hover:text-secondary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <a href="https://wa.me/971500000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold hover:text-[#25D366] transition-colors">
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
              <a href="tel:+97100000000" className="flex items-center gap-2 text-sm font-semibold hover:text-gold transition-colors">
                <Phone size={16} />
                <span>Call Now</span>
              </a>
              <button 
                onClick={onOpenModal}
                className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-primary/30 flex items-center gap-2"
              >
                Get Consultation
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-navy/95 backdrop-blur-xl border-b border-white/10 pb-6 px-4">
          <div className="flex flex-col space-y-4 pt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-white/90 hover:text-secondary py-2 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a href="https://wa.me/971500000000" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 rounded-lg font-semibold hover:bg-[#25D366]/20">
                <MessageCircle size={18} /> WhatsApp Us
              </a>
              <a href="tel:+97100000000" className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 rounded-lg font-semibold hover:bg-white/10">
                <Phone size={18} /> Call Now
              </a>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onOpenModal();
                }}
                className="w-full bg-primary hover:bg-primary-dark py-3 rounded-lg font-semibold shadow-lg"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;