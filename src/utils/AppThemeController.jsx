import { createContext, useContext, useState, useEffect } from "react";

const THEME_KEY = "preferred-theme";

// ---- CONTEXT ----
const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

// ---- PROVIDER ----
export default function AppThemeController({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";

    const stored = window.localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") return stored;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    if (typeof document === "undefined") return;

    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    document.body.classList.toggle("dark", isDark);

    window.localStorage.setItem(THEME_KEY, theme);
    console.log("Applied theme:", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
