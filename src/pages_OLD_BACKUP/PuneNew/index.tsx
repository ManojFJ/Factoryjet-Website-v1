import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import { Hero } from './components/Hero';
import { SocialProof, About, ProblemSection, SolutionSection } from './components/ContentBlocks';
import { Services, Process, Technologies, Pricing } from './components/ServiceBlocks';
import { Industries, CaseStudies } from './components/IndustryBlocks';
import { Testimonials, FAQ, LocalSEO, FinalCTA } from './components/TrustBlocks';
import { MobileStickyCTA } from './components/MobileStickyCTA';

const PunePage = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FactoryJet - Website Design Company Pune",
    "image": "https://www.factoryjet.com/images/factoryjet-pune.jpg",
    "url": "https://factoryjet.com/services/web-design/pune",
    "telephone": "+91 96999 77699",
    "email": "connect@factoryjet.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hinjewadi, Pune",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411057",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.5904",
      "longitude": "73.7341"
    },
    "priceRange": "₹15,000 - ₹5,00,000+",
    "openingHours": ["Mo-Fr 09:00-19:00", "Sa 10:00-16:00"],
    "areaServed": ["Pune", "Hinjewadi", "Kharadi", "Chakan", "Wakad", "Viman Nagar", "Katraj", "Magarpatta"],
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
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How much does website design cost in Pune?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Website design costs vary based on complexity. At FactoryJet, we offer packages starting at ₹15,000 for basic websites to ₹5,00,000+ for enterprise solutions."
              }
            },
            {
              "@type": "Question",
              name: "How long does it take to build a website in Pune?",
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
        }) }} />
      </Helmet>
      <SEOHead
        title="Best Website Design Company in Pune | FactoryJet"
        description="FactoryJet is Pune's premier website design company. Professional website development, WordPress, Shopify, and e-commerce solutions starting at ₹15,000. Powering Pune's IT companies, startups & manufacturers in Hinjewadi, Kharadi, Chakan."
        canonical="/services/web-design/pune"
      />
      <Header variant="solid" />
      <main className="min-h-screen w-full overflow-x-hidden font-sans">
        <Hero />
        <SocialProof />
        <About />
        <ProblemSection />
        <SolutionSection />
        <Services />
        <Process />
        <Technologies />
        <Pricing />
        <Industries />
        <CaseStudies />
        <Testimonials />
        <FAQ />
        <LocalSEO />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
};

export default PunePage;
