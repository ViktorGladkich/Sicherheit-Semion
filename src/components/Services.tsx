
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { CinematicText } from './ui/cinematic-text';
import { HardHat, ShoppingBag, Building2, PartyPopper, Users, UserCheck, BellRing } from 'lucide-react';

// --- MAIN SERVICES DATA ---
const services = [
  {
    icon: <Building2 className="w-full h-full" strokeWidth={1.5} />,
    title: 'Objektschutz',
    description: 'Umfassender Schutz für Ihre Immobilien, Firmengelände und Baustellen durch permanente Präsenz.',
  },
  {
    icon: <Users className="w-full h-full" strokeWidth={1.5} />,
    title: 'Veranstaltungsschutz',
    description: 'Professionelle Sicherheitskonzepte für Events jeder Größenordnung, von privat bis Großveranstaltung.',
  },
  {
    icon: <UserCheck className="w-full h-full" strokeWidth={1.5} />,
    title: 'Personenschutz',
    description: 'Diskreter und hochqualifizierter Schutz für Personen des öffentlichen Lebens und Führungskräfte.',
  },
  {
    icon: <BellRing className="w-full h-full" strokeWidth={1.5} />,
    title: 'Alarmaufschaltung',
    description: '24/7-Überwachung Ihrer Alarmsysteme mit sofortiger Intervention durch unsere mobilen Einheiten.',
  },
];

interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface ServiceCardProps {
    service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const divRef = useRef<HTMLDivElement>(null);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!divRef.current) return;
  
      const div = divRef.current;
      const rect = div.getBoundingClientRect();
  
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
  
    return (
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}
        ref={divRef}
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/60 backdrop-blur-sm p-8 group h-full"
      >
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(120,120,120,0.1), transparent 40%)`,
          }}
        />
        
        <div className="relative z-10 flex flex-col h-full items-center text-center">
            <div className="mb-6 w-24 h-24 rounded-full bg-gradient-to-b from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center shadow-lg border border-neutral-200 dark:border-neutral-700 group-hover:scale-110 transition-transform duration-500">
                <div className="w-12 h-12 text-foreground/70 group-hover:text-foreground transition-colors duration-300">
                    {service.icon}
                </div>
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
                {service.title}
            </h3>
            
            <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                {service.description}
            </p>
        </div>
      </motion.div>
    );
};

// --- INDUSTRY SOLUTIONS DATA ---
const industries = [
  {
    id: "bau",
    title: "Bauwesen",
    icon: <HardHat className="w-6 h-6" />,
    desc: "Sicherung von Rohbauten, Materiallagern und Maschinenpark gegen Diebstahl und Vandalismus. Zutrittskontrolle für Subunternehmer.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "retail",
    title: "Einzelhandel",
    icon: <ShoppingBag className="w-6 h-6" />,
    desc: "Doorman-Dienste, Ladendetektive und Prävention von Inventurdifferenzen. Diskrete Sicherheit für Ihr Einkaufserlebnis.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "office",
    title: "Büro & Gewerbe",
    icon: <Building2 className="w-6 h-6" />,
    desc: "Empfangsdienste, Pförtnerlogen und nächtliche Revierstreifen für Bürokomplexe und Industrieareale.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "event",
    title: "Events & Privat",
    icon: <PartyPopper className="w-6 h-6" />,
    desc: "Einlasskontrollen, VIP-Betreuung und Crowd Management für Veranstaltungen jeder Größe.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
  }
];

const IndustrySolutions = () => {
    const [activeId, setActiveId] = useState<string | null>(industries[0].id);

    return (
        <div className="mt-32">
             <div className="mb-12 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4">
                 <h2 className="text-2xl md:text-3xl font-bold tracking-tight">BRANCHENLÖSUNGEN</h2>
             </div>

             <div className="flex flex-col lg:flex-row gap-4 h-[600px] lg:h-[400px]">
                {industries.map((industry) => (
                    <motion.div
                        key={industry.id}
                        layout
                        onClick={() => setActiveId(industry.id)}
                        className={`
                            relative overflow-hidden rounded-2xl cursor-pointer border border-neutral-200 dark:border-neutral-800
                            transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                            ${activeId === industry.id ? 'flex-[3] lg:flex-[3]' : 'flex-[1] lg:flex-[1] hover:flex-[1.2]'}
                        `}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img src={industry.image} alt={industry.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 filter brightness-[0.4] grayscale" />
                            <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 ${activeId === industry.id ? 'opacity-80' : 'opacity-60'}`}></div>
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                             <div className="flex items-center gap-3 mb-2">
                                 <div className={`p-2 rounded-lg bg-foreground text-background transition-transform duration-300 ${activeId === industry.id ? 'scale-100' : 'scale-75 origin-bottom-left'}`}>
                                     {industry.icon}
                                 </div>
                                 <h3 className={`text-xl font-bold text-white whitespace-nowrap transition-all duration-300 ${activeId === industry.id ? 'opacity-100 translate-x-0' : 'opacity-100 lg:opacity-0 lg:-translate-x-10'}`}>
                                     {industry.title}
                                 </h3>
                             </div>

                             <AnimatePresence>
                                {activeId === industry.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-neutral-300 text-sm leading-relaxed max-w-lg pt-2 border-t border-white/20">
                                            {industry.desc}
                                        </p>
                                    </motion.div>
                                )}
                             </AnimatePresence>
                        </div>

                        {/* Inactive Vertical Title (Desktop Only) */}
                        {activeId !== industry.id && (
                             <div className="hidden lg:flex absolute inset-0 items-center justify-center">
                                 <span className="rotate-[-90deg] text-neutral-400 font-bold tracking-widest whitespace-nowrap uppercase text-sm">
                                     {industry.title}
                                 </span>
                             </div>
                        )}
                    </motion.div>
                ))}
             </div>
        </div>
    );
};

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-foreground/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6 flex justify-center">
             <CinematicText 
               words={["UNSERE DIENSTLEISTUNGEN"]} 
               className="text-4xl md:text-5xl font-extrabold"
               alignment="center"
             />
          </div>
          <motion.div 
            initial={{ width: 0 }}
            animate={isVisible ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-foreground mx-auto rounded-full mb-6"
          />
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
             Maßgeschneiderte Sicherheitslösungen für höchste Ansprüche. Wir analysieren, planen und schützen.
          </p>
        </div>

        <motion.div 
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.15
                    }
                }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
             <ServiceCard key={index} service={service} />
          ))}
        </motion.div>

        {/* NEW INDUSTRY SECTION */}
        <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
        >
            <IndustrySolutions />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
