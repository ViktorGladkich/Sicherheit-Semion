import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Datenschutz: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-16 tracking-tighter uppercase">
            Datenschutz
          </h1>

          <div className="grid gap-12 text-lg leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <h3 className="font-bold text-foreground mb-2">
                Allgemeine Hinweise
              </h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Datenerfassung auf dieser Website
              </h2>
              <h3 className="font-bold text-foreground mb-2">
                Wer ist verantwortlich für die Datenerfassung auf dieser
                Website?
              </h3>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg text-foreground">
                <p>A.S.S Security UG</p>
                <p>Königstraße 26, 01097 Dresden</p>
                <p>E-Mail: info@ass-security.de</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. Ihre Rechte
              </h2>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                Herkunft, Empfänger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>
                  Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)
                </li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Analyse-Tools und Tools von Drittanbietern
              </h2>
              <p>
                Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
                ausgewertet werden. Das geschieht vor allem mit Cookies und mit
                sogenannten Analyseprogrammen. Wir nutzen diese Daten, um die
                Benutzererfahrung stetig zu verbessern.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Hosting
              </h2>
              <p>
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              <p className="mt-2 font-bold text-foreground">Vercel Inc.</p>
              <p className="text-sm">
                Die Datenübertragung erfolgt auf Grundlage der
                Standardvertragsklauseln der EU-Kommission.
              </p>
            </section>
          </div>

          <div className="mt-20">
            <a
              href="/"
              className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all duration-300"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180"
              >
                <path
                  d="M4 10H16M16 10L11 5M16 10L11 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Zurück zur Startseite
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Datenschutz;
