"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useIsMounted } from "../../hooks/useIsMounted";

const CookieConsent: React.FC = () => {
  const mounted = useIsMounted();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (mounted) {
      const consent = localStorage.getItem("cookie_consent");
      if (consent === null) {
        const timer = setTimeout(() => setShowBanner(true), 800);
        return () => clearTimeout(timer);
      }
    }
  }, [mounted]);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setShowBanner(false);
  };

  if (!mounted || !showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-auto md:right-6 md:max-w-md z-50 animate-fade-in-up">
      <div className="bg-white/80 dark:bg-white/10 backdrop-blur-2xl rounded-3xl border border-black/8 dark:border-white/15 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.15),inset_0_1px_3px_rgba(255,255,255,0.8)] dark:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.1)] p-6 relative overflow-hidden">
        {/* Glass highlight */}
        <div className="absolute inset-0 bg-linear-to-tr from-white/40 via-transparent to-white/10 dark:from-white/10 dark:via-transparent dark:to-transparent opacity-50 pointer-events-none rounded-[inherit]"></div>
        
        <div className="relative z-10">
          <p className="text-sm text-foreground leading-relaxed mb-1">
            <span className="font-bold">Datenschutzhinweis</span>
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed mb-4">
            Diese Website verwendet ausschließlich technisch notwendige Cookies
            und bindet Google Maps ein. Es werden keine Tracking- oder
            Marketing-Cookies verwendet. Weitere Informationen finden Sie in
            unserer{" "}
            <Link
              href="/datenschutz"
              className="underline text-foreground hover:text-muted-foreground transition-colors"
            >
              Datenschutzerklärung
            </Link>
            .
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDecline}
              className="flex-1 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground py-2.5 px-4 rounded-xl border border-black/8 dark:border-white/15 bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300"
            >
              Ablehnen
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 text-xs font-bold uppercase tracking-widest text-background bg-foreground py-2.5 px-4 rounded-xl hover:opacity-90 transition-all duration-300 shadow-sm"
            >
              Akzeptieren
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
};

export default CookieConsent;
