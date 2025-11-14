import React, { useRef } from 'react';
import { BuildingIcon, UsersIcon, ShieldIcon, WifiIcon } from './Icons';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const services = [
  {
    icon: <BuildingIcon className="h-12 w-12 text-blue-500 dark:text-blue-400" />,
    title: 'Objektschutz',
    description: 'Umfassender Schutz für Ihre Immobilien, Firmengelände und Baustellen durch permanente Präsenz und modernste Überwachungstechnik.',
  },
  {
    icon: <UsersIcon className="h-12 w-12 text-blue-500 dark:text-blue-400" />,
    title: 'Veranstaltungsschutz',
    description: 'Professionelle Sicherheitskonzepte für Events jeder Größenordnung, von Einlasskontrollen bis zur Sicherung des gesamten Geländes.',
  },
  {
    icon: <ShieldIcon className="h-12 w-12 text-blue-500 dark:text-blue-400" />,
    title: 'Personenschutz',
    description: 'Diskreter und hochqualifizierter Schutz für Personen des öffentlichen Lebens, Manager und Privatpersonen in allen Gefährdungslagen.',
  },
  {
    icon: <WifiIcon className="h-12 w-12 text-blue-500 dark:text-blue-400" />,
    title: 'Alarmaufschaltung',
    description: '24/7-Überwachung Ihrer Alarmsysteme mit sofortiger Intervention im Ernstfall durch unsere zertifizierte Notruf- und Serviceleitstelle.',
  },
];

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2, triggerOnce: true });

  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-50 dark:bg-slate-950 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Unsere Dienstleistungen</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Wir bieten ein breites Spektrum an Sicherheitslösungen, die auf Ihre individuellen Bedürfnisse zugeschnitten sind.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white dark:bg-slate-800/50 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-slate-700/50 transition-all duration-700 ease-out hover:border-blue-500/50 hover:bg-white dark:hover:bg-slate-800 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-600/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 transition-transform duration-300 ease-in-out group-hover:scale-105">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 break-words">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;