import React, { useState } from "react";
import { HardHat, ShoppingBag, Building2, PartyPopper } from "lucide-react";

const industries = [
  {
    id: "bau",
    title: "Bauwesen",
    icon: <HardHat className="w-6 h-6" />,
    desc: "Sicherung von Rohbauten, Materiallagern und Maschinenpark gegen Diebstahl und Vandalismus.",
    image: "/security_construction_nano_v4_1772039625688.png",
    alt: "Sicherheitsdienst für Baustellen und Rohbauüberwachung",
  },
  {
    id: "retail",
    title: "Einzelhandel",
    icon: <ShoppingBag className="w-6 h-6" />,
    desc: "Doorman-Dienste, Ladendetektive und Prävention von Inventurdifferenzen.",
    image: "/security_retail_nano_v2_1772039184233.png",
    alt: "Ladendetektiv und Sicherheitsdienst für Einzelhandel",
  },
  {
    id: "office",
    title: "Büro & Gewerbe",
    icon: <Building2 className="w-6 h-6" />,
    desc: "Empfangsdienste, Pförtnerlogen und nächtliche Revierstreifen.",
    image: "/security_office_nano_v2_1772039433239.png",
    alt: "Objektschutz für Bürogebäude und Gewerbeparks",
  },
  {
    id: "event",
    title: "Events",
    icon: <PartyPopper className="w-6 h-6" />,
    desc: "Einlasskontrollen, VIP-Betreuung und Crowd Management für Veranstaltungen.",
    image: "/security_events_nano_v2_1772039557568.png",
    alt: "Event-Security und Einlasskontrollen bei Großveranstaltungen",
  },
];

export const IndustrySolutions: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(industries[0].id);

  return (
    <div className="mt-32">
      <div className="mb-12 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          BRANCHENLÖSUNGEN
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-2 h-[600px] lg:h-[400px]">
        {industries.map((industry) => {
          const isActive = activeId === industry.id;
          return (
            <div
              key={industry.id}
              onClick={() => setActiveId(industry.id)}
              className={`
                                relative overflow-hidden rounded-2xl cursor-pointer border border-neutral-200 dark:border-neutral-800
                                transition-all duration-1000 ease-out transform-gpu
                                ${
                                  isActive
                                    ? "flex-3"
                                    : "flex-1 hover:flex-[1.2] opacity-80 hover:opacity-100"
                                }
                            `}
              role="button"
              aria-label={`${industry.title} anzeigen`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={industry.image}
                  alt={industry.alt}
                  className={`
                    w-full h-full object-cover transition-all duration-1000 ease-out
                    ${
                      isActive
                        ? "scale-100 grayscale-0"
                        : "scale-110 grayscale brightness-[0.4] lg:scale-110 md:scale-100 sm:scale-100"
                    }
                    /* Disable zoom on mobile for smoother feel */
                    max-md:scale-100
                  `}
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-1000 ease-out ${
                    isActive ? "opacity-90" : "opacity-70"
                  }`}
                ></div>
              </div>

              {/* Content Wrapper */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                {/* Heading (Icon + Title) */}
                <div className="flex items-center gap-4 mb-2">
                  <div
                    className={`
                      p-2 rounded-lg bg-foreground text-background transition-all duration-1000 ease-out
                      ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-100 lg:opacity-0"}
                    `}
                  >
                    {industry.icon}
                  </div>
                  <h3
                    className={`text-2xl font-black text-white whitespace-nowrap transition-all duration-1000 ease-out ${
                      isActive
                        ? "opacity-100 translate-x-0"
                        : "opacity-100 lg:opacity-0 lg:-translate-x-10"
                    }`}
                  >
                    {industry.title}
                  </h3>
                </div>

                {/* Description - Slides out smoothly to the right */}
                <div
                  className={`
                    overflow-hidden transition-all duration-1000 ease-out
                    ${
                      isActive
                        ? "max-h-40 opacity-100 translate-x-0 delay-300"
                        : "max-h-0 opacity-0 -translate-x-8"
                    }
                  `}
                >
                  <p className="text-neutral-400 text-sm leading-relaxed max-w-[320px] pt-4 border-t border-white/20">
                    {industry.desc}
                  </p>
                </div>
              </div>

              {/* Inactive Vertical Title (Desktop Only) */}
              {!isActive && (
                <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
                  <span className="-rotate-90 text-neutral-400 font-bold tracking-widest whitespace-nowrap uppercase text-sm">
                    {industry.title}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
