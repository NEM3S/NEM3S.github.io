import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import MouseIndicator from "../components/MouseIndicator";
import Carousel from "../components/Carousel";

export default function ProjectSection({ direction }) {
  const OPTIONS = { loop: true };
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [showIndicator, setShowIndicator] = useState(false);

  const showTimeoutRef = useRef(null);
  const hideTimeoutRef = useRef(null);
  const hasInteractedRef = useRef(false);

  const cancelIndicatorTimers = () => {
    if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    showTimeoutRef.current = null;
    hideTimeoutRef.current = null;
  };

  const markInteractedAndHide = () => {
    hasInteractedRef.current = true;
    cancelIndicatorTimers();
    setShowIndicator(false);
  };

  useEffect(() => {
    showTimeoutRef.current = setTimeout(() => {
      if (hasInteractedRef.current) return;

      setShowIndicator(true);

      hideTimeoutRef.current = setTimeout(() => {
        setShowIndicator(false);
      }, 10000);
    }, 4000);

    return () => cancelIndicatorTimers();
  }, []);

  useEffect(() => {
    const onPointerDown = () => markInteractedAndHide();

    window.addEventListener("pointerdown", onPointerDown, { once: true });
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const PROJECTS = [
    {
      title: "VALORez",
      description:
        "Outil permettant de corriger VALORANT pour les résolutions étirées.",
      period: "2023 - Maintenant",
      languages: ["/assets/skills/languages/C_sharp.svg", "/assets/skills/frameworks/spectre_console.svg", "/assets/skills/tools/Git_icon.svg"],
      onMore: () => { },
    },
    {
      title: "VALORankRadar",
      description:
        "Outil permettant de visualiser les statistiques des joueurs sur VALORANT.",
      period: "2025 - Maintenant",
      languages: ["/assets/skills/languages/C_sharp.svg", "/assets/skills/frameworks/wpf_logo.svg", "/assets/skills/tools/Git_icon.svg"],
      onMore: () => { },
    },
    {
      title: "audiodgFixer",
      description:
        "Outil permettant de corriger audiodg.exe (Isolation graphique de périphérique audio Windows) pour les cartes son virtuelles.",
      period: "2024",
      languages: ["/assets/skills/languages/PowerShell.svg"],
      onMore: () => { },
    },
    {
      title: "RDS",
      description:
        "Site web pour rechercher et proposer des recettes de saison.",
      period: "2025 - 2026",
      languages: ["/assets/skills/frameworks/angular-icon.svg", "/assets/skills/frameworks/dotnet_logo.svg", "/assets/skills/frameworks/aspnet-logo.svg", "/assets/skills/tools/sqlite.svg", "/assets/skills/tools/vp_logo.png", "/assets/skills/tools/docker_logo.svg", "/assets/skills/tools/Git_icon.svg"],
      onMore: () => { },
    },
    {
      title: "Portfolio v1",
      description:
        "Mon premier portfolio. Découverte de React et Tailwind CSS, ainsi que Motion.",
      period: "2026 - Maintenant",
      languages: ["/assets/skills/frameworks/react.svg", "/assets/skills/frameworks/Tailwind_Logo.svg", "/assets/skills/tools/Vite_Logo_2026.svg", "/assets/skills/tools/Git_icon.svg"],
      onMore: () => { },
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel();
  return (
    <div className="flex flex-col space-top-section w-full overflow-y-auto overflow-x-hidden min-h-screen bg-transparent  text-zinc-900 dark:text-white transition-colors duration-300">
      <div className="pl-10 pr-10 mb-2 flex flex-col items-center justify-start">
        <motion.h1
          className="text-5xl font-bold mb-10 self-center"
          initial={{ opacity: 0, y: direction > 0 ? 50 : -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: direction > 0 ? -50 : 50 }}
          transition={{ duration: 0.5 }}
        >
          Mes projets
        </motion.h1>
        <motion.p
          className="text-zinc-700 dark:text-gray-300 mb-4 text-left max-w-[750px]"
          initial={{ opacity: 0, y: direction > 0 ? 50 : -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: direction > 0 ? -50 : 50 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        >
          Quelques-unes de mes dernières créations.
        </motion.p>
        <div className="hidden sm:flex relative justify-center">
          <AnimatePresence>
            {showIndicator && (
              <motion.div
                className="absolute flex flex-col items-center w-[300px]"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <MouseIndicator />
                <p className="text-zinc-700 dark:text-gray-300 text-center text-[0.7rem] opacity-70">
                  Cliquez et glissez pour parcourir les projets
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
      <Carousel slides={PROJECTS} options={OPTIONS} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex}/>
    </div>
  );
}
