import React from 'react';
import { Section, SectionHeader, Button } from './ui/Section';
import { Check } from 'lucide-react';
import { useLeadCapture } from '../context/LeadCaptureContext';

const tiers = [
  {
    name: "Starter",
    price: "$4,999",
    range: "- $9,999",
    desc: "Best for new businesses, testing e-commerce.",
    features: ["Shopify or WooCommerce", "Template customization", "Up to 100 products", "Mobile responsive", "SEO foundation", "2-3 week delivery", "30-day support"],
    cta: "Get Started"
  },
  {
    name: "Growth",
    price: "$10,000",
    range: "- $24,999",
    desc: "Best for established businesses scaling online.",
    features: ["Shopify, BigCommerce, or Woo", "Custom design (not template)", "Up to 500 products", "Analytics integration", "SEO setup", "4-6 week delivery", "60-day support"],
    cta: "Scale Now",
    recommended: true
  },
  {
    name: "Professional",
    price: "$25,000",
    range: "- $49,999",
    desc: "High-growth brands, B2B companies.",
    features: ["Any Platform (Plus, Adobe)", "Fully Custom Design", "Unlimited products", "Advanced integrations (ERP, CRM)", "B2B features available", "8-12 week delivery", "90-day support"],
    cta: "Go Pro"
  },
  {
    name: "Enterprise",
    price: "$50,000",
    range: "- $150k+",
    desc: "Enterprise, marketplaces, complex needs.",
    features: ["Adobe Commerce / Headless", "Complete customization", "Multi-storefront", "Complex integrations", "Dedicated team", "12-24 week delivery", "12-month support"],
    cta: "Contact Us"
  }
];

const Pricing: React.FC = () => {
  const { openForm } = useLeadCapture();

  return (
    <Section id="pricing" className="bg-white">
      <SectionHeader 
        eyebrow="TRANSPARENT PRICING" 
        title="E-Commerce Development Pricing: Investment Guide" 
        subtitle="Fixed pricing. No hourly surprises. Know your investment upfront."
      />
      
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {tiers.map((tier, idx) => (
          <div key={idx} className={`relative flex flex-col p-6 rounded-xl border ${tier.recommended ? 'border-jet-blue shadow-lg ring-1 ring-jet-blue' : 'border-slate-200 shadow-sm'} bg-white transition hover:shadow-md`}>
            {tier.recommended && (
              <div className="absolute top-0 right-0 -mt-3 mr-4 px-3 py-1 bg-jet-blue text-white text-xs font-bold rounded-full shadow-sm">
                RECOMMENDED
              </div>
            )}
            <h3 className="text-xl font-bold mb-2 text-jet-dark">{tier.name}</h3>
            <div className="mb-4">
               <span className="text-3xl font-bold text-jet-dark">{tier.price}</span>
               <span className="text-slate-500 text-sm ml-1">{tier.range}</span>
            </div>
            <p className="text-sm text-jet-gray mb-6 min-h-[40px]">{tier.desc}</p>
            
            <ul className="space-y-3 mb-8 flex-1">
              {tier.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <Check className="h-4 w-4 text-jet-green flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            
            <Button 
              variant={tier.recommended ? 'primary' : 'outline'} 
              className="w-full"
              onClick={() => openForm(`${tier.name} Plan Inquiry`)}
            >
              {tier.cta}
            </Button>
          </div>
        ))}
      </div>
      
      <div className="mt-16 max-w-5xl mx-auto">
         <h4 className="font-bold mb-6 text-center text-xl text-jet-dark">Add-On Services</h4>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-center">
               <h5 className="font-bold text-jet-dark mb-1">Mobile App</h5>
               <p className="text-jet-blue font-bold">$30,000 - $100k+</p>
            </div>
            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-center">
               <h5 className="font-bold text-jet-dark mb-1">Social Commerce</h5>
               <p className="text-jet-blue font-bold">$5,000 - $15,000</p>
            </div>
            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-center">
               <h5 className="font-bold text-jet-dark mb-1">B2B Package</h5>
               <p className="text-jet-blue font-bold">$10,000 - $25,000</p>
            </div>
            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-center">
               <h5 className="font-bold text-jet-dark mb-1">Headless Migration</h5>
               <p className="text-jet-blue font-bold">$15,000 - $50,000</p>
            </div>
             <div className="p-4 bg-slate-50 rounded border border-slate-200 text-center">
               <h5 className="font-bold text-jet-dark mb-1">Cross-Border Setup</h5>
               <p className="text-jet-blue font-bold">$8,000 - $20,000</p>
            </div>
            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-center">
               <h5 className="font-bold text-jet-dark mb-1">ERP Integration</h5>
               <p className="text-jet-blue font-bold">$10,000 - $30,000</p>
            </div>
            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-center lg:col-span-2">
               <h5 className="font-bold text-jet-dark mb-1">Monthly Retainer Support</h5>
               <p className="text-jet-blue font-bold">$1,500 - $5,000/month</p>
            </div>
         </div>
      </div>
    </Section>
  );
};

export default Pricing;