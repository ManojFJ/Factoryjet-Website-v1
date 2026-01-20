'use client';

import React from 'react';
import Header from '@/components/Header';
import Hero from './components/Hero';
import ContactMethods from './components/ContactMethods';
import ContactForm from './components/ContactForm';
import Locations from './components/Locations';
import SupportSection from './components/SupportSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { trackContactClick, trackCTAClick } from '@/utils/gtm';

const ContactPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "FactoryJet",
      "url": "https://factoryjet.com",
      "logo": "https://factoryjet.com/logo.png",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91 96999 77699",
          "contactType": "customer service",
          "email": "connect@factoryjet.com",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+91 96999 77699",
          "contactType": "sales",
          "email": "connect@factoryjet.com",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-white pb-24 md:pb-0">
        <Header variant="transparent" />
        <main>
          <Hero />
          <ContactMethods />
          <ContactForm />
          <Locations />
          <SupportSection />
          <FAQ />
        </main>

        <Footer />

        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 z-40 flex gap-3 shadow-neumorphic">
          <a
            href="tel:+919699977699"
            onClick={() => trackContactClick('phone', '+919699977699', 'contact_page_mobile_bar')}
            className="flex-1 bg-white border border-jetOrange text-jetOrange font-bold py-3 rounded-lg text-center shadow-sm"
          >
            Call Now
          </a>
          <a
            href="#contact-form"
            onClick={() => trackCTAClick('get_quote', 'contact_page_mobile_bar', 'primary')}
            className="flex-1 bg-jetBlue text-white font-bold py-3 rounded-lg text-center shadow-lg"
          >
            Get Quote
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
