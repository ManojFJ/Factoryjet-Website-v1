import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import HeroSection from './components/HeroSection';
import HeroDescription from './components/HeroDescription';
import SocialProof from './components/SocialProof';

// Lazy load below-the-fold components
const AboutBlock = lazy(() => import('./components/AboutBlock'));
const ProblemSection = lazy(() => import('./components/ProblemSection'));
const SolutionSection = lazy(() => import('./components/SolutionSection'));
const ServicesSection = lazy(() => import('./components/ServicesSection'));
const ProcessSection = lazy(() => import('./components/ProcessSection'));
const PricingSection = lazy(() => import('./components/PricingSection'));
const IndustriesSection = lazy(() => import('./components/IndustriesSection'));
const CaseStudiesSection = lazy(() => import('./components/CaseStudiesSection'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const FAQSection = lazy(() => import('./components/FAQSection'));
const LocalSEOSection = lazy(() => import('./components/LocalSEOSection'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));
const Footer = lazy(() => import('./components/Footer'));
const FloatingWhatsApp = lazy(() => import('./components/FloatingWhatsApp'));
const StickyMobileCTA = lazy(() => import('./components/StickyMobileCTA'));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-4 border-jet-blue border-t-transparent rounded-full animate-spin" />
  </div>
);

// SEO Head Component
const SEOHead = () => (
  <Helmet>
    <title>Best Website Design Company in Delhi NCR | FactoryJet</title>
    <meta
      name="description"
      content="Professional website design & e-commerce development in Delhi NCR. Trusted by 500+ businesses across Gurgaon, Noida, Delhi. 7-day delivery. Starting ₹29,999. Get free quote!"
    />
    <meta
      name="keywords"
      content="website design company delhi ncr, website development company delhi ncr, web design agency delhi, shopify store development delhi, wordpress development delhi, e-commerce development delhi ncr, website designer gurgaon, web developer noida"
    />
    <link rel="canonical" href="https://factoryjet.com/website-design-company-delhi-ncr" />

    {/* Open Graph */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Best Website Design Company in Delhi NCR | FactoryJet" />
    <meta property="og:description" content="Professional website design & e-commerce development in Delhi NCR. Trusted by 500+ businesses. 7-day delivery. Starting ₹29,999." />
    <meta property="og:url" content="https://factoryjet.com/website-design-company-delhi-ncr" />
    <meta property="og:image" content="https://factoryjet.com/og-delhi.jpg" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Best Website Design Company in Delhi NCR | FactoryJet" />
    <meta name="twitter:description" content="Professional website design & e-commerce development in Delhi NCR. Trusted by 500+ businesses." />

    {/* LocalBusiness Schema */}
    <script type="application/ld+json">
      {JSON.stringify({
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
        "priceRange": "₹29,999 - ₹5,00,000+",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "200"
        }
      })}
    </script>
  </Helmet>
);

const DelhiNewPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <SEOHead />
      <Header variant="solid" />
      <main className="pb-16 md:pb-0">
        <HeroSection />
        <HeroDescription />
        <SocialProof />

        <Suspense fallback={<LoadingSpinner />}>
          <AboutBlock />
          <ProblemSection />
          <SolutionSection />
          <ServicesSection />
          <ProcessSection />
          <PricingSection />
          <IndustriesSection />
          <CaseStudiesSection />
          <TestimonialsSection />
          <FAQSection />
          <LocalSEOSection />
          <FinalCTA />
          <Footer />
          <FloatingWhatsApp />
          <StickyMobileCTA />
        </Suspense>
      </main>
    </motion.div>
  );
};

export default DelhiNewPage;
