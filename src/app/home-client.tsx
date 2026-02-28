"use client";

import { useState, useEffect, Suspense, lazy } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Benefits from "../components/sections/Benefits";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Preloader from "../components/layout/Preloader";

// Lazy load non-critical components
const Approach = lazy(() => import("../components/sections/Approach"));
const FAQ = lazy(() => import("../components/sections/FAQ"));

// Loading fallback component
const SectionFallback = () => (
  <div className="h-96 bg-linear-to-b from-background to-background/50" />
);

export default function HomeClient() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Performance metrics
    if ("performance" in window && "measure" in performance) {
      performance.mark("app-start");
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      if ("performance" in window && "measure" in performance) {
        try {
          performance.mark("app-ready");
          performance.measure("app-load", "app-start", "app-ready");
        } catch (e) {
          console.warn("Performance recording failed:", e);
        }
      }
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader setIsLoading={setIsLoading} />}
      </AnimatePresence>

      <motion.div
        className="fixed top-0 left-0 z-60 h-1 bg-foreground origin-left"
        style={{ scaleX }}
        aria-hidden="true"
      />

      <div className="relative">
        <Hero />
        <Services />
        <Benefits />
        <Suspense fallback={<SectionFallback />}>
          <Approach />
        </Suspense>
        <About />
        <Suspense fallback={<SectionFallback />}>
          <FAQ />
        </Suspense>
        <Contact />
      </div>
    </>
  );
}
