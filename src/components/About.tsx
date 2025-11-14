import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

const slides = [
    { image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop', caption: 'Team-Meeting zur strategischen Planung' },
    { image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=1770&auto=format&fit=crop', caption: 'Einsatz am Objekt: Überwachung in Echtzeit' },
    { image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1769&auto=format&fit=crop', caption: 'Unsere moderne Notruf- und Serviceleitstelle' },
    { image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1770&auto=format&fit=crop', caption: 'Regelmäßiges Sicherheitstraining unserer Mitarbeiter' },
];

const About: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2, triggerOnce: true });

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (isPaused) return;
        const intervalId = setInterval(nextSlide, 5000);
        return () => clearInterval(intervalId);
    }, [nextSlide, isPaused]);

    return (
        <section id="about" className="py-16 sm:py-20 bg-white dark:bg-slate-900 overflow-hidden" ref={sectionRef}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`md:grid md:grid-cols-2 md:gap-16 md:items-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Über Aegis Sicherheit</h2>
                        <p className="mt-4 text-xl text-blue-600 dark:text-blue-400 font-semibold">Tradition, Vertrauen und Innovation seit über einem Jahrzehnt.</p>
                        <p className="mt-6 text-gray-600 dark:text-gray-400">Gegründet auf den Grundprinzipien von Integrität, Wachsamkeit und Professionalität, schützt Aegis Sicherheit seit über 10 Jahren das, was unseren Kunden am wichtigsten ist. Unsere Geschichte ist geprägt von kontinuierlichem Wachstum und der Anpassung an neue Herausforderungen in einer sich ständig wandelnden Welt.</p>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">Unsere Werte sind das Fundament unserer Arbeit: Absolute Zuverlässigkeit, transparente Kommunikation und ein unerschütterliches Engagement für die Sicherheit unserer Klienten. Wir kombinieren bewährte Methoden mit modernster Technologie, um proaktive und effektive Schutzmaßnahmen zu gewährleisten.</p>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-2">Datenschutz und Vertraulichkeit</h3>
                        <p className="text-gray-600 dark:text-gray-400">Der Schutz Ihrer Daten hat für uns höchste Priorität. Wir behandeln alle Informationen mit absoluter Diskretion und halten uns streng an die geltenden Datenschutzbestimmungen. Vertrauen ist die Basis jeder erfolgreichen Sicherheitspartnerschaft.</p>
                    </div>

                    <div 
                        className={`relative mt-12 md:mt-0 w-full aspect-[4/3] rounded-xl shadow-2xl group transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div className="w-full h-full rounded-xl overflow-hidden relative">
                           {slides.map((slide, index) => (
                                <div key={index} className="absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out" style={{ opacity: index === currentIndex ? 1 : 0, zIndex: index === currentIndex ? 10 : 1 }}>
                                    <img src={slide.image} alt={slide.caption} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
                                </div>
                            ))}
                             <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-20">
                                <p className="text-white text-sm text-center">{slides[currentIndex].caption}</p>
                             </div>
                        </div>

                        <button onClick={prevSlide} aria-label="Vorheriges Bild" className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50">
                            <ChevronLeftIcon className="w-5 h-5" />
                        </button>
                        <button onClick={nextSlide} aria-label="Nächstes Bild" className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50">
                            <ChevronRightIcon className="w-5 h-5" />
                        </button>

                        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
                            {slides.map((_, slideIndex) => (
                                <button
                                    key={slideIndex}
                                    onClick={() => goToSlide(slideIndex)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'bg-white scale-110' : 'bg-white/40 hover:bg-white/70'}`}
                                    aria-label={`Go to slide ${slideIndex + 1}`}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;