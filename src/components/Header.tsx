
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

export type NavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

// Moved outside component to prevent re-creation on re-renders
const items: NavItem[] = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Dienstleistungen' },
  { href: '#benefits', label: 'Vorteile' },
  { href: '#approach', label: 'Vorgehen' },
  { href: '#about', label: 'Über Uns' },
  { href: '#contact', label: 'Kontakt' }
];

const Header: React.FC = () => {
  const logo = "/logotip.svg";
  const logoAlt = "A.S.S Security";
  const ease = 'power3.easeOut';
  useTheme();
  
  const [activeHref, setActiveHref] = useState('#home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
  
  const logoImgRef = useRef<HTMLImageElement | null>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);
  
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileLinksRef = useRef<Array<HTMLAnchorElement | null>>([]);
  const navItemsRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);

  // Handle active state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => item.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 200)) {
          current = '#' + section;
        }
      }
      if (current) setActiveHref(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Desktop Menu Hover Effects
  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach(circle => {
        if (!circle?.parentElement) return;
        
        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        
        // Calculate the circle geometry for the hover effect
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`
        });

        const label = pill.querySelector<HTMLElement>('.pill-label');
        const white = pill.querySelector<HTMLElement>('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 0.6, ease, overwrite: 'auto' }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 0.6, ease, overwrite: 'auto' }, 0);
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 0.6, ease, overwrite: 'auto' }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    // Ensure DOM is ready
    layout();
    const onResize = () => layout();
    window.addEventListener('resize', onResize);
    
    // Initial entrance animations
    if (logoRef.current) {
      gsap.fromTo(logoRef.current, { scale: 0 }, { scale: 1, duration: 0.6, ease });
    }
    if (navItemsRef.current) {
      gsap.fromTo(navItemsRef.current, { width: 0, opacity: 0 }, { width: 'auto', opacity: 1, duration: 0.8, ease });
    }

    return () => window.removeEventListener('resize', onResize);
  }, [ease]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    gsap.set(img, { rotate: 0 });
    logoTweenRef.current = gsap.to(img, {
      rotate: 360,
      duration: 0.6,
      ease,
      overwrite: 'auto'
    });
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;
    const links = mobileLinksRef.current;

    // Toggle Scroll Lock
    if (newState) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }

    if (hamburger) {
      const lines = hamburger.querySelectorAll('.hamburger-line');
      if (newState) {
        // Transform to X
        gsap.to(lines[0], { rotate: 45, y: 6, width: '24px', duration: 0.4, ease: "back.out(1.7)" });
        gsap.to(lines[1], { opacity: 0, x: -10, duration: 0.2 });
        gsap.to(lines[2], { rotate: -45, y: -6, width: '24px', duration: 0.4, ease: "back.out(1.7)" });
      } else {
        // Back to Hamburger
        gsap.to(lines[0], { rotate: 0, y: 0, width: '24px', duration: 0.4, ease: "power2.out" });
        gsap.to(lines[1], { opacity: 1, x: 0, duration: 0.4, delay: 0.1 });
        gsap.to(lines[2], { rotate: 0, y: 0, width: '16px', duration: 0.4, ease: "power2.out" });
      }
    }

    if (menu) {
      if (newState) {
        // OPEN ANIMATION
        gsap.set(menu, { visibility: 'visible' });
        
        const tl = gsap.timeline();
        
        // 1. Reveal Background (Clip Path)
        tl.fromTo(menu, 
          { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
          { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 0.6, ease: "expo.inOut" }
        );

        // 2. Stagger Links
        tl.fromTo(links, 
           { y: 50, opacity: 0, rotateX: 20 },
           { y: 0, opacity: 1, rotateX: 0, stagger: 0.05, duration: 0.5, ease: "power2.out" },
           "-=0.2"
        );

        // 3. Reveal Decoration
        tl.fromTo(".menu-decoration", 
            { scaleX: 0, opacity: 0 },
            { scaleX: 1, opacity: 1, duration: 0.8, ease: "expo.out" },
            "-=0.4"
        );

      } else {
        // CLOSE ANIMATION
        const tl = gsap.timeline({
            onComplete: () => gsap.set(menu, { visibility: 'hidden' })
        });

        // 1. Fade out links fast
        tl.to(links, { y: -20, opacity: 0, stagger: 0.03, duration: 0.3, ease: "power2.in" });

        // 2. Close Background
        tl.to(menu, 
            { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", duration: 0.5, ease: "expo.inOut" },
            "-=0.1"
        );
      }
    }
  };

  const handleMobileLinkClick = () => {
      toggleMobileMenu();
  };

  return (
    <>
    <div className="fixed top-6 left-0 right-0 z-[99] px-4 md:px-8 flex items-center justify-between pointer-events-none w-full">
      
      {/* LEFT: Logo */}
      <div className="pointer-events-auto z-[100]">
        <a
          className="w-[60px] h-[60px] rounded-full bg-foreground p-2 inline-flex items-center justify-center overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-300"
          href="#home"
          aria-label="Home"
          onMouseEnter={handleLogoEnter}
          ref={logoRef}
        >
          <img 
            src={logo} 
            alt={logoAlt} 
            ref={logoImgRef} 
            className="w-full h-full object-contain block grayscale contrast-125" 
          />
        </a>
      </div>

      {/* CENTER: Nav Menu (Desktop) - Absolutely centered */}
      <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto max-lg:hidden z-[100]">
        <div 
          className="relative flex items-center h-[50px] bg-foreground rounded-full shadow-lg p-1.5" 
          ref={navItemsRef}
        >
          <ul className="flex items-stretch gap-1 m-0 h-full list-none" role="menubar">
            {items.map((item, i) => (
              <li key={item.href} role="none" className="flex h-full">
                <a
                  role="menuitem"
                  href={item.href}
                  className={`
                    relative inline-flex items-center justify-center h-full px-5 
                    bg-transparent text-background decoration-0 rounded-full 
                    font-semibold text-sm uppercase tracking-wider cursor-pointer 
                    overflow-hidden pill group border-2 transition-colors duration-300
                    ${activeHref === item.href ? 'border-background' : 'border-transparent'}
                  `}
                  aria-label={item.ariaLabel || item.label}
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={() => handleLeave(i)}
                >
                  <span
                    className="hover-circle absolute left-1/2 bottom-0 rounded-full bg-background z-10 block pointer-events-none will-change-transform"
                    aria-hidden="true"
                    ref={el => {
                      circleRefs.current[i] = el;
                    }}
                  />
                  <span className="label-stack relative inline-block leading-none z-20">
                    <span className="pill-label relative z-20 inline-block leading-none will-change-transform">
                      {item.label}
                    </span>
                    <span 
                      className="pill-label-hover absolute left-0 top-0 text-foreground z-30 inline-block will-change-transform opacity-0" 
                      aria-hidden="true"
                    >
                      {item.label}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* RIGHT: Controls */}
      <div className="flex items-center gap-3 pointer-events-auto z-[100]">
         {/* Theme Toggle */}
         <div className="bg-foreground rounded-full w-[50px] h-[50px] flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
            <ThemeToggle />
         </div>

        {/* Mobile Menu Button */}
        <button
          className="w-[50px] h-[50px] rounded-full bg-foreground border-none hidden max-lg:flex flex-col items-center justify-center gap-[5px] cursor-pointer p-0 relative shadow-lg mobile-menu-button hover:bg-neutral-800 transition-colors duration-300"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          ref={hamburgerRef}
        >
          <span className="hamburger-line w-6 h-[2px] bg-background rounded-full origin-center"></span>
          <span className="hamburger-line w-6 h-[2px] bg-background rounded-full origin-center"></span>
          <span className="hamburger-line w-4 h-[2px] bg-background rounded-full origin-center self-end mr-[13px]"></span>
        </button>
      </div>
    </div>

    {/* FULLSCREEN MOBILE MENU OVERLAY */}
    <div 
        className="fixed inset-0 z-[90] bg-background/95 backdrop-blur-xl invisible max-lg:flex flex-col pointer-events-auto"
        ref={mobileMenuRef}
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }} // Start closed
    >
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(128,128,128,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(128,128,128,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        
        {/* Content Container */}
        <div className="flex-1 flex flex-col justify-center px-8 relative overflow-y-auto">
            {/* Decorative Line */}
            <div className="menu-decoration absolute left-8 top-24 bottom-24 w-[1px] bg-foreground/20 origin-top"></div>
            
            <ul className="flex flex-col gap-6 pl-8">
                {items.map((item, index) => (
                    <li key={item.href} className="overflow-hidden">
                        <a
                            href={item.href}
                            onClick={handleMobileLinkClick}
                            ref={el => { mobileLinksRef.current[index] = el }}
                            className="group block relative py-2"
                        >
                            <div className="flex items-baseline gap-4">
                                <span className="font-mono text-xs text-foreground/40 group-hover:text-foreground/80 transition-colors">
                                    0{index + 1}
                                </span>
                                <span className={`
                                    text-4xl sm:text-5xl font-black uppercase tracking-tight text-foreground transition-all duration-300
                                    group-hover:translate-x-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-foreground/50
                                    ${activeHref === item.href ? 'text-foreground' : 'text-foreground/70'}
                                `}>
                                    {item.label}
                                </span>
                            </div>
                            
                            {/* Hover underline that slides in */}
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                        </a>
                    </li>
                ))}
            </ul>

            {/* Bottom Info Area */}
            <div className="mt-12 pl-8 menu-decoration opacity-0 flex flex-col gap-4">
                <div className="h-[1px] w-24 bg-foreground/20 mb-2"></div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Kontakt</span>
                    <a href="mailto:kontakt@ass-security.de" className="text-lg font-bold text-foreground">kontakt@ass-security.de</a>
                </div>
                 <div className="flex flex-col gap-1">
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Notfall</span>
                    <a href="tel:+49123456789" className="text-lg font-bold text-foreground">+49 (0) 123 456 789</a>
                </div>
            </div>
        </div>

        {/* Footer Marquee */}
        <div className="h-12 border-t border-foreground/10 flex items-center overflow-hidden bg-foreground/5">
             <div className="whitespace-nowrap animate-shine-cinematic opacity-50 text-[10px] font-mono tracking-[0.5em] uppercase text-foreground w-full text-center">
                 A.S.S SECURITY 
             </div>
        </div>
    </div>
    </>
  );
};

export default Header;
