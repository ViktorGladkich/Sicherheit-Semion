"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Datenschutz() {
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
            Datenschutz
          </h1>

          <div className="grid gap-16 text-lg leading-relaxed text-foreground/80 border-l border-foreground/10 pl-8">
            <section>
              <h2 className="text-3xl font-black text-foreground mb-6 uppercase tracking-tight">
                1. Datenschutz auf einen Blick
              </h2>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  Allgemeine Hinweise
                </h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick
                  darüber, was mit Ihren personenbezogenen Daten passiert, wenn
                  Sie diese Website besuchen. Personenbezogene Daten sind alle
                  Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
                <h3 className="text-xl font-bold text-foreground">
                  Datenerfassung auf dieser Website
                </h3>
                <p>
                  <span className="font-bold text-foreground">
                    Wer ist verantwortlich für die Datenerfassung auf dieser
                    Website?
                  </span>
                  <br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den
                  Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
                  dieser Website entnehmen.
                </p>
                <p>
                  <span className="font-bold text-foreground">
                    Wie erfassen wir Ihre Daten?
                  </span>
                  <br />
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns
                  diese mitteilen. Hierbei kann es sich z. B. um Daten handeln,
                  die Sie in ein Kontaktformular eingeben. Andere Daten werden
                  automatisch oder nach Ihrer Einwilligung beim Besuch der
                  Website durch unsere IT-Systeme erfasst.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black text-foreground mb-6 uppercase tracking-tight">
                2. Hosting (Vercel)
              </h2>
              <div className="space-y-4">
                <p>
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>
                <div className="p-6 bg-muted rounded-xl text-foreground border border-foreground/5">
                  <p className="font-black text-xl mb-2">Vercel</p>
                  <p className="text-sm text-muted-foreground">
                    Vercel Inc.
                    <br />
                    440 N Barranca Ave #4133
                    <br />
                    Covina, CA 91723, USA
                  </p>
                </div>
                <p className="text-sm font-light italic">
                  Vercel ist eine Cloud-Plattform, über die wir unsere Website
                  bereitstellen. Zur Analyse der Performance и zur
                  Gewährleistung der Sicherheit verarbeitet Vercel
                  Verbindungsdaten (z. B. IP-Adressen) der Website-Besucher. Die
                  Datenübertragung in die USA erfolgt auf Grundlage der
                  Standardvertragsklauseln der EU-Kommission.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black text-foreground mb-6 uppercase tracking-tight">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Datenschutz
                  </h3>
                  <p className="text-sm">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                    persönlichen Daten sehr ernst. Wir behandeln Ihre
                    personenbezogenen Daten vertraulich und entsprechend den
                    gesetzlichen Datenschutzvorschriften sowie dieser
                    Datenschutzerklärung.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Hinweis zur verantwortlichen Stelle
                  </h3>
                  <p className="text-sm">
                    Die verantwortliche Stelle für die Datenverarbeitung auf
                    dieser Website ist:
                  </p>
                  <div className="mt-4 p-4 border border-foreground/5 rounded-lg text-foreground font-medium">
                    <p>A.S.S Security UG (haftungsbeschränkt)</p>
                    <p>Königstraße 26, 01097 Dresden</p>
                    <p>E-Mail: info@ass-sicurity.de</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Widerruf Ihrer Einwilligung zur Datenverarbeitung
                  </h3>
                  <p className="text-sm">
                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                    ausdrücklichen Einwilligung möglich. Sie können eine bereits
                    erteilte Einwilligung jederzeit widerrufen. Die
                    Rechtmäßigkeit der bis zum Widerruf erfolgten
                    Datenverarbeitung bleibt vom Widerruf unberührt.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black text-foreground mb-6 uppercase tracking-tight">
                4. Datenerfassung auf dieser Website
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Server-Log-Dateien
                  </h3>
                  <p className="text-sm font-light">
                    Der Provider der Seiten erhebt und speichert automatisch
                    Informationen in sogenannten Server-Log-Dateien, die Ihr
                    Browser automatisch an uns übermittelt. Dies sind:
                    Browsertyp/ Browserversion, verwendetes Betriebssystem,
                    Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit
                    der Serveranfrage, IP-Adresse. Eine Zusammenführung dieser
                    Daten mit anderen Datenquellen wird nicht vorgenommen.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Kontaktformular (Resend)
                  </h3>
                  <p className="text-sm">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                    werden Ihre Angaben aus dem Anfrageformular inklusive der
                    von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                    der Anfrage und für den Fall von Anschlussfragen bei uns
                    gespeichert. Wir nutzen für den Mail-Versand den Anbieter{" "}
                    <span className="font-bold">Resend</span>.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black text-foreground mb-6 uppercase tracking-tight">
                5. Ihre Rechte
              </h2>
              <p className="text-sm mb-4 font-medium">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                gespeicherten personenbezogenen Daten (Art. 15 DSGVO), deren
                Herkunft und Empfänger und den Zweck der Datenverarbeitung und
                ggf. ein Recht auf Berichtigung (Art. 16 DSGVO), Sperrung oder
                Löschung (Art. 17 DSGVO) dieser Daten.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-foreground">
                <div className="p-4 bg-muted border border-foreground/5 rounded flex items-center justify-center text-center">
                  Auskunft
                </div>
                <div className="p-4 bg-muted border border-foreground/5 rounded flex items-center justify-center text-center">
                  Berichtigung
                </div>
                <div className="p-4 bg-muted border border-foreground/5 rounded flex items-center justify-center text-center">
                  Löschung
                </div>
                <div className="p-4 bg-muted border border-foreground/5 rounded flex items-center justify-center text-center">
                  Widerruf
                </div>
              </div>
            </section>
          </div>

          <div className="mt-20">
            <Link
              href="/"
              className="inline-flex items-center gap-4 py-4 px-8 bg-foreground text-background font-bold uppercase tracking-widest text-sm hover:gap-6 transition-all duration-300 shadow-xl"
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
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
