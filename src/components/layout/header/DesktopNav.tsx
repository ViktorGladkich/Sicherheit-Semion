"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { NavItem } from "./header-config";
import { useIsMounted } from "../../../hooks/useIsMounted";

interface DesktopNavProps {
  items: NavItem[];
  activeHref: string;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({
  items,
  activeHref,
}) => {
  const navRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
  const mounted = useIsMounted();
  const ease = "power3.easeOut";

  // Entrance Animation
  useEffect(() => {
    if (mounted && navRef.current) {
      gsap.fromTo(
        navRef.current,
        { width: 0, opacity: 0 },
        { width: "auto", opacity: 1, duration: 0.8, ease },
      );
    }
  }, [mounted]);

  // Layout & Hover Physics Logic
  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      const layout = () => {
        circleRefs.current.forEach((circle, index) => {
          if (!circle?.parentElement) return;

          const pill = circle.parentElement as HTMLElement;
          const rect = pill.getBoundingClientRect();
          const { width: w, height: h } = rect;

          // Math for the "liquid" circle effect
          const R = ((w * w) / 4 + h * h) / (2 * h);
          const D = Math.ceil(2 * R) + 2;
          const delta =
            Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
          const originY = D - delta;

          // Initial static setup
          gsap.set(circle, {
            width: D,
            height: D,
            bottom: -delta,
            xPercent: -50,
            scale: 0,
            transformOrigin: `50% ${originY}px`,
          });

          const label = pill.querySelector<HTMLElement>(".pill-label");
          const hoverLabel =
            pill.querySelector<HTMLElement>(".pill-label-hover");

          if (label) gsap.set(label, { y: 0 });
          if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 });

          // Create Timeline for this item
          tlRefs.current[index]?.kill();
          const tl = gsap.timeline({ paused: true });

          tl.to(
            circle,
            {
              scale: 1.2,
              xPercent: -50,
              duration: 0.6,
              ease,
              overwrite: "auto",
            },
            0,
          );
          if (label) {
            tl.to(
              label,
              { y: -(h + 8), duration: 0.6, ease, overwrite: "auto" },
              0,
            );
          }
          if (hoverLabel) {
            gsap.set(hoverLabel, { y: Math.ceil(h + 100), opacity: 0 });
            tl.to(
              hoverLabel,
              { y: 0, opacity: 1, duration: 0.6, ease, overwrite: "auto" },
              0,
            );
          }

          tlRefs.current[index] = tl;
        });
      };

      layout();
      window.addEventListener("resize", layout);
      return () => window.removeEventListener("resize", layout);
    }, navRef); // Scope to navRef

    return () => ctx.revert();
  }, [items, ease, mounted]);

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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!mounted) return null;

  return (
    <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto max-lg:hidden z-100">
      <div
        ref={navRef}
        className="relative flex items-center h-[50px] bg-foreground rounded-full shadow-lg p-1.5"
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
                onClick={(e) => handleNavClick(e, item.href)}
                className={`
                                    relative inline-flex items-center justify-center h-full px-5 
                                    bg-transparent text-background decoration-0 rounded-full 
                                    font-semibold text-sm uppercase tracking-wider cursor-pointer 
                                    overflow-hidden pill group border-2 transition-colors duration-300
                                    ${activeHref === item.href ? "border-background" : "border-transparent"}
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
  );
};
