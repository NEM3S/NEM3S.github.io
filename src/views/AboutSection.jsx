import { motion } from "motion/react";
import InfoCard from "../components/InfoCard";
import Skill from "../models/Skill";
import SkillCard from "../components/SkillCard";
import ExperienceTimeline from "../components/ExperienceTimeline";
import { delay } from "motion";

export default function AboutSection({ direction }) {

  const languages = [
    new Skill("/assets/skills/languages/C_sharp.svg", "C#", "purple", "h-10", true),
    new Skill("/assets/skills/languages/Typescript_logo.svg", "TypeScript", "blue", "h-9", true),
    new Skill("/assets/skills/languages/JavaScript_logo.svg", "JavaScript", "yellow", "h-9"),
    new Skill("/assets/skills/languages/Sql_logo.svg", "SQL", "orange", "h-8"),
    new Skill("/assets/skills/languages/html_logo.svg", "HTML", "orange", "h-9", true),
    new Skill("/assets/skills/languages/CSS3_logo.svg", "CSS", "blue", "h-9"),
    new Skill("/assets/skills/languages/Python-logo.svg", "Python", "yellow", "h-9"),
    new Skill("/assets/skills/languages/C++_Logo.svg", "C++", "blue", "h-10"),
    new Skill("/assets/skills/languages/C_Logo.svg", "C", "blue", "h-10"),
  ];

  const frameworks = [
    new Skill("/assets/skills/frameworks/dotnet_logo.svg", ".NET Core", "purple", "h-9", true),
    new Skill("/assets/skills/frameworks/wpf_logo.svg", "WPF", "blue", "h-9", true),
    new Skill("/assets/skills/frameworks/aspnet-logo.svg", "ASP.NET", "purple", "h-10"),
    new Skill("/assets/skills/frameworks/MySql_logo.svg", "MySQL", "orange", "h-9"),
    new Skill("/assets/skills/frameworks/react.svg", "React", "cyan", "h-9"),
    new Skill("/assets/skills/frameworks/angular-icon.svg", "Angular", "fuchsia", "h-9"),
    new Skill("/assets/skills/frameworks/Tailwind_Logo.svg", "Tailwind", "cyan", "h-6"),
  ]

  const tools = [
    new Skill("/assets/skills/tools/Git_icon.svg", "Git", "orange", "h-10", true),
    new Skill("/assets/skills/tools/docker_logo.svg", "Docker", "blue", "h-8"),
    new Skill("/assets/skills/tools/vp_logo.png", "Visual Paradigm", "red", "h-9"),
    new Skill("/assets/skills/tools/Figma-logo.svg", "Figma", "fuchsia", "h-8"),
  ]

  return (
    <div className="pl-10 pr-10 pt-48 sm:pt-56 pb-24 w-full overflow-y-auto overflow-x-hidden min-h-screen bg-transparent flex flex-col items-center justify-start text-zinc-900 dark:text-white transition-colors duration-300">
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
          title="Compétences"
        >
          <h2 className="p-4 sm:text-left text-center ">Langages</h2>
          <motion.div
            className="flex flex-row flex-wrap gap-4 sm:justify-start justify-center"
          >
            {languages.map(skill => (
              <SkillCard key={skill.getName()} skill={skill} />
            ))}
          </motion.div>

          <h2 className="mt-4 p-4 sm:text-left text-center">Frameworks / Technologies</h2>
          <motion.div
            className="flex flex-row flex-wrap gap-4 sm:justify-start justify-center"
          >
            {frameworks.map(skill => (
              <SkillCard key={skill.getName()} skill={skill} />
            ))}
          </motion.div>

          <h2 className="mt-4 p-4 sm:text-left text-center">Outils</h2>
          <motion.div
            className="flex flex-row flex-wrap gap-4 sm:justify-start justify-center"
          >
            {tools.map(skill => (
              <SkillCard key={skill.getName()} skill={skill} />
            ))}
          </motion.div>

        </InfoCard>

        <InfoCard
          title="Expériences Pro."
        >
          <ExperienceTimeline />
        </InfoCard>

        <InfoCard
          title="Études"
        >

          <ul className="text-zinc-400 text-sm flex flex-col gap-2">

            <li className="studies-li">
              <h4>BUT Informatique
                <p>2023-2026</p>
              </h4>
              <span className="animate-pulse text-zinc-500 dark:text-zinc-400 text-lg font-bold">En cours</span>
            </li>
            <li className="studies-li">
              <h4>BAC Maths/NSI
                <p>2020-2023 - Mention : <span className="text-amber-600 text-sm dark:text-amber-400">Très bien</span></p>
              </h4>
              <span className="text-lg font-bold text-green-800">Terminé</span>
            </li>
          </ul>
        </InfoCard>
      </div>
    </div>
  );
}
