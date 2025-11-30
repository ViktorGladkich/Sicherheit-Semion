
import React from 'react';
import { motion } from 'framer-motion';
import { CinematicText } from './ui/cinematic-text';
import { Siren, Users, ShieldCheck, Eye, Zap, Lock } from 'lucide-react';

const benefits = [
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

interface CardProps {
    item: typeof benefits[0];
    index: number;
}

const BenefitCard: React.FC<CardProps> = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col justify-between p-6 md:p-8 h-full bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 hover:border-foreground/50 transition-colors duration-300 overflow-hidden"
        >
            {/* Hover Background Effect */}
            <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            {/* Technical Corners */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neutral-300 dark:border-neutral-700 group-hover:border-foreground transition-colors duration-300"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neutral-300 dark:border-neutral-700 group-hover:border-foreground transition-colors duration-300"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neutral-300 dark:border-neutral-700 group-hover:border-foreground transition-colors duration-300"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neutral-300 dark:border-neutral-700 group-hover:border-foreground transition-colors duration-300"></div>

            {/* Header */}
            <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="p-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-foreground group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    {item.icon}
                </div>
                <span className="font-mono text-4xl font-bold text-neutral-200 dark:text-neutral-800 group-hover:text-neutral-300 dark:group-hover:text-neutral-700 transition-colors select-none">
                    {item.id}
                </span>
            </div>

            {/* Content */}
            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{item.tagline}</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {item.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 border-l-2 border-neutral-200 dark:border-neutral-800 pl-3 group-hover:border-foreground/50 transition-colors">
                    {item.description}
                </p>
            </div>

            {/* Footer / Stat */}
            <div className="relative z-10 mt-auto pt-4 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center">
                 <span className="text-[10px] uppercase tracking-wider text-neutral-400">System Status</span>
                 <span className="font-mono text-sm font-bold text-foreground bg-neutral-200 dark:bg-neutral-800 px-2 py-0.5 rounded">
                    {item.stat}
                 </span>
            </div>
        </motion.div>
    )
}

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
          {benefits.map((benefit, i) => (
            <BenefitCard key={i} index={i} item={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
