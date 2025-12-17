import React from 'react';
import { Monitor, ShoppingBag, Zap, Layers } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-jet-blue font-bold tracking-wide uppercase text-sm mb-3">What We Do</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-jet-navy mb-6">
            Everything you need to grow online
          </h3>
          <p className="text-jet-slate text-lg">
            We specialize in two core areas: high-performance websites and revenue-generating e-commerce stores.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Web Design Card */}
          <div className="bg-white rounded-2xl p-8 shadow-xl shadow-blue-900/5 border border-gray-100 hover:border-jet-blue/30 transition-all hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-jet-blue mb-6 group-hover:bg-jet-blue group-hover:text-white transition-colors">
              <Monitor size={32} />
            </div>
            <h4 className="text-2xl font-bold text-jet-navy mb-4">Website Design & Development</h4>
            <p className="text-jet-slate mb-6 leading-relaxed">
              Custom, mobile-responsive websites built for conversions. From corporate sites to landing pages, we deliver in as little as 7 days.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Custom UI/UX Design",
                "Mobile-First Responsive",
                "SEO & Schema Optimized",
                "Fast Hosting & CDN"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-jet-slate text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-jet-blue" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">WordPress</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">Webflow</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">Framer</span>
            </div>
          </div>

          {/* E-Commerce Card */}
          <div className="bg-white rounded-2xl p-8 shadow-xl shadow-orange-900/5 border border-gray-100 hover:border-jetOrange/30 transition-all hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-jetOrange mb-6 group-hover:bg-jetOrange group-hover:text-white transition-colors">
              <ShoppingBag size={32} />
            </div>
            <h4 className="text-2xl font-bold text-jet-navy mb-4">E-Commerce Store Development</h4>
            <p className="text-jet-slate mb-6 leading-relaxed">
              Full-featured online stores, multi-vendor marketplaces, and quick-commerce apps designed to maximize sales and order value.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "DTC, B2B & Marketplace Models",
                "Payment & Shipping Integration",
                "Inventory Management",
                "Mobile Commerce Optimized"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-jet-slate text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-jetOrange" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">Shopify</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">WooCommerce</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">Magento</span>
            </div>
          </div>
        </div>

        {/* Additional Mini Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100">
             <div className="bg-green-100 p-2 rounded-lg text-jetGreen">
                <Zap size={24} />
             </div>
             <div>
               <h5 className="font-bold text-jet-navy">7-Day Delivery</h5>
               <p className="text-sm text-gray-500 mt-1">Get to market faster than your competition with our agile process.</p>
             </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100">
             <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                <Layers size={24} />
             </div>
             <div>
               <h5 className="font-bold text-jet-navy">Complete Optimization</h5>
               <p className="text-sm text-gray-500 mt-1">SEO, GEO (AI Search), and AEO optimizations included in every build.</p>
             </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100">
             <div className="bg-yellow-100 p-2 rounded-lg text-yellow-600">
                <Monitor size={24} />
             </div>
             <div>
               <h5 className="font-bold text-jet-navy">SMB Specialists</h5>
               <p className="text-sm text-gray-500 mt-1">We understand budget constraints and focus on measurable ROI.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
