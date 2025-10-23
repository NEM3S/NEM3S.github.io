import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Page from "./components/Page";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import "./utils/grained";

const THEME_KEY = "preferred-theme";

export default function App() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const stored = window.localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") {
      return stored;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  const numberPages = 3;

  useEffect(() => {
    if (window.grained) {
      const options = {
        animate: true,
        patternWidth: 200,
        patternHeight: 200,
        grainWidth: 1.05,
        grainHeight: 1.05,
        grainOpacity: 0.1,
        grainDensity: 1,
      };
      window.grained("#grain", options);
    } else {
      console.error("grained.js n'a pas ete charge correctement.");
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    document.body.classList.toggle("dark", isDark);

    window.localStorage.setItem(THEME_KEY, theme);
    console.log("Applied theme:", theme);
  }, [theme]);


  function goNextPage() {
    setDirection(1);
    setPage((prev) => prev + 1);
  }

  function goPreviousPage() {
    setDirection(-1);
    setPage((prev) => prev - 1);
  }

  function toggleTheme() {
    setTheme(prev => {
      const next = prev === "dark" ? "light" : "dark";
      return next;
    });
  }


  const pages = [
    <Page key="1" direction={direction}>
      <HomeSection />
    </Page>,

    <Page key="2" direction={direction}>
      <AboutSection />
    </Page>,

    <Page key="3" direction={direction}>
      <h1 className="text-5xl font-bold mb-6">Mes projets</h1>
      <p className="text-zinc-600 dark:text-gray-400 mb-10 max-w-xl text-center">
        Quelques-unes de mes creations les plus recentes.
      </p>
    </Page>,
  ];

  return (
    <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white overflow-hidden relative w-full h-screen flex flex-col items-center justify-center transition-colors duration-300">
      <div id="grain" className="absolute inset-0 z-50 pointer-events-none"></div>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <AnimatePresence mode="popLayout" custom={direction}>
        {pages[page]}
      </AnimatePresence>
      {page < numberPages - 1 && (
        <motion.button
          className="btn bottom-6 fixed
          sm:bottom-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          onClick={goNextPage}
        >
          Explore
        </motion.button>
      )}
      {page > 0 && (
        <motion.button
          className="btn top-24 fixed
          sm:top-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={goPreviousPage}
        >
          Back
        </motion.button>
      )}
    </div>
  );
}
