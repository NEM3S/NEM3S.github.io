import { motion } from "motion/react";

export default function HomeSection() {
  return  (
    <div className="min-h-screen w-full flex flex-col items-center justify-center ml-2 mr-2">
      <motion.h1
        className="text-7xl sm:text-8xl lg:text-[9rem] xl:text-[11rem] font-[550] hover:font-[900] transition-[font-weight] duration-[1s] ease-[cubic-bezier(.23,0,.32,1)] cursor-default mb-8 ml-2 mr-2 text-center"
        initial={{ opacity: 0, scale: 10, y: -1000, filter: "blur(120px)" }}
        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 1.5,
          ease: [0.16,0.48,0.01,0.98],
          delay: 0.2
        }}
        whileHover={{ scaleX: 1.1}}
      >
        Mathis H.
      </motion.h1>

      <motion.p
        className="text-md sm:text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 ml-2 mr-2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Développeur .NET&nbsp; ○ &nbsp;Étudiant en Informatique
      </motion.p>


    </div>
  );
}
