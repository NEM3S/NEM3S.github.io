import { motion } from "motion/react";

export default function InfoCard({ title, children }) {
  return (
    <motion.div
      className="group relative bg-transparent backdrop-blur-lg border border-zinc-800 rounded-xl p-6 w-full text-left shadow-md dark:shadow-zinc-500/10
                 transition-all duration-500 ease-in-out"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-t dark:from-amber-800/10 from-blue-950/20 from-0% to-50%
                      opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in pointer-events-none">
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
