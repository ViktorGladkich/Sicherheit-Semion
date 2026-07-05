"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Eye, Lock } from "lucide-react";

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // --- LAYER 1: EXPERIENCE ---
  const l1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);
  const l1Scale = useTransform(scrollYProgress, [0, 0.35], [1, 0.85]);
  const l1Y = useTransform(scrollYProgress, [0, 0.35], ["0%", "-15%"]);

  // --- LAYER 2: MISSION ---
  const l2Y = useTransform(scrollYProgress, [0.15, 0.35, 0.6, 0.7], ["100%", "0%", "0%", "-15%"]);
  const l2Scale = useTransform(scrollYProgress, [0.35, 0.6, 0.7], [1, 1, 0.85]);
  const l2Opacity = useTransform(scrollYProgress, [0.15, 0.25, 0.6, 0.7], [0, 1, 1, 0]);

  // --- LAYER 3: RADIAL VALUES ---
  const l3Y = useTransform(scrollYProgress, [0.5, 0.7], ["100%", "0%"]);
  const l3Opacity = useTransform(scrollYProgress, [0.5, 0.6, 1], [0, 1, 1]);

  return (
    <section id="about" ref={containerRef} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Subtle grid background for the whole section */}
        <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none"></div>

        {/* ==================== LAYER 1: EXPERIENCE ==================== */}
        <motion.div 
          style={{ opacity: l1Opacity, scale: l1Scale, y: l1Y, willChange: "transform, opacity" }}
          className="absolute inset-0 flex flex-col items-center justify-center p-6"
        >
          <div className="relative text-center w-full max-w-5xl mx-auto flex items-center justify-center">
            {/* Massive Background Text */}
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[30rem] font-black leading-none text-foreground/5 dark:text-white/5 select-none tracking-tighter whitespace-nowrap">
              10+
            </h2>
            
            {/* Foreground Content floating over the numbers */}
            <div className="relative z-10 flex flex-col items-center justify-center">
               <h3 className="text-3xl md:text-7xl font-black text-foreground tracking-tight mb-6 drop-shadow-2xl text-center">
                 Standards neu definiert.
               </h3>
               <p className="text-foreground text-sm md:text-xl text-center max-w-2xl mx-auto backdrop-blur-md md:backdrop-blur-xl bg-white/40 dark:bg-black/40 p-6 md:p-8 rounded-3xl border border-black/10 dark:border-white/10 shadow-2xl leading-relaxed font-medium">
                 Was als spezialisierter Wachdienst begann, ist heute der führende Experte für Objektschutz und Risikomanagement in Dresden und Sachsen.
               </p>
               <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                 <span className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md text-xs sm:text-sm font-bold tracking-widest uppercase shadow-lg">Zertifiziert §34a</span>
                 <span className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md text-xs sm:text-sm font-bold tracking-widest uppercase shadow-lg">Sachsenweit</span>
               </div>
            </div>
          </div>
        </motion.div>


        {/* ==================== LAYER 2: MISSION ==================== */}
        <motion.div 
          style={{ opacity: l2Opacity, scale: l2Scale, y: l2Y, willChange: "transform, opacity" }}
          className="absolute inset-0 flex items-center justify-center p-4 md:p-12 pointer-events-none"
        >
          <div className="w-full h-full max-w-6xl max-h-[80vh] md:max-h-[800px] relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-black/10 dark:border-white/10 bg-linear-to-br from-neutral-100/95 to-neutral-200/95 dark:from-neutral-900/95 dark:to-black/95 shadow-2xl md:shadow-[0_0_50px_rgba(0,0,0,0.15)] dark:shadow-2xl md:dark:shadow-[0_0_50px_rgba(255,255,255,0.05)] backdrop-blur-md md:backdrop-blur-3xl flex flex-col items-center justify-center text-center p-6 md:p-20 pointer-events-auto">
             
             {/* Decorative Background Elements */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-foreground/5 blur-[100px] rounded-full pointer-events-none"></div>

             <h3 className="text-xs md:text-base text-foreground/60 uppercase tracking-[0.3em] font-bold mb-4 md:mb-6 relative z-10">Unsere Mission</h3>
             
             <h4 className="text-2xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 md:mb-8 leading-tight max-w-4xl relative z-10">
               Dynamische Sicherheit für eine wandelnde Welt.
             </h4>
             
             <p className="text-sm md:text-2xl text-foreground/80 max-w-3xl leading-relaxed relative z-10">
               Wir verstehen Sicherheit nicht als statisches Produkt, sondern als dynamischen Prozess. Wir schaffen den sicheren Raum, in dem Sie sich voll und ganz auf Ihr Kerngeschäft konzentrieren können.
             </p>

          </div>
        </motion.div>


        {/* ==================== LAYER 3: RADIAL VALUES ==================== */}
        <motion.div 
          style={{ opacity: l3Opacity, y: l3Y, willChange: "transform, opacity" }}
          className="absolute inset-0 flex items-center justify-center p-4 md:p-12 pointer-events-none"
        >
          <div className="w-full h-full max-w-6xl max-h-[80vh] md:max-h-[800px] relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-black/10 dark:border-white/10 bg-background shadow-2xl md:shadow-[0_0_50px_rgba(0,0,0,0.2)] md:dark:shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center p-4 md:p-8 pointer-events-auto">
            
            <h3 className="absolute top-8 md:top-20 left-1/2 -translate-x-1/2 text-xl md:text-4xl font-black tracking-widest uppercase text-foreground text-center w-full">
              Unsere Kernwerte
            </h3>

            {/* Radial Layout System */}
            <div className="relative w-full max-w-[260px] sm:max-w-xs md:max-w-2xl aspect-square flex items-center justify-center mt-12 md:mt-0">
               
               {/* Center Hub */}
               <div className="relative z-20 w-20 h-20 md:w-48 md:h-48 rounded-full border-2 border-foreground bg-background flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                 <Shield className="w-8 h-8 md:w-20 md:h-20 text-foreground" />
                 <div className="absolute inset-0 rounded-full border border-foreground animate-ping opacity-20"></div>
               </div>

               {/* Orbiting Container */}
               <div className="absolute inset-0" style={{ animation: 'spin-slow 30s linear infinite' }}>
                 {/* Orbit Rings */}
                 <div className="absolute inset-[-10%] md:inset-0 border border-neutral-200 dark:border-neutral-800 rounded-full pointer-events-none"></div>
                 <div className="absolute inset-[10%] md:inset-[15%] border border-dashed border-neutral-300 dark:border-neutral-700 rounded-full pointer-events-none" style={{ animation: 'reverse-spin-slow 20s linear infinite' }}></div>

                 {/* Node 1: Diskretion (Top Left) */}
                 <div className="absolute top-[20%] left-[10%] md:top-[32%] md:left-[20%] -translate-x-1/2 -translate-y-1/2">
                   <div className="flex flex-col items-center gap-2 md:gap-3" style={{ animation: 'reverse-spin-slow 30s linear infinite' }}>
                     <div className="w-12 h-12 md:w-24 md:h-24 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer">
                       <Lock className="w-5 h-5 md:w-10 md:h-10 text-foreground" />
                     </div>
                     <span className="font-bold uppercase tracking-widest text-[9px] md:text-sm bg-white/80 dark:bg-black/80 backdrop-blur-sm md:backdrop-blur-md px-2 py-1 md:px-3 md:py-2 rounded-full border border-neutral-200 dark:border-neutral-800 whitespace-nowrap">Diskretion</span>
                   </div>
                 </div>

                 {/* Node 2: Wachsam (Top Right) */}
                 <div className="absolute top-[20%] left-[90%] md:top-[32%] md:left-[80%] -translate-x-1/2 -translate-y-1/2">
                   <div className="flex flex-col items-center gap-2 md:gap-3" style={{ animation: 'reverse-spin-slow 30s linear infinite' }}>
                     <div className="w-12 h-12 md:w-24 md:h-24 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer">
                       <Eye className="w-5 h-5 md:w-10 md:h-10 text-foreground" />
                     </div>
                     <span className="font-bold uppercase tracking-widest text-[9px] md:text-sm bg-white/80 dark:bg-black/80 backdrop-blur-sm md:backdrop-blur-md px-2 py-1 md:px-3 md:py-2 rounded-full border border-neutral-200 dark:border-neutral-800 whitespace-nowrap">Wachsam</span>
                   </div>
                 </div>

                 {/* Node 3: Zuverlässigkeit (Bottom Center) */}
                 <div className="absolute top-[90%] left-[50%] md:top-[85%] md:left-[50%] -translate-x-1/2 -translate-y-1/2">
                   <div className="flex flex-col items-center gap-2 md:gap-3" style={{ animation: 'reverse-spin-slow 30s linear infinite' }}>
                     <div className="w-12 h-12 md:w-24 md:h-24 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer">
                       <svg className="w-5 h-5 md:w-10 md:h-10 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                       </svg>
                     </div>
                     <span className="font-bold uppercase tracking-widest text-[9px] md:text-sm bg-white/80 dark:bg-black/80 backdrop-blur-sm md:backdrop-blur-md px-2 py-1 md:px-3 md:py-2 rounded-full border border-neutral-200 dark:border-neutral-800 whitespace-nowrap">Zuverlässigkeit</span>
                   </div>
                 </div>
               </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
