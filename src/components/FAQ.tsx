
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, PlusCircleIcon, MinusCircleIcon } from './Icons';
import { CinematicText } from './ui/cinematic-text';

const faqData = [
  {
    question: "Welche Arten von Objekten schützen Sie?",
    answer: "Wir schützen eine breite Palette von Objekten, darunter Bürogebäude, Industrieanlagen, Baustellen, Einzelhandelsgeschäfte und private Wohnanlagen. Jedes Sicherheitskonzept wird individuell auf die spezifischen Anforderungen des Objekts zugeschnitten."
  },
  {
    question: "Sind Ihre Mitarbeiter qualifiziert?",
    answer: "Ja, alle unsere Sicherheitsmitarbeiter sind mindestens nach §34a der Gewerbeordnung (GewO) unterwiesen oder geprüft. Darüber hinaus durchlaufen sie regelmäßige Weiterbildungen in Bereichen wie Erste Hilfe, Brandschutz und Deeskalationstechniken."
  },
  {
    question: "Bieten Sie auch kurzfristige Einsätze an?",
    answer: "Absolut. Wir sind flexibel und können auch kurzfristig Personal für Veranstaltungen, als Urlaubsvertretung oder für unvorhergesehene Notfälle bereitstellen. Kontaktieren Sie uns einfach, um Ihre Anforderungen zu besprechen."
  },
  {
    question: "Wie erstellen Sie ein Sicherheitskonzept?",
    answer: "Unser Prozess beginnt immer mit einer detaillierten Schwachstellenanalyse vor Ort. Basierend auf dieser Analyse und Ihren individuellen Wünschen erstellen wir ein maßgeschneidertes Sicherheitskonzept, das technische und personelle Maßnahmen kombiniert, um maximalen Schutz zu gewährleisten."
  },
  {
    question: "Was kostet eine Sicherheitsdienstleistung?",
    answer: "Die Kosten hängen stark vom Umfang der Dienstleistung, der Anzahl der benötigten Mitarbeiter und dem technologischen Aufwand ab. Nach einem kostenlosen und unverbindlichen Beratungsgespräch erstellen wir Ihnen ein transparentes und faires Angebot."
  }
];

const FaqItem: React.FC<{ item: typeof faqData[0], isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className={`border-b border-border transition-colors duration-300 ${isOpen ? 'bg-muted/40' : ''}`}>
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-6 px-2 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className={`flex-1 pr-4 text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-foreground' : 'text-foreground/80'}`}>{item.question}</span>
        <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
        >
            <ChevronDownIcon className="w-6 h-6 text-foreground" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <p className="pb-6 px-2 text-muted-foreground leading-relaxed">
                    {item.answer}
                </p>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


const FAQ: React.FC = () => {
    const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

    const handleToggle = (index: number) => {
        setOpenIndices(prevIndices => {
            const newIndices = new Set(prevIndices);
            if (newIndices.has(index)) {
                newIndices.delete(index);
            } else {
                newIndices.add(index);
            }
            return newIndices;
        });
    };
    
    const expandAll = () => setOpenIndices(new Set(faqData.map((_, i) => i)));
    const collapseAll = () => setOpenIndices(new Set());

    const allExpanded = openIndices.size === faqData.length;

    return (
        <section id="faq" className="py-16 sm:py-20 bg-background overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <div className="flex justify-center mb-4">
                        <CinematicText 
                            words={["Häufig gestellte Fragen (FAQ)"]} 
                            className="text-3xl md:text-4xl font-extrabold"
                            alignment="center"
                        />
                    </div>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Hier finden Sie Antworten auf die wichtigsten Fragen zu unseren Dienstleistungen.
                    </p>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="flex justify-end mb-4">
                        <button 
                          onClick={allExpanded ? collapseAll : expandAll}
                          className="flex items-center text-sm font-semibold text-foreground hover:text-foreground/80 transition-colors"
                        >
                          {allExpanded ? (
                            <>
                              <MinusCircleIcon className="w-5 h-5 mr-2" />
                              Alle einklappen
                            </>
                          ) : (
                            <>
                              <PlusCircleIcon className="w-5 h-5 mr-2" />
                              Alle ausklappen
                            </>
                          )}
                        </button>
                    </div>

                    <div className="border-t border-border">
                        {faqData.map((item, index) => (
                            <FaqItem
                                key={index}
                                item={item}
                                isOpen={openIndices.has(index)}
                                onClick={() => handleToggle(index)}
                            />
                        ))}
                    </div>

                    <div className="mt-12 text-center bg-muted/40 p-8 rounded-xl">
                      <h3 className="text-xl font-bold text-foreground">Nicht die passende Antwort gefunden?</h3>
                      <p className="mt-2 text-muted-foreground">
                        Unser Team ist bereit, Ihre spezifischen Fragen zu beantworten. Kontaktieren Sie uns für eine persönliche Beratung.
                      </p>
                      <a
                        href="#contact"
                        className="mt-6 inline-block px-6 py-3 bg-foreground text-background font-semibold rounded-lg hover:bg-foreground/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        Kontakt aufnehmen
                      </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
