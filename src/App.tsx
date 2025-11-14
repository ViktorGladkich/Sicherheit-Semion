import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import BackToTopButton from './components/BackToTopButton';
import Approach from './components/Approach';
import FAQ from './components/FAQ';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (totalHeight > 0) {
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
    } else {
      setScrollProgress(0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-200 font-sans transition-colors duration-300 overflow-x-hidden">
      <div 
        className="fixed top-0 left-0 z-[60] h-1 bg-blue-500 transition-all duration-300 ease-linear"
        style={{ width: `${scrollProgress}%` }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Approach />
        <About />
        <Testimonials />
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
