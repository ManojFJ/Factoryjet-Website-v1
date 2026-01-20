import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Operations } from './components/Operations';
import { Process } from './components/Process';
import { Showcase } from './components/Showcase';
import { Analysis } from './components/Analysis';
import { Info } from './components/Info';

function App() {
  // Smooth scroll behavior for anchor links if needed
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-jet-orange/20 selection:text-jet-orange">
      <Header variant="solid" />

      <Hero />
      <Services />
      <Features />
      <Operations />
      <section id="process">
      <Process />
      </section>
      <Showcase />
      <Analysis />
      <Info />

      <Footer />
    </main>
  );
}

export default App;