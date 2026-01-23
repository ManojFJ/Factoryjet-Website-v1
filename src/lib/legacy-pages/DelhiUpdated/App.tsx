'use client';

import React from 'react';
import Header from '@/components/Header';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import StickyMobileCTA from './components/StickyMobileCTA';
import Footer from '@/components/Footer';
import { 
  HeroSection, 
  HeroDescription,
  SocialProof, 
  AboutBlock, 
  ProblemSection, 
  SolutionSection, 
  ServicesSection,
  ProcessSection,
  PricingSection,
  IndustriesSection,
  CaseStudiesSection,
  TestimonialsSection,
  FAQSection,
  LocalSEOSection,
  FinalCTA,
  
} from './components/Sections';

// Schema Markup helper
const SchemaMarkup = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FactoryJet - Website Design Company Delhi NCR",
    "url": "https://factoryjet.com/website-design-company-delhi-ncr",
    "telephone": "+91-9999999999",
    "email": "delhi@factoryjet.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "WeWork, Two Horizon Center, Golf Course Road, Sector 43",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122002",
      "addressCountry": "IN"
    },
    "priceRange": "₹29,999 - ₹5,00,000+"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
};

const DelhiUpdatedPage: React.FC = () => {
  return (
    <div className="font-sans antialiased text-slate pb-16 md:pb-0"> {/* Add padding bottom for sticky mobile CTA */}
      <SchemaMarkup />
      <Header variant="solid" />
      {/* <Header /> */}
      <main>
        <HeroSection />
        <HeroDescription />
        <SocialProof />
        <AboutBlock />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <ProcessSection />
        {/* Tech Section integrated into About/Services implicitly for brevity while keeping key content */}
        <PricingSection />
        <IndustriesSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <FAQSection />
        <LocalSEOSection />
        <FinalCTA />
      </main>
      {/* <Footer /> */}
      <Footer />
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </div>
  );
};

export default DelhiUpdatedPage;