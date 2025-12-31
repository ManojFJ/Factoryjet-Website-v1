import React from 'react';

export const Industries = () => {
    const industries = [
        { icon: "🚀", title: "Startups & Tech Companies", desc: "Bangalore is India's startup capital with 45% of the country's unicorns. We build websites for funded startups, SaaS companies, and tech businesses in Koramangala, HSR Layout, and Whitefield. From MVP landing pages to full-stack web applications, we help startups establish credibility and attract investors. Our website design company in Bangalore understands startup culture, investor expectations, and rapid scaling needs.", stats: "150+ startup websites delivered" },
        { icon: "🛒", title: "E-Commerce & D2C Brands", desc: "Bengaluru's D2C ecosystem is booming. Our e-commerce development company in Bangalore builds high-converting online stores for fashion, beauty, lifestyle, and consumer brands. Shopify, WooCommerce, and custom platforms with complete payment and shipping integration. We've helped Bangalore D2C brands scale from zero to ₹10 Crore+ annual revenue.", stats: "120+ e-commerce stores launched" },
        { icon: "💼", title: "IT Services & Consulting", desc: "Bangalore's IT services sector needs websites that convey expertise and generate enterprise leads. We build corporate websites for IT companies, consulting firms, and outsourcing businesses in Electronic City, Whitefield, and Manyata Tech Park. Professional designs that establish credibility with global clients.", stats: "80+ IT services websites" },
        { icon: "🏥", title: "Healthcare & Medtech", desc: "Professional websites for hospitals, clinics, diagnostic centers, and healthcare startups. Online appointment booking, doctor profiles, patient portals, and HIPAA-compliant designs for Bangalore healthcare providers. We understand healthcare regulations and patient trust requirements.", stats: "45+ healthcare websites" },
        { icon: "📚", title: "Education & EdTech", desc: "Bangalore is India's EdTech hub with companies like Byju's, Unacademy, and Vedantu headquartered here. We build websites for schools, coaching centers, online learning platforms, and EdTech startups. LMS integration, course catalogs, student portals, and payment systems.", stats: "70+ education websites" },
        { icon: "🏭", title: "Manufacturing & Industrial", desc: "Industrial websites for manufacturers in Peenya Industrial Area, Electronic City, and Bommasandra. Product catalogs, B2B inquiry systems, and corporate presentations for engineering companies, auto components manufacturers, and industrial equipment suppliers.", stats: "55+ manufacturing websites" },
        { icon: "🏗️", title: "Real Estate & Property", desc: "Bangalore's real estate market demands sophisticated digital presence. We create property listing websites, builder portfolios, and real estate CRM integrations. Virtual tours, inquiry systems, and lead management for developers and brokers across Bangalore.", stats: "60+ real estate websites" },
        { icon: "🍽️", title: "Restaurants & Hospitality", desc: "Appetizing websites for restaurants, cafes, hotels, and F&B brands. Online ordering integration, menu displays, reservation systems, and food photography showcases for Bangalore hospitality businesses. From Indiranagar cafes to MG Road fine dining.", stats: "40+ hospitality websites" },
        { icon: "💰", title: "Finance & Fintech", desc: "Secure, compliant websites for fintech startups, NBFCs, insurance brokers, and financial services. Lead generation, loan calculators, and customer portals with bank-grade security. Bangalore is India's fintech hub — we build websites that convert.", stats: "35+ fintech websites" },
        { icon: "👗", title: "Fashion & Lifestyle", desc: "Visually stunning websites for fashion brands, boutiques, jewelry stores, and lifestyle businesses. E-commerce with lookbooks, size guides, and Instagram integration for Bangalore fashion entrepreneurs.", stats: "65+ fashion websites" }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Industries We Serve in Bangalore</h2>
                    <p className="text-xl text-slate-700">Specialized Website Solutions for Every Sector Across Koramangala, Whitefield, Electronic City & Beyond</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {industries.map((ind, i) => (
                        <div key={i} className="flex gap-6 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl">{ind.icon}</div>
                            <div>
                                <h3 className="text-xl font-bold text-[#0F172A] mb-2">{ind.title}</h3>
                                <p className="text-slate-700 text-base mb-3 leading-relaxed">{ind.desc}</p>
                                <div className="text-xs font-bold text-[#0052CC] bg-blue-50 inline-block px-2 py-1 rounded">Projects: {ind.stats}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const CaseStudies = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Success Stories: Bangalore & Pan-India Businesses Transformed</h2>
                    <p className="text-xl text-slate-700">Real Results from Real Clients — See How We've Helped Businesses Like Yours Succeed Online</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#0052CC]">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-[#0F172A]">Commerceflo</h3>
                                <p className="text-sm text-slate-500 font-bold">Industry: E-Commerce Technology / SaaS | Location: Bangalore</p>
                            </div>
                            <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">Result: 340% More Leads</span>
                        </div>
                        <p className="text-slate-700 text-base mb-4"><strong>Challenge:</strong> Commerceflo, an AI-powered e-commerce platform, needed a website that showcased their advanced technology while generating leads from D2C brands and enterprise retailers. Their existing site failed to communicate their value proposition and had poor conversion rates.</p>
                        <p className="text-slate-700 text-base mb-4"><strong>Solution:</strong> FactoryJet designed and developed a modern SaaS website with interactive product demos, industry-specific landing pages, HubSpot integration, case study showcases, and performance-optimized architecture.</p>
                        <div className="bg-slate-50 p-4 rounded text-sm mb-4">
                            <strong className="block mb-2 text-slate-900">Results:</strong>
                            <ul className="grid grid-cols-2 gap-2 text-slate-700 font-medium">
                                <li>📈 340% increase in demo requests</li>
                                <li>📈 First page Google rankings for 25+ keywords</li>
                                <li>📈 2.5x improvement in time-on-site</li>
                                <li>📈 150% increase in organic traffic</li>
                            </ul>
                        </div>
                        <blockquote className="italic text-slate-600 text-sm border-l-2 border-slate-300 pl-4 font-medium">"FactoryJet understood our complex SaaS product and created a website that effectively communicates our value to e-commerce brands. The lead generation has been phenomenal." — Founder, Commerceflo</blockquote>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#FF6B35]">
                         <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-[#0F172A]">Grofresh Agro</h3>
                                <p className="text-sm text-slate-500 font-bold">Industry: Agriculture / E-Commerce | Location: Pan-India</p>
                            </div>
                            <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">Result: ₹2.5 Cr Revenue</span>
                        </div>
                         <p className="text-slate-700 text-base mb-4"><strong>Challenge:</strong> Grofresh Agro, a fresh produce supplier, wanted to launch B2B e-commerce operations to serve restaurants, hotels, and retailers across major cities including Bangalore. They needed a platform for bulk ordering with route optimization.</p>
                        <p className="text-slate-700 text-base mb-4"><strong>Solution:</strong> FactoryJet built a comprehensive B2B e-commerce platform with custom ordering system, real-time inventory, delivery slot booking, customer management, and logistics integration.</p>
                        <div className="bg-slate-50 p-4 rounded text-sm mb-4">
                             <strong className="block mb-2 text-slate-900">Results:</strong>
                            <ul className="grid grid-cols-2 gap-2 text-slate-700 font-medium">
                                <li>📈 ₹2.5 Crore revenue in first 6 months</li>
                                <li>📈 200+ B2B customers onboarded</li>
                                <li>📈 85% repeat order rate</li>
                                <li>📈 40% reduction in order processing time</li>
                            </ul>
                        </div>
                         <blockquote className="italic text-slate-600 text-sm border-l-2 border-slate-300 pl-4 font-medium">"FactoryJet built exactly what we needed — a robust B2B platform that handles our complex ordering requirements. The results exceeded our expectations." — Director, Grofresh Agro</blockquote>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#0052CC]">
                         <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-[#0F172A]">Belle Maison</h3>
                                <p className="text-sm text-slate-500 font-bold">Industry: Home Decor / E-Commerce | Location: Pan-India</p>
                            </div>
                            <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">Result: 180% Mobile Growth</span>
                        </div>
                         <p className="text-slate-700 text-base mb-4"><strong>Challenge:</strong> Belle Maison, a premium home decor brand, had an outdated Magento store with slow loading, poor mobile experience, and declining conversions. They needed complete platform migration and redesign.</p>
                        <p className="text-slate-700 text-base mb-4"><strong>Solution:</strong> FactoryJet executed complete e-commerce transformation with Magento to Shopify Plus migration, premium visual redesign, mobile-first experience, room visualizer integration, and improved checkout flow.</p>
                         <div className="bg-slate-50 p-4 rounded text-sm mb-4">
                             <strong className="block mb-2 text-slate-900">Results:</strong>
                            <ul className="grid grid-cols-2 gap-2 text-slate-700 font-medium">
                                <li>📈 180% increase in mobile conversions</li>
                                <li>📈 65% reduction in cart abandonment</li>
                                <li>📈 3.2s to 1.4s page load improvement</li>
                                <li>📈 ₹1.5 Crore additional revenue</li>
                            </ul>
                        </div>
                        <blockquote className="italic text-slate-600 text-sm border-l-2 border-slate-300 pl-4 font-medium">"The migration was seamless and the new website is beautiful. Our customers love the mobile experience, and our sales have never been better." — Founder, Belle Maison</blockquote>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#FF6B35]">
                         <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-[#0F172A]">Bombay Petals</h3>
                                <p className="text-sm text-slate-500 font-bold">Industry: Floral / E-Commerce | Location: Mumbai</p>
                            </div>
                            <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">Result: 300% Order Inc.</span>
                        </div>
                        <p className="text-slate-700 text-base mb-4"><strong>Challenge:</strong> Bombay Petals, a premium floral delivery service, needed an e-commerce website for time-sensitive orders, multiple delivery slots, and perishable inventory while conveying premium positioning.</p>
                        <p className="text-slate-700 text-base mb-4"><strong>Solution:</strong> FactoryJet designed a stunning platform with time-slot delivery, real-time inventory, premium visual design, city-wise delivery management, and subscription options.</p>
                         <div className="bg-slate-50 p-4 rounded text-sm mb-4">
                             <strong className="block mb-2 text-slate-900">Results:</strong>
                            <ul className="grid grid-cols-2 gap-2 text-slate-700 font-medium">
                                <li>📈 300% increase in online orders</li>
                                <li>📈 45% increase in average order value</li>
                                <li>📈 92% on-time delivery rate</li>
                                <li>📈 Expanded to 5 new cities</li>
                            </ul>
                        </div>
                         <blockquote className="italic text-slate-600 text-sm border-l-2 border-slate-300 pl-4 font-medium">"FactoryJet created a website that truly reflects our premium brand. The delivery management system is exactly what we needed for perishable products." — Founder, Bombay Petals</blockquote>
                    </div>
                </div>

                 <div className="mt-12 text-center">
                    <p className="text-lg font-bold mb-4">Want Results Like These? Get Started Today.</p>
                    <a href="#contact-form" className="inline-block bg-[#FF6B35] text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-orange-600 transition-colors">
                        Get Your Free Consultation
                    </a>
                </div>
            </div>
        </section>
    );
};
