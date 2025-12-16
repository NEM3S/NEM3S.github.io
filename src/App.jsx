import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Page from "./views/Page";
import Header from "./components/Header";
import HomeSection from "./views/HomeSection";
import AboutSection from "./views/AboutSection";
import GlowButton from "./components/GlowButton";
import Background from "./components/Background";
import { useTheme } from "./utils/AppThemeController";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const numberPages = 3;

  function goNextPage() {
    setDirection(1);
    setPage(prev => prev + 1);
  }

  function goPreviousPage() {
    setDirection(-1);
    setPage(prev => prev - 1);
  }

  function onPageChanged(page) {
    setDirection(0);
    setPage(page);
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
    <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white overflow-hidden
      relative w-full h-screen flex flex-col items-center justify-center transition-colors duration-300">
      
      <Background />

      <Header theme={theme} onToggleTheme={toggleTheme} onPageChanged={onPageChanged} />

      <AnimatePresence mode="popLayout" custom={direction}>
        {pages[page]}
      </AnimatePresence>

      {page < numberPages - 1 && (
        <GlowButton
          className="btn-back-continue bottom-6 fixed
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
          className="btn-back-continue top-28 sm:top-32 fixed"
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
