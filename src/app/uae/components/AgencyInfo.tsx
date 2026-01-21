import React from 'react';
import { ShieldCheck, Users, Globe2, Award } from 'lucide-react';

const AgencyInfo: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Decorative Background - Hidden on Mobile */}
      <div className="hidden lg:block absolute right-0 top-0 w-1/3 h-full bg-blue-50/50 skew-x-12 translate-x-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-primary rounded-full text-sm font-bold mb-6">
              <Award size={16} />
              <span>Leading Web Design Firm</span>
            </div>
            
            <h2 className="text-[clamp(28px,4vw,48px)] font-bold text-navy mb-6 leading-tight">
              What is FactoryJet? <br />
              <span className="text-primary">Your Strategic Web Design Partner</span>
            </h2>
            
            <div className="space-y-6 text-base lg:text-lg text-gray-600">
              <p>
                FactoryJet is more than just a <strong>website designing company</strong>; we are a full-service digital transformation partner. Recognized as a top <strong>web design agency</strong> in the UAE, we specialize in crafting high-performance digital experiences. From acting as your dedicated <strong>website developer near me</strong> to scaling complex enterprise platforms, our team delivers excellence.
              </p>
              <p>
                Unlike a generic <strong>web development company</strong>, we combine AI-driven efficiency with human creativity. This makes us the ideal choice for those seeking a <strong>website design company for small business</strong> that balances affordability with premium quality. Whether you need a <strong>shopify website agency</strong> for e-commerce or a robust <strong>wordpress design agency</strong>, FactoryJet is your definitive solution.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-secondary">25+</span>
                <span className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wide">Years as a Web Company</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-secondary">500+</span>
                <span className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wide">Sites by our Web Design Firm</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {[
                { icon: ShieldCheck, title: "Trusted Web Agency", desc: "We are the web design company near me that guarantees data security and 99.9% uptime." },
                { icon: Users, title: "Expert Developers", desc: "Our team consists of the best website designers and developers in the region." },
                { icon: Globe2, title: "Global Standards", desc: "Dubai-based web design firm delivering world-class digital solutions." },
                { icon: Award, title: "Award Winning", desc: "Recognized as a top web design and development agency for innovation." }
              ].map((card, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:border-primary/30 transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-4">
                    <card.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AgencyInfo;