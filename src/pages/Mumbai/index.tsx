import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "./components/Hero";
import {
  SocialProof,
  AboutSection,
  ProblemsSection,
  SolutionSection,
  ProcessSection,
  TechnologiesSection,
  LocalSEOSection,
  FinalCTA,
} from "./components/MainSections";
import {
  ServicesSection,
  PricingSection,
  IndustriesSection,
  CaseStudiesSection,
  TestimonialsSection,
  FaqSection,
} from "./components/DetailedSections";
import Footer from "./components/Footer";
import ExitIntentModal from "./components/ExitIntentModal";
import { faqData } from "./data";
import { MessageCircle, Phone } from "lucide-react";

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FactoryJet - Industrial Web Design Company Mumbai",
  image: "https://www.factoryjet.com/images/factoryjet-mumbai.jpg",
  url: "https://www.factoryjet.com/website-design-company-mumbai",
  telephone: "+91-022-XXX-XXXX",
  email: "mumbai@factoryjet.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 501, Trade Centre, BKC",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400051",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "19.0596",
    longitude: "72.8656",
  },
  priceRange: "₹15,000 - ₹5,00,000+",
  openingHours: ["Mo-Fr 09:00-19:00", "Sa 10:00-16:00"],
  areaServed: [
    "Mumbai",
    "Thane",
    "Navi Mumbai",
    "Vasai-Virar",
    "Boisar",
    "Palghar",
    "Bhiwandi",
    "Kalyan",
    "Panvel",
    "MIDC Andheri",
    "MIDC Taloja",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "150",
  },
  sameAs: [
    "https://www.facebook.com/factoryjet",
    "https://www.linkedin.com/company/factoryjet",
    "https://twitter.com/factoryjet",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

/* --- Sticky Mobile Bottom Bar --- */
const StickyMobileCTA = () => (
  <div className="fixed bottom-0 left-0 w-full z-50 md:hidden flex shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] font-sans">
    <a
      href="https://wa.me/919999999999"
      className="flex-1 bg-[#25D366] text-white py-3.5 flex items-center justify-center gap-2 font-bold text-sm active:bg-green-700"
    >
      <MessageCircle className="w-5 h-5" /> WhatsApp
    </a>
    <a
      href="tel:+910000000000"
      className="flex-1 bg-primary text-white py-3.5 flex items-center justify-center gap-2 font-bold text-sm active:bg-blue-800"
    >
      <Phone className="w-5 h-5" /> Call Now
    </a>
  </div>
);

function MumbaiPage() {
  return (
    <div className="font-sans antialiased text-navy bg-white pb-14 md:pb-0">
      <Helmet>
        <title>FactoryJet - Industrial Web Design Company Mumbai</title>
        <meta
          name="description"
          content="FactoryJet is a leading industrial web design company in Mumbai. We offer a wide range of services to help you create a professional and effective website for your business."
        />
      </Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* SECTION 1: HERO */}
      <Hero />

      {/* SECTION 2: SOCIAL PROOF */}
      <SocialProof />

      {/* SECTION 3: ENTITY BLOCK */}
      <AboutSection />

      {/* SECTION 4: PROBLEMS */}
      <ProblemsSection />

      {/* SECTION 5: SOLUTION */}
      <SolutionSection />

      {/* SECTION 6: SERVICES */}
      <ServicesSection />

      {/* SECTION 7: PROCESS */}
      <ProcessSection />

      {/* SECTION 8: TECHNOLOGIES */}
      <TechnologiesSection />

      {/* SECTION 9: PRICING & ROI CALCULATOR */}
      <PricingSection />

      {/* SECTION 10: INDUSTRIES */}
      <IndustriesSection />

      {/* SECTION 11: CASE STUDIES */}
      <CaseStudiesSection />

      {/* SECTION 12: TESTIMONIALS */}
      <TestimonialsSection />

      {/* SECTION 13: FAQS */}
      <FaqSection />

      {/* SECTION 14: LOCAL SEO */}
      <LocalSEOSection />

      {/* SECTION 15: FINAL CTA */}
      <FinalCTA />

      {/* SECTION 16: FOOTER */}
      <Footer />

      {/* MOBILE STICKY BAR */}
      <StickyMobileCTA />

      {/* EXIT INTENT POPUP */}
      <ExitIntentModal />
    </div>
  );
}

export default MumbaiPage;
