import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import Hero, { HeroDetailedText } from './components/Hero';
import { SocialProof, About, ProblemSection, SolutionSection } from './components/ContentBlocks';
import { Services, Process, Technologies, Pricing } from './components/ServiceBlocks';
import { Industries, CaseStudies } from './components/IndustryBlocks';
import { Testimonials, FAQ, LocalSEO, FinalCTA } from './components/TrustBlocks';
import { MobileStickyCTA } from './components/MobileStickyCTA';

const BangalorePage = () => {
  return (
    <>
      <SEOHead
        title="Best Website Design Company in Bangalore | FactoryJet"
        description="FactoryJet is Bangalore's premier website design company. Professional website development, WordPress, Shopify, and e-commerce solutions starting at ₹29,999. Powering Bengaluru's startups, enterprises & D2C brands."
        canonical="/locations/bangalore/web-design"
      />
      <Header variant="solid" />
      <main className="min-h-screen w-full overflow-x-hidden font-sans">
        <Hero />
        <HeroDetailedText />
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

export default BangalorePage;
