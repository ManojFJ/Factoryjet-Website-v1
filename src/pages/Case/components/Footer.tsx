import React from 'react';
import { Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
             <div className="bg-primary p-1.5 rounded-lg text-white">
                <Zap size={20} fill="currentColor" />
             </div>
             <span className="font-display font-bold text-xl tracking-tight">FactoryJet</span>
          </div>
          <div className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} FactoryJet Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};