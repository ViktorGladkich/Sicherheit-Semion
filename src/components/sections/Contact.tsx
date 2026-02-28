"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { SectionHeader } from "../ui/SectionHeader";
import { ContactInfo } from "./contact/ContactInfo";
import { ContactForm } from "./contact/ContactForm";

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden "
      ref={sectionRef}
      role="region"
      aria-label="Kontaktbereich"
    >
      {/* Unified Background Gradient Blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-foreground/5 blur-[120px] rounded-full -z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="KONTAKT"
          description="Sicherheit beginnt mit einem Gespräch. Ob dringende Anfrage, langfristige Planung oder eine unverbindliche Risikoanalyse – unser Leitstand ist 24/7 besetzt. Zögern Sie nicht, uns anzusprechen. Wir entwickeln Lösungen, bevor Probleme entstehen."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`
            max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0
            bg-white dark:bg-neutral-900/30 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl
            border border-neutral-200 dark:border-neutral-800
        `}
        >
          {/* Info Side */}
          <ContactInfo />

          {/* Form Side */}
          <div className="p-10 md:p-14 relative /50">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
