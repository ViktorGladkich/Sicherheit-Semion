"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { SectionHeader } from "../ui/SectionHeader";

const teamMembers = [
  {
    name: "Semion Raskin",
    role: "Geschäftsführung",
    image: "/team_semion_nano_v1_1772039706807.png",
  },
  {
    name: "Alexander Calutcov",
    role: "Geschäftsführung",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Andre Pogosan",
    role: "Prokurist",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
  },
];

const Team: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="team"
      className="py-24 relative overflow-hidden "
      ref={sectionRef}
    >

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="UNSERE FÜHRUNG"
          description="Hinter modernster Technik und taktischer Ausrüstung stehen Menschen, die Verantwortung übernehmen. Unsere Führungsebene vereint jahrzehntelange Erfahrung aus operativem Risikomanagement und strategischer Unternehmensführung. Wir verstecken uns nicht hinter Konzernen – wir stehen persönlich mit unserem Namen für Ihre Sicherheit ein."
        />

        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="group relative bg-white/50 dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container with Metal Border Effect */}
              <div className="relative aspect-4/5 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 transition-opacity duration-500 group-hover:opacity-40"></div>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Metallic Shine Overlay on Hover */}
                <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/10 to-white/0 translate-x-full group-hover:animate-shine z-20 pointer-events-none"></div>

                {/* Scanning Line Effect */}
                <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 left-0 w-full h-px bg-foreground/50 shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-scan-line"></div>
                </div>
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="h-0.5 w-12 bg-foreground mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-sm font-mono text-neutral-300 uppercase tracking-widest">
                  {member.role}
                </p>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent group-hover:border-foreground/20 transition-colors duration-500 pointer-events-none rounded-xl"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
