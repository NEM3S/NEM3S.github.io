import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import Carousel from "../components/Carousel";

export default function ProjectSection({ direction }) {
    const OPTIONS = { loop: true }
    const SLIDE_COUNT = 4
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    const PROJECTS = [
    {
      title: "VALORez",
      description:
        "Outil permettant de corriger VALORANT pour les résolutions étirées",
      period: "2023 - Maintenant",
      tags: ["/assets/skills/languages/C_sharp.svg", "/assets/skills/frameworks/spectre_console.svg"],
      onMore: () => {},
    },
    {
      title: "VALORankRadar",
      description:
        "Outil permettant de visualiser les statistiques des joueurs sur VALORANT",
      period: "2025 - Maintenant",
      tags: ["/assets/skills/languages/C_sharp.svg", "/assets/skills/frameworks/wpf_logo.svg"],
      onMore: () => {},
    },
    {
      title: "audiodgFixer",
      description:
        "Outil permettant de corriger audiodg.exe (Isolation graphique de périphérique audio Windows) pour les cartes son virtuelles",
      period: "2024",
      tags: ["/assets/skills/languages/PowerShell.svg"],
      onMore: () => {},
    },
    {
      title: "Portfolio v1",
      description:
        "Mon premier portfolio",
      period: "2026 - Maintenant",
      tags: ["/assets/skills/frameworks/react.svg", "/assets/skills/frameworks/Tailwind_Logo.svg"],
      onMore: () => {},
    },
  ];

    const [emblaRef, emblaApi] = useEmblaCarousel();
    return (
        <div className="flex flex-col space-top-section pb-24 w-full overflow-y-auto overflow-x-hidden min-h-screen bg-transparent  text-zinc-900 dark:text-white transition-colors duration-300">
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
            </div>
            <Carousel slides={PROJECTS} options={OPTIONS} />
        </div>
    );
}
