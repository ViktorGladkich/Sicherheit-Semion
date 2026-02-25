import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Impressum: React.FC = () => {
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
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-16 tracking-tighter uppercase">
            Impressum
          </h1>

          <div className="grid gap-16 text-lg border-l border-foreground/10 pl-8 text-foreground/80">
            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-foreground/50 mb-6">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="space-y-2">
                <p className="text-2xl font-black">
                  A.S.S Security UG (haftungsbeschränkt)
                </p>
                <p>Königstraße 26</p>
                <p>01097 Dresden</p>
                <p>Deutschland</p>
              </div>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-foreground/50 mb-6">
                Vertreten durch
              </h2>
              <p className="text-xl font-bold">Semion Raskin</p>
              <p className="text-muted-foreground">Geschäftsführer</p>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-foreground/50 mb-6">
                Kontakt
              </h2>
              <div className="space-y-2">
                <p>
                  <span className="text-muted-foreground font-medium">
                    Telefon:
                  </span>{" "}
                  +49 176 40153293
                </p>
                <p>
                  <span className="text-muted-foreground font-medium">
                    E-Mail:
                  </span>{" "}
                  info@ass-security.de
                </p>
                <p>
                  <span className="text-muted-foreground font-medium">
                    Website:
                  </span>{" "}
                  www.ass-security.de
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-foreground/50 mb-6">
                Registereintrag
              </h2>
              <div className="space-y-2 text-muted-foreground">
                <p>Eintragung im Handelsregister.</p>
                <p>
                  Registergericht:{" "}
                  <span className="text-foreground font-semibold">
                    Amtsgericht Dresden
                  </span>
                </p>
                <p>
                  Registernummer:{" "}
                  <span className="text-foreground font-semibold">
                    [HRB Nummer wird nachgetragen]
                  </span>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-foreground/50 mb-6">
                Umsatzsteuer-ID
              </h2>
              <p className="text-muted-foreground">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz:
                <br />
                <span className="text-foreground font-bold text-xl">
                  DE459687655
                </span>
              </p>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground/40 mb-6">
                Redaktionell verantwortlich
              </h2>
              <div className="space-y-1">
                <p className="font-bold">Semion Raskin</p>
                <p className="text-sm text-muted-foreground">
                  Königstraße 26, 01097 Dresden
                </p>
              </div>
            </section>

            <section className="pt-8 border-t border-foreground/5">
              <h2 className="text-xl font-bold mb-6">Haftung für Inhalte</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
                hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst
                ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
                werden wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-6">Haftung für Links</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-6">Urheberrecht</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
                dieser Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
                Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                werden wir derartige Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-6">EU-Streitschlichtung</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground ml-1"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind
                nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
                einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>

          <div className="mt-20">
            <a
              href="/"
              className="inline-flex items-center gap-4 py-4 px-8 bg-foreground text-background font-bold uppercase tracking-widest text-sm hover:gap-6 transition-all duration-300"
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
