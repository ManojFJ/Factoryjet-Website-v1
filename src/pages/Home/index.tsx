import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="transparent" />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
