import { motion } from "motion/react";

export default function InfoCard({ title, children }) {
  return (
    <motion.div
      className="group relative bg-transparent backdrop-blur-lg z-10 border border-zinc-400 dark:border-zinc-600 rounded-xl p-6 w-full text-left shadow-md dark:shadow-zinc-500/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}

      transition={{
        opacity: { duration: 1, ease: "easeInOut", delay: 1 }
      }}

      whileHover={{
        y: -5,
        transition: {
          y: { duration: 0.3, ease: [0.80,-1.2,.68,1], }
        }
      }}

    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-t dark:from-amber-800/10 from-blue-950/10 from-0% to-50%
                      opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in pointer-events-none">
      </div>

      <div className="relative z-10">
        <h3 className="text-xl text-center sm:text-left font-bold text-zinc-900 dark:text-white mb-3">
          {title}
        </h3>

        {children}
      </div>
    </motion.div>
  );
}
