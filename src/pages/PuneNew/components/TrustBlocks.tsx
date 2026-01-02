import React, { useState, FormEvent } from 'react';
import { Star, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../firebase';

const FAQ_DATA = [
  { q: "How much does website design cost in Pune?", a: "Website costs in Pune range from ₹15,000 to ₹5,00,000+ depending on complexity. Basic business websites cost ₹15,000-35,000. E-commerce stores range from ₹50,000-1,50,000. Custom web applications cost ₹1,50,000-5,00,000. FactoryJet offers transparent, competitive pricing starting at just ₹15,000 for starter packages, ₹35,000 for professional websites, and ₹49,999 for Shopify stores. We're among the most affordable website design company in Pune without compromising quality." },
  { q: "How long does it take to build a website?", a: "Website development timelines vary significantly. Most Pune agencies take 6-12 weeks for business websites. FactoryJet delivers most websites in 7 days. Complex e-commerce portals take 14-21 days. Our AI-powered development process and experienced team enable rapid delivery without sacrificing quality. We're the fastest website development company in Pune." },
  { q: "Which is the best website design company in Pune?", a: "The best website development company in Pune depends on your specific needs. For businesses seeking affordable, fast, professional websites, FactoryJet is consistently rated among the top choices with 500+ projects and 4.9/5 Google rating. Key factors to consider: industry expertise, portfolio quality, pricing transparency, and post-launch support." },
  { q: "Do you provide mobile responsive websites?", a: "Yes, absolutely. All FactoryJet websites are mobile responsive by default — included in our base pricing. With 78% of users browsing on mobile, this is non-negotiable. Your website looks and works perfectly on all devices. Every website designer in Pune we employ prioritizes mobile-first design." },
  { q: "Can you build Shopify stores?", a: "Yes! We're a leading Shopify store development company in Pune. We build custom Shopify stores with theme customization, payment gateway integration (Razorpay, PayU), shipping integration (Shiprocket), and inventory management. Our Shopify stores are conversion-optimized and launch-ready in 7 days." },
  { q: "Do you offer WordPress website development?", a: "Yes. WordPress website development Pune is one of our core services. We build custom WordPress sites with professional themes, Elementor/Gutenberg builders, SEO optimization, and easy content management. WordPress is perfect for businesses wanting to update their website regularly without technical knowledge." },
  { q: "Do you provide website maintenance after launch?", a: "Yes. All projects include 30-90 days of post-launch support depending on the package. After that, our Annual Maintenance Contracts (AMC) start at just ₹2,999/month. AMC includes: security updates, backups, content updates, performance optimization, and technical support." },
  { q: "Will my website rank on Google?", a: "Yes. SEO is included in all packages: technical SEO setup, meta tags optimization, XML sitemap, schema markup, and local SEO for Pune. For advanced SEO, we offer specialized packages targeting industry-specific keywords. We help you rank for 'website design company in Pune' and your business-specific terms." },
  { q: "Can you build e-commerce websites?", a: "Absolutely. We're a full-service e-commerce design company in Pune and e-commerce development company in Pune. We build on Shopify, WooCommerce, and custom platforms. Features include: payment gateway integration, shipping automation, inventory management, and abandoned cart recovery." },
  { q: "Do you integrate WhatsApp for customer inquiries?", a: "Yes, WhatsApp integration is included in all packages at no extra cost. We add click-to-chat buttons, floating WhatsApp icons, and can integrate WhatsApp Business API for automated responses. WhatsApp is the most effective communication channel for Pune businesses." },
  { q: "Can you build custom web applications?", a: "Yes. Beyond standard websites, we develop custom web applications using React, Node.js, Python, and other technologies. CRM systems, booking platforms, membership portals, dashboards — our website developer in Pune team handles complex requirements." },
  { q: "What payment gateways do you integrate?", a: "We integrate all major Indian and international payment gateways: Razorpay, PayU, CCAvenue, Cashfree for domestic. Stripe and PayPal for international. UPI payments, credit/debit cards, net banking — all payment methods your customers need." },
  { q: "Do you provide web hosting?", a: "We assist with hosting setup on reliable providers. For WordPress sites, we recommend managed hosting (₹500-3,000/month). For high-performance sites, we deploy on AWS, Google Cloud, or Vercel. First-year hosting guidance is included in our packages." },
  { q: "How many design revisions are included?", a: "Unlimited revisions during the design phase. We work until you're 100% satisfied before moving to development. Most clients approve designs within 2-3 revision cycles." },
  { q: "Can I update website content myself after launch?", a: "Yes. We build on user-friendly CMS platforms (WordPress, Shopify) that allow you to update content, add products, and modify pages without technical knowledge. Admin training is included in every project." },
  { q: "Do you serve areas outside Pune city?", a: "Yes. We serve the entire Pune Metropolitan Region: Hinjewadi, Kharadi, Pimpri-Chinchwad, Chakan, Talegaon, Hadapsar, Wakad, and all surrounding areas. We also serve clients across Maharashtra and India remotely." },
  { q: "Can you redesign my existing website?", a: "Yes. Website redesign is one of our popular services. We audit your current site, migrate content, implement modern responsive design, and preserve your SEO rankings with proper redirects. Redesign starts at ₹25,000." },
  { q: "Do you sign contracts and NDAs?", a: "Yes. We provide detailed project contracts covering scope, timeline, deliverables, payment terms, and IP ownership. We sign NDAs for clients with sensitive business information." },
  { q: "What's included in the ₹15,000 starter package?", a: "The Starter Package includes: up to 5 pages, mobile-responsive design, basic SEO setup, contact form, WhatsApp integration, Google Maps, SSL certificate, and 30 days support. Perfect for small businesses and professionals getting online." },
  { q: "Can we have in-person meetings in Pune?", a: "Yes, for Pune-based clients, we offer in-person meetings at our office in Kalyani Nagar or at your location. Most day-to-day communication happens through video calls and WhatsApp for efficiency." },
  { q: "Do you offer EMI or payment plans?", a: "Yes. Standard terms: 50% advance, 50% on completion. For projects above ₹1 Lakh, we offer milestone-based payments. EMI options available through select partners for larger projects." },
  { q: "What is your website development process?", a: "Our 7-day process: Days 1-2 — Discovery, requirements, wireframes. Days 3-4 — Design, content. Days 5-6 — Development, integrations. Day 7 — Testing, launch. Daily updates throughout." },
  { q: "Can you showcase our portfolio/work on the website?", a: "Absolutely. Portfolio showcase is critical for credibility. We create dedicated sections for: project galleries, case studies, client testimonials, and team profiles. Visual portfolios with filtering and categories are our specialty." },
  { q: "What about website speed and performance?", a: "We optimize aggressively for speed: image compression, code optimization, CDN integration, and caching. Our websites load in under 2 seconds. Fast websites rank better and convert better. Performance is a priority for every website developer in Pune on our team." },
  { q: "Do you provide digital marketing services?", a: "Yes. FactoryJet offers comprehensive digital marketing: SEO (Search Engine Optimization), Google Ads, social media marketing, and content marketing. We're a full-service web design agency in Pune with digital marketing capabilities." },
  { q: "What's the difference between hiring you vs. a freelancer?", a: "Freelancers have unpredictable timelines and limited expertise. FactoryJet provides: guaranteed 7-day delivery, full-stack expertise, dedicated project manager, post-launch support, and ongoing AMC partnership. We're a professional website development agency in Pune, not individuals." },
  { q: "Can you integrate CRM systems?", a: "Yes. We integrate websites with: HubSpot, Zoho CRM, Salesforce, and other CRM platforms. Lead forms sync automatically with your CRM. Marketing automation and lead tracking included." },
  { q: "What if something breaks after launch?", a: "All projects include 30-90 days support. We fix bugs and issues at no cost during this period. After that, AMC plans cover ongoing maintenance. Critical issues resolved within 24 hours." },
  { q: "Do you build multi-language websites?", a: "Yes. We build websites in English, Hindi, Marathi, and other languages. Multi-language sites with proper hreflang tags for SEO. Language switchers and region-specific content supported." },
  { q: "How do I get started with FactoryJet?", a: "Three easy steps: 1) Fill the form or call/WhatsApp for free consultation. 2) We understand your requirements and send proposal within 24 hours. 3) Once approved, project starts within 48 hours. Most clients go from first call to live website in 10 days. Start with the top website development company in Pune today." }
];

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      title: "CEO, Software Company, Hinjewadi",
      quote: "FactoryJet understood our IT company's needs from day one. We've seen a 300% increase in inbound inquiries since launch."
    },
    {
      name: "Priya Patel",
      title: "Founder, E-Commerce Brand, Kharadi",
      quote: "They launched our Shopify store in 6 days and we hit ₹25 Lakh revenue in month one. Best website design company in Pune."
    },
    {
      name: "Amit Shah",
      title: "Director, Manufacturing Co, Chakan",
      quote: "80% of our customers browse on phones. FactoryJet delivered a fast, beautiful mobile site. Worth every rupee."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-jet-blue to-[#003D99] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8 md:mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="fill-current w-4 h-4 md:w-5 md:h-5" />
                ))}
              </div>
              <p className="italic text-blue-100 mb-6 text-sm leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <div className="font-bold font-heading">{testimonial.name}</div>
                <div className="text-xs text-blue-200">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FAQ = () => {
  return (
    <section id="faq" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-jet-navy">Frequently Asked Questions</h2>
          <p className="text-jet-gray mt-2 text-sm md:text-base">Everything you need to know about website design and development in Pune.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-10">
          {FAQ_DATA.map((faq, index) => (
            <div key={index} className="border-b border-jet-light pb-6 md:pb-8 last:border-0 break-inside-avoid">
              <h3 className="text-base md:text-lg font-bold text-jet-navy mb-3 flex items-start gap-3 font-heading">
                <span className="text-jet-orange text-lg md:text-xl mt-0.5">Q.</span>
                {faq.q}
              </h3>
              <p className="text-jet-slate text-sm leading-relaxed pl-7 md:pl-8">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const LocalSEO = () => {
  return (
    <section className="py-12 md:py-20 bg-jet-white">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-jet-navy">Visit FactoryJet Pune</h2>
          <div className="space-y-4 md:space-y-6 text-jet-slate">
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 md:w-6 md:h-6 text-jet-blue shrink-0" />
              <div>
                <h4 className="font-bold text-jet-navy font-heading text-sm md:text-base">Office Address</h4>
                <p className="text-sm md:text-base">Office 312, Cerebrum IT Park, Kalyani Nagar,<br/>Pune, Maharashtra 411014</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="w-5 h-5 md:w-6 md:h-6 text-jet-blue shrink-0" />
              <div>
                <h4 className="font-bold text-jet-navy font-heading text-sm md:text-base">Phone & WhatsApp</h4>
                <p className="text-sm md:text-base">+91-020-XXX-XXXX</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="w-5 h-5 md:w-6 md:h-6 text-jet-blue shrink-0" />
              <div>
                <h4 className="font-bold text-jet-navy font-heading text-sm md:text-base">Email</h4>
                <p className="text-sm md:text-base">pune@factoryjet.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-5 h-5 md:w-6 md:h-6 text-jet-blue shrink-0" />
              <div>
                <h4 className="font-bold text-jet-navy font-heading text-sm md:text-base">Business Hours</h4>
                <p className="text-sm md:text-base">Mon – Fri: 9:00 AM – 7:00 PM<br/>Sat: 10:00 AM – 4:00 PM</p>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8">
            <h4 className="font-bold text-jet-navy mb-2 font-heading text-sm md:text-base">Service Areas:</h4>
            <p className="text-sm text-jet-gray leading-relaxed">
              We serve businesses across: Pune City, Hinjewadi, Kharadi, Viman Nagar, Magarpatta, Hadapsar, Wakad, Baner, Aundh, Pimpri-Chinchwad, Bhosari, Chakan, Talegaon, Ranjangaon, Shivajinagar, Koregaon Park, Kothrud, Deccan, Camp, Kalyani Nagar, Yerawada, and all Pune Metropolitan Region areas.
            </p>
          </div>
        </div>

        <div className="bg-gray-200 rounded-2xl overflow-hidden h-64 md:h-96 shadow-inner border border-jet-light order-first lg:order-last">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5273760453755!2d73.9012!3d18.5545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c13d9643d997%3A0xb36b285f7652750!2sKalyani%20Nagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{border:0}}
            allowFullScreen={true}
            loading="lazy"
            title="FactoryJet Pune Office Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using direct db import
      // Direct db usage

      await addDoc(collection(db, 'pune_leads'), {
        ...formData,
        source: 'Final CTA Form',
        timestamp: serverTimestamp(),
        page: 'Pune'
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-gradient-to-r from-jet-navy to-[#1E3A8A] text-white text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">Ready to Launch Your Professional Website?</h2>
        <p className="text-base md:text-lg text-blue-200 mb-8 md:mb-10">Stop losing customers to competitors. Get a professional website that works 24/7 to generate leads.</p>

        <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-lg mx-auto mb-8 md:mb-10 text-center">
          <div className="bg-white/10 rounded-lg p-2 md:p-3">
            <div className="font-bold text-lg md:text-xl font-heading">100%</div>
            <div className="text-[10px] md:text-xs text-blue-200">Satisfaction</div>
          </div>
          <div className="bg-white/10 rounded-lg p-2 md:p-3">
            <div className="font-bold text-lg md:text-xl font-heading">7 Days</div>
            <div className="text-[10px] md:text-xs text-blue-200">Avg Delivery</div>
          </div>
          <div className="bg-white/10 rounded-lg p-2 md:p-3">
            <div className="font-bold text-lg md:text-xl font-heading">24/7</div>
            <div className="text-[10px] md:text-xs text-blue-200">Pune Support</div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 max-w-2xl mx-auto mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
              required
            />
            <textarea
              placeholder="Tell us about your project"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={4}
              className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-jet-orange hover:bg-orange-600 text-white px-8 py-3.5 md:px-10 md:py-5 rounded-lg font-bold text-lg md:text-xl transition-all shadow-xl hover:shadow-orange-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Get Free Quote Today'}
            </button>

            {submitStatus === 'success' && (
              <p className="text-green-300 text-sm text-center">Thank you! We'll contact you within 2 hours.</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-300 text-sm text-center">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
          <a href="tel:+910200000000" className="bg-transparent border-2 border-white hover:bg-white hover:text-jet-navy text-white px-8 py-3.5 md:px-10 md:py-5 rounded-lg font-bold text-lg md:text-xl transition-all">
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};
