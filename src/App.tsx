import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import {
  ContactModalProvider,
  useContactModal,
} from "./context/ContactModalContext";
import CaseApp from "./pages/Case/App";     
import ScrollToTop from "./components/ScrollToTop";
import DelhiUpdatedPage from "./pages/DelhiUpdated/App";
import RefundPolicy from "./components/RefundPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import UsHomePage from "./pages/UsHomePage/App";
import UsWebServicePage from "./pages/UsWebServicePage/App";
import UsEcommercePage from "./pages/UsEcommercePage/App";
import Detail from "./pages/Case/Detail";
import BlogPostDetail from "./pages/Blog/BlogPostDetails";

// Lazy load ContactFormModal - only loads when modal is opened
const ContactFormModal = lazy(() => import("./components/ContactFormModal"));

// Component that conditionally renders ContactFormModal only when needed
function ConditionalContactModal() {
  const { isOpen } = useContactModal();

  if (!isOpen) return null;

  return (
    <Suspense fallback={null}>
      <ContactFormModal />
    </Suspense>
  );
}

// Lazy load pages for better performance
const HomePage = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/About"));
const BlogPage = lazy(() => import("./pages/Blog"));
const CasePage = lazy(() => import("./pages/Case"));
const EcommPage = lazy(() => import("./pages/Ecomm"));
const PricingPage = lazy(() => import("./pages/Pricing"));
const WebDesignPage = lazy(() => import("./pages/WebDesign"));
const ContactPage = lazy(() => import("./pages/Contact"));
const TermsPage = lazy(() => import("./pages/Terms"));
const PrivacyPage = lazy(() => import("./pages/Privacy"));
const SitemapPage = lazy(() => import("./pages/Sitemap"));
// Service + Location Pages (replaces old city pages)
const ServiceLocationPage = lazy(() => import("./pages/ServiceLocation"));
// Location Landing Pages - New Structure
const BangaloreNewPage = lazy(() => import("./pages/BangaloreNew"));
const DelhiNewPage = lazy(() => import("./pages/DelhiNew"));
const MumbaiNewPage = lazy(() => import("./pages/MumbaiNew"));
const PuneNewPage = lazy(() => import("./pages/PuneNew"));
const MaduraiNewPage = lazy(() => import("./pages/MaduraiNew"));
const ChennaiPage = lazy(() => import("./pages/chennai"));
const HyderabadPage = lazy(() => import("./pages/Hyderabad"));
const AhmedabadPage = lazy(() => import("./pages/Ahmedabad"));
const SuratPage = lazy(() => import("./pages/Surat"));

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
    <HelmetProvider>
      <ContactModalProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/us" element={<UsHomePage />} />
              <Route path="/us/services/web-design" element={<UsWebServicePage />} />
              <Route path="/us/services/ecommerce" element={<UsEcommercePage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostDetail />} />
              <Route path="/case" element={<CaseApp />} />
              <Route path="/case/:slug" element={<Detail />} />
              <Route path="/services/ecommerce" element={<EcommPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/services/web-design" element={<WebDesignPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* <Route path="/terms" element={<TermsPage />} /> */}
              {/* <Route path="/privacy" element={<PrivacyPage />} /> */}
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/sitemap" element={<SitemapPage />} />

              {/* Service + Location Pages - SEO Optimized URL Pattern */}
              <Route path="/services/web-design/bangalore" element={<BangaloreNewPage />} />
              <Route path="/services/web-design/delhi" element={<DelhiUpdatedPage />} />
              <Route path="/services/web-design/mumbai" element={<MumbaiNewPage />} />
              <Route path="/services/web-design/pune" element={<PuneNewPage />} />
              <Route path="/services/web-design/madurai" element={<MaduraiNewPage />} />
              <Route path="/services/web-design/chennai" element={<ChennaiPage />} />
              <Route path="/services/web-design/hyderabad" element={<HyderabadPage />} />
              <Route path="/services/web-design/ahmedabad" element={<AhmedabadPage />} />
              <Route path="/services/web-design/surat" element={<SuratPage />} />

              {/* Dynamic Service + Location routes for other services */}
              <Route
                path="/services/:service/:city"
                element={<ServiceLocationPage />}
              />
            </Routes>
          </Suspense>
          <ConditionalContactModal />
        </BrowserRouter>
      </ContactModalProvider>
    </HelmetProvider>
  );
}

export default App;
