import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import FactoryJetPricing from './components/FactoryJetPricing';

const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-slate-50">
      <SEOHead
        title="Pricing - Affordable Web & E-Commerce Development Packages"
        description="Transparent pricing for web development and e-commerce solutions. Flexible packages starting from ₹25,000. No hidden costs. Get a custom quote today!"
        canonical="/pricing"
      />
      <Header variant="solid" />
      <FactoryJetPricing />
      <Footer />
    </main>
  );
};

export default App;