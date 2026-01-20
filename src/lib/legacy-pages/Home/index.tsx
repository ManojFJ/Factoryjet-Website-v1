'use client';

import { lazy, Suspense } from "react";
import Header from "./../../../components/Header";
import Footer from "./../../../components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import Process from "./components/Process";

// Lazy load below-the-fold components for better initial load performance
const Portfolio = lazy(() => import("./components/Portfolio"));
const Pricing = lazy(() => import("./components/Pricing"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const FAQ = lazy(() => import("./components/FAQ"));
const CTA = lazy(() => import("./components/CTA"));

// Simple loading placeholder for lazy components
const ComponentLoader = () => <div className="min-h-[200px]" />;

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
        <Suspense fallback={<ComponentLoader />}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <CTA />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
