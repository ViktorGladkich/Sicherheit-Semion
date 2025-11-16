import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import LazyLottie from './LazyLottie';

const steps = [
    { 
        icon: <LazyLottie animationPath="/assets/search.json" loop={true} className="w-14 h-14 animate-floating" />, 
        title: "Analyse & Beratung",
        description: "Jeder Einsatz beginnt mit einer gründlichen Analyse Ihrer spezifischen Sicherheitsbedürfnisse."
    },
    { 
        icon: <LazyLottie animationPath="../assets/document.json" loop={true} className="w-14 h-14 " />, 
        title: "Konzeptentwicklung",
        description: "Wir entwickeln ein maßgeschneidertes Sicherheitskonzept, das alle Eventualitäten berücksichtigt."
    },
    { 
        icon: <LazyLottie animationPath="/assets/securedeal.json" loop={true} className="w-14 h-14 " />, 
        title: "Implementierung",
        description: "Unsere Experten setzen das Konzept vor Ort professionell und diskret um."
    },
    { 
        icon: <LazyLottie animationPath="/assets/247stunden.json" loop={true} className="w-14 h-14 " />, 
        title: "Laufende Betreuung",
        description: "Regelmäßige Kontrollen und 24/7-Erreichbarkeit garantieren nachhaltige Sicherheit."
    }
];

const ApproachStep = ({ step, index }: { step: typeof steps[0], index: number }) => {
    const stepRef = useRef<HTMLDivElement>(null);
    const isVisible = useIntersectionObserver(stepRef, { threshold: 0.5, triggerOnce: true });
    const isEven = index % 2 === 0;

    return (
        <div ref={stepRef} className="relative lg:h-40">
            {/* Icon Container (positioned absolutely for both mobile and desktop) */}
            <div className={`
                absolute top-0 left-8 lg:left-1/2 -translate-x-1/2 z-10
                transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}
            `}>
                <div className="w-16 h-16 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center border-4 border-gray-50 dark:border-slate-950 shadow-lg">
                    {step.icon}
                </div>
            </div>

            {/* Content Card Container */}
            <div className={`
                lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:w-[calc(50%-4rem)]
                ml-20 lg:ml-0
                transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100' : 'opacity-0'}
                ${isVisible ? 'translate-x-0' : (isEven ? '-translate-x-10' : 'translate-x-10')}
                ${isEven ? 'lg:left-0' : 'lg:right-0'}
            `}>
                <div className="p-6 bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 rounded-xl group hover:border-blue-500/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:shadow-blue-600/10">
                    <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${!isEven && 'lg:text-right'}`}>{step.title}</h3>
                    <p className={`text-gray-600 dark:text-gray-400 ${!isEven && 'lg:text-right'}`}>{step.description}</p>
                </div>
            </div>
        </div>
    );
};


const Approach: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

    return (
        <section id="approach" className="py-16 sm:py-20 bg-gray-50 dark:bg-slate-950 overflow-hidden" ref={sectionRef}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Unser Vorgehen</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Ein strukturierter Prozess für kompromisslose Sicherheit in vier Phasen.</p>
                </div>

                <div className="relative max-w-sm mx-auto lg:max-w-4xl">
                    {/* Vertical line */}
                    <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-slate-700 -translate-x-1/2" aria-hidden="true"></div>
                    <div className="space-y-24 lg:space-y-0">
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