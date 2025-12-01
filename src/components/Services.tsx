
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { CinematicText } from './ui/cinematic-text';
import { Building2, Users, UserCheck, BellRing } from 'lucide-react';
import { ServiceCard, ServiceItem } from './services/ServiceCard';
import { IndustrySolutions } from './services/IndustrySolutions';

const servicesData: ServiceItem[] = [
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
          {servicesData.map((service, index) => (
             <ServiceCard key={index} service={service} />
          ))}
        </motion.div>

        {/* Industry Solutions Section */}
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
