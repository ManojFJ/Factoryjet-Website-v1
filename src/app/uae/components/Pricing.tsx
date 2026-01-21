import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp, Star } from 'lucide-react';

type PricingCategory = 'website' | 'ecommerce' | 'amc';

interface PricingProps {
  onOpenModal: () => void;
}

interface PricingTier {
  name: string;
  price: string;
  subtitle?: string;
  isPopular?: boolean;
  features: string[];
  detailedFeatures?: { category: string; items: string[] }[];
}

const pricingData: Record<PricingCategory, PricingTier[]> = {
  website: [
    {
      name: "Essential",
      price: "AED 9,999",
      subtitle: "~$2,720 USD",
      features: [
        "Up to 7 Custom Pages",
        "Mobile-First Responsive Design",
        "Basic SEO Setup",
        "Contact Form & WhatsApp Chat",
        "CMS Training (1 Hour)",
        "30 Days Support"
      ],
      detailedFeatures: [
        { category: "Design", items: ["AI-powered design generation", "2 rounds of revisions", "Stock image integration (15 images)"] },
        { category: "Tech", items: ["SSL Certificate", "Google Analytics 4", "XML Sitemap", "Page Speed Optimization"] }
      ]
    },
    {
      name: "Professional",
      price: "AED 24,999",
      subtitle: "~$6,800 USD",
      isPopular: true,
      features: [
        "Up to 15 Custom Pages",
        "Advanced Design & Animations",
        "Comprehensive SEO Optimization",
        "Blog Setup with 5 Posts",
        "Advanced Forms & Automation",
        "60 Days Support"
      ],
      detailedFeatures: [
        { category: "Design", items: ["3 rounds of revisions", "Stock image integration (40 images)", "Micro-interactions"] },
        { category: "Tech", items: ["Google Tag Manager", "Facebook Pixel", "Security Hardening", "Lazy Loading"] },
        { category: "Functionality", items: ["Live Chat Widget", "Newsletter Subscription", "Social Feed Integration"] }
      ]
    },
    {
      name: "Premium",
      price: "AED 49,999",
      subtitle: "~$13,600 USD",
      features: [
        "Up to 25 Custom Pages",
        "Fully Custom Brand-Unique Design",
        "Advanced Animations & Parallax",
        "CRM & Marketing Integration",
        "Multi-Language Setup",
        "90 Days Support"
      ],
      detailedFeatures: [
        { category: "Design", items: ["5 rounds of revisions", "Professional stock/AI imagery", "Video backgrounds"] },
        { category: "Tech", items: ["Headless CMS capable", "PWA capabilities", "Advanced Caching & CDN", "GDPR Compliance"] },
        { category: "Marketing", items: ["Advanced Schema Markup", "Local SEO", "Content Strategy Document"] }
      ]
    },
    {
      name: "Enterprise",
      price: "AED 89,999+",
      subtitle: "Starting Price",
      features: [
        "Unlimited Custom Pages",
        "Custom Web App Development",
        "Cloud Architecture (AWS/Azure)",
        "Advanced Security & RBAC",
        "Custom API Integrations",
        "Dedicated Team & Project Manager"
      ],
      detailedFeatures: [
        { category: "Tech", items: ["Load Balancing", "Redis Caching", "Database Optimization", "Disaster Recovery"] },
        { category: "Support", items: ["Priority 24/7 Channel", "SLA Guarantees", "Weekly Status Meetings"] }
      ]
    }
  ],
  ecommerce: [
    {
      name: "Starter",
      price: "AED 14,999",
      subtitle: "~$4,080 USD",
      features: [
        "Up to 50 Products",
        "10 Custom Pages",
        "2 Payment Gateways",
        "Shopping Cart & Checkout",
        "Basic E-commerce SEO",
        "30 Days Support"
      ],
      detailedFeatures: [
        { category: "Product", items: ["Product Categories (10)", "Inventory Tracking", "Product Search"] },
        { category: "Features", items: ["Guest Checkout", "Order Management", "Abandoned Cart Email (Basic)"] }
      ]
    },
    {
      name: "Professional",
      price: "AED 39,999",
      subtitle: "~$10,900 USD",
      isPopular: true,
      features: [
        "Up to 500 Products",
        "20 Custom Pages",
        "5 Payment Gateways + BNPL",
        "Advanced Shipping Integration",
        "Abandoned Cart Recovery",
        "60 Days Support"
      ],
      detailedFeatures: [
        { category: "Marketing", items: ["Coupon System", "Email Automation", "Wishlist", "Product Reviews"] },
        { category: "Tech", items: ["Advanced SEO", "Rich Snippets", "Google Shopping Feed", "Facebook Catalog"] }
      ]
    },
    {
      name: "Premium",
      price: "AED 69,999",
      subtitle: "~$19,000 USD",
      features: [
        "Up to 5,000 Products",
        "Unlimited Pages",
        "Multi-Currency & Multi-Language",
        "Subscription Management",
        "Multi-Channel Selling (Amazon/Noon)",
        "90 Days Support"
      ],
      detailedFeatures: [
        { category: "Advanced", items: ["Headless Commerce", "PWA", "One-click Upsells", "Loyalty Program"] },
        { category: "B2B", items: ["Wholesale Portal", "Volume Discounts", "Quote Request System"] }
      ]
    },
    {
      name: "Enterprise",
      price: "AED 149,999+",
      subtitle: "Starting Price",
      features: [
        "Multi-Vendor Marketplace",
        "Unlimited Vendors & Products",
        "Custom Platform Development",
        "Microservices Architecture",
        "AI-Powered Search & Recommendations",
        "24/7 Premium Support"
      ],
      detailedFeatures: [
        { category: "Marketplace", items: ["Vendor Portals", "Commission Management", "Vendor Payout Automation"] },
        { category: "Scale", items: ["High Concurrency", "Global CDN", "Big Data Analytics", "Auto-scaling"] }
      ]
    }
  ],
  amc: [
    {
      name: "Essential",
      price: "AED 1,499",
      subtitle: "Per Month (Billed Annually)",
      features: [
        "2 Development Hours/Month",
        "Daily Backups",
        "Weekly Security Scans",
        "Plugin/Theme Updates",
        "Uptime Monitoring",
        "Email Support"
      ]
    },
    {
      name: "Professional",
      price: "AED 2,999",
      subtitle: "Per Month (Billed Annually)",
      isPopular: true,
      features: [
        "6 Development Hours/Month",
        "Twice-Daily Backups",
        "Daily Security Scans",
        "Performance Optimization",
        "Email & WhatsApp Support",
        "Monthly Strategy Call"
      ],
      detailedFeatures: [
        { category: "Security", items: ["DDoS Monitoring", "2FA Setup", "Security Audit Quarterly"] },
        { category: "Updates", items: ["Landing Page Updates", "Banner Changes", "Product Uploads (50)"] }
      ]
    },
    {
      name: "Premium",
      price: "AED 5,999",
      subtitle: "Per Month (Billed Annually)",
      features: [
        "12 Development Hours/Month",
        "Real-Time Backups",
        "Real-Time Threat Monitoring",
        "Priority Support (4h Response)",
        "Advanced SEO Monitoring",
        "Dedicated Account Manager"
      ],
      detailedFeatures: [
        { category: "Performance", items: ["99.9% Uptime SLA", "Core Web Vitals Monitoring", "Database Optimization"] },
        { category: "Marketing", items: ["Email Campaign Setup", "A/B Testing", "Conversion Optimization"] }
      ]
    },
    {
      name: "Enterprise",
      price: "AED 11,999",
      subtitle: "Per Month (Billed Annually)",
      features: [
        "25 Development Hours/Month",
        "24/7 SOC Security",
        "99.99% Uptime SLA",
        "1-Hour Response Time",
        "Multi-Site Management",
        "Strategic Partnership"
      ],
      detailedFeatures: [
        { category: "Enterprise", items: ["Dedicated Dev Team", "Disaster Recovery", "Custom SLAs", "Business Intelligence"] }
      ]
    }
  ]
};

