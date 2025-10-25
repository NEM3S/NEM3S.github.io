import { motion } from "motion/react";
import InfoCard from "./InfoCard";

export default function AboutSection({direction}) {
  return (
    <div className="pl-10 pr-10 pt-48 pb-24 w-full overflow-y-auto overflow-x-hidden min-h-screen bg-transparent flex flex-col items-center justify-start text-zinc-900 dark:text-white transition-colors duration-300">
      <motion.h1
        className="text-5xl font-bold mb-10 self-center"
        initial={{ opacity: 0, y: direction > 0 ? 50 : -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: direction > 0 ? -50 : 50 }}
        transition={{ duration: 0.5 }}
      >
        À propos de moi
      </motion.h1>
      <motion.p
        className="text-zinc-700 dark:text-gray-300 mb-4 text-left max-w-[750px]"
        initial={{ opacity: 0, y: direction > 0 ? 50 : -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: direction > 0 ? -50 : 50 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
      >
        Etudiant en troisième année de BUT Informatique, je suis passionné par le
        développement logiciel et le reverse engineering.
      </motion.p>
      <motion.p
        className="text-zinc-700 dark:text-gray-300 mb-4 text-left max-w-[750px]"
        initial={{ opacity: 0, y: direction > 0 ? 50 : -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: direction > 0 ? -50 : 50 }}
        transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
      >
        J'aime comprendre comment les choses fonctionnent, que ce soit en
        programmation bas niveau, en conception <b>SOLID</b> ou en développement web.
      </motion.p>
      <motion.p
        className="text-zinc-700 dark:text-gray-300 mb-4 text-left max-w-[750px]"
        initial={{ opacity: 0, y: direction > 0 ? 50 : -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: direction > 0 ? -50 : 50 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
      >
        Curieux et rigoureux, je passe beaucoup de temps à expérimenter,
        apprendre de nouvelles technologies et perfectionner mes projets personnels.
      </motion.p>
      <motion.p
        className="text-zinc-700 dark:text-gray-300 mb-10 text-left max-w-[750px]"
        initial={{ opacity: 0, y: direction > 0 ? 50 : -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: direction > 0 ? -50 : 50 }}
        transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
      >
        <u>Mon objectif</u> : concevoir des outils et des projets qui allient
        technique et créativité de la meilleure manière possible, pour répondre
        aux besoins utilisateurs.
      </motion.p>


      <div className="flex flex-col gap-6 justify-center items-center w-full max-w-[800px] mb-10">
        <InfoCard
          title="Études"
          direction={direction}
        >
          
        <ul className="text-zinc-400 text-sm flex flex-col gap-2">
          <li className="flex justify-center items-center sm:justify-between flex-col sm:flex-row relative bg-transparent backdrop-blur-[1px] border border-zinc-800 rounded-xl p-6 w-full text-left shadow-md">
              <h4 className="text-xl text-center sm:text-left font-bold text-zinc-900 dark:text-white">BAC Maths/NSI
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">2020-2023 - Mention : <span className="text-amber-600 text-sm dark:text-amber-400">Très bien</span></p></h4>
              <span className="text-lg font-bold text-green-800">Terminé</span>
          </li>
          <li className="flex justify-center items-center sm:justify-between flex-col sm:flex-row relative bg-transparent backdrop-blur-[1px] border border-zinc-800 rounded-xl p-6 w-full text-left shadow-md">
              <h4 className="text-xl text-center sm:text-left font-bold text-zinc-900 dark:text-white">BUT Informatique
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">2023-2026</p></h4> 
              <span className="animate-pulse text-zinc-500 dark:text-zinc-400 text-lg font-bold">En cours</span>
          </li>
        </ul>
        </InfoCard>
        
        <InfoCard
          title="Expériences Pro"
          direction={direction}
        >
          <ul className="text-zinc-400 text-sm flex flex-col gap-2">
            <li>Stage DEV - Entreprise X (2024)</li>
            <li>Projet en équipe — Tracker Valorant</li>
          </ul>
        </InfoCard>

        <InfoCard
          title="Langages Prog"
          direction={direction}
        >
          <ul className="text-zinc-400 text-sm flex flex-col gap-2">
            <li>Programmation</li>
            <li>Reverse Engineering</li>
            <li>Git</li>
          </ul>
        </InfoCard>

        <InfoCard
          title="Technologies"
          direction={direction}
        >
          <ul className="text-zinc-400 text-sm flex flex-col gap-2">
            <li>C, C#, JS, React, Tailwind</li>
            <li>Reverse Engineering, Git</li>
          </ul>
        </InfoCard>

        <InfoCard
          title="Langues"
          direction={direction}
        >
          <ul className="text-zinc-400 text-sm flex flex-col gap-2">
            <li>Français — Natif</li>
            <li>Anglais — Intermédiaire 👌</li>
          </ul>
        </InfoCard>
      </div>
    </div>
  );
}
