"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useIsMounted } from "../../../hooks/useIsMounted";

interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}

export const Hamburger: React.FC<HamburgerProps> = ({ isOpen, toggle }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const mounted = useIsMounted();

  useEffect(() => {
    if (!mounted) return;
    const button = buttonRef.current;
    if (!button) return;

    const lines = button.querySelectorAll(".hamburger-line");

    if (isOpen) {
      // Transform to X
      gsap.to(lines[0], {
        rotate: 45,
        y: 6,
        width: "24px",
        duration: 0.4,
        ease: "back.out(1.7)",
      });
      gsap.to(lines[1], { opacity: 0, x: -10, duration: 0.2 });
      gsap.to(lines[2], {
        rotate: -45,
        y: -6,
        width: "24px",
        duration: 0.4,
        ease: "back.out(1.7)",
      });
    } else {
      // Back to Hamburger
      gsap.to(lines[0], {
        rotate: 0,
        y: 0,
        width: "24px",
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(lines[1], { opacity: 1, x: 0, duration: 0.4, delay: 0.1 });
      gsap.to(lines[2], {
        rotate: 0,
        y: 0,
        width: "16px",
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [isOpen, mounted]);

  if (!mounted) {
    return (
      <div className="w-[50px] h-[50px] rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-3xl flex flex-col items-center justify-center gap-[5px] border border-black/10 dark:border-white/20 opacity-50">
        <span className="w-6 h-[2px] bg-foreground rounded-full"></span>
        <span className="w-6 h-[2px] bg-foreground rounded-full"></span>
        <span className="w-4 h-[2px] bg-foreground rounded-full"></span>
      </div>
    );
  }

  return (
    <button
      ref={buttonRef}
      onClick={toggle}
      className="w-[50px] h-[50px] rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-3xl border border-black/10 dark:border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.15)] hidden max-lg:flex flex-col items-center justify-center gap-[5px] cursor-pointer p-0 relative hover:scale-105 transition-transform duration-300 pointer-events-auto"
      aria-label="Menü уmschalten"
    >
      <span className="hamburger-line w-6 h-[2px] bg-foreground rounded-full origin-center"></span>
      <span className="hamburger-line w-6 h-[2px] bg-foreground rounded-full origin-center"></span>
      <span className="hamburger-line w-4 h-[2px] bg-foreground rounded-full origin-center self-center"></span>
    </button>
  );
};
