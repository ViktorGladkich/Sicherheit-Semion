
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-background border-t border-neutral-200 dark:border-neutral-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
          <div className="text-center md:text-left">
             <h4 className="font-bold text-lg text-foreground">A.S.S Security UG</h4>
             <p className="text-sm text-neutral-500 mt-1">
                &copy; {new Date().getFullYear()} Alle Rechte vorbehalten.
             </p>
          </div>

          <div className="flex gap-8">
            <a href="#" className="text-sm text-neutral-500 hover:text-foreground transition-colors">Impressum</a>
            <a href="#" className="text-sm text-neutral-500 hover:text-foreground transition-colors">Datenschutz</a>
            <a href="#" className="text-sm text-neutral-500 hover:text-foreground transition-colors">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
