import { useState, useEffect } from "react";

export const useActiveSection = (
  itemIds: string[],
  defaultId: string = "#home"
) => {
  const [activeHref, setActiveHref] = useState(defaultId);

  useEffect(() => {
    const handleScroll = () => {
      const rootElement = document.getElementById("root");
      if (!rootElement) return;

      const scrollTop = rootElement.scrollTop;
      let current = "";

      for (const id of itemIds) {
        const element = document.getElementById(id.replace("#", ""));
        if (element) {
          // Получаем позицию элемента относительно root элемента
          const rect = element.getBoundingClientRect();
          const rootRect = rootElement.getBoundingClientRect();
          const relativeTop = rect.top - rootRect.top + scrollTop;

          if (scrollTop >= relativeTop - 250) {
            current = id;
          }
        }
      }

      if (current) setActiveHref(current);
    };

    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.addEventListener("scroll", handleScroll, true);
      // Initial check
      handleScroll();
      return () =>
        rootElement.removeEventListener("scroll", handleScroll, true);
    }
  }, [itemIds]);

  return activeHref;
};
