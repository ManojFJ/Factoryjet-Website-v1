import React from 'react';
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
  return (
    <>
      <SEOHead
        title="Best Website Design Company in Pune | FactoryJet"
        description="FactoryJet is Pune's premier website design company. Professional website development, WordPress, Shopify, and e-commerce solutions starting at ₹15,000. Powering Pune's IT companies, startups & manufacturers in Hinjewadi, Kharadi, Chakan."
        canonical="/locations/pune/web-design"
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