const Pricing: React.FC<PricingProps> = ({ onOpenModal }) => {
  const [activeCategory, setActiveCategory] = useState<PricingCategory>('website');
  const [expandedTiers, setExpandedTiers] = useState<Record<string, boolean>>({});

  const toggleExpand = (tierName: string) => {
    setExpandedTiers(prev => ({
      ...prev,
      [tierName]: !prev[tierName]
    }));
  };

  return (
    <section id="pricing" className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-[clamp(28px,4vw,48px)] font-extrabold text-white mb-4 tracking-tight">
            Transparent Pricing for <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-gold">Dubai Businesses</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Aggressive pricing with AI-powered efficiency. Save 50-70% compared to traditional UAE agencies without compromising quality.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {(['website', 'ecommerce', 'amc'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 transform hover:scale-105 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/40 ring-2 ring-white/20'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat === 'website' && 'Website Design'}
              {cat === 'ecommerce' && 'E-Commerce'}
              {cat === 'amc' && 'Annual Maintenance'}
            </button>
          ))}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pricingData[activeCategory].map((tier, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-6 rounded-2xl transition-all duration-300 group ${
                tier.isPopular 
                  ? 'bg-gradient-to-b from-primary/20 to-navy border-2 border-secondary/80 shadow-2xl shadow-primary/20 transform lg:-translate-y-4' 
                  : 'bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <Star size={12} fill="currentColor" /> Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex flex-col">
                   <span className="text-2xl lg:text-3xl font-extrabold text-gold">{tier.price}</span>
                   {tier.subtitle && <span className="text-xs text-gray-400 mt-1">{tier.subtitle}</span>}
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {tier.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <div className={`mt-1 p-0.5 rounded-full ${tier.isPopular ? 'bg-secondary' : 'bg-primary/40'}`}>
                      <Check size={10} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-gray-300 leading-snug">{feat}</span>
                  </div>
                ))}

                {/* Collapsible Details */}
                {tier.detailedFeatures && (
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedTiers[tier.name] ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <div className="pt-4 border-t border-white/10 space-y-4">
                      {tier.detailedFeatures.map((group, gIdx) => (
                        <div key={gIdx}>
                          <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">{group.category}</p>
                          <ul className="space-y-2">
                            {group.items.map((item, iIdx) => (
                              <li key={iIdx} className="text-xs text-gray-400 flex items-center gap-2">
                                <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-auto space-y-3">
                {tier.detailedFeatures && (
                  <button 
                    onClick={() => toggleExpand(tier.name)}
                    className="w-full text-xs font-medium text-gray-400 hover:text-white flex items-center justify-center gap-1 transition-colors py-2"
                  >
                    {expandedTiers[tier.name] ? 'Show Less' : 'View Detailed Features'}
                    {expandedTiers[tier.name] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                )}
                <button 
                  onClick={onOpenModal}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                  tier.isPopular 
                    ? 'bg-gradient-to-r from-secondary to-[#F05522] text-white hover:brightness-110' 
                    : 'bg-white text-primary hover:bg-gray-100'
                }`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;