import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup on unmount
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#services', label: 'Dienstleistungen' },
    { href: '#benefits', label: 'Vorteile' },
    { href: '#about', label: 'Über Uns' },
    { href: '#testimonials', label: 'Kundenstimmen' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Kontakt' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    handleNavClick(e, href);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* --- Main Header for Desktop and Logo --- */}
      <header className="fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
                <img src="/logotip.png" alt="A.S.S Security UG Logo" className="h-20 w-auto" />
              </a>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4">
              <nav className="flex items-center md:space-x-6 lg:space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="relative group text-gray-600 hover:text-blue-500 transition-colors duration-300 uppercase text-sm font-semibold tracking-wider"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                  </a>
                ))}
              </nav>
              <ThemeToggle />
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="px-4 py-2 bg-blue-600 btn-shine text-white rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-lg shadow-blue-600/20 uppercase text-sm font-semibold tracking-wider"
              >
                Anfrage
              </a>
            </div>
            {/* Placeholder for mobile to keep justify-between working */}
            <div className="lg:hidden w-24 h-8"></div>
          </div>
        </div>
      </header>
      
      {/* --- Mobile Controls --- */}
      {/* This block is separate from the header to solve the z-index stacking context issue. */}
      <div className="lg:hidden fixed top-0 right-0 h-16 flex items-center pr-4 z-[55]">
        <ThemeToggle />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="ml-4 w-8 h-8 flex flex-col justify-center items-center focus:outline-none"
          aria-label="Menü öffnen"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : '-translate-y-1'}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 my-1 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : 'translate-y-1'}`}></span>
        </button>
      </div>

      {/* --- Mobile Menu --- */}
      {/* Overlay */}
      <div 
        aria-hidden="true"
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 bg-black/40' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Panel with Glassmorphism Effect - Always light */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm z-50 lg:hidden bg-white/80 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="h-full flex flex-col items-center justify-center overflow-y-auto pt-20 pb-10 px-4">
          <nav className="flex flex-col items-center text-center space-y-8">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleMobileLinkClick(e, link.href)}
                className={`text-2xl uppercase tracking-wider text-gray-800 transition-all duration-500 ease-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                style={{ transitionDelay: `${150 + index * 75}ms` }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleMobileLinkClick(e, '#contact')}
              className={`mt-8 px-10 py-4 bg-blue-600 text-white rounded-md uppercase tracking-wider transition-all duration-500 ease-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
              style={{ transitionDelay: `${150 + navLinks.length * 75}ms` }}
            >
              Anfrage
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;