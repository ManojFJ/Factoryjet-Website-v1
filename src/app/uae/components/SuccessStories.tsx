import React from 'react';

const SuccessStories: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(24px,3vw,36px)] font-bold text-navy text-center mb-16">Dubai Success Stories</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Story 1 */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow flex flex-col">
            <div className="h-48 bg-gray-200 relative">
               <img src="https://picsum.photos/600/400?random=1" alt="Dubai Real Estate" className="w-full h-full object-cover" />
               <div className="absolute bottom-0 left-0 bg-primary text-white text-xs font-bold px-3 py-1 m-4 rounded">Real Estate</div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-navy mb-4">Dubai Real Estate Firm</h3>
              
              <div className="space-y-4 mb-6 flex-grow">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Challenge</p>
                  <p className="text-sm text-gray-700">Outdated website, 2% conversion rate, no mobile optimization</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Solution</p>
                  <p className="text-sm text-gray-700">Custom Next.js site with virtual tours, bilingual support, CRM integration</p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mb-4">
                 <p className="font-bold text-green-700 text-sm mb-1">Results</p>
                 <ul className="text-sm text-green-800 space-y-1">
                   <li>• 340% lead increase</li>
                   <li>• 8.5% conversion rate</li>
                   <li>• 12,000+ monthly visitors</li>
                 </ul>
              </div>

              <div className="border-t pt-4 flex justify-between text-xs text-gray-500">
                <span>Timeline: 10 weeks</span>
                <span>Inv: AED 45,000</span>
              </div>
            </div>
          </div>

          {/* Story 2 */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow flex flex-col">
            <div className="h-48 bg-gray-200 relative">
              <img src="https://picsum.photos/600/400?random=2" alt="UAE E-Commerce" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 bg-secondary text-white text-xs font-bold px-3 py-1 m-4 rounded">E-Commerce</div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-navy mb-4">UAE E-Commerce Retailer</h3>
              
              <div className="space-y-4 mb-6 flex-grow">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Challenge</p>
                  <p className="text-sm text-gray-700">Manual inventory, poor checkout experience, limited payment options</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Solution</p>
                  <p className="text-sm text-gray-700">Shopify store with 500+ products, Tabby/Tamara integration, mobile optimization</p>
                </div>
              </div>

               <div className="bg-green-50 p-4 rounded-lg mb-4">
                 <p className="font-bold text-green-700 text-sm mb-1">Results</p>
                 <ul className="text-sm text-green-800 space-y-1">
                   <li>• AED 500k monthly sales</li>
                   <li>• 6.2% conversion rate</li>
                   <li>• 40% mobile revenue</li>
                 </ul>
              </div>

              <div className="border-t pt-4 flex justify-between text-xs text-gray-500">
                <span>Timeline: 8 weeks</span>
                <span>Inv: AED 40,000</span>
              </div>
            </div>
          </div>

          {/* Story 3 */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow flex flex-col">
            <div className="h-48 bg-gray-200 relative">
              <img src="https://picsum.photos/600/400?random=3" alt="Dubai Hospitality" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 bg-gold text-white text-xs font-bold px-3 py-1 m-4 rounded">Hospitality</div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-navy mb-4">Dubai Hospitality Group</h3>
              
              <div className="space-y-4 mb-6 flex-grow">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Challenge</p>
                  <p className="text-sm text-gray-700">Slow booking system, no direct reservations, high OTA commissions</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Solution</p>
                  <p className="text-sm text-gray-700">WordPress booking engine, payment integration, review system</p>
                </div>
              </div>

               <div className="bg-green-50 p-4 rounded-lg mb-4">
                 <p className="font-bold text-green-700 text-sm mb-1">Results</p>
                 <ul className="text-sm text-green-800 space-y-1">
                   <li>• 55% direct bookings</li>
                   <li>• AED 150k monthly savings</li>
                   <li>• 4.8★ rating</li>
                 </ul>
              </div>

              <div className="border-t pt-4 flex justify-between text-xs text-gray-500">
                <span>Timeline: 6 weeks</span>
                <span>Inv: AED 25,000</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SuccessStories;