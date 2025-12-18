import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FactoryJetPricing from './components/FactoryJetPricing';

const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-slate-50">
      <Header variant="solid" />
      <FactoryJetPricing />
      <Footer />
    </main>
  );
};

export default App;