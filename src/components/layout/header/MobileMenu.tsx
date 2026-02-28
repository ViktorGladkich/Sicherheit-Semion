"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { NavItem } from "./header-config";
import { useIsMounted } from "../../../hooks/useIsMounted";

interface MobileMenuProps {
  isOpen: boolean;
  items: NavItem[];
  activeHref: string;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  items,
  activeHref,
  onClose,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<Array<HTMLAnchorElement | null>>([]);
  const mounted = useIsMounted();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      onClose();
    }
  };

  // Open/Close Animation Logic
  useEffect(() => {
    if (!mounted) return;
    const menu = menuRef.current;
    const links = linksRef.current;

    if (isOpen) {
      // OPEN
      gsap.set(menu, { visibility: "visible" });
      const tl = gsap.timeline();

      // 1. Shutter Effect
      tl.fromTo(
        menu,
        { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 0.6,
          ease: "expo.inOut",
        },
      );

      // 2. Stagger Links
      tl.fromTo(
        links,
        { y: 30, opacity: 0, rotateX: 10 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.04,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.2",
      );

      // 3. Decoration Line
      tl.fromTo(
        ".menu-decoration",
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.8, ease: "expo.out" },
        "-=0.4",
      );

      document.body.style.overflow = "hidden";
    } else {
      // CLOSE
      const tl = gsap.timeline({
        onComplete: () => {
          if (menu) gsap.set(menu, { visibility: "hidden" });
          document.body.style.overflow = "";
        },
      });

      tl.to(links, {
        y: -10,
        opacity: 0,
        stagger: 0.02,
        duration: 0.2,
        ease: "power2.in",
      });

      tl.to(
        menu,
        {
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
          duration: 0.5,
          ease: "expo.inOut",
        },
        "-=0.1",
      );
    }
  }, [isOpen, mounted]);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 z-90 bg-background/95 backdrop-blur-xl invisible max-lg:flex flex-col pointer-events-auto"
      ref={menuRef}
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
    >
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none"></div>

      <div className="flex-1 flex flex-col justify-center px-6 relative overflow-y-auto">
        <div className="menu-decoration absolute left-6 top-24 bottom-24 w-px bg-foreground/20 origin-top"></div>

        <ul className="flex flex-col gap-3 pl-6">
          {items.map((item, index) => (
            <li key={item.href} className="overflow-hidden">
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                ref={(el) => {
                  linksRef.current[index] = el;
                }}
                className="group block relative py-1"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] text-foreground/40 group-hover:text-foreground/80 transition-colors">
                    0{index + 1}
                  </span>
                  <span
                    className={`
                                        text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground transition-all duration-300
                                        group-hover:translate-x-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-foreground group-hover:to-foreground/50
                                        ${activeHref === item.href ? "text-foreground" : "text-foreground/70"}
                                    `}
                  >
                    {item.label}
                  </span>
                </div>
                <span className="absolute bottom-0 left-0 w-full h-px bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 pl-6 menu-decoration opacity-0 flex flex-col gap-4">
          <div className="h-px w-12 bg-foreground/20 mb-1"></div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              Kontakt
            </span>
            <a
              href="mailto:info@ass-sicurity.de"
              className="text-sm font-bold text-foreground"
            >
              info@ass-sicurity.de
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              Notfall
            </span>
            <a
              href="tel:+4917640153293"
              className="text-sm font-bold text-foreground"
            >
              +49 176 40153293
            </a>
          </div>
        </div>
      </div>

      <div className="h-10 border-t border-foreground/10 flex items-center overflow-hidden bg-foreground/5">
        <div className="whitespace-nowrap animate-shine-cinematic opacity-50 text-[10px] font-mono tracking-[0.5em] uppercase text-foreground w-full text-center">
          A.S.S SECURITY SYSTEM
        </div>
      </div>
    </div>
  );
};
