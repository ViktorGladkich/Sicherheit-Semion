"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MailIcon, PhoneIcon, LocationIcon } from "../ui/Icons";
import { CinematicText } from "../ui/cinematic-text";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Objektschutz", href: "#services" },
      { name: "Baustellenbewachung", href: "#services" },
      { name: "Eventschutz", href: "#services" },
      { name: "Revierstreifen", href: "#services" },
    ],
    company: [
      { name: "Über uns", href: "#about" },
      { name: "Karriere", href: "#contact" },
      { name: "FAQ", href: "#faq" },
    ],
    legal: [
      { name: "Impressum", href: "/impressum" },
      { name: "Datenschutz", href: "/datenschutz" },
    ],
  };

  return (
    <footer
      id="footer"
      className="relative bg-background pt-32 pb-12 overflow-hidden border-t border-foreground/5"
      role="contentinfo"
    >
      {/* Background Large Text - Styled with Text Stroke for Premium Feel */}
      <div
        className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.03] dark:opacity-[0.05]"
        aria-hidden="true"
      >
        <h2
          className="text-[20vw] font-black leading-none whitespace-nowrap tracking-tighter uppercase"
          style={{
            WebkitTextStroke: "1px currentColor",
            color: "transparent",
          }}
        >
          A.S.S SECURITY
        </h2>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section: CTA & Logo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <div className="mb-2">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground/60 mb-4 italic">
                Bereit für den Schutz?
              </h4>
              <CinematicText
                words={["SICHERHEIT", "PRÄZISION", "VERTRAUEN"]}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-2"
                alignment="left"
              />
            </div>
            <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-10 leading-tight text-muted-foreground/20">
              IST UNSERE MISSION.
            </p>

            <a
              href="#contact"
              className="group relative inline-flex items-center gap-6 text-xl font-bold uppercase tracking-wider overflow-hidden px-2 py-1"
            >
              <span className="relative z-10">Projekt anfragen</span>
              <div className="w-14 h-14 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500 ease-in-out">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform group-hover:translate-x-1 transition-transform duration-500"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-foreground/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-16 lg:gap-24"
          >
            <div className="flex flex-col gap-8 text-center">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/40">
                Leistungen
              </h4>
              <ul className="flex flex-col gap-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm font-semibold hover:text-muted-foreground transition-all duration-300 hover:scale-105 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-8 text-center">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/40">
                Firma
              </h4>
              <ul className="flex flex-col gap-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm font-semibold hover:text-muted-foreground transition-all duration-300 hover:scale-105 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Middle Section: Contact Details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-y border-foreground/5 mb-12"
        >
          <div className="flex items-start gap-6 group">
            <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <LocationIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/40 mb-2">
                Standort
              </p>
              <address className="not-italic text-base font-bold leading-relaxed">
                Königstraße 26 <br />
                01097 Dresden, DE
              </address>
            </div>
          </div>
          <div className="flex items-start gap-6 group">
            <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
              <PhoneIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/40 mb-2">
                Telefon
              </p>
              <a
                href="tel:+4917640153293"
                className="text-lg font-bold hover:text-muted-foreground transition-colors"
              >
                +49 176 40153293
              </a>
            </div>
          </div>
          <div className="flex items-start gap-6 group">
            <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <MailIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/40 mb-2">
                E-Mail
              </p>
              <a
                href="mailto:info@ass-sicurity.de"
                className="text-lg font-bold hover:text-muted-foreground transition-colors"
              >
                info@ass-sicurity.de
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">
              &copy; {currentYear} A.S.S SECURITY UG &mdash; MADE BY{" "}
              <a
                href="https://invertadigital.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground transition-colors font-black underline decoration-current/20 underline-offset-4"
              >
                INVERTA
              </a>
            </p>
          </div>

          <nav className="flex items-center gap-8">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/60 hover:text-foreground transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
