
import { useState, useEffect } from 'react';
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
import Approach from './components/Approach';
import FAQ from './components/FAQ';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Performance Optimization: Use Framer Motion hook instead of State + Event Listener
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Sync with Preloader animation duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background text-foreground font-sans transition-colors duration-300 overflow-x-hidden animate-fade-in relative bg-dot-pattern">
      
      <AnimatePresence mode="wait">
       {isLoading && <Preloader setIsLoading={setIsLoading} />}
      </AnimatePresence>

      {/* Optimized Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 z-60 h-1 bg-foreground origin-left"
        style={{ scaleX }}
      />

      <Header />
      
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Approach />
        <About />
        <Team />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <CookieConsent />
      <BackToTopButton />
    </div>
  );
}

export default App;
