import { FaqItem, ServiceItem, CaseStudyItem, TestimonialItem } from './types';

export const servicesData: ServiceItem[] = [
  {
    title: "Starter Industrial Website",
    idealFor: "Small manufacturers, workshops, new exporters",
    description: "Perfect for Mumbai's small manufacturers and industrial workshops looking to establish online presence quickly. Basic catalog website with product showcase, about company, and contact/inquiry form.",
    features: ["5 Page Industrial Website", "Up to 25 Products/Services Listing", "Mobile Responsive Design", "WhatsApp Chat Integration", "Basic SEO Setup", "Contact Form with Email", "Google Maps Integration", "SSL Certificate", "30 Days Post-Launch Support"]
  },
  {
    title: "Manufacturer Business Website",
    idealFor: "Medium manufacturers, established exporters",
    description: "Comprehensive manufacturer website for established industrial businesses in Thane, Navi Mumbai, and MIDC areas. Full product catalog, export credentials, and lead generation optimization.",
    features: ["Up to 15 Pages Custom Design", "Unlimited Product Catalog", "Export Credentials Section (ISO, CE, FDA)", "Factory Gallery & Machinery Photos", "Client Testimonials Section", "Blog for Industry Content", "Advanced SEO Optimization", "CRM Integration Ready", "60 Days Support"]
  },
  {
    title: "Industrial Catalog Website",
    idealFor: "Large manufacturers, distributors with extensive product lines",
    description: "Complete product catalog website for manufacturers with 100+ products. Category management, specifications, datasheets, and bulk inquiry system.",
    features: ["Unlimited Pages", "Advanced Product Catalog System", "Category & Sub-category Management", "Product Specifications & Datasheets", "Bulk Inquiry/RFQ System", "Dealer Locator (Optional)", "Multi-language Support", "Export Market Targeting", "90 Days Support"]
  },
  {
    title: "B2B E-Commerce Portal",
    idealFor: "Wholesalers, distributors, B2B sellers",
    description: "Full B2B e-commerce platform for Mumbai wholesalers and distributors. Customer accounts, tiered pricing, bulk ordering, and credit management.",
    features: ["B2B Customer Accounts", "Tiered/Customer-Specific Pricing", "Bulk Order Management", "Credit Terms & Invoicing", "ERP Integration (SAP, Tally, ERPNext)", "Purchase Order Workflows", "Analytics Dashboard", "Priority Support", "Dedicated Account Manager"]
  },
  {
    title: "Export Lead Generation Website",
    idealFor: "Exporters targeting international markets",
    description: "Specialized websites optimized for international buyer discovery. Designed to rank for export-related searches and convert international inquiries.",
    features: ["International SEO Optimization", "Multi-currency Display", "Export Credentials Showcase", "Country-Specific Landing Pages", "Video Factory Tour Integration", "Live Chat for Different Time Zones", "Alibaba/Global Sources Integration", "Export Documentation Download"]
  },
  {
    title: "Chemical & Pharma Website",
    idealFor: "Chemical manufacturers, pharma companies, API suppliers",
    description: "Compliance-ready websites for MIDC's chemical and pharmaceutical sector. Product documentation, safety data sheets, and regulatory credentials.",
    features: ["Product Documentation System", "Safety Data Sheet (SDS) Downloads", "Regulatory Credentials Display", "B2B Inquiry Management", "Manufacturing Facilities Showcase", "Quality Control Section", "Export License Information", "Compliance-Ready Architecture"]
  },
  {
    title: "Engineering & Fabrication Website",
    idealFor: "Engineering workshops, fabricators, job shops",
    description: "Professional websites for Thane and Navi Mumbai's engineering and fabrication sector. Project portfolios, capabilities showcase, and inquiry generation.",
    features: ["Project Portfolio Gallery", "Capabilities & Machinery Showcase", "Materials & Processes Section", "Capacity & Lead Time Display", "Client List & Testimonials", "RFQ/Quote Request System", "Industry Certifications Display", "Technical Blog Section"]
  },
  {
    title: "Textile & Garment Website",
    idealFor: "Textile mills, garment manufacturers, fabric suppliers",
    description: "Visual-rich websites for Mumbai and Bhiwandi's textile sector. Fabric catalogs, color swatches, and B2B ordering capabilities.",
    features: ["Visual Fabric Catalog", "Color & Pattern Galleries", "MOQ & Pricing Display", "Sample Request System", "Manufacturing Capacity Info", "Export Market Focus (USA, EU, UAE)", "Sustainability Section", "Trade Show Calendar"]
  },
  {
    title: "Food Processing Website",
    idealFor: "Food manufacturers, processors, FSSAI certified businesses",
    description: "Websites for Mumbai's food processing industry with compliance focus, product catalogs, and B2B lead generation.",
    features: ["FSSAI License Display", "Product Catalog with Nutrition Info", "Private Label/OEM Section", "Manufacturing Facility Showcase", "Quality & Hygiene Certifications", "Distributor Inquiry System", "Recipe/Application Content", "Export Documentation"]
  },
  {
    title: "Website Redesign for Manufacturers",
    idealFor: "Industrial businesses with outdated websites",
    description: "Modernize your existing manufacturer website. Mobile responsive redesign with SEO preservation and content migration.",
    features: ["Current Site Audit", "Modern Mobile-Responsive Redesign", "Content & Product Migration", "SEO Preservation (301 Redirects)", "Performance Optimization", "Catalog System Upgrade", "Lead Generation Optimization", "60 Days Support"]
  }
];

