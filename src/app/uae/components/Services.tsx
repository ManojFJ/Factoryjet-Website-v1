import React from 'react';
import { Smartphone, BarChart, ShoppingCart, Settings } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "WordPress Development",
    priceRange: "AED 9,999 - AED 25,000",
    description: "As a leading WordPress design agency, we build sites that power 43% of the web. Perfect for businesses needing a robust CMS. We are the wordpress website design company of choice for content-rich sites.",
    bestFor: "SMBs, content-heavy sites, blogging businesses",
    features: ["Custom themes", "Plugin integration", "SEO optimization", "Blog management", "E-commerce (WooCommerce)"],
    timeline: "2-5 weeks",
    keyBenefit: "Most cost-effective with largest developer community"
  },
  {
    title: "Shopify Website Design",
    priceRange: "AED 15,000 - AED 35,000",
    description: "Our shopify web design agency services create high-converting stores. Whether you need a shopify web designer or a full shopify website development team, we deliver sales-focused results.",
    bestFor: "E-commerce brands, Retailers, Dropshipping",
    features: ["Custom Store Design", "App Integration", "Payment Gateway Setup", "Conversion Optimization"],
    timeline: "3-6 weeks",
    keyBenefit: "Sales-focused design with powerful e-commerce tools"
  },
  {
    title: "Framer & Webflow",
    priceRange: "AED 15,000 - AED 40,000",
    description: "Looking for a creative website design? We are experts in Framer and Webflow. Ideal for startups wanting unique, interactive, and award-winning visuals without the bloat.",
    bestFor: "Tech startups, interactive experiences, modern brands",
    features: ["Component-based", "AI tools", "Real-time collaboration", "React foundation"],
    timeline: "4-7 weeks",
    keyBenefit: "Cutting-edge interactivity and modern tech stack"
  },
  {
    title: "Custom Development",
    priceRange: "AED 50,000+",
    description: "For enterprise needs, our custom web development services utilize React, Next.js, and Python. We are the custom web development company for scalable, secure applications.",
    bestFor: "Complex applications, unique requirements, high-traffic sites",
    features: ["Complete customization", "Proprietary features", "Unlimited scalability"],
    timeline: "8-12 weeks",
    keyBenefit: "Total control and unlimited possibilities"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(24px,3vw,36px)] font-bold text-navy mb-4">Comprehensive Web Development Services in Dubai</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded"></div>
          <p className="mt-4 text-gray-600">From <strong>simple website for small business</strong> to complex portals, we do it all.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full hover-lift">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                <span className="bg-blue-50 text-primary-dark text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  {service.priceRange}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-sm font-semibold text-navy mb-1">Best For:</p>
                <p className="text-sm text-gray-600">{service.bestFor}</p>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                {service.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-6 mt-auto">
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <span className="font-semibold text-navy block">Timeline</span>
                    <span className="text-gray-500">{service.timeline}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold text-navy block">Key Benefit</span>
                    <span className="text-gray-500">{service.keyBenefit}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:border-primary transition-colors">
            <Smartphone className="mx-auto text-primary mb-3" size={32} />
            <h4 className="font-bold text-navy mb-2">Mobile-First Design</h4>
            <p className="text-xs text-gray-500">95% UAE adoption. We provide mobile friendly design.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:border-primary transition-colors">
            <BarChart className="mx-auto text-secondary mb-3" size={32} />
            <h4 className="font-bold text-navy mb-2">SEO Optimization</h4>
            <p className="text-xs text-gray-500">Rank high with our web design and seo services.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:border-primary transition-colors">
            <ShoppingCart className="mx-auto text-primary-dark mb-3" size={32} />
            <h4 className="font-bold text-navy mb-2">E-Commerce Solutions</h4>
            <p className="text-xs text-gray-500">Shopify & WooCommerce experts.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:border-primary transition-colors">
            <Settings className="mx-auto text-accent mb-3" size={32} />
            <h4 className="font-bold text-navy mb-2">AMC Support</h4>
            <p className="text-xs text-gray-500">Reliable website design and management.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;