"use client";

import React, { useEffect, useState } from "react";
import { PhoneIcon, MailIcon, LocationIcon } from "../../ui/Icons";

export const ContactInfo: React.FC = () => {
  const [mapsConsent, setMapsConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("cookie_consent");
    setMapsConsent(stored === "accepted" ? true : stored === "declined" ? false : null);

    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      setMapsConsent(detail === "accepted");
    };
    window.addEventListener("cookie-consent-change", handler);
    return () => window.removeEventListener("cookie-consent-change", handler);
  }, []);

  const handleAcceptMaps = () => {
    localStorage.setItem("cookie_consent", "accepted");
    window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: "accepted" }));
  };

  return (
    <div className="p-10 md:p-14 flex flex-col justify-between bg-transparent dark:bg-white/5 border-t lg:border-t-0 lg:border-r border-black/5 dark:border-white/5 mx-px lg:mx-0 relative overflow-hidden order-2 lg:order-1">

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-foreground mb-8 tracking-tight">
          Kontaktinformationen
        </h3>
        <div className="space-y-8">
          <a href="tel:+4916097553090" className="flex items-center group">
            <div className="w-12 h-12 rounded-2xl bg-white/90 dark:bg-white/10 border border-black/8 dark:border-white/10 backdrop-blur-md flex items-center justify-center mr-5 group-hover:border-foreground/30 transition-all shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,0.9)] dark:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.1)]">
              <PhoneIcon className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                Telefon
              </p>
              <span className="text-foreground group-hover:text-foreground/80 transition-colors font-medium">
                +49 160 97553090
              </span>
            </div>
          </a>
          <a
            href="mailto:info@ass-security-ug.de"
            className="flex items-center group"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/90 dark:bg-white/10 border border-black/8 dark:border-white/10 backdrop-blur-md flex items-center justify-center mr-5 group-hover:border-foreground/30 transition-all shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,0.9)] dark:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.1)]">
              <MailIcon className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                E-Mail
              </p>
              <span className="text-foreground group-hover:text-foreground/80 transition-colors font-medium">
                info@ass-security-ug.de
              </span>
            </div>
          </a>
          <a href="#" className="flex items-center group">
            <div className="w-12 h-12 rounded-2xl bg-white/90 dark:bg-white/10 border border-black/8 dark:border-white/10 backdrop-blur-md flex items-center justify-center mr-5 group-hover:border-foreground/30 transition-all shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,0.9)] dark:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.1)]">
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
        <div className="h-48 w-full rounded-2xl bg-white/90 dark:bg-white/5 overflow-hidden relative border border-black/8 dark:border-white/10 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,0.5)] dark:shadow-inner flex items-center justify-center">
          {mapsConsent === true ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.5!2d13.738!3d51.0604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709cf67b8e6a2a5%3A0x4f7b6e5f3c8e7a0d!2sK%C3%B6nigstra%C3%9Fe%2026%2C%2001097%20Dresden!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{
                border: 0,
                opacity: 0.8,
                filter: "grayscale(100%) invert(90%) contrast(1.2)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="dark:invert dark:grayscale hover:grayscale-0 transition-all duration-700"
            />
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full text-center px-6 gap-3">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Google Maps wird erst nach Ihrer Einwilligung geladen.
              </p>
              {mapsConsent === false && (
                <button
                  onClick={handleAcceptMaps}
                  className="text-xs font-bold uppercase tracking-widest bg-foreground text-background px-4 py-2 rounded-lg hover:opacity-80 transition-opacity"
                >
                  Karte anzeigen
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
