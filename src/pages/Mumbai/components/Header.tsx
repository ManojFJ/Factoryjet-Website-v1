
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onCtaClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
        ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' 
        : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold font-heading">
            <span className="text-jet-blue">Factory</span>
            <span className="text-jet-orange">Jet</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-jet-navy hover:text-jet-blue font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button 
            onClick={onCtaClick}
            className="bg-jet-orange hover:bg-[#E55A2B] text-white px-6 py-2.5 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Start Your Project
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-jet-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-jet-light p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-jet-navy"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              if (onCtaClick) onCtaClick();
            }}
            className="bg-jet-orange text-white py-3 rounded-lg font-bold"
          >
            Start Your Project
          </button>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
