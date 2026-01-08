
import { Helmet } from 'react-helmet-async';
import { Hero, SocialProof, EntityBlock, Problems, Solution } from './components/HeroAndIntro';
import { Services, Process, TechStack, Pricing, Industries } from './components/ServicesAndOfferings';
import { CaseStudies, Testimonials, FAQ, LocalSEO, FinalCTA, Footer } from './components/SocialProofAndFooter';
import { StickyWhatsApp, ExitIntentPopup } from './components/MarketingOverlays';

function HyderabadPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FactoryJet - Website Design Company Hyderabad",
    "image": "https://www.factoryjet.com/images/factoryjet-hyderabad.jpg",
    "url": "https://factoryjet.com/locations/hyderabad/web-design/",
    "telephone": "+91 96999 77699",
    "email": "hyderabad@factoryjet.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hyderabad",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.3850",
      "longitude": "78.4867"
    },
    "priceRange": "₹15,000 - ₹5,00,000+",
    "openingHours": ["Mo-Fr 09:00-19:00", "Sa 10:00-16:00"],
    "areaServed": ["Hyderabad", "Secunderabad", "Telangana", "HITEC City", "Financial District"],
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
        name: "How much does website design cost in Hyderabad?",
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
  return (
    <main className="font-sans antialiased text-jet-navy bg-white w-full overflow-x-hidden">
      <Helmet>
        <title>Best Website Design Company in Hyderabad | FactoryJet</title>
        <meta name="description" content="Professional website design & e-commerce development in Hyderabad. Trusted by 200+ Telangana businesses. 4-week delivery. Starting ₹29,999. Get free audit!" />
        <link rel="canonical" href="https://factoryjet.com/locations/hyderabad" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Helmet>
      <Hero />
      <SocialProof />
      <EntityBlock />
      <Problems />
      <Solution />
      <Services />
      <Process />
      <TechStack />
      <Pricing />
      <Industries />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <LocalSEO />
      <FinalCTA />
      <Footer />
      <StickyWhatsApp />
      <ExitIntentPopup />
    </main>
  );
}

export default HyderabadPage;