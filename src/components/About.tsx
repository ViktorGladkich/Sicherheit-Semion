
import React from 'react';
import { motion } from 'framer-motion';
import { CinematicText } from './ui/cinematic-text';
import { ImageSlider } from './about/ImageSlider';
import { ValuesGrid } from './about/ValuesGrid';

const About: React.FC = () => {
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
                    <ImageSlider />

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
                <ValuesGrid />
            </div>
        </section>
    );
};

export default About;
