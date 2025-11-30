
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';
import { CinematicText } from './ui/cinematic-text';
import { Fingerprint, Eye, Shield } from 'lucide-react';

const slides = [
    { image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop', caption: 'Strategische Planung' },
    { image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=1770&auto=format&fit=crop', caption: 'Echtzeit Überwachung' },
    { image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1769&auto=format&fit=crop', caption: 'Leitstelle' },
];

const values = [
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Integrität",
        text: "Unser Wort gilt. Wir handeln stets transparent, ehrlich und im besten Interesse unserer Klienten. Vertrauen ist die Währung unserer Branche."
    },
    {
        icon: <Eye className="w-6 h-6" />,
        title: "Vigilanz",
        text: "Wachsamkeit ist unser Standardzustand. Wir erkennen Muster und Anomalien, bevor sie zu Problemen werden."
    },
    {
        icon: <Fingerprint className="w-6 h-6" />,
        title: "Diskretion",
        text: "Wir arbeiten im Hintergrund. Ihr Schutz ist sichtbar, unsere Präsenz nur wenn nötig. Verschwiegenheit ist absolute Pflicht."
    }
];

const About: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000);
        return () => clearInterval(intervalId);
    }, [nextSlide]);

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-neutral-100/50 dark:bg-black/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* --- HEADER --- */}
                <div className="mb-16 max-w-4xl">
                     <CinematicText 
                        words={["WER WIR SIND"]} 
                        className="text-4xl md:text-5xl font-bold mb-6"
                        alignment="left"
                    />
                    <h3 className="text-2xl md:text-3xl font-light text-foreground leading-tight">
                        Mehr als nur ein Sicherheitsdienst. <br/>
                        <span className="font-bold">Wir sind Ihr strategischer Partner für Risikomanagement.</span>
                    </h3>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                    
                    {/* Visual Slider */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 group"
                    >
                        {slides.map((slide, index) => (
                            <div 
                                key={index} 
                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <img 
                                    src={slide.image} 
                                    alt={slide.caption} 
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform scale-105 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                        ))}
                        
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                            <p className="text-white font-mono text-sm tracking-widest uppercase">{slides[currentIndex].caption}</p>
                        </div>
                        
                        {/* Controls */}
                        <div className="absolute bottom-6 right-6 flex gap-2">
                             <button onClick={prevSlide} className="p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors">
                                <ChevronLeftIcon className="w-4 h-4" />
                             </button>
                             <button onClick={nextSlide} className="p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors">
                                <ChevronRightIcon className="w-4 h-4" />
                             </button>
                        </div>
                    </motion.div>

                    {/* Extended Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col h-full justify-between"
                    >
                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                Seit über einem Jahrzehnt definiert A.S.S Security Standards neu. Was als spezialisierter Dienstleister begann, hat sich zu einem umfassenden Sicherheitsunternehmen entwickelt, das Technologie und menschliche Expertise vereint.
                            </p>
                            <p>
                                Wir verstehen Sicherheit nicht als statisches Produkt, sondern als dynamischen Prozess. In einer sich ständig wandelnden Welt passen wir unsere Strategien proaktiv an neue Bedrohungslagen an.
                            </p>
                            <p className="font-semibold text-foreground">
                                Unsere Mission: Wir schaffen den sicheren Raum, in dem Sie sich auf Ihr Kerngeschäft konzentrieren können.
                            </p>
                        </div>
                        
                        <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-3 gap-4">
                            {[
                                { val: "10+", label: "Jahre Erfahrung" },
                                { val: "24/7", label: "Leitstelle" },
                                { val: "100%", label: "Diskretion" }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <h4 className="text-3xl font-bold text-foreground">{stat.val}</h4>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* --- VALUES GRID --- */}
                <div className="border-t border-neutral-200 dark:border-neutral-800 pt-16">
                     <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-10 text-center">Unsere Grundwerte</h4>
                     <div className="grid md:grid-cols-3 gap-10">
                        {values.map((val, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                                className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center mb-6 text-foreground">
                                    {val.icon}
                                </div>
                                <h5 className="text-xl font-bold mb-3">{val.title}</h5>
                                <p className="text-muted-foreground leading-relaxed">{val.text}</p>
                            </motion.div>
                        ))}
                     </div>
                </div>
            </div>
        </section>
    );
};

export default About;
