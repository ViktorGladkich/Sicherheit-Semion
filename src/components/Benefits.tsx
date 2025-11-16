import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { CheckCircleIcon } from './Icons';
import Lottie from "lottie-react";
import cybersecurity from "../assets/cybersecurity.json";

const benefits = [
  {
    title: "24/7 Einsatzbereitschaft",
    description:
      "Unsere Teams sind rund um die Uhr für Ihre Sicherheit im Einsatz.",
  },
  {
    title: "Zertifiziertes Personal",
    description:
      "Alle unsere Mitarbeiter sind nach §34a GewO geschult und geprüft.",
  },
  {
    title: "Modernste Technik",
    description:
      "Wir setzen auf innovative Überwachungs- und Kommunikationstechnologie.",
  },
  {
    title: "Individuelle Konzepte",
    description:
      "Jede Lösung wird exakt auf Ihre spezifischen Anforderungen zugeschnitten.",
  },
];

const Benefits: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      id="benefits"
      className="py-16 sm:py-20 bg-white dark:bg-slate-900 overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`md:grid md:grid-cols-2 md:gap-16 md:items-center transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`md:pr-12 transform transition-transform duration-1000 ${
              isVisible ? "translate-x-0" : "-translate-x-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              Warum A.S.S Security?
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
              Wir verbinden langjährige Erfahrung mit zukunftsorientierter
              Technologie, um Ihnen ein Höchstmaß an Sicherheit zu garantieren.
              Ihr Vertrauen ist unser höchstes Gut.
            </p>
            <div className="mt-10 space-y-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-start transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-8 w-8 text-blue-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`
              mt-12 md:mt-0 
              transform transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
              ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}
            `}
          >
            <div className="relative w-full flex justify-center">
              {/* Синее мягкое свечение позади */}
              <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full -z-10 animate-pulse-slow"></div>

              {/* Lottie-анимация */}
              <Lottie
                animationData={cybersecurity}
                loop={true}
                className="w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;