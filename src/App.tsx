import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ContactModalProvider } from './context/ContactModalContext';
import ContactFormModal from './components/ContactFormModal';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const BlogPage = lazy(() => import('./pages/Blog'));
const CasePage = lazy(() => import('./pages/Case'));
const EcommPage = lazy(() => import('./pages/Ecomm'));
const PricingPage = lazy(() => import('./pages/Pricing'));
const WebDesignPage = lazy(() => import('./pages/WebDesign'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-jetBlue border-t-transparent rounded-full animate-spin"></div>
      <p className="text-slate-600 font-medium">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <ContactModalProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/case" element={<CasePage />} />
            <Route path="/ecommerce" element={<EcommPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/web-design" element={<WebDesignPage />} />
          </Routes>
        </Suspense>
        <ContactFormModal />
      </BrowserRouter>
    </ContactModalProvider>
  );
}

export default App;
