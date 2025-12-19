
import React, { useState } from 'react';
import Header from './components/Header';
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
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ExitIntentPopup from './components/ExitIntentPopup';
import LeadFormModal from './components/LeadFormModal';

const MumbaiPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen relative bg-white text-jet-navy font-body overflow-x-hidden pb-24 lg:pb-0">
      <Header onCtaClick={openModal} />
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
      <Footer />
      <WhatsAppButton />
      <StickyMobileBar />
      <ExitIntentPopup />
      <LeadFormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default MumbaiPage;
