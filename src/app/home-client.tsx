"use client";

import { Suspense, lazy } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Benefits from "../components/sections/Benefits";
import About from "../components/sections/About";
import Team from "../components/sections/Team";
import Contact from "../components/sections/Contact";

// Lazy load non-critical components
const Approach = lazy(() => import("../components/sections/Approach"));
const FAQ = lazy(() => import("../components/sections/FAQ"));

// Loading fallback component
const SectionFallback = () => (
  <div className="h-96 bg-linear-to-b from-background to-background/50" />
);

export default function HomeClient() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
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
        <Team />
        <Suspense fallback={<SectionFallback />}>
          <FAQ />
        </Suspense>
        <Contact />
      </div>
    </>
  );
}