export const caseStudiesData: CaseStudyItem[] = [
  {
    badge: "AGRITECH | ERP + DIGITAL TRANSFORMATION",
    client: "Grofresh Agro Food Pvt. Ltd.",
    industry: "Agriculture & Food Processing",
    services: "ERPNext Implementation, Complete Digital Transformation, Corporate Website",
    challenge: "Grofresh, a growing agritech and food processing company, was struggling with manual processes across finance, inventory, HR, and operations. Their existing website was outdated and not generating leads. Month-end closing took 15+ days, and there was no real-time visibility into business operations.",
    solution: "FactoryJet implemented comprehensive digital transformation: Complete ERPNext implementation covering Finance & Accounting, Inventory Management, Purchase & Sales, HR & Payroll, and Operations. Modern corporate website with lead generation optimization. Mobile dashboards for management decision-making. Integration of all business processes into a unified system.",
    results: ["100% Business Digitization Achieved", "Month-end close reduced from 15 days to 2 days", "Real-time inventory tracking across warehouses", "Automated purchase orders and sales workflows", "Complete financial visibility and compliance", "Mobile dashboards for management", "70% improvement in operational efficiency"],
    testimonial: "FactoryJet transformed our entire business operations. From manual spreadsheets to a fully digital, automated system. The ERP implementation and website have completely changed how we operate.",
    testimonialAuthor: "Bhoop Singh, Director, Grofresh Agro Food",
    image: "https://images.unsplash.com/photo-1530507629858-e4977d01e7e5?auto=format&fit=crop&w=800&q=80" // High-quality Tractor/Farm conceptual image
  },
  {
    badge: "E-COMMERCE | B2B + DTC DUAL STORE",
    client: "Belle Maison",
    industry: "Home & Lifestyle Products",
    services: "B2B E-Commerce Platform + Direct-to-Consumer Online Store",
    challenge: "Belle Maison needed to serve two distinct customer segments: wholesale B2B buyers and retail consumers. Managing two separate systems was inefficient, and they lacked a professional online presence to compete with established players.",
    solution: "FactoryJet developed a comprehensive dual e-commerce solution: B2B wholesale portal with volume pricing, credit terms, and bulk ordering. Beautiful DTC consumer store for retail customers. Unified inventory management across both storefronts. Razorpay and UPI payment integration. Shiprocket shipping automation for both B2B and DTC orders.",
    results: ["₹1.5 Cr Sales in 120 Days", "800+ Products Successfully Listed", "Abandoned Cart Recovery Generated ₹15 Lakh Additional Revenue", "2x Revenue Channels (B2B + DTC)", "Seamless B2B/DTC Operations Management", "40% Reduction in Order Processing Time"],
    keyAchievement: "Dual storefronts serving B2B wholesalers and retail consumers from a single integrated platform.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80" // Modern Green Sofa/Furniture Interior
  },
  {
    badge: "INTERNATIONAL | EXPORT LEAD GENERATION",
    client: "Mawa UAE",
    industry: "International Retail & FMCG",
    services: "Export-Focused Website, International SEO, Multi-Market Targeting",
    challenge: "Mawa UAE, an FMCG company targeting Middle East markets, needed a professional web presence to attract distributors and retail partners across UAE, Saudi Arabia, and other Gulf countries. They had zero digital presence and were losing to competitors with established online visibility.",
    solution: "FactoryJet implemented export-focused digital strategy: Professional corporate website optimized for UAE/GCC markets. Multi-language support (English, Arabic). Product catalog with distributor inquiry system. International SEO targeting Middle East buyers. Trade show integration and B2B lead generation.",
    results: ["International Market Penetration Achieved", "500+ Distributor Inquiries in First 6 Months", "Established Partnerships in 5 Gulf Countries", "3x Increase in Trade Show Lead Quality", "Professional Brand Positioning in Competitive Market", "Featured in Industry Publications"],
    keyAchievement: "From zero international presence to established brand in Gulf FMCG market within 6 months.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" // Shipping Containers / Export logistics
  },
  {
    badge: "E-COMMERCE | B2B FLOWERS PLATFORM",
    client: "Bombay Petals",
    industry: "Floriculture & Wholesale Flowers",
    services: "B2B E-Commerce Platform, Perishable Logistics Integration",
    challenge: "Bombay Petals, a wholesale flower supplier in Mumbai, operated entirely through phone orders and WhatsApp. Order management was chaotic, inventory was never accurate, and they were losing customers to competitors with online ordering. Managing perishable inventory added complexity.",
    solution: "FactoryJet developed specialized B2B e-commerce for perishables: B2B ordering platform with real-time inventory. Category-wise flower catalog with images. Tiered pricing for different buyer segments (retail florists, event planners, hotels). Same-day delivery scheduling. WhatsApp order confirmation integration. Mobile app for order management.",
    results: ["300% Increase in Order Volume", "50% Reduction in Order Errors", "Real-Time Inventory Tracking for Perishables", "85% of Orders Now Through Platform", "Expanded Customer Base Across Mumbai", "60% Reduction in Phone Order Time"],
    testimonial: "We never thought B2B e-commerce could work for flowers. FactoryJet built a platform that handles our perishable inventory perfectly. Our florist customers love ordering online.",
    testimonialAuthor: "Bombay Petals Management",
    image: "https://images.unsplash.com/photo-1563241527-30058e578fae?auto=format&fit=crop&w=800&q=80" // Wholesale Flower Market
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    quote: "FactoryJet understood our industrial business from day one. They built a manufacturer website that actually generates export inquiries. We've received orders from UAE and Germany just from Google search.",
    name: "Rajesh Mehta",
    title: "Director, Chemical Manufacturing Company, MIDC Taloja",
    rating: 5
  },
  {
    quote: "We were paying ₹15 Lakh yearly to IndiaMART for leads. FactoryJet built us a customized website that now generates more inquiries than the marketplace — with zero commission. Best investment we made.",
    name: "Suresh Patel",
    title: "Owner, Engineering Works, Thane",
    rating: 5
  },
  {
    quote: "The mobile responsive design was critical for us. Our buyers check products on phones during trade shows. FactoryJet delivered a fast, professional site in just 5 days. Highly recommended for manufacturers.",
    name: "Priya Sharma",
    title: "Export Manager, Textile Mill, Bhiwandi",
    rating: 5
  },
  {
    quote: "Finally, a web design company that understands B2B! They built our distributor portal with tiered pricing and credit management. Our dealers love it, and order processing is 50% faster.",
    name: "Amit Kumar",
    title: "MD, Wholesale Distribution Company, Bhiwandi",
    rating: 5
  }
];

