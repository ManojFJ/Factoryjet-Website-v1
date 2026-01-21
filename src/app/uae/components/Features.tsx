import React from 'react';
import { Smartphone, Zap, Search, Lock, Globe, Mail, Share2, BarChart2, MessageSquare, CreditCard, Edit3 } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    { icon: Smartphone, title: "Mobile Responsiveness", desc: "95% UAE traffic is mobile" },
    { icon: Zap, title: "Fast Loading Speed", desc: "<2 seconds load time required" },
    { icon: Search, title: "SEO Optimization", desc: "Rank on Google UAE searches" },
    { icon: Lock, title: "Security (SSL)", desc: "HTTPS encryption mandatory" },
    { icon: Globe, title: "Arabic/English Support", desc: "Bilingual content capability" },
    { icon: Mail, title: "Contact Forms", desc: "Lead capture optimization" },
    { icon: Share2, title: "Social Integration", desc: "Connect with UAE social platforms" },
    { icon: BarChart2, title: "Analytics Tracking", desc: "Monitor visitor behavior" },
    { icon: MessageSquare, title: "WhatsApp Integration", desc: "Preferred UAE communication" },
    { icon: CreditCard, title: "Payment Gateway", desc: "Local payment method support" },
    { icon: Edit3, title: "CMS Access", desc: "Easy content management" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(24px,3vw,36px)] font-bold text-navy text-center mb-12">11 Essential Features Every Dubai Website Needs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-secondary transition-colors group">
              <div className="bg-blue-50 p-3 rounded-lg text-primary group-hover:text-secondary transition-colors">
                <f.icon size={24} />
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg">{f.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;