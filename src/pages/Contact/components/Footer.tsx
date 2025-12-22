import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6 md:pt-16 md:pb-8">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 mb-10 md:mb-16 border-b border-slate-800 pb-8 md:pb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-bold font-display mb-6">FactoryJet.</div>
            <p className="text-slate-400 mb-6">Your Digital Transformation Starts Here. Helping businesses accelerate growth through world-class digital solutions.</p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link to="/about" className="hover:text-jet-blue transition-colors">About Us</Link></li>
              <li><Link to="/case" className="hover:text-jet-blue transition-colors">Portfolio</Link></li>
              <li><Link to="/pricing" className="hover:text-jet-blue transition-colors">Pricing</Link></li>
              <li><Link to="/blog" className="hover:text-jet-blue transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Locations</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link to="/mumbai" className="hover:text-jet-blue transition-colors">Mumbai</Link></li>
              <li><Link to="/pune" className="hover:text-jet-blue transition-colors">Pune</Link></li>
              <li><Link to="/bangalore" className="hover:text-jet-blue transition-colors">Bangalore</Link></li>
              <li><Link to="/ahmedabad" className="hover:text-jet-blue transition-colors">Ahmedabad</Link></li>
              <li><Link to="/surat" className="hover:text-jet-blue transition-colors">Surat</Link></li>
            </ul>
          </div>

          {/* Contact Mini */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-3 text-slate-400">
              <li>India (Serving Global)</li>
              <li>+91 96999 77699</li>
              <li>connect@factoryjet.com</li>
              <li className="text-sm text-jet-orange font-bold mt-4">Response Time: &lt; 2 Hrs</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Legal</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link to="/privacy" className="hover:text-jet-blue transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-jet-blue transition-colors">Terms of Service</Link></li>
              <li><Link to="/sitemap" className="hover:text-jet-blue transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p>&copy; {new Date().getFullYear()} FactoryJet Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
