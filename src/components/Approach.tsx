
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { CinematicText } from './ui/cinematic-text';
import { ScanSearch, FileText, ShieldCheck, Activity } from 'lucide-react';

const steps = [
    { 
        icon: <ScanSearch className="w-full h-full" strokeWidth={1.5} />,
        title: "Analyse",
        description: "Detaillierte Sicherheits-Analyse vor Ort zur Identifikation aller potenziellen Risiken und Schwachstellen."
    },
    { 
        icon: <FileText className="w-full h-full" strokeWidth={1.5} />,
        title: "Konzept",
        description: "Entwicklung individueller, maßgeschneiderter Schutzmaßnahmen basierend auf der Risikoanalyse."
    },
    { 
        icon: <ShieldCheck className="w-full h-full" strokeWidth={1.5} />,
        title: "Umsetzung",
        description: "Professionelle Implementierung der Sicherheitsstrategie durch unser zertifiziertes Expertenteam."
    },
    { 
        icon: <Activity className="w-full h-full" strokeWidth={1.5} />,
        title: "Betreuung",
        description: "Kontinuierliches 24/7 Monitoring, Qualitätskontrolle und sofortige Reaktion auf Vorfälle."
    }
];

const Approach: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="approach" className="py-24 relative overflow-hidden bg-background" ref={containerRef}>
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
                        Ein strukturierter Ablauf für maximale Sicherheit. Präzision in jedem Schritt.
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
                        {steps.map((step, index) => {
                           const isEven = index % 2 === 0;
                           return (
                               <motion.div 
                                    key={index} 
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`
                                        relative flex flex-col md:flex-row items-center
                                        ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}
                                        group
                                    `}
                               >
                                    {/* CONTENT SIDE (Width 50%) */}
                                    <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12 flex flex-col justify-center">
                                        <div className={`
                                            relative p-6 md:p-8 
                                            bg-white/70 dark:bg-neutral-900/40 backdrop-blur-md 
                                            rounded-xl border border-neutral-200 dark:border-neutral-800 
                                            shadow-[0_0_15px_-3px_rgba(0,0,0,0.1)] 
                                            hover:border-foreground/40 hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.2)]
                                            transition-all duration-300 group-hover:scale-[1.02]
                                            text-left
                                        `}>
                                            {/* Tech Corners */}
                                            <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-foreground/20 rounded-tl-lg group-hover:border-foreground transition-colors"></div>
                                            <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-foreground/20 rounded-tr-lg group-hover:border-foreground transition-colors"></div>
                                            <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-foreground/20 rounded-bl-lg group-hover:border-foreground transition-colors"></div>
                                            <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-foreground/20 rounded-br-lg group-hover:border-foreground transition-colors"></div>
                                            
                                            <div className="flex items-baseline gap-3 mb-3">
                                                <span className="font-mono text-3xl font-bold text-foreground/10 group-hover:text-foreground/30 transition-colors">0{index + 1}</span>
                                                <h3 className="text-xl md:text-2xl font-bold text-foreground">{step.title}</h3>
                                            </div>
                                            
                                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* CENTER NODE */}
                                    <div className={`
                                        absolute left-6 md:left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2
                                        flex items-center justify-center
                                    `}>
                                        {/* Outer Rotating Ring */}
                                        <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-dashed border-neutral-400 dark:border-neutral-600 animate-spin-slow opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                        
                                        {/* Inner Counter-Rotating Ring */}
                                        <div className="absolute w-10 h-10 md:w-16 md:h-16 rounded-full border border-dotted border-neutral-400 dark:border-neutral-600 animate-reverse-spin-slow opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                        
                                        {/* Core */}
                                        <motion.div 
                                            whileHover={{ scale: 1.1 }}
                                            className="absolute w-8 h-8 md:w-12 md:h-12 rounded-full bg-background border border-foreground/20 shadow-[0_0_20px_rgba(0,0,0,0.1)] flex items-center justify-center z-10 group-hover:border-foreground group-hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-300"
                                        >
                                            <div className="w-4 h-4 md:w-6 md:h-6 text-foreground/70 group-hover:text-foreground transition-colors duration-300">
                                                {step.icon}
                                            </div>
                                        </motion.div>

                                        {/* Horizontal Connection Beam (Desktop) */}
                                        <motion.div 
                                            initial={{ scaleX: 0, opacity: 0 }}
                                            whileInView={{ scaleX: 1, opacity: 0.3 }}
                                            transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                            style={{ originX: isEven ? 0 : 1 }}
                                            className={`
                                                hidden md:block absolute top-1/2 h-[1px] bg-gradient-to-r from-foreground/80 to-transparent w-12
                                                ${isEven ? 'left-full' : 'right-full rotate-180'}
                                                group-hover:opacity-100 group-hover:w-16 transition-all duration-500
                                            `}
                                        >
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-foreground rounded-full shadow-[0_0_5px_currentColor]"></div>
                                        </motion.div>
                                    </div>

                                    {/* EMPTY SPACE SIDE (Width 50%) */}
                                    <div className="w-full md:w-1/2 hidden md:block"></div>
                               </motion.div>
                           );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Approach;
