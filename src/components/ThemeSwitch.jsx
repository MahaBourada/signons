import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <button
      type="button"
      className="hover:translate-x-[1px] hover:translate-y-[1px]"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Passer au thème sombre" : "Passer au thème clair"}
    >
      {theme === "light" ? (
        <Moon color="#1F1F1F" size={36} className="m-4 mx-10" />
      ) : (
        <Sun color="#E6E6E6" size={36} className="m-4 mx-10" />
      )}
    </button>
  );
};

export default ThemeSwitch;
