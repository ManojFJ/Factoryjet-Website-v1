import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import Hero from './components/Hero';
import { SocialProof, About, ProblemSection, SolutionSection } from './components/ContentBlocks';
import { Services, Process, Technologies, Pricing } from './components/ServiceBlocks';
import { Industries, CaseStudies } from './components/IndustryBlocks';
import { Testimonials, FAQ, LocalSEO, FinalCTA } from './components/TrustBlocks';
import { MobileStickyCTA } from './components/MobileStickyCTA';

const MaduraiPage = () => {
  return (
    <>
      <SEOHead
        title="Best Website Design Company in Madurai | FactoryJet"
        description="FactoryJet is Madurai's leading website design company. Professional website development, WordPress, Shopify, and e-commerce solutions starting at ₹15,000. Top website design company in Madurai with 25+ years of combined expertise."
        canonical="/locations/madurai/web-design"
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

export default MaduraiPage;
