import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Hero from './components/HeroSection';
import SocialProof from './components/SocialProofBand';
import EntityBlock from './components/EntityBlock';
import ProblemSection from './components/ProblemSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import ComparisonSection from './components/ComparisonSection';
import PricingSection from './components/PricingSection';
import IndustryExpertise from './components/IndustryExpertise';
import CaseStudies from './components/CaseStudies';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import MarketDataSection from './components/MarketDataSection';
import TechnologiesSection from './components/TechnologiesSection';
import FinalCTA from './components/FinalCTA';
import FooterSection from './components/FooterSection';
import WhatsAppButton from './components/WhatsAppButton';
import LeadFormModal from './components/LeadFormModal';
import ExitIntentPopup from './components/ExitIntentPopup';


const PunePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Schema.org JSON-LD Markup
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FactoryJet - Website Design Company Pune",
    "image": "https://www.factoryjet.com/images/factoryjet-pune.jpg",
    "url": "https://factoryjet.com/locations/pune",
    "telephone": "+91-9730775468",
    "email": "pune@factoryjet.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pune",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.5204",
      "longitude": "73.8567"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "₹29,999 - ₹5,00,000+",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    },
    "areaServed": [
      { "@type": "City", "name": "Pune" },
      { "@type": "City", "name": "Pimpri-Chinchwad" },
      { "@type": "City", "name": "Hinjewadi" },
      { "@type": "City", "name": "Kharadi" },
      { "@type": "City", "name": "Chakan" }
    ],
    "serviceType": [
      "Website Design",
      "Web Development",
      "E-Commerce Development",
      "Shopify Development",
      "WooCommerce Development",
      "WordPress Development",
      "Digital Marketing"
    ]
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does website design cost in Pune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Website design costs in Pune range from ₹15,000 to ₹10,00,000+ depending on complexity. FactoryJet offers transparent pricing starting at ₹29,999 for starter websites, ₹59,999 for business websites, and ₹99,999 for e-commerce websites."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a website in Pune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Website development timelines in Pune typically range from 4-16 weeks. FactoryJet delivers most websites in 4 weeks — 60% faster than the Pune industry average."
        }
      },
      {
        "@type": "Question",
        "name": "Which is the best website design company in Pune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For SMBs seeking affordable, fast, high-quality websites, FactoryJet is consistently rated among the top choices with a 4.9/5 Google rating, 500+ completed projects, and transparent pricing starting at ₹29,999."
        }
      },
      {
        "@type": "Question",
        "name": "Do you build Shopify stores in Pune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, FactoryJet is a Shopify Partner. We build custom Shopify stores, migrate from other platforms, and integrate with Indian payment gateways and shipping providers. E-commerce packages start at ₹99,999."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate WhatsApp on my website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, WhatsApp integration is included in all FactoryJet packages. We add click-to-chat buttons, floating WhatsApp icons, and can set up WhatsApp Business API for larger businesses."
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FactoryJet",
    "url": "https://www.factoryjet.com",
    "logo": "https://www.factoryjet.com/images/factoryjet-logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/factoryjet",
      "https://www.instagram.com/factoryjet",
      "https://www.facebook.com/factoryjet",
      "https://twitter.com/factoryjet"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9730775468",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Marathi"]
    }
  };

  return (
    <>
      <Helmet>
        <title>Website Design Company in Pune | ₹29,999 | 7-Day Delivery</title>
        <meta
          name="description"
          content="Top website design company in Pune. Web development, Shopify, WooCommerce, WordPress. Serving Hinjewadi, Kharadi, PCMC, Chakan. ₹29,999 starter. 500+ projects."
        />
        <meta
          name="keywords"
          content="website design company in pune, web design company in pune, web development company in pune, ecommerce development company in pune, website design services pune, shopify development pune, wordpress development pune"
        />
        <link rel="canonical" href="https://factoryjet.com/locations/pune" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Website Design Company in Pune | FactoryJet" />
        <meta property="og:description" content="Professional web design & e-commerce development for Pune businesses. Hinjewadi, Kharadi, Magarpatta, PCMC, Chakan. Starting ₹29,999. 7-day delivery." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://factoryjet.com/locations/pune" />
        <meta property="og:image" content="https://www.factoryjet.com/images/factoryjet-pune.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Design Company in Pune | FactoryJet" />
        <meta name="twitter:description" content="Professional web design for Pune businesses. Starting ₹29,999." />
        <meta name="twitter:image" content="https://www.factoryjet.com/images/factoryjet-pune.jpg" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white"
      >
        <Header variant="solid" />
        <Hero onOpenModal={openModal} />
        <SocialProof />
        <EntityBlock />
        <ProblemSection />
        <ServicesSection />
        <ProcessSection onOpenModal={openModal} />
        <ComparisonSection />
        <PricingSection onOpenModal={openModal} />
        <IndustryExpertise />
        <CaseStudies />
        <TestimonialsSection />
        <FAQSection />
        <MarketDataSection />
        <TechnologiesSection />
        <FinalCTA onOpenModal={openModal} />
        <FooterSection />
        <WhatsAppButton />
        <LeadFormModal isOpen={isModalOpen} onClose={closeModal} />
        <ExitIntentPopup />
      </motion.div>
    </>
  );
};

export default PunePage;
