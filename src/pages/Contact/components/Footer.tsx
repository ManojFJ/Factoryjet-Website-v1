import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6 md:pt-16 md:pb-8">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16 border-b border-slate-800 pb-8 md:pb-12">
          
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold font-display mb-6">FactoryJet.</div>
            <p className="text-slate-400 mb-6">Your Digital Transformation Starts Here. Helping businesses accelerate growth through world-class digital solutions.</p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-jetOrange transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-jetOrange transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-jetOrange transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-jetOrange transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-jetOrange transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact Mini */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-3 text-slate-400">
              <li>Bangalore, India</li>
              <li>+91 96999 77699</li>
              <li>connect@factoryjet.com</li>
              <li className="text-sm text-jetOrange font-bold mt-4">Response Time: &lt; 2 Hrs</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Join our community for weekly tips and insights. No spam.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input type="email" placeholder="Email address" className="bg-slate-800 border-none rounded px-4 py-2 text-white w-full focus:ring-1 focus:ring-jetBlue" />
              <button className="bg-jetBlue hover:bg-blue-600 px-4 py-2 rounded text-white font-medium w-full sm:w-auto">Join</button>
            </div>
          </div>
        </div>

        <div className="text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p>&copy; {new Date().getFullYear()} FactoryJet Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
