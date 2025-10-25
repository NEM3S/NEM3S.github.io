import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Page from "./components/Page";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import "./utils/grained";
import GlowButton from "./components/GlowButton";

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
        patternWidth: 250,
        patternHeight: 250,
        grainWidth: 1.02,
        grainHeight: 1.02,
        grainOpacity: 0.05,
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

  function onPageChanged(page) {
    setPage(page);
    setDirection(0);
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
      <AboutSection direction={direction} />
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
      <div className="pointer-events-none absolute top-0 left-0 w-full h-48 bg-gradient-to-b dark:from-amber-800/10 from-blue-950/20 to-transparent z-0" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t dark:from-amber-800/10 from-blue-950/20 to-transparent z-0" />
      {/* Glow dynamique ultra smooth */}
      <div
        className="pointer-events-none absolute w-[1200px] h-[1200px] rounded-full blur-[200px] opacity-20
                  bg-gradient-to-br from-blue-900/50 via-cyan-700/40 to-sky-600/40
                  dark:from-amber-900/70 dark:via-orange-600/30 dark:to-red-500/80 dark:opacity-10
                  animate-glow z-0"
        style={{
          animation: "glowMove 25s ease-in-out infinite",
        }}
      ></div>

      <Header theme={theme} onToggleTheme={toggleTheme} onPageChanged={onPageChanged} />
      <AnimatePresence mode="popLayout" custom={direction}>
        {pages[page]}
      </AnimatePresence>
      {page < numberPages - 1 && (
        <GlowButton
          className="btn bottom-6 fixed
          sm:bottom-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          onClick={goNextPage}
        >
          {page === 1 ? "Continuer" : "Explorer"}
        </GlowButton>
      )}
      {page > 0 && (
        <GlowButton
          className="btn top-24 fixed
          sm:top-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={goPreviousPage}
        >
          Retour
        </GlowButton>
      )}
    </div>
  );
}
