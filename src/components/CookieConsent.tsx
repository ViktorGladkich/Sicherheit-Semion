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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm border-t border-gray-200 dark:border-slate-700/50 shadow-lg animate-fade-in-up">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-700 dark:text-gray-300 text-center sm:text-left">
          Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern.
          <a 
            href="#footer" 
            onClick={handlePrivacyLinkClick}
            className="underline text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 ml-2"
          >
            Datenschutzrichtlinie
          </a>.
        </p>
        <div className="flex items-center gap-4 flex-shrink-0">
          <button
            onClick={handleDecline}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Ablehnen
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition-colors"
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