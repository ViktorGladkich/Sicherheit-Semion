
import React from 'react';
import { CinematicText } from './ui/cinematic-text';
import { Siren, Users, ShieldCheck, Eye, Zap, Lock } from 'lucide-react';
import { BenefitCard, BenefitItem } from './benefits/BenefitCard';

const benefitsData: BenefitItem[] = [
  {
    id: "01",
    title: "Intervention",
    tagline: "GESCHWINDIGKEIT",
    icon: <Siren className="w-8 h-8 md:w-10 md:h-10" />,
    description: "Reaktionszeit unter 10 Minuten. Unsere Einheiten sind strategisch positioniert, um im Alarmfall sofort vor Ort zu sein.",
    stat: "< 10 MIN"
  },
  {
    id: "02",
    title: "Qualifikation",
    tagline: "KOMPETENZ",
    icon: <Users className="w-8 h-8 md:w-10 md:h-10" />,
    description: "Zertifiziertes Personal nach §34a GewO. Regelmäßige Schulungen in Deeskalation, Recht und Erster Hilfe.",
    stat: "100% ZERTIFIZIERT"
  },
  {
    id: "03",
    title: "Integrität",
    tagline: "DISKRETION",
    icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" />,
    description: "Absolute Verschwiegenheit ist unser Kapital. Wir arbeiten im Hintergrund: so unauffällig wie möglich, so präsent wie nötig.",
    stat: "NDA STANDARD"
  },
  {
    id: "04",
    title: "Prävention",
    tagline: "ANALYSE",
    icon: <Eye className="w-8 h-8 md:w-10 md:h-10" />,
    description: "Wir warten nicht auf den Schaden. Durch proaktive Überwachung und intelligente Routenplanung verhindern wir Vorfälle.",
    stat: "24/7 ACTIVE"
  },
  {
    id: "05",
    title: "Technologie",
    tagline: "INNOVATION",
    icon: <Zap className="w-8 h-8 md:w-10 md:h-10" />,
    description: "Einsatz modernster Überwachungstechnik und digitaler Wächterkontrollsysteme für lückenlose Dokumentation.",
    stat: "LATEST GEN"
  },
  {
    id: "06",
    title: "Verlässlichkeit",
    tagline: "PARTNERSCHAFT",
    icon: <Lock className="w-8 h-8 md:w-10 md:h-10" />,
    description: "Ein fester Ansprechpartner für Ihre Sicherheit. Wir liefern keine Ausreden, sondern Ergebnisse.",
    stat: "GUARANTEED"
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="relative bg-background py-24">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16">
             <CinematicText 
                words={["WARUM A.S.S?", "IHRE VORTEILE"]} 
                className="text-4xl md:text-6xl font-extrabold"
                alignment="center"
             />
             <div className="h-1 w-24 bg-foreground mt-6 mb-6 rounded-full"></div>
             <p className="text-lg text-muted-foreground max-w-2xl">
                Sicherheit basiert auf Fakten, nicht auf Versprechen. Hier sind sechs Gründe, warum wir der richtige Partner sind.
             </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {benefitsData.map((benefit, i) => (
            <BenefitCard key={i} index={i} item={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
