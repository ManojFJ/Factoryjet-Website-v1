import React from 'react';
import { Droplet, Hotel, Briefcase, Home, ShoppingBag, Heart, Cpu, Factory } from 'lucide-react';

const industries = [
  { icon: Droplet, name: "Industrial & Oil/Gas", stat: "25% GDP", desc: "Expert industrial website design with secure dashboards and IoT integration for operational efficiency." },
  { icon: Hotel, name: "Tourism & Hospitality", stat: "12% GDP", desc: "Hotel website design agency services including immersive booking platforms and virtual tours." },
  { icon: Briefcase, name: "Finance & Insurance", stat: "10% GDP", desc: "Secure portals and fintech solutions. Best financial website design for trust and compliance." },
  { icon: Home, name: "Real Estate", stat: "8% GDP", desc: "We are the go-to real estate website developer. Virtual tours, CRM integration, and property listing management." },
  { icon: ShoppingBag, name: "Retail & E-Commerce", stat: "15% GDP", desc: "Top ecommerce website development company for omnichannel stores, inventory, and payments." },
  { icon: Heart, name: "Medical & Healthcare", stat: "5% GDP", desc: "Medical website design agency specializing in telemedicine, booking, and patient portals." },
  { icon: Cpu, name: "Tech & SaaS", stat: "7% GDP", desc: "SaaS website design agency for startups. Scalable landing pages and product demos." },
  { icon: Factory, name: "Manufacturing", stat: "9% GDP", desc: "B2B web design agency solutions. Supply chain tracking, distributor portals, and inventory systems." },
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(24px,3vw,36px)] font-bold mb-4">Industries We Serve in Dubai</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Tailored digital solutions from the best website design company for diverse economic sectors.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-primary/20 p-3 rounded-lg text-primary-light group-hover:text-white transition-colors">
                    <Icon size={24} color="#38bdf8" />
                  </div>
                  <span className="text-xs font-mono text-gray-400 bg-black/30 px-2 py-1 rounded">{item.stat}</span>
                </div>
                <h3 className="text-lg font-bold mb-3">{item.name}</h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-3">{item.desc}</p>
                <div className="text-secondary text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <span>→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;