import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-jetBlue rounded-lg"></div>
              FactoryJet
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Empowering SMBs with enterprise-grade digital solutions. Your trusted partner for transformation.
            </p>
            <div className="flex gap-4">
              <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
              <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li>hello@factoryjet.com</li>
              <li>+91-XXXXX-XXXXX</li>
              <li>
                Bangalore, India<br />
                (Serving Global Markets)
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-jetBlue cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-jetBlue cursor-pointer transition-colors">Our Team</li>
              <li className="hover:text-jetBlue cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-jetBlue cursor-pointer transition-colors">Success Stories</li>
            </ul>
          </div>

           {/* Legal */}
           <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-jetBlue cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-jetBlue cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-jetBlue cursor-pointer transition-colors">Sitemap</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} FactoryJet. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;