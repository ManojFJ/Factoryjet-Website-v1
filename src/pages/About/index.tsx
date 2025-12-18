import Header from '../../components/Header';
import Footer from '../../components/Footer';
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
