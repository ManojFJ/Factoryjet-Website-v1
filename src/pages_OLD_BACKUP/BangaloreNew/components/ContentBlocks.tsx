import React from 'react';
import { Monitor, Smartphone, Search, BarChart, Zap, Wrench, Star, Check, Globe, Layout, ShoppingBag } from 'lucide-react';

export const SocialProof = () => (
  <section className="bg-slate-50 py-12 border-b border-slate-200">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 mb-12 text-center font-bold text-slate-400 text-lg">
        <span>Google Partner</span>
        <span>Shopify Partners</span>
        <span>WordPress VIP</span>
        <span>Razorpay</span>
        <span>Shiprocket</span>
        <span>HubSpot</span>
        <span>AWS</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
        {[
            { val: "500+", lbl: "Websites Delivered" },
            { val: "₹150 Cr+", lbl: "Client Revenue" },
            { val: "98%", lbl: "Retention Rate" },
            { val: "7 Days", lbl: "Avg. Delivery" },
            { val: "4.9/5", lbl: "Google Rating" }
        ].map((stat, i) => (
            <div key={i} className="group p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all cursor-default">
                <div className="text-3xl md:text-4xl font-extrabold text-[#0052CC] group-hover:scale-110 transition-transform duration-300">{stat.val}</div>
                <div className="text-sm font-bold text-slate-600 mt-2 uppercase tracking-wider">{stat.lbl}</div>
            </div>
        ))}
      </div>
    </div>
  </section>
);

