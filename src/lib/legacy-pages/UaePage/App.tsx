'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from './components/Hero';
import AgencyInfo from './components/AgencyInfo';
import WhyDubai from './components/WhyDubai';
import Services from './components/Services';
import Comparison from './components/Comparison';
import Industries from './components/Industries';
import Process from './components/Process';
import Features from './components/Features';
import SuccessStories from './components/SuccessStories';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import WhatsAppFloat from './components/WhatsAppFloat';
import ContactModal from './components/ContactModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="font-sans antialiased text-navy bg-offwhite min-h-screen relative selection:bg-primary/30">
      <Header basePath="/uae" variant="transparent" />
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <AgencyInfo />
        <WhyDubai />
        <Services />
        <Comparison onOpenModal={() => setIsModalOpen(true)} />
        <Industries onOpenModal={() => setIsModalOpen(true)} />
        <Process />
        <Features onOpenModal={() => setIsModalOpen(true)} />
        <SuccessStories onOpenModal={() => setIsModalOpen(true)} />
        <Pricing onOpenModal={() => setIsModalOpen(true)} />
        <FAQ />
      </main>
      <Contact />
      <WhatsAppFloat />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
