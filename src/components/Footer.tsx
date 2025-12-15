import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      id="footer" 
      className="bg-background border-t border-neutral-200 dark:border-neutral-800 py-12"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg text-foreground">A.S.S Security UG</h3>
            <address className="text-sm text-neutral-500 mt-1 not-italic">
              Königstraße 26, 01097 Dresden, Deutschland<br />
              Tel: <a href="tel:+49123456789" className="hover:text-foreground transition-colors">+49 (0) 123 456 789</a><br />
              Email: <a href="mailto:kontakt@ass-security.de" className="hover:text-foreground transition-colors">kontakt@ass-security.de</a>
            </address>
            <p className="text-sm text-neutral-500 mt-2">
              &copy; {currentYear} A.S.S Security UG. Alle Rechte vorbehalten.
            </p>
          </div>

          <nav className="flex gap-8" aria-label="Footer Navigation">
            <a 
              href="/impressum" 
              className="text-sm text-neutral-500 hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 rounded px-2 py-1"
            >
              Impressum
            </a>
            <a 
              href="/datenschutz" 
              className="text-sm text-neutral-500 hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 rounded px-2 py-1"
            >
              Datenschutz
            </a>
            <a 
              href="/agb" 
              className="text-sm text-neutral-500 hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 rounded px-2 py-1"
            >
              AGB
            </a>
          </nav>
        </div>

        {/* Trust badges and certifications */}
        <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-xs text-center text-neutral-500">
            🔒 IHK-zertifiziertes Sicherheitspersonal | 🛡️ Datenschutz nach DSGVO | ✓ 24/7 Erreichbarkeit
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;