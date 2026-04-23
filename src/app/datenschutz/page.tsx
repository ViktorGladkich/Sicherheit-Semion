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
                  bereitstellen. Zur Analyse der Performance und zur
                  Gewährleistung der Sicherheit verarbeitet Vercel
                  Verbindungsdaten (z. B. IP-Adressen) der Website-Besucher.
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                  Interesse am sicheren und störungsfreien Betrieb der Website).
                  Die Datenübertragung in die USA erfolgt auf Grundlage der
                  Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2
                  lit. c DSGVO). Mit Vercel wurde ein
                  Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO
                  abgeschlossen.
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
                    <p>Geschäftsführer: Semion Raskin</p>
                    <p>Königstraße 26, 01097 Dresden</p>
                    <p>Handelsregister: Amtsgericht Dresden, HRB 47491</p>
                    <p>Telefon: +49 160 97553090</p>
                    <p>E-Mail: info@ass-security-ug.de</p>
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
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Beschwerderecht bei der zuständigen Aufsichtsbehörde
                  </h3>
                  <p className="text-sm">
                    Im Falle von Verstößen gegen die DSGVO steht den Betroffenen
                    ein Beschwerderecht bei einer Aufsichtsbehörde zu (Art. 77
                    DSGVO). Das Beschwerderecht besteht unbeschadet
                    anderweitiger verwaltungsrechtlicher oder gerichtlicher
                    Rechtsbehelfe. Die zuständige Aufsichtsbehörde ist:
                  </p>
                  <div className="mt-4 p-4 border border-foreground/5 rounded-lg text-sm text-foreground">
                    <p className="font-bold">
                      Sächsischer Datenschutzbeauftragter
                    </p>
                    <p>Devrientstraße 1</p>
                    <p>01067 Dresden</p>
                    <p>
                      Website:{" "}
                      <a
                        href="https://www.saechsdsb.de"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-foreground/70"
                      >
                        www.saechsdsb.de
                      </a>
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Recht auf Datenübertragbarkeit
                  </h3>
                  <p className="text-sm">
                    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                    Einwilligung oder in Erfüllung eines Vertrags automatisiert
                    verarbeiten, an sich oder an einen Dritten in einem
                    gängigen, maschinenlesbaren Format aushändigen zu lassen
                    (Art. 20 DSGVO).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    SSL- bzw. TLS-Verschlüsselung
                  </h3>
                  <p className="text-sm">
                    Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                    Übertragung vertraulicher Inhalte, wie zum Beispiel
                    Anfragen, die Sie an uns als Seitenbetreiber senden, eine
                    SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
                    Verbindung erkennen Sie daran, dass die Adresszeile des
                    Browsers von „http://" auf „https://" wechselt und an dem
                    Schloss-Symbol in Ihrer Browserzeile.
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
                    Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1
                    lit. f DSGVO (berechtigtes Interesse).
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
                    <span className="font-bold">Resend</span> (Resend Inc.,
                    USA). Die Datenübertragung in die USA erfolgt auf
                    Grundlage der Standardvertragsklauseln der EU-Kommission
                    (Art. 46 Abs. 2 lit. c DSGVO). Mit Resend wurde ein
                    Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO
                    abgeschlossen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
                    DSGVO (vorvertragliche Maßnahmen). Ihre Daten werden nach
                    abgeschlossener Bearbeitung Ihrer Anfrage gelöscht. Soweit
                    aus einer Anfrage ein Vertragsverhältnis entsteht, gelten
                    die gesetzlichen Aufbewahrungsfristen: 6 Jahre gemäß
                    § 257 HGB (Geschäftsbriefe) bzw. 10 Jahre gemäß § 147 AO
                    (steuerrelevante Unterlagen).
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
                Löschung (Art. 17 DSGVO) dieser Daten. Ferner steht Ihnen ein
                Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)
                sowie ein Widerspruchsrecht gegen die Verarbeitung (Art. 21
                DSGVO) zu.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-foreground">
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
                  Einschränkung
                </div>
                <div className="p-4 bg-muted border border-foreground/5 rounded flex items-center justify-center text-center">
                  Widerspruch
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Automatisierte Entscheidungen (Art. 22 DSGVO)
                </h3>
                <p className="text-sm">
                  Wir verwenden keine automatisierten Entscheidungsverfahren
                  einschließlich Profiling im Sinne von Art. 22 DSGVO. Es
                  findet keine automatisierte Verarbeitung statt, die Ihnen
                  gegenüber rechtliche Wirkung entfaltet oder Sie in
                  ähnlicher Weise erheblich beeinträchtigt.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black text-foreground mb-6 uppercase tracking-tight">
                6. Widerspruchsrecht (Art. 21 DSGVO)
              </h2>
              <div className="space-y-4">
                <div className="p-5 border border-foreground/20 rounded-xl bg-muted">
                  <p className="text-sm font-bold text-foreground mb-2 uppercase tracking-wide">
                    Hinweis gemäß Art. 21 DSGVO
                  </p>
                  <p className="text-sm">
                    Soweit wir Ihre personenbezogenen Daten auf Grundlage von
                    Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
                    verarbeiten – insbesondere Server-Log-Dateien –, haben Sie
                    das Recht, jederzeit aus Gründen, die sich aus Ihrer
                    besonderen Situation ergeben, Widerspruch gegen die
                    Verarbeitung einzulegen (Art. 21 Abs. 1 DSGVO). Wir
                    verarbeiten Ihre personenbezogenen Daten dann nicht mehr,
                    es sei denn, wir können zwingende schutzwürdige Gründe für
                    die Verarbeitung nachweisen, die Ihre Interessen, Rechte
                    und Freiheiten überwiegen, oder die Verarbeitung dient der
                    Geltendmachung, Ausübung oder Verteidigung von
                    Rechtsansprüchen.
                  </p>
                  <p className="text-sm mt-3">
                    Um Ihr Widerspruchsrecht auszuüben, wenden Sie sich bitte
                    an: <span className="font-semibold">info@ass-security-ug.de</span>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black text-foreground mb-6 uppercase tracking-tight">
                7. Datenschutzbeauftragter
              </h2>
              <div className="space-y-4">
                <p className="text-sm">
                  Wir sind als kleines Unternehmen nach aktuellem Stand nicht
                  verpflichtet, einen betrieblichen Datenschutzbeauftragten
                  gemäß Art. 37 DSGVO i. V. m. § 38 BDSG zu benennen, da
                  keine der gesetzlichen Voraussetzungen (insbesondere keine
                  regelmäßige automatisierte Verarbeitung durch mehr als 20
                  Personen, keine umfangreiche Verarbeitung besonderer
                  Datenkategorien) erfüllt ist.
                </p>
                <p className="text-sm">
                  Für datenschutzrechtliche Anfragen wenden Sie sich bitte
                  direkt an den Verantwortlichen:{" "}
                  <span className="font-semibold">info@ass-security-ug.de</span>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black text-foreground mb-6 uppercase tracking-tight">
                8. Cookies
              </h2>
              <div className="space-y-4">
                <p className="text-sm">
                  Diese Website verwendet keine Tracking-Cookies und setzt
                  keine Marketing- oder Analyse-Cookies ein. Lediglich
                  technisch notwendige Cookies können durch den Hosting-
                  Anbieter (Vercel) gesetzt werden, um die Funktionalität
                  der Website sicherzustellen. Diese Cookies dienen
                  ausschließlich der technischen Bereitstellung und
                  enthalten keine personenbezogenen Daten zu
                  Marketingzwecken.
                </p>
                <p className="text-sm">
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
                  (berechtigtes Interesse an der technisch fehlerfreien
                  Bereitstellung der Website).
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black text-foreground mb-6 uppercase tracking-tight">
                9. Google Maps
              </h2>
              <div className="space-y-4">
                <p className="text-sm">
                  Diese Website bindet den Kartendienst Google Maps (iFrame)
                  ein. Anbieter ist die Google Ireland Limited
                  (&quot;Google&quot;), Gordon House, Barrow Street, Dublin 4,
                  Irland.
                </p>
                <p className="text-sm">
                  Google Maps wird auf unserer Website erst nach Ihrer
                  ausdrücklichen Einwilligung über unser Cookie-Consent-Banner
                  geladen. Ohne Ihre Zustimmung wird kein iFrame eingebettet
                  und es findet keine Datenübertragung an Google statt.
                </p>
                <p className="text-sm">
                  Sofern Sie eingewilligt haben, ist es zur Nutzung der
                  Funktionen von Google Maps notwendig, Ihre IP-Adresse zu
                  übermitteln. Diese Informationen werden in der Regel an
                  einen Server von Google in den USA übertragen und dort
                  gespeichert. Die Datenübertragung in die USA erfolgt auf
                  Grundlage der Standardvertragsklauseln der EU-Kommission
                  (Art. 46 Abs. 2 lit. c DSGVO).
                </p>
                <p className="text-sm">
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO
                  (Einwilligung). Sie können Ihre Einwilligung jederzeit mit
                  Wirkung für die Zukunft widerrufen, indem Sie Ihren
                  Browser-Speicher (localStorage) löschen oder die Seite neu
                  laden.
                </p>
                <p className="text-sm">
                  Mehr Informationen zum Umgang mit Nutzerdaten finden Sie
                  in der Datenschutzerklärung von Google:{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-foreground/70"
                  >
                    https://policies.google.com/privacy
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black text-foreground mb-6 uppercase tracking-tight">
                10. Speicherdauer
              </h2>
              <p className="text-sm">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere
                Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
                Daten bei uns, bis der Zweck für die Datenverarbeitung
                entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend
                machen oder eine Einwilligung zur Datenverarbeitung
                widerrufen, werden Ihre Daten gelöscht, sofern wir keine
                anderen rechtlich zulässigen Gründe für die Speicherung
                Ihrer personenbezogenen Daten haben (z. B. steuer- oder
                handelsrechtliche Aufbewahrungsfristen); im letztgenannten
                Fall erfolgt die Löschung nach Fortfall dieser Gründe.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-foreground mb-6 uppercase tracking-tight">
                11. Aktualität und Änderung dieser Datenschutzerklärung
              </h2>
              <p className="text-sm">
                Diese Datenschutzerklärung ist aktuell gültig und hat den
                Stand April 2026. Durch die Weiterentwicklung unserer Website
                und Angebote oder aufgrund geänderter gesetzlicher
                beziehungsweise behördlicher Vorgaben kann es notwendig
                werden, diese Datenschutzerklärung zu ändern.
              </p>
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
