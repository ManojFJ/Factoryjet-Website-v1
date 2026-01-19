import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import Hero from './components/Hero';
import Stats from './components/Stats';
import StoryTimeline from './components/StoryTimeline';
import MissionBento from './components/MissionBento';
import WhyChoose from './components/WhyChoose';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <SEOHead
        title="About Us - Leading Web & E-Commerce Development Company"
        description="Learn about FactoryJet - a trusted web and e-commerce development company with 150+ successful projects. Meet our team, discover our mission, and see why businesses choose us."
        canonical="/about"
      />
      <Header variant="solid" />
      <main>
        <Hero />
        <Stats />
        <StoryTimeline />
        <MissionBento />
        <WhyChoose />
        <Team />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
