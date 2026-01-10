import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Hero from './components/Hero';
import { Problem, Difference } from './components/ProblemDifference';
import Platforms from './components/Platforms';
import { B2BCommerce, MobileCommerce, SocialCommerce, CrossBorderOmnichannel, HeadlessCommerce } from './components/SpecializedServices';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { Button } from './components/ui/Section';
import { LeadCaptureProvider, useLeadCapture } from './context/LeadCaptureContext';
import { LeadCaptureModal } from './components/ui/LeadCaptureModal';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openForm } = useLeadCapture();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#problem' },
    { name: 'Platforms', href: '#platforms' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#cta' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`text-2xl font-heading font-bold ${scrolled || isOpen ? 'text-jet-dark' : 'text-white'}`}>FactoryJet</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium hover:text-jet-orange transition-colors ${scrolled ? 'text-slate-600' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <Button variant={scrolled ? 'primary' : 'white'} className="py-2 px-4 text-sm" onClick={() => openForm('General Audit Request')}>
              Get Audit
            </Button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 ${scrolled || isOpen ? 'text-jet-dark' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full flex flex-col border-t border-slate-100 shadow-xl h-screen sm:h-auto pb-20 sm:pb-4 overflow-y-auto">
          <div className="p-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-jet-dark font-medium py-4 px-2 border-b border-slate-50 block hover:bg-slate-50 transition-colors text-lg"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <Button className="w-full justify-center py-4 text-lg" onClick={() => { setIsOpen(false); openForm('Mobile Menu Request'); }}>
                Get Audit
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default function App() {
  return (
    <LeadCaptureProvider>
      <div className="min-h-screen font-sans selection:bg-jet-orange/20 selection:text-jet-orange">
        <Navbar />
        <Hero />
        <Problem />
        <Difference />
        <Platforms />
        <B2BCommerce />
        <MobileCommerce />
        <SocialCommerce />
        <HeadlessCommerce />
        <CrossBorderOmnichannel />
        <CaseStudies />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
        <LeadCaptureModal />
      </div>
    </LeadCaptureProvider>
  );
}