export const About = () => (
    <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-orange-50 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <span className="text-[#FF6B35] font-bold tracking-widest text-sm uppercase mb-2 block">Who We Are</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] leading-tight">
                    About FactoryJet — <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#2563EB]">Best Website Design Company in Bangalore</span>
                </h2>
                <div className="w-24 h-1 bg-[#FF6B35] mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 group flex flex-col h-full">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0052CC] transition-colors duration-300 shadow-sm">
                        <Globe className="w-8 h-8 text-[#0052CC] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Company Profile</h3>
                    <ul className="space-y-4 text-slate-700 text-base flex-grow">
                        <li className="flex justify-between border-b border-slate-100 pb-3"><span>Name:</span> <span className="font-bold text-slate-900">FactoryJet Technologies</span></li>
                        <li className="flex justify-between border-b border-slate-100 pb-3"><span>HQ:</span> <span className="font-bold text-slate-900">Bengaluru, KA</span></li>
                        <li className="flex justify-between border-b border-slate-100 pb-3"><span>Exp:</span> <span className="font-bold text-slate-900">25+ Years Combined</span></li>
                        <li className="flex justify-between border-b border-slate-100 pb-3"><span>Rating:</span> <span className="font-bold text-slate-900">4.9/5.0</span></li>
                        <li className="flex justify-between pt-2"><span>Focus:</span> <span className="font-bold text-slate-900">Web Design & E-Comm</span></li>
                    </ul>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 group flex flex-col h-full">
                    <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF6B35] transition-colors duration-300 shadow-sm">
                        <Layout className="w-8 h-8 text-[#FF6B35] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Core Capabilities</h3>
                    <div className="flex flex-wrap gap-2 content-start">
                        {[
                            "Website Design", "WordPress Dev", "Shopify Stores",
                            "E-Commerce", "Custom Web Apps", "Mobile Responsive",
                            "UI/UX Design", "SEO Optimization", "Landing Pages", "Migrations"
                        ].map((item, i) => (
                            <span key={i} className="bg-slate-50 text-slate-700 text-sm font-bold px-4 py-2 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-colors cursor-default">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="bg-gradient-to-br from-[#0052CC] to-[#003380] p-8 rounded-3xl shadow-xl shadow-blue-900/30 text-white hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
                     <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                        <ShoppingBag className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">Serving Bangalore</h3>
                    <div className="space-y-6 text-base text-blue-50">
                        <div className="bg-white/10 p-4 rounded-xl border border-white/5">
                            <strong className="text-white block mb-1">Tech Hubs</strong>
                            Whitefield, Electronic City, Manyata Tech Park, ITPL
                        </div>
                        <div className="bg-white/10 p-4 rounded-xl border border-white/5">
                            <strong className="text-white block mb-1">Startup Corridors</strong>
                            Koramangala, HSR Layout, Indiranagar
                        </div>
                        <div className="pt-2">
                            <span className="font-bold text-white flex items-center gap-2"><Check className="w-4 h-4 bg-green-500 rounded-full p-0.5" /> Covering all 198 Wards of BBMP</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#0F172A] rounded-3xl p-8 md:p-16 text-white relative overflow-hidden shadow-2xl border border-slate-800">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[100px]"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">Strategic Partnership</div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Strategic Partners for Bangalore's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#ff9f7c]">Digital Growth</span></h3>
                        <p className="text-slate-300 leading-relaxed mb-8 text-lg font-medium">
                            FactoryJet Technologies is a leading website design company in Bangalore with over 25 years of combined expertise. We are not just another website development company — we are strategic partners. Our deep understanding of Bengaluru's ecosystem allows us to build solutions for funded startups in Koramangala, D2C brands in HSR Layout, and enterprises in Electronic City.
                        </p>
                        <a href="#contact-form" className="inline-flex items-center gap-3 bg-white text-[#0F172A] px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors shadow-lg text-lg group">
                            Start Your Project Now <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
                    <div className="space-y-6 text-base text-slate-300 bg-slate-800/50 p-8 rounded-2xl border border-white/10 font-medium backdrop-blur-sm">
                         <p>
                            As the premier website development agency in Bangalore, we've helped 500+ businesses establish dominant online presence. Our team combines technical excellence with business acumen to deliver websites that generate leads and drive sales.
                        </p>
                        <p>
                            Our e-commerce division has launched 120+ stores. As the trusted Shopify store development company in Bangalore, we help brands launch and scale. Our WordPress services power 200+ business websites with custom themes and performance optimization.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export const ProblemSection = () => {
    const problems = [
        { icon: Monitor, badge: "Losing ₹5-10 Lakhs/Year", title: "50% of Bangalore Businesses Have No Professional Website", desc: "While Bangalore leads India's digital economy, half of local businesses either have no website or operate with outdated, non-responsive sites built 5+ years ago. In a market where 87% of customers research online before buying, this invisibility costs businesses lakhs in lost revenue annually. Your competitors with modern websites are capturing customers you'll never even know about. For startups in Koramangala and enterprises in Electronic City alike, a professional website is no longer optional — it's essential." },
        { icon: Smartphone, badge: "Losing 67% of Visitors", title: "82% of Bengaluru Web Traffic is Mobile — Is Your Site Ready?", desc: "Bengaluru has the highest smartphone penetration in India. Your customers browse, research, and buy from mobile devices — during metro commutes, in auto-rickshaws, during lunch breaks at tech parks, and late nights in PG accommodations. Websites that don't load fast, look cramped, or have tiny buttons on mobile lose 67% of potential customers within 3 seconds. If your site isn't mobile-first, you're losing the majority of your traffic — and in Bangalore's competitive market, that's fatal." },
        { icon: Search, badge: "Zero Google Visibility", title: "Invisible on Google = Invisible to Bangalore Customers", desc: "When Bengaluru customers search \"best [your service] in Koramangala\" or \"top [your product] Whitefield\" — does your business appear? 75% of searchers never scroll past the first page. Websites built without SEO, GEO (Generative Engine Optimization), and AEO (Answer Engine Optimization) remain invisible on Google, ChatGPT, and Perplexity. Your competitors ranking on page one are stealing your customers daily. In a city where digital literacy is highest, search visibility is everything." },
        { icon: BarChart, badge: "Zero ROI on Website", title: "Websites That Don't Convert = Wasted Investment", desc: "Many Bangalore businesses have websites that look decent but generate zero leads. No clear CTAs, no lead capture forms, no WhatsApp integration, no conversion optimization. These \"digital brochures\" cost money to maintain but contribute nothing to revenue. A properly designed website should be your best salesperson — working 24/7 to capture and qualify leads while you focus on scaling. In Bengaluru's startup ecosystem where every rupee counts, a non-converting website is a liability." },
        { icon: Zap, badge: "7% Loss Per Second", title: "3-Second Rule: Every Second Delay Costs 7% Conversions", desc: "Bangalore customers are tech-savvy and impatient — they expect websites to load instantly. Studies show that 53% of mobile users abandon sites that take longer than 3 seconds to load. Slow hosting, unoptimized images, bloated code, and poor caching make websites sluggish. If your site takes 5+ seconds to load, you're losing half your visitors before they even see your content. In Electronic City and Whitefield where users are used to world-class UX, slow websites are unforgivable." },
        { icon: Wrench, badge: "Hidden Long-term Costs", title: "Cheap Templates = Expensive Mistakes", desc: "Many Bengaluru entrepreneurs attempt DIY websites using Wix, Squarespace, or WordPress themes. The result? Generic sites that look like thousands of others, poor SEO performance, limited functionality, and constant technical issues. What seems like savings upfront becomes expensive when you calculate lost customers, technical support costs, and eventual professional redesign. In Bangalore's sophisticated market, cookie-cutter websites signal \"amateur\" — not the impression you want to make on investors, partners, or customers." }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">The Digital Challenge Facing Bangalore Businesses</h2>
                    <p className="text-xl text-slate-700">Why 50% of Bengaluru Businesses Are Losing Lakhs to Competitors with Better Websites</p>
                    <p className="mt-6 text-slate-700 text-lg leading-relaxed">Bangalore is India's most competitive tech ecosystem. With 60,000+ startups, thousands of SMBs, and hundreds of enterprise companies — all competing for the same customers in the same market — your digital presence isn't just important, it's survival-critical. Yet our research reveals a shocking gap between Bengaluru's tech reputation and the digital reality of local businesses.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {problems.map((p, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#FF6B35] hover:-translate-y-2 transition-transform">
                            <div className="flex justify-between items-start mb-4">
                                <p.icon className="w-10 h-10 text-[#FF6B35]" />
                                <span className="bg-red-50 text-red-600 text-xs font-bold px-2 py-1 rounded">{p.badge}</span>
                            </div>
                            <h3 className="text-lg font-bold text-[#0F172A] mb-3">{p.title}</h3>
                            <p className="text-slate-700 text-base leading-relaxed">{p.desc}</p>
                            <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                                <a href="#contact-form" className="text-[#0052CC] text-sm font-bold hover:underline">Get Audit</a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-slate-700 mb-6 font-medium text-lg">If any of these challenges sound familiar, you're not alone — and you're not stuck. FactoryJet has helped 500+ Bangalore businesses overcome these exact obstacles with strategic website design that drives real business results.</p>
                    <a href="#contact-form" className="inline-block bg-[#FF6B35] text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-orange-600 transition-colors">
                        Get Free Website Audit
                    </a>
                </div>
            </div>
        </section>
    );
};

export const SolutionSection = () => {
    const solutions = [
        { icon: Star, title: "Stunning Websites Built to Convert", desc: "We design modern, professional websites that reflect your brand's quality and convert visitors into customers. Our website designers in Bangalore create custom designs (never templates) optimized for your specific industry and target audience. Every element — from hero sections to CTAs — is strategically placed to guide visitors toward conversion. Result: Websites that look premium and generate 3-5x more leads than generic designs." },
        { icon: Smartphone, title: "Mobile-First Design for Bengaluru's Mobile Users", desc: "Every website we build starts with mobile design first. Our website developers in Bangalore ensure your site loads fast, looks beautiful, and functions perfectly on every smartphone, tablet, and desktop. Touch-friendly buttons, readable fonts, optimized images, and intuitive navigation create seamless mobile experiences. Result: Capture the 82% of Bangalore traffic coming from mobile devices." },
        { icon: Check, title: "Dominate Google, ChatGPT & AI Search", desc: "Our websites aren't just pretty — they're built for visibility. We implement comprehensive SEO (Search Engine Optimization), GEO (Generative Engine Optimization), AEO (Answer Engine Optimization), and AIO (AI Optimization) from day one. Keyword optimization, schema markup, fast loading, mobile-friendliness, and quality content ensure your site ranks on Google and gets cited by AI platforms. Result: First-page rankings and visibility across all search platforms." },
        { icon: Check, title: "Turn Every Visitor Into a Qualified Lead", desc: "We design websites with conversion at the core. Strategic lead capture forms, compelling CTAs, WhatsApp integration, exit-intent popups, and automated follow-ups transform passive visitors into active leads. Our web design agency in Bangalore has generated ₹150+ crore revenue for clients through conversion-optimized websites. Result: Your website becomes your most productive sales channel." },
        { icon: Zap, title: "Sub-2-Second Load Times Guaranteed", desc: "Speed is non-negotiable. Our website development in Bangalore includes premium hosting, CDN integration, image optimization, code minification, and caching strategies that deliver sub-2-second load times. We optimize for Core Web Vitals (LCP, FID, CLS) to ensure perfect Lighthouse scores. Result: Zero customers lost to slow loading — guaranteed." },
        { icon: Star, title: "Bespoke Designs That Set You Apart", desc: "Every website we build is custom-designed for your brand, industry, and goals. No templates, no cookie-cutter layouts, no \"seen this before\" designs. Our website development agency in Bangalore creates unique digital experiences that differentiate you from competitors and establish your brand as a leader. Result: A website that's uniquely yours and impossible for competitors to replicate." }
    ];

    return (
        <section className="py-20 bg-[#0F172A] text-white">
            <div className="container mx-auto px-4">
                 <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">The FactoryJet Solution: Websites That Win in Bangalore's Competitive Market</h2>
                    <p className="text-xl text-slate-300">How We Transform Bengaluru Businesses Into Digital Leaders — One Strategic Website at a Time</p>
                    <p className="mt-6 text-slate-300 text-lg leading-relaxed">FactoryJet isn't just another website design company in Bangalore. We're a strategic partner that understands the unique challenges and opportunities of doing business in India's startup capital. Our proven methodology has helped 500+ businesses across Koramangala, Whitefield, Electronic City, HSR Layout, Indiranagar, and all of Bengaluru achieve measurable results.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((s, i) => (
                        <div key={i} className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-[#0052CC] transition-colors">
                            <s.icon className="w-10 h-10 text-[#0052CC] mb-4" />
                            <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
                            <p className="text-slate-300 text-base leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center bg-blue-900/30 p-8 rounded-xl border border-blue-500/30">
                    <p className="text-lg font-medium mb-6 text-slate-200">Every website we deliver as the top website design company in Bangalore includes: Custom design, mobile responsiveness, SEO optimization, SSL security, speed optimization, WhatsApp integration, and 30-day post-launch support. We don't just build websites — we build digital growth engines.</p>
                    <a href="#contact-form" className="inline-block bg-[#FF6B35] text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-orange-600 transition-colors">
                        Get Your Custom Solution
                    </a>
                </div>
            </div>
        </section>
    );
}
