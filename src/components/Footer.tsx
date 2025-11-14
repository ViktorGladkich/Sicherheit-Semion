import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gray-50 dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Aegis Sicherheit. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap justify-center space-x-6 mt-4 md:mt-0">
            <a 
              href="#footer" 
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              Impressum
            </a>
            <a 
              href="#footer" 
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;