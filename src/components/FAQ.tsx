import React, { useState, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ChevronDownIcon, PlusCircleIcon, MinusCircleIcon } from './Icons';

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

const FaqItem = ({ item, isOpen, onClick }: { item: typeof faqData[0], isOpen: boolean, onClick: () => void }) => {
  return (
    <div className={`border-b border-gray-200 dark:border-slate-700/50 transition-colors duration-300 ${isOpen ? 'bg-blue-50/30 dark:bg-slate-800/40' : ''}`}>
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-6 px-2 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className={`flex-1 pr-4 text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-blue-600 dark:text-blue-400' : 'text-gray-800 dark:text-gray-100'}`}>{item.question}</span>
        <ChevronDownIcon className={`w-6 h-6 text-blue-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="min-h-0">
          <p className="pb-6 px-2 text-gray-600 dark:text-gray-400 leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};


const FAQ: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });
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
        <section id="faq" className="py-16 sm:py-20 bg-white dark:bg-slate-900 overflow-hidden" ref={sectionRef}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Häufig gestellte Fragen (FAQ)</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Hier finden Sie Antworten auf die wichtigsten Fragen zu unseren Dienstleistungen.
                    </p>
                </div>
                <div className={`max-w-3xl mx-auto transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex justify-end mb-4">
                        <button 
                          onClick={allExpanded ? collapseAll : expandAll}
                          className="flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
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

                    <div className="border-t border-gray-200 dark:border-slate-700/50">
                        {faqData.map((item, index) => (
                            <FaqItem
                                key={index}
                                item={item}
                                isOpen={openIndices.has(index)}
                                onClick={() => handleToggle(index)}
                            />
                        ))}
                    </div>

                    <div className="mt-12 text-center bg-gray-50 dark:bg-slate-800/50 p-8 rounded-xl">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Nicht die passende Antwort gefunden?</h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Unser Team ist bereit, Ihre spezifischen Fragen zu beantworten. Kontaktieren Sie uns für eine persönliche Beratung.
                      </p>
                      <a
                        href="#contact"
                        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl shadow-blue-600/20"
                      >
                        Kontakt aufnehmen
                      </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;