import { delay } from "motion";
import { motion } from "motion/react";

export default function InfoCard({ title, children }) {
  const container = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05
      },
    },
  };
  return (
    <motion.div initial={{ opacity: 0, y: 50 }}
      className="w-full mb-4"
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        opacity: { duration: 1, ease: "easeInOut", delay: 1 },
        y: { duration: 1, ease: "easeInOut", delay: 1 }
      }}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="group relative bg-transparent backdrop-blur-lg z-10 border border-zinc-400 dark:border-zinc-600 rounded-xl p-6 text-left shadow-md dark:shadow-zinc-500/10 overflow-hidden"
        whileHover={{
          y: -5,
          transition: {
            y: { duration: 0.3, ease: [0.80, -1.2, .68, 1] }
          }
        }}
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t dark:from-amber-800/10 from-blue-950/10 from-0% to-50%
                      opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in pointer-events-none">
        </div>

        <motion.div className="relative z-10">
          <h3 className="text-xl text-center sm:text-left font-bold text-zinc-900 dark:text-white mb-3">
            {title}
          </h3>

          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
