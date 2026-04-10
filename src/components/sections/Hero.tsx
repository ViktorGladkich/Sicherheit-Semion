"use client";

import React from "react";
import { SplineScene } from "../ui/splite";
import { Spotlight } from "../ui/spotlight";
import { useTheme } from "../../hooks/useTheme";
import { CinematicText } from "../ui/cinematic-text";
import { useIsMounted } from "../../hooks/useIsMounted";

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const mounted = useIsMounted();

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden  pt-20 md:pt-0"
      role="region"
      aria-label="Hero-Bereich"
    >
      {mounted && (
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 z-10"
          fill={theme === "dark" ? "white" : "#a1a1aa"}
          aria-hidden="true"
        />
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full h-full flex flex-col-reverse md:flex-row items-center">
        {/* Left content */}
        <div className="flex-1 py-8 md:py-0 relative z-30 flex flex-col justify-center text-center md:text-left pointer-events-none md:pointer-events-auto">
          <div className="pointer-events-auto">
            <div className="mb-6 min-h-20 md:min-h-[100px] flex items-center justify-center md:justify-start">
              <CinematicText
                words={["A.S.S SECURITY"]}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]"
                alignment="left"
                as="h1"
              />
            </div>

            <div className="mt-6 border-l-2 border-foreground/20 pl-6 max-w-lg mx-auto md:mx-0 text-left">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2 animate-fade-in-long delay-100">
                Ihr Sicherheitsdienst in Dresden & Sachsen.
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed animate-fade-in-long delay-200">
                In kritischen Momenten zählt jeder Vorteil. Wir bieten
                hochqualifizierten Objektschutz und Wachdienst für Dresden.{" "}
                <br />
                <span className="text-foreground font-medium">
                  Es ist immer schön, ein ASS im Ärmel zu haben.
                </span>
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-fade-in-long delay-300">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-10 py-5 text-sm md:text-base font-black uppercase tracking-[0.2em] text-foreground bg-white/80 dark:bg-white/10 backdrop-blur-2xl border border-black/8 dark:border-white/15 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04),inset_0_1px_3px_rgba(255,255,255,0.8)] dark:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.1)] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_4px_25px_-5px_rgba(0,0,0,0.12),0_15px_30px_-5px_rgba(0,0,0,0.08),inset_0_1px_3px_rgba(255,255,255,0.8)] dark:hover:shadow-[0_4px_25px_-5px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.15)] focus:outline-none"
                aria-label="Zur Kontaktsektion navigieren"
              >
                {/* Liquid Glass Highlight Sweep */}
                <div className="absolute inset-0 bg-linear-to-tr from-white/60 via-transparent to-white/20 dark:from-white/20 dark:via-transparent dark:to-transparent opacity-50 pointer-events-none rounded-[inherit]"></div>
                
                {/* Animated Shine on Hover */}
                <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/50 dark:via-white/20 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-700 ease-in-out"></div>
                
                <span className="relative z-10 flex items-center gap-3">
                  KONTAKT AUFNEHMEN
                  <span className="inline-block transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500 ease-out font-normal text-xl">
                    &#8599;
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right content - Spline */}
        <div
          className="flex-1 w-full h-[350px] sm:h-[450px] md:h-screen relative z-20 mask-gradient-to-b"
          role="img"
          aria-label="3D-Animierte Sicherheitsszene"
        >
          {mounted && (
            <SplineScene
              scene="/scene.splinecode"
              className="w-full h-full scale-100 md:scale-110"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
