import React, { useState } from 'react';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(() => {
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookie_consent');
      return consent === null;
    }
    return false;
  });

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setShowBanner(false);
  };

  const handlePrivacyLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('footer');
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/90 backdrop-blur-sm border-t border-border shadow-lg animate-fade-in-up">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground text-center sm:text-left">
          Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern.
          <a 
            href="#footer" 
            onClick={handlePrivacyLinkClick}
            className="underline text-foreground hover:text-muted-foreground ml-2"
          >
            Datenschutzrichtlinie
          </a>.
        </p>
        <div className="flex items-center gap-4 flex-shrink-0">
          <button
            onClick={handleDecline}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Ablehnen
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-foreground text-background text-sm font-semibold rounded-md hover:bg-foreground/80 transition-colors"
          >
            Akzeptieren
          </button>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.5s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default CookieConsent;