import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
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
// const Footer = lazy(() => import('./components/Footer')); // Commented out - using global Footer instead
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
    <link rel="canonical" href="https://factoryjet.com/locations/delhi" />

    {/* Open Graph */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Best Website Design Company in Delhi NCR | FactoryJet" />
    <meta property="og:description" content="Professional website design & e-commerce development in Delhi NCR. Trusted by 500+ businesses. 7-day delivery. Starting ₹29,999." />
        <meta property="og:url" content="https://factoryjet.com/locations/delhi" />
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
        "image": "https://www.factoryjet.com/images/factoryjet-delhi.jpg",
        "url": "https://factoryjet.com/locations/delhi/web-design/",
        "telephone": "+91 96999 77699",
        "email": "connect@factoryjet.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "WeWork, Two Horizon Center, Golf Course Road, Sector 43",
          "addressLocality": "Gurugram",
          "addressRegion": "Haryana",
          "postalCode": "122002",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.4595",
          "longitude": "77.0266"
        },
        "priceRange": "₹15,000 - ₹5,00,000+",
        "openingHours": ["Mo-Fr 09:00-19:00", "Sa 10:00-16:00"],
        "areaServed": ["Delhi", "Gurgaon", "Noida", "Greater Noida", "Faridabad", "Ghaziabad", "Gurugram"],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "200"
        },
        "sameAs": [
          "https://www.facebook.com/factoryjet",
          "https://www.linkedin.com/company/factoryjet",
          "https://twitter.com/factoryjet"
        ]
      })}
    </script>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does website design cost in Delhi NCR?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Website design costs vary based on complexity. At FactoryJet, we offer packages starting at ₹15,000 for a basic website to ₹5,00,000+ for enterprise custom solutions with no hidden costs."
            }
          },
          {
            "@type": "Question",
            name: "How long does it take to build a website?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our streamlined process typically delivers a website in 7 days. More complex projects may take 2-4 weeks. We prioritize speed without compromising quality."
            }
          },
          {
            "@type": "Question",
            name: "Do you provide e-commerce development in Gurgaon, Noida?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we specialize in e-commerce development with Shopify, WooCommerce, and custom platforms serving businesses across Delhi NCR."
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
              text: "Absolutely. All websites are fully responsive and optimized for mobile, tablet, and desktop devices."
            }
          }
        ]
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
          {/* <Footer /> */} {/* Commented out - using global Footer instead */}
          <Footer />
          <FloatingWhatsApp />
          <StickyMobileCTA />
        </Suspense>
      </main>
    </motion.div>
  );
};

export default DelhiNewPage;
