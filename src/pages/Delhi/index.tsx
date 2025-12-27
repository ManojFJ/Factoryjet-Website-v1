import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from './components/HeroSection';
import SocialProofBand from './components/SocialProofBand';
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

const DelhiPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Schema.org LocalBusiness Markup for Delhi NCR
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://www.factoryjet.com/website-design-company-delhi',
    name: 'FactoryJet - Website Design Company in Delhi NCR',
    alternateName: 'FactoryJet Technologies',
    description:
      'Leading website design company in Delhi NCR. We build professional, mobile-optimized, SEO-ready websites for businesses in Delhi, Gurgaon, Noida, Greater Noida, Faridabad, and Ghaziabad. Starting at ₹29,999 with 7-day delivery.',
    url: 'https://www.factoryjet.com/website-design-company-delhi',
    logo: 'https://www.factoryjet.com/logo.png',
    image: 'https://www.factoryjet.com/delhi-website-design-company.jpg',
    telephone: '+919730775468',
    email: 'info@factoryjet.com',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Delhi NCR',
      addressRegion: 'Delhi',
      addressCountry: 'IN',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Delhi',
      },
      {
        '@type': 'City',
        name: 'Gurgaon',
      },
      {
        '@type': 'City',
        name: 'Noida',
      },
      {
        '@type': 'City',
        name: 'Greater Noida',
      },
      {
        '@type': 'City',
        name: 'Faridabad',
      },
      {
        '@type': 'City',
        name: 'Ghaziabad',
      },
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.6139,
      longitude: 77.2090,
    },
    hasMap: 'https://maps.google.com/?q=Delhi+NCR',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/factoryjet',
      'https://www.twitter.com/factoryjet',
      'https://www.linkedin.com/company/factoryjet',
      'https://www.instagram.com/factoryjet',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Website Design & Development',
        price: '29999',
        priceCurrency: 'INR',
        description:
          'Professional 5-page website with mobile-responsive design, SEO optimization, and WhatsApp integration',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'E-Commerce Development',
        price: '49999',
        priceCurrency: 'INR',
        description:
          'Complete online store with Shopify/WooCommerce, payment gateway, and shipping integration',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Custom Web Application',
        price: '150000',
        priceCurrency: 'INR',
        description: 'Custom web portals, dashboards, and SaaS platforms built with React and Node.js',
        availability: 'https://schema.org/InStock',
      },
    ],
    serviceType: [
      'Website Design',
      'Web Development',
      'E-Commerce Development',
      'Shopify Development',
      'WooCommerce Development',
      'WordPress Development',
      'Custom Web Application Development',
      'Digital Marketing',
      'SEO Services',
      'CRM Implementation',
      'ERP Implementation',
    ],
    slogan: 'Professional Website Design Company in Delhi NCR — Starting ₹29,999',
  };

  // Schema.org FAQPage Markup
  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does a basic website cost in Delhi NCR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our starter package begins at ₹29,999 for a professional 5-page website (Home, About, Services, Contact, Gallery). This includes mobile-responsive design, SEO optimization, contact forms, WhatsApp integration, and 1 year of free hosting + domain. Perfect for small businesses in Delhi, Noida, Gurgaon.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to build a website in Delhi NCR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our average delivery time is 7 days for a basic website (5-8 pages) and 14 days for an e-commerce store. Custom web apps take 4-8 weeks depending on complexity. We\'re 50% faster than the Delhi NCR industry average (14 days) because of our AI-enhanced design process and dedicated local team.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide website hosting and domain registration?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We provide 1 year of free hosting (Indian servers for fast Delhi NCR loading) + 1 domain (.com, .in, or .co.in). From Year 2: Hosting ₹3,999/year, Domain ₹999/year. Or you can use your own hosting — we\'re flexible.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will my website work on mobile phones? (Mobile responsiveness)',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, 100%. Every website we build is mobile-first, meaning it\'s designed for phones first, then tablets, then desktops. 82% of Delhi NCR traffic is mobile, so we prioritize mobile UX. Your site will look perfect on all devices — iPhone, Android, iPad, laptops.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer post-launch support for Delhi NCR businesses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Every project includes 30 days of free post-launch support (bug fixes, minor tweaks). After 30 days: Pay-per-request (₹2,000/hour) or AMC (₹15,000/year for unlimited support). WhatsApp support available 9 AM - 7 PM IST, Monday to Saturday.',
        },
      },
    ],
  };

  // Schema.org Organization Markup
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.factoryjet.com/#organization',
    name: 'FactoryJet Technologies',
    legalName: 'FactoryJet Technologies',
    url: 'https://www.factoryjet.com',
    logo: 'https://www.factoryjet.com/logo.png',
    foundingDate: '2015',
    description:
      'FactoryJet is a leading website design company in Delhi NCR, specializing in web development, e-commerce, and digital marketing solutions for businesses across India.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Delhi NCR',
      addressRegion: 'Delhi',
      addressCountry: 'IN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+919730775468',
        contactType: 'Customer Service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
        contactOption: 'TollFree',
      },
    ],
    sameAs: [
      'https://www.facebook.com/factoryjet',
      'https://www.twitter.com/factoryjet',
      'https://www.linkedin.com/company/factoryjet',
      'https://www.instagram.com/factoryjet',
    ],
  };

  return (
    <>
      <Helmet>
        <title>Website Design Company in Delhi NCR | ₹29,999 | 7-Day Delivery — FactoryJet</title>
        <meta
          name="description"
          content="FactoryJet is the leading website design company in Delhi NCR. We build professional, mobile-optimized, SEO-ready websites for Delhi, Gurgaon, Noida, Greater Noida businesses. Starting ₹29,999 with 7-day delivery. 500+ successful projects. Get your free website audit today!"
        />
        <meta
          name="keywords"
          content="website design company delhi, web design company delhi ncr, website development delhi, web development gurgaon, website design noida, e-commerce development delhi, shopify developer delhi, wordpress development delhi ncr, web design company in connaught place, website company in cyber city gurgaon"
        />
        <link rel="canonical" href="https://www.factoryjet.com/website-design-company-delhi" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Website Design Company in Delhi NCR | ₹29,999 | 7-Day Delivery"
        />
        <meta
          property="og:description"
          content="Professional website design & development for Delhi NCR businesses. Starting ₹29,999 with 7-day delivery. Serving Delhi, Gurgaon, Noida, Faridabad, Ghaziabad."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.factoryjet.com/website-design-company-delhi"
        />
        <meta property="og:image" content="https://www.factoryjet.com/delhi-website-design-og.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="FactoryJet" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Website Design Company in Delhi NCR | ₹29,999 | 7-Day Delivery"
        />
        <meta
          name="twitter:description"
          content="Professional website design & development for Delhi NCR businesses. 500+ successful projects. Get your free website audit today!"
        />
        <meta
          name="twitter:image"
          content="https://www.factoryjet.com/delhi-website-design-twitter.jpg"
        />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="author" content="FactoryJet Technologies" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi NCR" />
        <meta name="geo.position" content="28.6139;77.2090" />
        <meta name="ICBM" content="28.6139, 77.2090" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>

      {/* Page Content */}
      <div className="min-h-screen bg-white">
        <HeroSection onOpenModal={() => setIsModalOpen(true)} />
        <SocialProofBand />
        <EntityBlock />
        <ProblemSection onOpenModal={() => setIsModalOpen(true)} />
        <ServicesSection onOpenModal={() => setIsModalOpen(true)} />
        <ProcessSection />
        <ComparisonSection onOpenModal={() => setIsModalOpen(true)} />
        <PricingSection onOpenModal={() => setIsModalOpen(true)} />
        <IndustryExpertise onOpenModal={() => setIsModalOpen(true)} />
        <CaseStudies onOpenModal={() => setIsModalOpen(true)} />
        <TestimonialsSection />
        <FAQSection />
        <MarketDataSection />
        <TechnologiesSection />
        <FinalCTA onOpenModal={() => setIsModalOpen(true)} />
        <FooterSection />

        {/* Floating Components */}
        <WhatsAppButton />
        <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <ExitIntentPopup />
      </div>
    </>
  );
};

export default DelhiPage;
