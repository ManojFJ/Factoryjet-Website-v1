import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import Hero from './components/Hero';
import {
  SocialProof,
  AboutSection,
  ProblemsSection,
  SolutionSection,
  ProcessSection,
  TechnologiesSection,
  LocalSEOSection,
  FinalCTA
} from './components/MainSections';
import {
  ServicesSection,
  PricingSection,
  IndustriesSection,
  CaseStudiesSection,
  TestimonialsSection,
  FaqSection
} from './components/DetailedSections';
import FooterLocal from './components/FooterLocal';
import ExitIntentModal from './components/ExitIntentModal';
import ContactModal from './components/ContactModal';
import StickyMobileCTA from './components/StickyMobileCTA';

const MumbaiPage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  return (
    <>
      <SEOHead
        title="Best Website Design Company in Mumbai | FactoryJet"
        description="FactoryJet is Mumbai's premier industrial web design company. Professional B2B websites, manufacturer catalogs, and e-commerce solutions starting at ₹29,000. Serving Mumbai, Thane, Navi Mumbai, Vasai-Virar & MIDC areas."
        canonical="/locations/mumbai/web-design"
      />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "FactoryJet - Industrial Web Design Company Mumbai",
            "image": "https://www.factoryjet.com/images/factoryjet-mumbai.jpg",
            "url": "https://factoryjet.com/locations/mumbai/web-design/",
            "telephone": "+91-022-XXX-XXXX",
            "email": "mumbai@factoryjet.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Building #20, 10, Ajit Glass Garden Rd, opp. Amrutnagar, Somani Gram, Goregaon West",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "postalCode": "400063",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "19.1646",
              "longitude": "72.8493"
            },
            "priceRange": "₹15,000 - ₹5,00,000+",
            "openingHours": ["Mo-Fr 09:00-19:00", "Sa 10:00-16:00"],
            "areaServed": ["Mumbai", "Thane", "Navi Mumbai", "Vasai-Virar", "Boisar", "Palghar", "Bhiwandi", "Kalyan", "Panvel", "MIDC Andheri", "MIDC Taloja"],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "150"
            },
            "sameAs": [
              "https://www.facebook.com/factoryjet",
              "https://www.linkedin.com/company/factoryjet",
              "https://twitter.com/factoryjet"
            ]
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How much does website design cost in Mumbai?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Website design costs vary based on complexity. At FactoryJet, we offer packages starting at ₹15,000 for basic websites to ₹5,00,000+ for enterprise solutions."
                }
              },
              {
                "@type": "Question",
                name: "How long does it take to build a website?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our streamlined process typically delivers a website in 7 days. More complex projects may take 2-4 weeks."
                }
              },
              {
                "@type": "Question",
                name: "Do you provide e-commerce solutions?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we specialize in e-commerce development with Shopify, WooCommerce, and custom platforms."
                }
              },
              {
                "@type": "Question",
                name: "Can you integrate payment gateways?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we integrate all major payment gateways including Razorpay, PayPal, Stripe for secure transactions."
                }
              },
              {
                "@type": "Question",
                name: "Will my website be mobile responsive?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. All websites are fully responsive and optimized for all devices."
                }
              }
            ]
          })
        }}
      />

      <Header variant="solid" />

      <main className="min-h-screen w-full overflow-x-hidden font-sans">
        <Hero />
        <SocialProof />
        <AboutSection />
        <ProblemsSection />
        <SolutionSection />
        <ServicesSection onOpenModal={openContactModal} />
        <ProcessSection />
        <TechnologiesSection />
        <PricingSection onOpenModal={openContactModal} />
        <IndustriesSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <FaqSection />
        <LocalSEOSection />
        <FinalCTA onOpenModal={openContactModal} />
      </main>

      <FooterLocal />
      <StickyMobileCTA />
      <ExitIntentModal />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
};

export default MumbaiPage;
