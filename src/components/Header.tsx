import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ThemeToggle from "./ThemeToggle";

export type NavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

// Moved outside component to prevent re-creation on re-renders
const items: NavItem[] = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Dienstleistungen" },
  { href: "#benefits", label: "Vorteile" },
  { href: "#approach", label: "Vorgehen" },
  { href: "#about", label: "Über Uns" },
  { href: "#contact", label: "Kontakt" },
];

const Header: React.FC = () => {
  const logo = "/logotip.svg";
  const logoAlt = "A.S.S Security";
  const ease = "power3.easeOut";

  const [activeHref, setActiveHref] = useState("#home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);

  const logoImgRef = useRef<HTMLImageElement | null>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);

  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);

  // Handle active state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map((item) => item.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = "#" + section;
        }
      }
      if (current) setActiveHref(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;

        // Calculate the circle geometry for the hover effect
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta =
          Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector<HTMLElement>(".pill-label");
        const white = pill.querySelector<HTMLElement>(".pill-label-hover");

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(
          circle,
          { scale: 1.2, xPercent: -50, duration: 0.6, ease, overwrite: "auto" },
          0
        );

        if (label) {
          tl.to(
            label,
            { y: -(h + 8), duration: 0.6, ease, overwrite: "auto" },
            0
          );
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(
            white,
            { y: 0, opacity: 1, duration: 0.6, ease, overwrite: "auto" },
            0
          );
        }

        tlRefs.current[index] = tl;
      });
    };

    // Ensure DOM is ready
    layout();
    const onResize = () => layout();
    window.addEventListener("resize", onResize);

    // Initial entrance animations
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { scale: 0 },
        { scale: 1, duration: 0.6, ease }
      );
    }
    if (navItemsRef.current) {
      gsap.fromTo(
        navItemsRef.current,
        { width: 0, opacity: 0 },
        { width: "auto", opacity: 1, duration: 0.8, ease }
      );
    }

    return () => window.removeEventListener("resize", onResize);
  }, [ease]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: "auto",
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: "auto",
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
      overwrite: "auto",
    });
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll(".hamburger-line");
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 5, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -5, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: "visible" });
        gsap.fromTo(
          menu,
          { opacity: 0, y: 10, scaleY: 0.95 },
          {
            opacity: 1,
            y: 0,
            scaleY: 1,
            duration: 0.4,
            ease,
            transformOrigin: "top center",
          }
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          scaleY: 0.95,
          duration: 0.3,
          ease,
          transformOrigin: "top center",
          onComplete: () => {
            gsap.set(menu, { visibility: "hidden" });
          },
        });
      }
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-[99] px-8 flex items-center justify-between pointer-events-none w-full max-lg:px-4 max-lg:top-4">
      {/* LEFT: Logo */}
      <div className="pointer-events-auto">
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
      <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto max-lg:hidden">
        <div
          className="relative flex items-center h-[50px] bg-foreground rounded-full shadow-lg p-1.5"
          ref={navItemsRef}
        >
          <ul
            className="flex items-stretch gap-1 m-0 h-full list-none"
            role="menubar"
          >
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
                    ${
                      activeHref === item.href
                        ? "border-background"
                        : "border-transparent"
                    }
                  `}
                  aria-label={item.ariaLabel || item.label}
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={() => handleLeave(i)}
                >
                  <span
                    className="hover-circle absolute left-1/2 bottom-0 rounded-full bg-background z-10 block pointer-events-none will-change-transform"
                    aria-hidden="true"
                    ref={(el) => {
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

      {/* RIGHT: Controls (Theme Toggle + Mobile Menu) */}
      <div className="flex items-center gap-3 pointer-events-auto">
        {/* Theme Toggle Button */}
        <div className="bg-foreground rounded-full w-[50px] h-[50px] flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="w-[50px] h-[50px] rounded-full bg-foreground border-none hidden max-lg:flex flex-col items-center justify-center gap-[5px] cursor-pointer p-0 relative shadow-lg mobile-menu-button hover:scale-105 transition-transform duration-300"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          ref={hamburgerRef}
        >
          <span className="hamburger-line w-5 h-0.5 bg-background rounded-full transition-all duration-300 origin-center" />
          <span className="hamburger-line w-5 h-0.5 bg-background rounded-full transition-all duration-300 origin-center" />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className="absolute top-20 left-4 right-4 bg-foreground rounded-2xl shadow-xl z-[998] opacity-0 invisible overflow-hidden pointer-events-auto mobile-menu-popover max-lg:block hidden"
        ref={mobileMenuRef}
      >
        <ul className="list-none m-0 p-1.5 flex flex-col gap-1 mobile-menu-list">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`
                  block p-4 text-background no-underline text-lg font-semibold 
                  rounded-xl text-center transition-all duration-200 
                  hover:bg-background/10 hover:text-background mobile-menu-link
                  ${activeHref === item.href ? "bg-background/10" : ""}
                `}
                onClick={toggleMobileMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
