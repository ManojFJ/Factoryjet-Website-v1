import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Zap } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg text-white">
            <Zap size={20} fill="currentColor" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-slate-900">
            FactoryJet
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-slate-600 hover:text-primary font-medium text-sm transition-colors">Services</a>
          <a href="#" className="text-primary font-medium text-sm">Work</a>
          <a href="#" className="text-slate-600 hover:text-primary font-medium text-sm transition-colors">Pricing</a>
          <a href="#" className="text-slate-600 hover:text-primary font-medium text-sm transition-colors">About</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-full text-sm font-medium transition-all hover:shadow-lg">
            Book a Demo
          </button>
          <button className="md:hidden p-2 text-slate-600">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};
