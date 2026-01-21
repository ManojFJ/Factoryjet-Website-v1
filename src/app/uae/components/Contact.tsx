import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-16 lg:pt-20 pb-10">
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 lg:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center lg:text-left">Get Your Free Consultation</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl lg:bg-transparent lg:p-0">
                <div className="bg-primary/20 p-3 rounded-full flex-shrink-0"><Phone className="text-primary" /></div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-lg font-semibold break-all">+971-XXXXXXXX</p>
                </div>
              </div>
               <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl lg:bg-transparent lg:p-0">
                <div className="bg-primary/20 p-3 rounded-full flex-shrink-0"><Mail className="text-primary" /></div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg font-semibold break-all">dubai@factoryjet.com</p>
                </div>
              </div>
               <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl lg:bg-transparent lg:p-0">
                <div className="bg-primary/20 p-3 rounded-full flex-shrink-0"><MapPin className="text-primary" /></div>
                <div>
                  <p className="text-sm text-gray-400">Office</p>
                  <p className="text-lg font-semibold">Dubai Internet City</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 lg:mt-12">
               <p className="font-bold mb-4 text-center lg:text-left">Why Choose FactoryJet?</p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
                 {["25+ Years Experience", "500+ Successful Projects", "98% Client Satisfaction", "UAE Market Expertise", "Bilingual Team", "Local Support", "Transparent Pricing", "On-Time Delivery", "Ongoing Maintenance", "Latest Technologies"].map((b, i) => (
                   <span key={i} className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>{b}</span>
                 ))}
               </div>
            </div>
          </div>

          <div className="glass-card-dark p-6 lg:p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold mb-6 text-center lg:text-left">Send us a message</h3>
             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Full Name *" required className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary text-base" />
                <input type="email" placeholder="Email Address *" required className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary text-base" />
                <input type="tel" placeholder="Phone Number *" required className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary text-base" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-primary [&>option]:bg-navy text-base">
                    <option value="" disabled selected>Service</option>
                    <option value="website">Website Design</option>
                    <option value="ecommerce">E-Commerce</option>
                  </select>
                   <select className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-primary [&>option]:bg-navy text-base">
                    <option value="" disabled selected>Budget</option>
                    <option value="50k">Under 50k</option>
                    <option value="100k">50k-1L</option>
                  </select>
                </div>
                <textarea placeholder="Message" rows={3} className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none text-base"></textarea>
                <button className="w-full bg-primary hover:bg-primary-dark py-3 rounded-lg font-bold transition-colors shadow-lg">Submit Request</button>
             </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 pt-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center font-bold">F</div>
            <span className="text-xl font-bold">FactoryJet</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-400">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#industries" className="hover:text-white">Industries</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors p-2"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors p-2"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors p-2"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors p-2"><Twitter size={20} /></a>
          </div>
        </div>
        <div className="text-center text-gray-500 text-xs mt-8">
          Copyright © 2025 FactoryJet. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Contact;