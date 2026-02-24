import React, { useState } from "react";
import { HardHat, ShoppingBag, Building2, PartyPopper } from "lucide-react";

const industries = [
  {
    id: "bau",
    title: "Bauwesen",
    icon: <HardHat className="w-6 h-6" />,
    desc: "Sicherung von Rohbauten, Materiallagern und Maschinenpark gegen Diebstahl und Vandalismus.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    alt: "Sicherheitsdienst für Baustellen und Rohbauüberwachung",
  },
  {
    id: "retail",
    title: "Einzelhandel",
    icon: <ShoppingBag className="w-6 h-6" />,
    desc: "Doorman-Dienste, Ladendetektive und Prävention von Inventurdifferenzen.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    alt: "Ladendetektiv und Sicherheitsdienst für Einzelhandel",
  },
  {
    id: "office",
    title: "Büro & Gewerbe",
    icon: <Building2 className="w-6 h-6" />,
    desc: "Empfangsdienste, Pförtnerlogen und nächtliche Revierstreifen.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    alt: "Objektschutz für Bürogebäude und Gewerbeparks",
  },
  {
    id: "event",
    title: "Events",
    icon: <PartyPopper className="w-6 h-6" />,
    desc: "Einlasskontrollen, VIP-Betreuung und Crowd Management für Veranstaltungen.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
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
                                            : "scale-110 grayscale brightness-[0.4]"
                                        }
                                    `}
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-1000 ease-out ${
                    isActive ? "opacity-80" : "opacity-60"
                  }`}
                ></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`
                                        p-2 rounded-lg bg-foreground text-background transition-transform duration-1000 ease-out
                                        ${isActive ? "scale-100" : "scale-90"}
                                     `}
                  >
                    {industry.icon}
                  </div>
                  <h3
                    className={`text-xl font-bold text-white whitespace-nowrap transition-all duration-1000 ease-out delay-75 ${
                      isActive
                        ? "opacity-100 translate-x-0"
                        : "opacity-100 lg:opacity-0 lg:-translate-x-10"
                    }`}
                  >
                    {industry.title}
                  </h3>
                </div>

                <div
                  className={`
                                        overflow-hidden transition-all duration-1000 ease-out delay-150
                                        ${
                                          isActive
                                            ? "max-h-40 opacity-100"
                                            : "max-h-0 opacity-0"
                                        }
                                    `}
                >
                  <p className="text-neutral-300 text-sm leading-relaxed max-w-lg pt-2 border-t border-white/20 transition-all duration-1000 ease-out">
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
