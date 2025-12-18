import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Mail, MapPin, Phone, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-jet-navy text-white pt-16 md:pt-20 pb-8 md:pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">

          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="w-8 h-8 bg-jet-blue rounded-lg flex items-center justify-center text-white">
                <Rocket size={18} fill="currentColor" />
              </div>
              <span className="text-xl md:text-2xl font-display font-bold">FactoryJet</span>
            </Link>
            <p className="text-gray-400 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              World-class website and e-commerce development for growing businesses. Fast, affordable, and results-driven.
            </p>
            <div className="flex gap-3 md:gap-4">
              {[
                { Icon: Linkedin, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' }
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} className="w-9 h-9 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-jet-blue hover:text-white transition-all">
                  <Icon size={16} className="md:w-[18px] md:h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6">Services</h4>
            <ul className="space-y-2 md:space-y-3 text-gray-400 text-sm md:text-base">
              <li><Link to="/web-design" className="hover:text-jet-blue transition-colors">Website Development</Link></li>
              <li><Link to="/ecommerce" className="hover:text-jet-blue transition-colors">E-Commerce Stores</Link></li>
              <li><Link to="/ecommerce" className="hover:text-jet-blue transition-colors">Shopify Development</Link></li>
              <li><Link to="/ecommerce" className="hover:text-jet-blue transition-colors">WooCommerce</Link></li>
              <li><Link to="/web-design" className="hover:text-jet-blue transition-colors">Landing Pages</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6">Company</h4>
            <ul className="space-y-2 md:space-y-3 text-gray-400 text-sm md:text-base">
              <li><Link to="/about" className="hover:text-jet-blue transition-colors">About Us</Link></li>
              <li><Link to="/case" className="hover:text-jet-blue transition-colors">Our Portfolio</Link></li>
              <li><Link to="/pricing" className="hover:text-jet-blue transition-colors">Pricing Packages</Link></li>
              <li><Link to="/case" className="hover:text-jet-blue transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-jet-blue transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6">Get in Touch</h4>
            <ul className="space-y-3 md:space-y-4 text-gray-400 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <Phone className="shrink-0 text-jetOrange w-4 h-4 md:w-5 md:h-5 mt-0.5" />
                <span>+91-96999-77699</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="shrink-0 text-jetOrange w-4 h-4 md:w-5 md:h-5 mt-0.5" />
                <span>hello@factoryjet.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 text-jetOrange w-4 h-4 md:w-5 md:h-5 mt-0.5" />
                <span>FactoryJet Digital Solutions<br/>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-500">
          <p>© 2025 FactoryJet Digital Solutions. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
