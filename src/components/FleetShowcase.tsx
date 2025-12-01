import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { CinematicText } from './ui/cinematic-text';
import { Car, Radio, Shield, HardHat, ChevronRight } from 'lucide-react';

const assets = [
  {
    id: "FLT-01",
    title: "Mobile Intervention",
    subtitle: "GPS-GESTÜTZTE FLOTTE",
    icon: <Car className="w-12 h-12 md:w-20 md:h-20" />,
    description:
      "Unsere Einsatzfahrzeuge sind strategisch positioniert und mit modernster GPS-Ortung ausgestattet. Dies ermöglicht der Leitstelle, das nächstgelegene Fahrzeug in Sekunden zu identifizieren und zu entsenden.",
    specs: [
      { label: "REAKTIONSZEIT", value: "< 15 MIN" },
      { label: "GPS-ORTUNG", value: "LIVE-TRACKING" },
      { label: "BEREITSCHAFT", value: "24/7 ACTIVE" },
      { label: "FLOTTEN-TYP", value: "PATROL UNITS" },
    ],
  },
  {
    id: "EQP-02",
    title: "Einsatz-Ausrüstung",
    subtitle: "PROFESSIONELLES EQUIPMENT",
    icon: <Shield className="w-12 h-12 md:w-20 md:h-20" />,
    description:
      "Einheitliches, autoritäres Auftreten ist der erste Schritt zur Prävention. Unsere Mitarbeiter tragen zertifizierte Schutzausrüstung, die Sicherheit ausstrahlt und im Ernstfall schützt.",
    specs: [
      { label: "STANDARD", value: "DIN/ISO" },
      { label: "SCHUTZKLASSE", value: "SK1 / SK2" },
      { label: "OPTIONAL", value: "BODYCAMS" },
      { label: "UNIFORM", value: "TACTICAL BLACK" },
    ],
  },
  {
    id: "COM-03",
    title: "Komm-Zentrale",
    subtitle: "DIGITALE VERNETZUNG",
    icon: <Radio className="w-12 h-12 md:w-20 md:h-20" />,
    description:
      "Kommunikation ist der Schlüssel zur Koordination. Wir nutzen verschlüsselte Digitalfunkgeräte und digitale Wächterkontrollsysteme für eine lückenlose Dokumentation und Verbindung.",
    specs: [
      { label: "FUNK-STD", value: "TETRA DIGITAL" },
      { label: "DOKUMENTATION", value: "ECHTZEIT-LOG" },
      { label: "BACKUP", value: "REDUNDANT" },
      { label: "ENCRYPTION", value: "AES-256" },
    ],
  },
  {
    id: "SAF-04",
    title: "Arbeitsschutz",
    subtitle: "SICHERHEIT FIRST",
    icon: <HardHat className="w-12 h-12 md:w-20 md:h-20" />,
    description:
      "Für Baustellen und Industrieareale ist vollständige persönliche Schutzausrüstung (PSA) Pflicht. Wir halten alle gesetzlichen Sicherheitsvorgaben strikt ein und schulen unser Personal laufend.",
    specs: [
      { label: "PSA-STATUS", value: "VOLLSTÄNDIG" },
      { label: "ZERTIFIKATE", value: "VORHANDEN" },
      { label: "SCHULUNG", value: "MONATLICH" },
      { label: "COMPLIANCE", value: "100%" },
    ],
  },
];

const FleetShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.section
      id="fleet"
      ref={sectionRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="py-24 relative overflow-hidden bg-background"
    >
      {/* Dark Technical Background */}
      <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-950">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-size-[50px_50px] pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <CinematicText
                words={["EINSATZMITTEL &", "AUSRÜSTUNG"]}
                className="text-4xl md:text-5xl font-extrabold"
                alignment="left"
              />
              <div className="h-1 w-20 bg-foreground mt-6"></div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-0 lg:gap-12 border-t border-b border-neutral-300 dark:border-neutral-800 bg-white dark:bg-black/40 backdrop-blur-sm">
          {/* LEFT COLUMN: NAVIGATION */}
          <div className="w-full lg:w-1/3 border-r-0 lg:border-r border-neutral-300 dark:border-neutral-800">
            {assets.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`
                  w-full text-left p-6 flex items-center justify-between group transition-all duration-300 border-b border-neutral-200 dark:border-neutral-800 last:border-0
                  ${activeIndex === index ? 'bg-neutral-100 dark:bg-neutral-900' : 'hover:bg-neutral-50 dark:hover:bg-neutral-900/50'}
                `}
              >
                <div>
                  <div className={`font-mono text-xs mb-1 transition-colors ${activeIndex === index ? 'text-green-600 dark:text-green-500' : 'text-neutral-400'}`}>
                    {item.id}
                  </div>
                  <div className={`font-bold text-lg uppercase tracking-tight transition-colors ${activeIndex === index ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                    {item.title}
                  </div>
                </div>
                <ChevronRight
                  className={`w-5 h-5 transition-transform duration-300 ${activeIndex === index ? 'text-foreground translate-x-1' : 'text-neutral-300 opacity-0 group-hover:opacity-100'}`}
                />
                {activeIndex === index && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-foreground"
                  />
                )}
              </button>
            ))}
          </div>

          {/* RIGHT COLUMN: DISPLAY */}
          <div className="w-full lg:w-2/3 p-8 md:p-12 relative min-h-[500px] flex flex-col justify-center overflow-hidden">
            {/* Background Decor */}
            <div className="absolute right-0 top-0 p-4 opacity-10 pointer-events-none">
              <div className="w-32 h-32 border-r-2 border-t-2 border-foreground rounded-tr-3xl"></div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="relative z-10"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-foreground rounded-lg shadow-2xl shrink-0 border border-neutral-300 dark:border-neutral-700">
                    {assets[activeIndex].icon}
                  </div>

                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-foreground uppercase mb-2 tracking-tight">
                      {assets[activeIndex].title}
                    </h3>
                    <p className="font-mono text-green-600 dark:text-green-500 tracking-widest uppercase text-sm mb-6">
                      {assets[activeIndex].subtitle}
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                      {assets[activeIndex].description}
                    </p>
                  </div>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-neutral-300 dark:border-neutral-800">
                  {assets[activeIndex].specs.map((spec, i) => (
                    <div key={i} className="group">
                      <p className="text-[10px] font-mono text-neutral-400 uppercase mb-1 tracking-wider group-hover:text-foreground transition-colors">
                        {spec.label}
                      </p>
                      <p className="text-sm md:text-base font-bold text-foreground font-mono">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FleetShowcase;