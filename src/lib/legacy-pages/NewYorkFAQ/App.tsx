'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from './components/FAQSection';
import GuaranteesSection from './components/GuaranteesSection';
import ContactSection from './components/ContactSection';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header basePath="/us/services/web-design/new-york" variant="transparent" />

      <main className="pt-20">
        {/* Section 14: Comprehensive FAQ */}
        <FAQSection />

        {/* Section 15: Our Guarantees */}
        <GuaranteesSection />

        {/* Section 16: Contact & Call to Action */}
        <ContactSection />

        {/* Section 17: Final Call-to-Action */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
