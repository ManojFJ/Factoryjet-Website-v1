
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from './components/Hero';
import StickyMobileBar from './components/StickyMobileBar';
import SocialProof from './components/SocialProof';
import ProblemSection from './components/ProblemSection';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
// import Footer from './components/Footer'; // Commented out - using global Footer instead
import WhatsAppButton from './components/WhatsAppButton';
import ExitIntentPopup from './components/ExitIntentPopup';
import LeadFormModal from './components/LeadFormModal';

const AhmedabadPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FactoryJet - Website Design Company Ahmedabad",
    "image": "https://www.factoryjet.com/images/factoryjet-ahmedabad.jpg",
    "url": "https://factoryjet.com/services/web-design/ahmedabad",
    "telephone": "+91 96999 77699",
    "email": "connect@factoryjet.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ahmedabad",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "380001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.0225",
      "longitude": "72.5714"
    },
    "priceRange": "₹15,000 - ₹5,00,000+",
    "openingHours": ["Mo-Fr 09:00-19:00", "Sa 10:00-16:00"],
    "areaServed": ["Ahmedabad", "Gandhinagar", "Anand", "Mehsana"],
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does website design cost in Ahmedabad?",
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
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen relative bg-white text-jet-navy font-body overflow-x-hidden pb-24 lg:pb-0">
      <Helmet>
        <title>Best Website Design Company in Ahmedabad | FactoryJet</title>
        <meta name="description" content="Professional website design & e-commerce development in Ahmedabad. Trusted by 200+ Gujarat businesses. 4-week delivery. Starting ₹29,999. Get free audit!" />
        <link rel="canonical" href="https://factoryjet.com/services/web-design/ahmedabad" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Helmet>
      <Header variant="solid" />
      <main>
        <Hero onCtaClick={openModal} />
        <SocialProof />
        <ProblemSection onCtaClick={openModal} />
        <Services onCtaClick={openModal} />
        <Process onCtaClick={openModal} />
        <Portfolio onCtaClick={openModal} />
        <WhyUs />
        <Testimonials />
        <Pricing onCtaClick={openModal} />
        <FAQ />
        <CTA onCtaClick={openModal} />
      </main>
      {/* <Footer /> */} {/* Commented out - using global Footer instead */}
      <Footer />
      <WhatsAppButton />
      <StickyMobileBar />
      <ExitIntentPopup />
      <LeadFormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default AhmedabadPage;
