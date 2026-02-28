"use client";

import { useState, useEffect } from "react";

export const useActiveSection = (
  itemIds: string[],
  defaultId: string = "#home",
) => {
  const [activeHref, setActiveHref] = useState(defaultId);

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      const scrollPos = window.scrollY + 100;

      for (const id of itemIds) {
        const element = document.getElementById(id.replace("#", ""));
        if (element) {
          const top = element.offsetTop;
          if (scrollPos >= top) {
            current = id;
          }
        }
      }

      if (current) setActiveHref(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [itemIds]);

  return activeHref;
};
