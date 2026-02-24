import React, { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useTheme } from "../../../contexts/ThemeContext";

export const Logo: React.FC = () => {
  const logoImgRef = useRef<HTMLImageElement>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);
  const { theme } = useTheme();

  // Выбираем логотип в зависимости от темы
  const logoSrc = theme === "dark" ? "/logotip-dark.svg" : "/logotip-light.png";

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

  React.useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { scale: 0 },
        { scale: 1, duration: 0.6, ease: "back.out(1.7)" },
      );
    }
  }, []);

  return (
    <div className="pointer-events-auto z-100">
      <Link
        ref={logoRef}
        className="w-[60px] h-[60px] rounded-full bg-foreground p-2 inline-flex items-center justify-center overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-300"
        to="/"
        aria-label="Home"
        onMouseEnter={handleLogoEnter}
      >
        <img
          ref={logoImgRef}
          src={logoSrc}
          alt="A.S.S Security"
          className="w-full h-full object-contain block grayscale contrast-125"
        />
      </Link>
    </div>
  );
};
