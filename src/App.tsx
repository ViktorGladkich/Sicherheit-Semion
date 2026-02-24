import { useState, useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  MotionValue,
} from "framer-motion";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Benefits from "./components/sections/Benefits";
import About from "./components/sections/About";
import Team from "./components/sections/Team";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import CookieConsent from "./components/layout/CookieConsent";
import BackToTopButton from "./components/layout/BackToTopButton";
import Preloader from "./components/layout/Preloader";
import { ViewportFix } from "./components/layout/ViewportFix";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

// Lazy load non-critical components
const Approach = lazy(() => import("./components/sections/Approach"));
const FAQ = lazy(() => import("./components/sections/FAQ"));

// Loading fallback component
const SectionFallback = () => (
  <div className="h-96 bg-linear-to-b from-background to-background/50" />
);

// ScrollToTop component to handle route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = ({ scaleX }: { scaleX: MotionValue<number> }) => (
  <>
    {/* Optimized Progress Bar */}
    <motion.div
      className="fixed top-0 left-0 z-60 h-1 bg-foreground origin-left"
      style={{ scaleX }}
      aria-hidden="true"
    />
    <main role="main" className="relative">
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
    </main>
  </>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Set document metadata for better SEO
  useEffect(() => {
    if ("performance" in window && "measure" in performance) {
      performance.mark("app-start");
    }
  }, []);

  useEffect(() => {
    // Sync with Preloader animation duration
    const timer = setTimeout(() => {
      setIsLoading(false);

      if ("performance" in window && "measure" in performance) {
        try {
          performance.mark("app-ready");
          performance.measure("app-load", "app-start", "app-ready");
        } catch {
          // Performance measurement not supported
        }
      }
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div
        className="bg-background text-foreground font-sans transition-colors duration-300 overflow-x-hidden animate-fade-in relative bg-dot-pattern"
        role="application"
        aria-label="A.S.S Security - Sicherheitsdienst"
      >
        <ViewportFix />
        <AnimatePresence mode="wait">
          {isLoading && <Preloader setIsLoading={setIsLoading} />}
        </AnimatePresence>

        <Header />

        <Routes>
          <Route path="/" element={<HomePage scaleX={scaleX} />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<Impressum />} /> {/* Fallback for AGB */}
        </Routes>

        <Footer />
        <CookieConsent />
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
