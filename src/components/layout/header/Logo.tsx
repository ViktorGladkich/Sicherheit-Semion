"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useTheme } from "../../../hooks/useTheme";
import { useIsMounted } from "../../../hooks/useIsMounted";

export const Logo: React.FC = () => {
  const logoImgRef = useRef<HTMLImageElement>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);
  const { theme } = useTheme();
  const mounted = useIsMounted();

  // Выбираем логотип в зависимости от темы
  const logoSrc = mounted
    ? theme === "dark"
      ? "/logotip-dark.svg"
      : "/logotip-light.png"
    : "/logotip-dark.svg"; // Default for SSR

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;

    gsap.to(img, {
      rotate: 360,
      duration: 0.6,
      ease: "power3.easeOut",
      overwrite: "auto",
      onComplete: () => {
        gsap.set(img, { rotate: 0 });
      },
    });
  };

  useEffect(() => {
    if (mounted && logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { scale: 0 },
        { scale: 1, duration: 0.6, ease: "back.out(1.7)" },
      );
    }
  }, [mounted]);

  return (
    <div className="pointer-events-auto z-100">
      <Link
        ref={logoRef}
        className="w-[60px] h-[60px] rounded-full bg-foreground p-2 inline-flex items-center justify-center overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-300 relative"
        href="/"
        aria-label="Home"
        onMouseEnter={handleLogoEnter}
      >
        <Image
          ref={logoImgRef}
          src={logoSrc}
          alt="A.S.S Security"
          fill
          className="object-contain block grayscale contrast-125 p-2"
        />
      </Link>
    </div>
  );
};
