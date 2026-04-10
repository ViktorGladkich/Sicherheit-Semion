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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: "transform, opacity" }}
          className={`
            max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0
            bg-white/80 dark:bg-white/5 backdrop-blur-2xl rounded-4xl overflow-hidden
            shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04),inset_0_1px_3px_rgba(255,255,255,0.8)]
            dark:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.1)]
            border border-black/8 dark:border-white/15 relative group
        `}
        >
          {/* Liquid Glass Highlight Sweep */}
          <div className="absolute inset-0 bg-linear-to-tr from-white/40 via-transparent to-white/10 dark:from-white/10 dark:via-transparent dark:to-transparent opacity-50 pointer-events-none rounded-[inherit]"></div>
          {/* Info Side */}
          <ContactInfo />

          {/* Form Side */}
          <div className="p-10 md:p-14 relative /50 order-1 lg:order-2">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
