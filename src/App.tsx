import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import {
  ContactModalProvider,
  useContactModal,
} from "./context/ContactModalContext";
import ScrollToTop from "./components/ScrollToTop";
import ChennaiPage from "./pages/chennai";
import HyderabadPage from "./pages/Hyderabad";

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
// Dedicated City Landing Pages
const PunePage = lazy(() => import("./pages/Pune"));
const DelhiPage = lazy(() => import("./pages/Delhi"));
const MumbaiPage = lazy(() => import("./pages/Mumbai"));
const BangalorePage = lazy(() => import("./pages/Bangalore"));
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
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/case" element={<CasePage />} />
              <Route path="/ecommerce" element={<EcommPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/web-design" element={<WebDesignPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              <Route path="/locations/mumbai/web-design" element={<MumbaiPage />} />
              <Route path="/locations/chennai/web-design" element={<ChennaiPage />} />
              <Route path="/locations/hyderabad/web-design" element={<HyderabadPage />} />

              {/* Dedicated City Landing Pages */}
              <Route
                path="/website-design-company-pune"
                element={<PunePage />}
              />
              <Route
                path="/website-design-company-delhi"
                element={<DelhiPage />}
              />
              <Route
                path="/website-design-company-mumbai"
                element={<MumbaiPage />}
              />
              <Route
                path="/website-design-company-bangalore"
                element={<BangalorePage />}
              />
              <Route
                path="/website-design-company-ahmedabad"
                element={<AhmedabadPage />}
              />
              <Route
                path="/website-design-company-surat"
                element={<SuratPage />}
              />

              {/* Service + Location routes - NEW URL STRUCTURE */}
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
