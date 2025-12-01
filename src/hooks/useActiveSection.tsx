
import { useState, useEffect } from 'react';

export const useActiveSection = (itemIds: string[], defaultId: string = '#home') => {
  const [activeHref, setActiveHref] = useState(defaultId);

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      
      // Check sections from bottom to top or simply loop
      // The original logic checked offsetTop - 200
      for (const id of itemIds) {
        const element = document.getElementById(id.replace('#', ''));
        if (element && window.scrollY >= (element.offsetTop - 250)) {
          current = id;
        }
      }
      
      if (current) setActiveHref(current);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [itemIds]);

  return activeHref;
};
