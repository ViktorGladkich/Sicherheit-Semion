import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Impressum: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-16 tracking-tighter uppercase">
            Impressum
          </h1>

          <div className="grid gap-12 text-lg">
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="font-bold">
                A.S.S Security UG (haftungsbeschränkt)
              </p>
              <p>Königstraße 26</p>
              <p>01097 Dresden</p>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                Vertreten durch
              </h2>
              <p>Semion Gladkich (Geschäftsführer)</p>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                Kontakt
              </h2>
              <p>Telefon: +49 176 40153293</p>
              <p>E-Mail: info@ass-security.de</p>
              <p>Website: www.ass-sicurity.de</p>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                Registereintrag
              </h2>
              <p>Eintragung im Handelsregister.</p>
              <p>Registergericht: Amtsgericht Dresden</p>
              <p>Registernummer: [HRB Nummer wird nachgetragen]</p>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                Umsatzsteuer-ID
              </h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz:
              </p>
              <p>DE459687655</p>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                Redaktionell verantwortlich
              </h2>
              <p>Semion Gladkich</p>
              <p>Königstraße 26</p>
              <p>01097 Dresden</p>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                EU-Streitschlichtung
              </h2>
              <p className="text-sm text-muted-foreground">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline ml-1"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                Verbraucherstreitbeilegung/Universalschlichtungsstelle
              </h2>
              <p className="text-sm text-muted-foreground">
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
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

export default Impressum;
