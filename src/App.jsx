import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Page from "./components/Page";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import "./utils/grained";



export default function App() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const numberPages = 3;

  useEffect(() => {
      if (window.grained) {
        const options = {
          animate: true,
          patternWidth: 400,
          patternHeight: 400,
          grainOpacity: 0.1,
          grainDensity: 1,
          grainChaos: 0.5,
          grainSpeed: 5,
        };
        window.grained("#grain", options);
      } else {
        console.error("grained.js n’a pas été chargé correctement.");
      }
    }, []);


  function goNextPage() {
    setDirection(1);
    setPage(page + 1);
  }

  function goPreviousPage() {
    setDirection(-1);
    setPage(page - 1);
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
      <p className="text-gray-400 mb-10 max-w-xl text-center">
        Quelques-unes de mes créations les plus récentes.
      </p>
    </Page>,
  ];

  return (
    <div className="bg-gray-950 overflow-hidden relative w-full h-screen flex flex-col items-center justify-center">
    <div id="grain" className="absolute inset-0 z-50 pointer-events-none"></div>
      <Header />
      <AnimatePresence mode="popLayout" custom={direction}>
        {pages[page]}
      </AnimatePresence>
      { page < numberPages - 1 && (
        <motion.button
          className="w-32 h-12 flex items-center justify-center bottom-6 fixed sm:bottom-10 active:scale-95
          transition-border duration-100 ease-in"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={() => {
          goNextPage();
        }}
      >
        Explore
      </motion.button>
      )}
      {
        page > 0 && (
          <motion.button
            className="w-32 h-12 flex items-center justify-center top-24 fixed sm:top-28 active:scale-95
              transition-border duration-100 ease-in"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => {
              goPreviousPage();
            }}
          >
            Back
          </motion.button>
        )
      }
    
    </div>
  );
}
