import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { CinematicText } from "./ui/cinematic-text";
import { ScanSearch, FileText, ShieldCheck, Activity } from "lucide-react";
import { ApproachStep } from "./approach/ApproachStep";

const steps = [
  {
    icon: <ScanSearch className="w-full h-full" strokeWidth={1.5} />,
    title: "Analyse",
    description:
      "Detaillierte Sicherheits-Analyse vor Ort zur Identifikation aller potenziellen Risiken und Schwachstellen.",
  },
  {
    icon: <FileText className="w-full h-full" strokeWidth={1.5} />,
    title: "Konzept",
    description:
      "Entwicklung individueller, maßgeschneiderter Schutzmaßnahmen basierend auf der Risikoanalyse.",
  },
  {
    icon: <ShieldCheck className="w-full h-full" strokeWidth={1.5} />,
    title: "Umsetzung",
    description:
      "Professionelle Implementierung der Sicherheitsstrategie durch unser zertifiziertes Expertenteam.",
  },
  {
    icon: <Activity className="w-full h-full" strokeWidth={1.5} />,
    title: "Betreuung",
    description:
      "Kontinuierliches 24/7 Monitoring, Qualitätskontrolle und sofortige Reaktion auf Vorfälle.",
  },
];

const Approach: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="approach"
      className="py-24 relative overflow-hidden bg-background"
      ref={containerRef}
    >
      {/* Background elements - Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="mb-6 flex justify-center">
            <CinematicText
              words={["UNSER PROZESS"]}
              className="text-4xl md:text-5xl font-extrabold"
              alignment="center"
            />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ein strukturierter Ablauf für maximale Sicherheit. Präzision in
            jedem Schritt.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* --- CENTRAL SPINE (DESKTOP) --- */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-neutral-200 dark:bg-neutral-800 -translate-x-1/2 hidden md:block">
            {/* Core Beam - Linked to Scroll */}
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-foreground via-foreground/50 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.5)]"
            ></motion.div>
          </div>

          {/* --- LEFT SPINE (MOBILE) --- */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-neutral-200 dark:bg-neutral-800 md:hidden">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-foreground via-foreground/50 to-transparent"
            ></motion.div>
          </div>

          <div className="flex flex-col gap-12 md:gap-24 relative z-10">
            {steps.map((step, index) => (
              <ApproachStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
