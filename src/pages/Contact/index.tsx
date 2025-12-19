import React from 'react';
import Hero from './components/Hero';
import ContactMethods from './components/ContactMethods';
import ContactForm from './components/ContactForm';
import Locations from './components/Locations';
import SupportSection from './components/SupportSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pb-24 md:pb-0">
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
          className="flex-1 bg-white border border-jetOrange text-jetOrange font-bold py-3 rounded-lg text-center shadow-sm"
        >
          Call Now
        </a>
        <a
          href="#contact-form"
          className="flex-1 bg-jetBlue text-white font-bold py-3 rounded-lg text-center shadow-lg"
        >
          Get Quote
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