export const faqData: FaqItem[] = [
  {
    question: "How much does industrial web design cost in Mumbai?",
    answer: "Industrial website costs vary by complexity. At FactoryJet, we offer value-driven packages: 'Starter' for basic brochure sites (5-7 pages), 'Pro' for custom business sites (10-20 pages), 'Premium' for advanced e-commerce, and 'Enterprise' for custom builds. We also provide custom quotes. Transparency is key—no hidden costs."
  },
  {
    question: "How long does it take to build a manufacturer website?",
    answer: "Our streamlined process typically delivers a 'Starter' or 'Pro' website in just 7 days. More complex 'Premium' or 'Enterprise' projects, including large B2B e-commerce portals or extensive catalogs, may take 2-4 weeks. We prioritize speed without compromising quality."
  },
  {
    question: "Which is the best industrial web design company in Mumbai?",
    answer: "FactoryJet is top-rated (4.9/5) for industrial web design in Mumbai. We specialize in the manufacturing sector, understanding B2B buyer psychology, export lead generation, and technical product catalogs better than generic agencies."
  },
  {
    question: "Do you provide mobile responsive websites?",
    answer: "Yes, 100%. All FactoryJet websites are mobile-first. With 78% of B2B buyers researching on phones, we ensure your catalog, specs, and inquiry forms work perfectly on all devices."
  },
  {
    question: "Can you help us get export leads through the website?",
    answer: "Absolutely. Our 'Pro' and 'Premium' packages include export-focused SEO. We target international keywords (e.g., \"Manufacturer in India\") to attract buyers from UAE, USA, Europe, and Africa."
  },
  {
    question: "Do you provide website maintenance after launch?",
    answer: "Yes. We offer an Annual Maintenance Contract (AMC) for just ₹2,999/month. This includes security updates, backups, content updates, and priority support to keep your business running smoothly."
  },
  {
    question: "Will my website rank on Google for industrial searches?",
    answer: "Yes. SEO is integrated into our build process. 'Starter' includes basic setup, while 'Pro' and 'Premium' include advanced on-page SEO, schema markup, and keyword optimization for higher visibility."
  },
  {
    question: "Can you add our entire product catalog to the website?",
    answer: "Yes. We specialize in large catalogs. Whether you have 50 or 5,000 products, we organize them with categories, filters, specifications, and downloadables (PDFs), making it easy for buyers to find what they need."
  },
  {
    question: "Do you integrate WhatsApp for customer inquiries?",
    answer: "Yes, WhatsApp integration is standard across all packages. It's the fastest way for B2B buyers to connect with you. We can also set up WhatsApp Business API for automated greetings."
  },
  {
    question: "Can you build B2B e-commerce with dealer pricing?",
    answer: "Yes. Our 'Premium' and 'Enterprise' packages support B2B e-commerce features like gated content, dealer logins, tiered pricing, bulk order forms, and MOQ (Minimum Order Quantity) settings."
  },
  {
    question: "What payment gateways do you integrate?",
    answer: "We integrate all major gateways including Razorpay, PayU, Stripe (for exports), and PayPal. We can also implement offline payment methods like NEFT/RTGS instructions for B2B orders."
  },
  {
    question: "Do you provide web hosting?",
    answer: "'Starter' packages often include secure hosting. For larger sites, we assist in setting up high-performance cloud hosting (AWS, DigitalOcean, or managed WordPress) ensuring speed and security."
  },
  {
    question: "How many design revisions are included?",
    answer: "'Starter' includes 1 revision round. 'Pro' includes 3 revisions. We work collaboratively to ensure the design matches your brand vision before development begins."
  },
  {
    question: "Can I update website content myself after launch?",
    answer: "Yes. We build on user-friendly CMS platforms (like WordPress or custom admin panels). You will be able to add products, change photos, and update text without coding knowledge. Training is provided."
  },
  {
    question: "Do you serve areas outside Mumbai city?",
    answer: "Yes. While HQ'd in Mumbai/Bangalore, we serve the entire industrial belt: Thane, Navi Mumbai, Vasai-Virar, Boisar, Palghar, Bhiwandi, Pune, and Gujarat. We also work with clients globally."
  },
  {
    question: "Can you integrate with IndiaMART and TradeIndia?",
    answer: "Yes. We can link your website to your marketplace profiles or embed trust badges. We can also help redirect marketplace traffic to your own site to save on commissions."
  },
  {
    question: "Do you sign contracts and NDAs?",
    answer: "Yes. We are a professional agency. We provide clear contracts outlining deliverables and costs. We are happy to sign NDAs to protect your proprietary manufacturing processes or client lists."
  },
  {
    question: "What's included in the Starter package?",
    answer: "The Starter package is an essential brochure site (5-7 pages) including responsive design, basic SEO, contact forms, and secure hosting. Perfect for startups and small workshops."
  },
  {
    question: "Can we have in-person meetings in Mumbai?",
    answer: "Yes. For Mumbai-based clients, we can arrange site visits or meetings at our BKC office. However, we also efficiently manage projects via video calls and WhatsApp to save time."
  },
  {
    question: "Do you offer EMI or payment plans?",
    answer: "Yes. We offer flexible payment terms. Typically 50% advance and 50% on completion. For larger 'Enterprise' projects, milestone-based payments are available."
  },
  {
    question: "What is your website development process?",
    answer: "Our process is: 1. Discovery (Requirements), 2. Wireframing & Design, 3. Content Creation, 4. Development, 5. Testing, 6. Launch. We keep you updated at every step."
  },
  {
    question: "Can you showcase our factory and machinery on the website?",
    answer: "Yes. \"Factory Tour\" pages build immense trust. We can structure galleries or video sections to showcase your infrastructure, machinery, and production capacity."
  },
  {
    question: "What about website speed and performance?",
    answer: "We optimize for Core Web Vitals. We use image compression, caching, and clean code to ensure your site loads in under 3 seconds, which is crucial for SEO and user retention."
  },
  {
    question: "Do you provide digital marketing services?",
    answer: "Yes. Beyond design, we offer SEO, Content Marketing, Google Ads, and Social Media management through our 'Growth' and 'Pro' digital marketing packages."
  },
  {
    question: "What's the difference between hiring you vs. a freelancer?",
    answer: "Reliability and Expertise. Unlike freelancers who may disappear, we are a registered agency with a dedicated team, support SLAs, and deep industrial domain knowledge."
  },
  {
    question: "Can you add ISO, CE, FDA certification badges?",
    answer: "Yes. Trust signals are vital for exports. We prominently display your ISO, CE, FDA, and other certifications to reassure international buyers of your quality standards."
  },
  {
    question: "What if something breaks after launch?",
    answer: "All packages come with a post-launch support period (30-90 days). Critical issues are handled with priority. Our AMC ensures long-term stability."
  },
  {
    question: "Do you build multi-language websites?",
    answer: "Yes. For exporters targeting specific regions (e.g., Middle East, Europe), we can implement multi-language support (English, Arabic, German, etc.) in our 'Enterprise' tier."
  },
  {
    question: "Can you integrate with CRM or ERP systems?",
    answer: "Yes. Our 'Enterprise' web packages and specific CRM/ERP implementation services cover integrations with Zoho, Salesforce, Tally, SAP, and ERPNext for seamless data flow."
  },
  {
    question: "How do I get started with FactoryJet?",
    answer: "Simply click \"Get Free Quote\" or WhatsApp us. We'll discuss your requirements, recommend the best package (Starter, Pro, etc.), and send a formal proposal within 24 hours."
  }
];