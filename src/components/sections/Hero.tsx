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
                className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-background bg-foreground rounded-none overflow-hidden transition-all duration-300 shadow-lg hover:shadow-foreground/20 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
                aria-label="Zur Kontaktsektion navigieren"
              >
                <div className="absolute inset-0 w-0  transition-all duration-250ms ease-out group-hover:w-full opacity-10"></div>
                <span className="relative z-10">KONTAKT AUFNEHMEN</span>
                <div className="absolute bottom-0 right-0 w-3 h-3  transform rotate-45 translate-x-1.5 translate-y-1.5"></div>
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
