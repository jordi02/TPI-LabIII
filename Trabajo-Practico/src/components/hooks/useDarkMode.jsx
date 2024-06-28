// src/hooks/useDarkMode.js
import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    setTimeout(() => {
      window.location.reload();
    }, 100); // Añade un pequeño retraso para asegurarte de que el estado se guarda antes de recargar
  };

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
