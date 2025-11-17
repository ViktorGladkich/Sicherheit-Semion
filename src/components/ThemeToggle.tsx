import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import LazyLottie from "./LazyLottie";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const iconPath = theme === "light" ? "/assets/moon.json" : "/assets/sun.json";

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      aria-label="Toggle theme"
    >
      <LazyLottie
        key={iconPath}       // <— важно! Обновляет компонент при смене темы
        animationPath={iconPath}
        loop={true}
        className="w-10 h-10 animate-floating"
      />
    </button>
  );
};

export default ThemeToggle;