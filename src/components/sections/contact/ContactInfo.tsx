import React from "react";
import { PhoneIcon, MailIcon, LocationIcon } from "../../ui/Icons";

export const ContactInfo: React.FC = () => {
  return (
    <div className="p-10 md:p-14 flex flex-col justify-between bg-neutral-50 dark:bg-black/40 border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-neutral-800 relative overflow-hidden">

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-foreground mb-8 tracking-tight">
          Kontaktinformationen
        </h3>
        <div className="space-y-8">
          <a href="tel:+4917640153293" className="flex items-center group">
            <div className="w-12 h-12 rounded-lg bg-background border border-neutral-200 dark:border-neutral-700 flex items-center justify-center mr-5 group-hover:border-foreground transition-colors shadow-sm">
              <PhoneIcon className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                Telefon
              </p>
              <span className="text-foreground group-hover:text-foreground/80 transition-colors font-medium">
                +49 176 40153293
              </span>
            </div>
          </a>
          <a
            href="mailto:info@ass-sicurity.de"
            className="flex items-center group"
          >
            <div className="w-12 h-12 rounded-lg bg-background border border-neutral-200 dark:border-neutral-700 flex items-center justify-center mr-5 group-hover:border-foreground transition-colors shadow-sm">
              <MailIcon className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                E-Mail
              </p>
              <span className="text-foreground group-hover:text-foreground/80 transition-colors font-medium">
                info@ass-sicurity.de
              </span>
            </div>
          </a>
          <a href="#" className="flex items-center group">
            <div className="w-12 h-12 rounded-lg bg-background border border-neutral-200 dark:border-neutral-700 flex items-center justify-center mr-5 group-hover:border-foreground transition-colors shadow-sm">
              <LocationIcon className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                Hauptsitz
              </p>
              <span className="text-foreground group-hover:text-foreground/80 transition-colors font-medium">
                Königstraße 26, Dresden
              </span>
            </div>
          </a>
        </div>
      </div>

      <div className="mt-12 relative z-10">
        <div className="h-48 w-full rounded-xl bg-neutral-200 dark:bg-neutral-800/50 overflow-hidden relative border border-neutral-200 dark:border-neutral-700 shadow-inner">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.653456488734!2d13.7383!3d51.0603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709cf1a14000001%3A0x0!2zS8O2bmlnc3RyYcOfZSAyNiwgMDEwOTcgRHJlc2Rlbg!5e0!3m2!1sde!2sde!4v1620000000000!5m2!1sde!2sde"
            width="100%"
            height="100%"
            style={{
              border: 0,
              opacity: 0.8,
              filter: "grayscale(100%) invert(90%) contrast(1.2)",
            }}
            allowFullScreen
            loading="lazy"
            className="dark:invert dark:grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
