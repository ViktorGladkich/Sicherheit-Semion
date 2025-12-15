import { useState, useEffect, Suspense, lazy } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import BackToTopButton from './components/BackToTopButton';
import Preloader from './components/Preloader';

// Lazy load non-critical components
const Approach = lazy(() => import('./components/Approach'));
const FAQ = lazy(() => import('./components/FAQ'));

// Loading fallback component
const SectionFallback = () => (
  <div className="h-96 bg-linear-to-b from-background to-background/50" />
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Set document metadata for better SEO
  useEffect(() => {
    if ('performance' in window && 'measure' in performance) {
      performance.mark('app-start');
    }

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = 'https://images.unsplash.com/photo-1516026672322-78ab2db9a8e2?auto=format&fit=crop&q=80&w=1200';
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    // Sync with Preloader animation duration
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      if ('performance' in window && 'measure' in performance) {
        try {
          performance.mark('app-ready');
          performance.measure('app-load', 'app-start', 'app-ready');
        } catch {
          // Performance measurement not supported
        }
      }
    }, 2800); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="bg-background text-foreground font-sans transition-colors duration-300 overflow-x-hidden animate-fade-in relative bg-dot-pattern"
      role="application"
      aria-label="A.S.S Security - Sicherheitsdienst"
    >
      <AnimatePresence mode="wait">
        {isLoading && <Preloader setIsLoading={setIsLoading} />}
      </AnimatePresence>

      {/* Optimized Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 z-60 h-1 bg-foreground origin-left"
        style={{ scaleX }}
        aria-hidden="true"
      />

      <Header />
      
      <main role="main">
        <Hero />
        <Services />
        <Benefits />
        
        {/* Lazy-loaded sections for performance */}
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

      <Footer />
      <CookieConsent />
      <BackToTopButton />
    </div>
  );
}

export default App;
