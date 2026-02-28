"use client";
import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Siren, Users, ShieldCheck, Eye, Zap, Lock } from "lucide-react";
import { BenefitCard, BenefitItem } from "./benefits/BenefitCard";

const benefitsData: BenefitItem[] = [
  {
    id: "01",
    title: "Intervention",
    tagline: "GESCHWINDIGKEIT",
    icon: <Siren className="w-8 h-8 md:w-10 md:h-10" />,
    description:
      "Reaktionszeit unter 10 Minuten. Unsere Einheiten sind strategisch positioniert, um im Alarmfall sofort vor Ort zu sein.",
    stat: "< 10 MIN",
  },
  {
    id: "02",
    title: "Qualifikation",
    tagline: "KOMPETENZ",
    icon: <Users className="w-8 h-8 md:w-10 md:h-10" />,
    description:
      "Zertifiziertes Personal nach §34a GewO. Regelmäßige Schulungen in Deeskalation, Recht und Erster Hilfe.",
    stat: "100% ZERTIFIZIERT",
  },
  {
    id: "03",
    title: "Integrität",
    tagline: "DISKRETION",
    icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" />,
    description:
      "Absolute Verschwiegenheit ist unser Kapital. Wir arbeiten im Hintergrund: so unauffällig wie möglich, so präsent wie nötig.",
    stat: "NDA STANDARD",
  },
  {
    id: "04",
    title: "Prävention",
    tagline: "ANALYSE",
    icon: <Eye className="w-8 h-8 md:w-10 md:h-10" />,
    description:
      "Wir warten nicht auf den Schaden. Durch proaktive Überwachung und intelligente Routenplanung verhindern wir Vorfälle.",
    stat: "24/7 ACTIVE",
  },
  {
    id: "05",
    title: "Technologie",
    tagline: "INNOVATION",
    icon: <Zap className="w-8 h-8 md:w-10 md:h-10" />,
    description:
      "Einsatz modernster Überwachungstechnik und digitaler Wächterkontrollsysteme für lückenlose Dokumentation.",
    stat: "LATEST GEN",
  },
  {
    id: "06",
    title: "Verlässlichkeit",
    tagline: "PARTNERSCHAFT",
    icon: <Lock className="w-8 h-8 md:w-10 md:h-10" />,
    description:
      "Ein fester Ansprechpartner für Ihre Sicherheit. Wir liefern keine Ausreden, sondern Ergebnisse.",
    stat: "GUARANTEED",
  },
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="relative py-32 overflow-hidden">
      {/* Background Gradient Blobs */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-foreground/5 blur-[120px] rounded-full -z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-foreground/5 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <SectionHeader
            title="WARUM ASS?"
            description="High-End Security Lösungen. Präzise, technologisch überlegen und kompromisslos in der Ausführung."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 auto-rows-[280px] gap-6">
          {/* Card 1: Intervention (Extra Wide & Tall) */}
          <BenefitCard
            index={0}
            item={benefitsData[0]}
            className="lg:col-span-8 lg:row-span-2 shadow-2xl"
          />

          {/* Card 2: Qualifikation (Upper Right) */}
          <BenefitCard
            index={1}
            item={benefitsData[1]}
            className="lg:col-span-4 lg:row-span-1"
          />

          {/* DECO Tile: Pulsating Tech Scanner (Gap Filler) */}
          <div className="hidden lg:flex lg:col-span-4 lg:row-span-1 relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-10 flex-col justify-between group backdrop-blur-sm">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,#22c55e_0%,transparent_70%)] group-hover:opacity-20 transition-opacity duration-1000 animate-pulse"></div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex justify-between items-start">
                <div className="text-[10px] font-mono tracking-tighter text-neutral-500 uppercase">
                  SYS_PROT: AUTH_ERFOLGREICH
                </div>
                <div className="flex gap-1">
                  <div className="w-1 h-3 bg-green-500/20"></div>
                  <div className="w-1 h-3 bg-green-500/40 animate-pulse"></div>
                  <div className="w-1 h-3 bg-green-500/60"></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="h-0.5 w-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden relative">
                  <div className="absolute inset-0 bg-green-500/40 w-1/3 animate-slide"></div>
                </div>
                <div className="h-0.5 w-3/4 bg-neutral-200 dark:bg-neutral-800 overflow-hidden relative">
                  <div className="absolute inset-0 bg-green-500/40 w-1/2 animate-slide [animation-delay:1s]"></div>
                </div>
              </div>

              <div className="pt-4 mt-auto">
                <div className="text-[10px] font-mono tracking-widest text-[#22c55e] animate-pulse">
                  {">"} INITIALISIERE PROTOKOLL...
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Integrität (Middle Level) */}
          <BenefitCard
            index={2}
            item={benefitsData[2]}
            className="lg:col-span-4 lg:row-span-1"
          />

          {/* Card 4: Prävention (Middle Level) */}
          <BenefitCard
            index={3}
            item={benefitsData[3]}
            className="lg:col-span-4 lg:row-span-1"
          />

          {/* DECO Tile: Massive Stat (Gap Filler) */}
          <div className="hidden lg:flex lg:col-span-4 lg:row-span-1 relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 p-10 flex-col justify-end group backdrop-blur-md">
            <div className="absolute top-4 right-6 text-[80px] font-black opacity-10 select-none tracking-tighter group-hover:opacity-20 transition-opacity text-foreground">
              99.9
            </div>
            <div className="relative z-10 text-foreground">
              <div className="text-4xl font-black tracking-tighter mb-1">
                99.9%
              </div>
              <div className="text-[10px] font-mono uppercase tracking-widest opacity-70">
                Sicherheitsrate garantiert
              </div>
            </div>
          </div>

          {/* Card 5: Technologie (Bottom Row) */}
          <BenefitCard
            index={4}
            item={benefitsData[4]}
            className="lg:col-span-6 lg:row-span-1"
          />

          {/* Card 6: Verlässlichkeit (Bottom Row) */}
          <BenefitCard
            index={5}
            item={benefitsData[5]}
            className="lg:col-span-6 lg:row-span-1"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
