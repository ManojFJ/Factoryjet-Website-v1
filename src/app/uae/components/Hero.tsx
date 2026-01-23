import React from 'react';
import { CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-32 overflow-hidden bg-dubai-gradient text-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-64 h-64 lg:w-96 lg:h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 lg:w-[500px] lg:h-[500px] bg-primary/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          {/* Content Column (60%) */}
          <div className="w-full lg:w-[60%] space-y-6 lg:space-y-8">
            <h1 className="text-[clamp(32px,8vw,64px)] font-extrabold leading-[1.1] tracking-tight text-center lg:text-left">
              Web Design and Development Agency - <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Top Website Designing Company in Dubai</span>
            </h1>
            
            <p className="text-[clamp(16px,4vw,18px)] text-gray-200 leading-relaxed max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
              FactoryJet is a premier <strong>web design company</strong> and <strong>website development company</strong> in Dubai, with 25+ years of expertise. We help SMBs and enterprises create powerful online presences using WordPress, Webflow, and custom stacks. As a top-rated <strong>web design agency</strong> serving Dubai, Abu Dhabi, and the wider UAE, we are the <strong>website developer near me</strong> that businesses trust for responsive, SEO-optimized sites that drive real growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 lg:pt-4">
              {[
                "Ranked among top web design agencies in UAE",
                "98% satisfaction as a reliable web design firm",
                "25+ years expertise as a web development agency",
                "Specialized real estate & industrial website design"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm font-medium text-gray-100">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center lg:items-start">
              <a 
                href="https://wa.me/971500000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-whatsapp hover:bg-whatsapp-hover text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <MessageCircle size={24} />
                WhatsApp Us
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-300 px-2 sm:px-0">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white"></div>
                </div>
                <span>Trusted by 500+ UAE businesses</span>
              </div>
            </div>
          </div>

          {/* Form Column (40%) */}
          <div className="w-full lg:w-[40%] mt-8 lg:mt-0">
            <div className="glass-card p-6 lg:p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-white text-center">Get Free Consultation</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input type="text" placeholder="Full Name *" required className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-base placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                </div>
                <div>
                  <input type="email" placeholder="Email Address *" required className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-base placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number *" required className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-base placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-base focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none [&>option]:bg-navy">
                    <option value="" disabled selected>Service Type</option>
                    <option value="website">Website Design</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="crm">CRM/ERP</option>
                    <option value="ai">AI Solutions</option>
                  </select>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-base focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none [&>option]:bg-navy">
                    <option value="" disabled selected>Budget Range</option>
                    <option value="under15k">Under AED 15k</option>
                    <option value="15-30k">AED 15k - AED 30k</option>
                    <option value="30-80k">AED 30k - AED 80k</option>
                    <option value="80k+">AED 80k+</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>
                <div>
                  <textarea placeholder="Tell us about your project..." rows={3} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-base placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="w-full btn-primary bg-secondary hover:bg-orange-600 text-white py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 mt-2">
                  Get Free Consultation <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;