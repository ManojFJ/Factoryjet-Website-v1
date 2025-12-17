
import React, { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FilterTabs } from './components/FilterTabs';
import { CaseCard } from './components/CaseCard';
import { CaseStudyPage } from './components/CaseStudyPage';
import { CASE_STUDIES } from './constants';
import { CategoryFilter } from './types';
import { ArrowRight } from 'lucide-react';
import { useContactModal } from '../../context/ContactModalContext';

const App: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const { openModal } = useContactModal();

  const handleCardClick = (id: string) => {
    setSelectedCaseId(id);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBack = () => {
    setSelectedCaseId(null);
  };

  const filteredCases = useMemo(() => {
    if (selectedCategory === 'All') return CASE_STUDIES;
    return CASE_STUDIES.filter(c => c.category === selectedCategory);
  }, [selectedCategory]);

  const activeCaseStudy = CASE_STUDIES.find(c => c.id === selectedCaseId);

  if (selectedCaseId && activeCaseStudy) {
    return <CaseStudyPage caseStudy={activeCaseStudy} onBack={handleBack} />;
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Work that drives <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                exponential growth
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Explore how we help global leaders in E-commerce, SaaS, and Enterprise modernize their digital infrastructure.
            </p>
          </motion.div>

          <FilterTabs 
            selected={selectedCategory} 
            onSelect={setSelectedCategory} 
          />
        </section>

        {/* Masonry Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div 
             layout 
             className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
           >
             <AnimatePresence mode='popLayout'>
               {filteredCases.map((caseStudy) => (
                 <div key={caseStudy.id} className="break-inside-avoid">
                   <CaseCard 
                      data={caseStudy} 
                      onClick={() => handleCardClick(caseStudy.id)}
                   />
                 </div>
               ))}
             </AnimatePresence>
           </motion.div>
           
           {filteredCases.length === 0 && (
             <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               className="text-center py-20"
             >
               <p className="text-slate-500 text-lg">No case studies found for this category.</p>
               <button 
                 onClick={() => setSelectedCategory('All')}
                 className="mt-4 text-primary font-medium hover:underline"
               >
                 View all projects
               </button>
             </motion.div>
           )}
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
                Ready to be our next success story?
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
                Let's discuss how FactoryJet can accelerate your digital transformation journey today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={openModal}
                  className="w-full sm:w-auto bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2"
                >
                  Start a Project <ArrowRight size={20} />
                </button>
                <Link
                  to="/pricing"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all backdrop-blur-sm border border-white/10 text-center"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
