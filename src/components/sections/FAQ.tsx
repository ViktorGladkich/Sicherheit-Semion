"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";

const faqData = [
  {
    id: "01",
    question: "Welche Arten von Objekten schützen Sie?",
    answer:
      "Wir schützen eine breite Palette von Objekten, darunter Bürogebäude, Industrieanlagen, Baustellen, Einzelhandelsgeschäfte und private Wohnanlagen. Jedes Sicherheitskonzept wird individuell auf die spezifischen Anforderungen des Objekts zugeschnitten.",
  },
  {
    id: "02",
    question: "Sind Ihre Mitarbeiter qualifiziert?",
    answer:
      "Ja, alle unsere Sicherheitsmitarbeiter sind mindestens nach §34a der Gewerbeordnung (GewO) unterwiesen oder geprüft. Darüber hinaus durchlaufen sie regelmäßige Weiterbildungen in Bereichen wie Erste Hilfe, Brandschutz und Deeskalationstechniken.",
  },
  {
    id: "03",
    question: "Bieten Sie auch kurzfristige Einsätze an?",
    answer:
      "Absolut. Wir sind flexibel und können auch kurzfristig Personal für Veranstaltungen, als Urlaubsvertretung oder für unvorhergesehene Notfälle bereitstellen. Unser Pool an Bereitschaftskräften ermöglicht schnelle Reaktionszeiten.",
  },
  {
    id: "04",
    question: "Wie erstellen Sie ein Sicherheitskonzept?",
    answer:
      "Unser Prozess beginnt immer mit einer detaillierten Schwachstellenanalyse vor Ort. Basierend auf dieser Analyse und Ihren individuellen Wünschen erstellen wir ein maßgeschneidertes Sicherheitskonzept, das technische und personelle Maßnahmen kombiniert.",
  },
  {
    id: "05",
    question: "Was kostet eine Sicherheitsdienstleistung?",
    answer:
      "Die Kosten hängen stark vom Umfang der Dienstleistung, der Anzahl der benötigten Mitarbeiter und dem technologischen Aufwand ab. Nach einem kostenlosen und unverbindlichen Beratungsgespräch erstellen wir Ihnen ein transparentes und faires Angebot ohne versteckte Kosten.",
  },
  {
    id: "06",
    question: "Arbeiten Sie auch nachts und an Feiertagen?",
    answer:
      "Sicherheit kennt keinen Feierabend. Unsere Leitstelle und Einsatzkräfte sind 24/7 an 365 Tagen im Jahr für Sie im Einsatz. Wir garantieren lückenlosen Schutz rund um die Uhr, auch an Feiertagen und Wochenenden.",
  },
];

const FaqItem = ({
  item,
  isOpen,
  onClick,
  index,
}: {
  item: (typeof faqData)[0];
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) => {
  // Custom easing from your example: cubic-bezier(0.86, 0, 0.07, 1)
  const customEase: [number, number, number, number] = [0.86, 0, 0.07, 1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative mb-4 group isolate"
    >
      {/* 
         RIPPLE EFFECT OVERLAY 
         Uses mix-blend-mode: difference to invert colors underneath.
         Expands from the top-left icon position.
      */}
      <motion.div
        className="absolute inset-0 bg-white z-10 pointer-events-none rounded-xl"
        initial={false}
        animate={{
          clipPath: isOpen
            ? `circle(150% at 40px 40px)`
            : `circle(0% at 40px 40px)`,
        }}
        transition={{ duration: 0.7, ease: customEase }}
        style={{ mixBlendMode: "difference" }}
      />

      {/* CARD CONTAINER */}
      <div
        onClick={onClick}
        className={`
            relative z-0 overflow-hidden rounded-xl cursor-pointer
            border border-neutral-200 dark:border-neutral-800
            bg-neutral-50 dark:bg-neutral-900/50
            transition-colors duration-300
        `}
      >
        <div className="p-6 md:p-8 flex items-start gap-6">
          {/* ICON (Anchor point for ripple) */}
          <div className="relative z-20 shrink-0 mt-1">
            <div className="w-6 h-6 flex items-center justify-center">
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.5, ease: customEase }}
              >
                {isOpen ? (
                  <Minus className="w-6 h-6" />
                ) : (
                  <Plus className="w-6 h-6" />
                )}
              </motion.div>
            </div>
          </div>

          <div className="flex-1 relative z-20">
            {/* QUESTION */}
            <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight select-none">
              {item.question}
            </h3>

            {/* ANSWER */}
            <motion.div
              initial={false}
              animate={{
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
                marginTop: isOpen ? 24 : 0,
              }}
              transition={{ duration: 0.6, ease: customEase }}
              className="overflow-hidden"
            >
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                {item.answer}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="py-24  relative overflow-hidden"
      role="region"
      aria-label="Häufig gestellte Fragen"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="HÄUFIGE FRAGEN"
          description="Klare Antworten auf Ihre wichtigsten Fragen. Sicherheit erfordert Transparenz."
        />

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item, i) => (
            <FaqItem
              key={item.id}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onClick={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
