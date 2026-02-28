"use client";

import React from "react";
import { useTheme } from "../../hooks/useTheme";
import { useIsMounted } from "../../hooks/useIsMounted";
import { SunIcon, MoonIcon } from "./Icons";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const mounted = useIsMounted();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) {
    return (
      <div className="p-2 w-full h-full flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-background/20 animate-pulse" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 cursor-pointer rounded-full text-background hover:bg-background/10 focus:outline-none focus:ring-2 focus:ring-background transition-all duration-300 relative w-full h-full flex items-center justify-center overflow-hidden"
      aria-label={`Wechseln zu ${theme === "light" ? "dunklem" : "hellem"} Modus`}
    >
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out transform ${
          theme === "dark"
            ? "translate-y-0 opacity-100 rotate-0"
            : "translate-y-full opacity-0 rotate-90"
        }`}
      >
        <SunIcon className="w-6 h-6 text-background" />
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out transform ${
          theme === "light"
            ? "translate-y-0 opacity-100 rotate-0"
            : "-translate-y-full opacity-0 -rotate-90"
        }`}
      >
        <MoonIcon className="w-6 h-6 text-background" />
      </div>
    </button>
  );
};

export default ThemeToggle;
