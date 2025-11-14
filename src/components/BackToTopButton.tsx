import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from './Icons';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={scrollToTop}
          className={`p-3 bg-blue-600/80 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 transition-all duration-300 ease-in-out transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          aria-label="Nach oben scrollen"
        >
          <ArrowUpIcon />
        </button>
    </div>
  );
};

export default BackToTopButton;