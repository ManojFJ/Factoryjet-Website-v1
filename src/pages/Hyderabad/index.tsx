
import { Hero, SocialProof, EntityBlock, Problems, Solution } from './components/HeroAndIntro';
import { Services, Process, TechStack, Pricing, Industries } from './components/ServicesAndOfferings';
import { CaseStudies, Testimonials, FAQ, LocalSEO, FinalCTA, Footer } from './components/SocialProofAndFooter';
import { StickyWhatsApp, ExitIntentPopup } from './components/MarketingOverlays';

function HyderabadPage() {
  return (
    <main className="font-sans antialiased text-jet-navy bg-white w-full overflow-x-hidden">
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