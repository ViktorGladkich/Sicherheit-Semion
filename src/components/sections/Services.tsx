import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { SectionHeader } from "../ui/SectionHeader";
import { Building2, Users, UserCheck, BellRing } from "lucide-react";
import { ServiceCard, ServiceItem } from "./services/ServiceCard";
import { IndustrySolutions } from "./services/IndustrySolutions";

const servicesData: ServiceItem[] = [
  {
    icon: <Building2 className="w-full h-full" strokeWidth={1.5} />,
    title: "Objektschutz",
    description:
      "Umfassender Schutz für Ihre Immobilien, Firmengelände und Baustellen durch permanente Präsenz. IHK-zertifiziertes Personal mit umfassender Schulung.",
  },
  {
    icon: <Users className="w-full h-full" strokeWidth={1.5} />,
    title: "Veranstaltungsschutz",
    description:
      "Professionelle Sicherheitskonzepte für Events jeder Größenordnung, von privat bis Großveranstaltung. Erfahrung mit über 200 Events pro Jahr.",
  },
  {
    icon: <UserCheck className="w-full h-full" strokeWidth={1.5} />,
    title: "Personenschutz",
    description:
      "Diskreter und hochqualifizierter Schutz für Personen des öffentlichen Lebens und Führungskräfte. Spezialisiert auf Bedrohungsanalyse.",
  },
  {
    icon: <BellRing className="w-full h-full" strokeWidth={1.5} />,
    title: "Alarmaufschaltung",
    description:
      "24/7-Überwachung Ihrer Alarmsysteme mit sofortiger Intervention durch unsere mobilen Einheiten. Durchschnittliche Reaktionszeit: 8 Minuten.",
  },
];

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden"
      ref={sectionRef}
      role="region"
      aria-label="Unsere Dienstleistungen"
    >
      {/* Background Gradient Blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-foreground/5 blur-[120px] rounded-full -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="UNSERE DIENSTLEISTUNGEN"
          description="Maßgeschneiderte Sicherheitslösungen für höchste Ansprüche. Wir analysieren, planen und schützen mit bewährten Methoden und modernster technologie."
        />

        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
        >
          {servicesData.map((service, index) => (
            <div key={index} role="listitem">
              <ServiceCard service={service} />
            </div>
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
