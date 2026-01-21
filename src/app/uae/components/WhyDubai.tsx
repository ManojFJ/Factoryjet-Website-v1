import React from 'react';
import { TrendingUp, Smartphone, Search, Award } from 'lucide-react';

const WhyDubai: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(24px,3vw,36px)] font-bold text-navy mb-6">Why Dubai Businesses Need Professional Websites in 2025</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Dubai's digital landscape is rapidly evolving, with 99% internet penetration and 95% smartphone adoption creating unprecedented opportunities for SMBs. The UAE's Vision 2030 emphasizes digital transformation, making professional web presence not just beneficial but essential for business survival and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Smartphone className="text-primary" size={28} />
                <h3 className="text-xl font-bold text-navy">The Digital-First Consumer in Dubai</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                UAE residents are among the world's most digitally connected. With 10+ hours daily screen time and 8.5 active social media accounts per person, your potential customers are constantly online. 73% research products online before purchasing, and 68% prefer buying from businesses with professional websites over those without.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="text-secondary" size={28} />
                <h3 className="text-xl font-bold text-navy">E-Commerce Boom in the UAE</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The UAE e-commerce market reached $27 billion in 2024, projected to hit $50 billion by 2027. Online shopping adoption increased 215% since 2020, with 82% of UAE residents making online purchases monthly. Without e-commerce capabilities, businesses miss this massive opportunity.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <Search className="text-primary-dark" size={28} />
                <h3 className="text-xl font-bold text-navy">Search Engine Visibility = Business Visibility</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                90% of UAE consumers use Google to find local businesses. First-page Google rankings receive 91% of clicks; second page gets only 4.8%. Without SEO optimization, even the best business remains invisible to potential customers actively searching for your services.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <Award className="text-accent" size={28} />
                <h3 className="text-xl font-bold text-navy">Trust and Credibility in Digital Age</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                84% of UAE consumers judge business credibility based on website quality. Professional website design signals legitimacy, expertise, and commitment to customer experience. Poor or absent web presence raises red flags about business reliability.
              </p>
            </div>
          </div>

          <div className="space-y-10">
             <div>
              <h3 className="text-xl font-bold text-navy mb-3">Mobile-First is Non-Negotiable</h3>
              <p className="text-gray-600 leading-relaxed">
                95% of UAE internet traffic comes from mobile devices. Google's mobile-first indexing means mobile optimization directly impacts search rankings. Sites not optimized for mobile experience 53% higher bounce rates and lose potential customers to competitors.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-navy mb-3">Competitive Advantage Through Digital Presence</h3>
              <p className="text-gray-600 leading-relaxed">
                68% of Dubai SMBs still lack professional websites, creating significant opportunity for early movers. Businesses with modern, conversion-optimized websites see 4-6x higher customer acquisition compared to those with outdated or no web presence.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-navy mb-3">24/7 Marketing That Never Sleeps</h3>
              <p className="text-gray-600 leading-relaxed">
                Unlike physical stores limited by hours, websites work 24/7, capturing leads and generating sales even when you're closed. Automated marketing through websites reduces customer acquisition costs by 45-60% compared to traditional channels.
              </p>
            </div>

             <div>
              <h3 className="text-xl font-bold text-navy mb-3">Customer Expectations Have Changed</h3>
              <p className="text-gray-600 leading-relaxed">
                Modern UAE consumers expect online booking, digital payments, real-time support, and mobile-friendly experiences. 76% will abandon businesses that don't meet these digital expectations, choosing competitors who do.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                <span className="block text-3xl font-bold text-primary mb-1">99%</span>
                <span className="text-sm text-gray-600">Internet Penetration in Dubai</span>
              </div>
               <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/10">
                <span className="block text-3xl font-bold text-secondary mb-1">$50B</span>
                <span className="text-sm text-gray-600">Projected Market by 2027</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyDubai;