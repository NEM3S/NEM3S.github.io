import { motion } from "motion/react";
import { useEffect, useRef } from "react";

// Flag global (persiste entre mounts tant que la page n'est pas refresh)
let hasAppRenderedOnce = false;

export default function Page({ children, direction }) {
  const didMarkRef = useRef(false);

  const variants = {
    enter: (dir) => ({ y: dir > 0 ? 2000 : -2000, opacity: 0, filter: "blur(25px)" }),
    center: { y: 0, opacity: 1, filter: "blur(0px)" },
    exit: (dir) => ({ y: dir > 0 ? -2000 : 2000, opacity: 0, filter: "blur(25px)" }),
  };

  const initialProp = hasAppRenderedOnce ? "enter" : false;

  useEffect(() => {
    if (!didMarkRef.current) {
      hasAppRenderedOnce = true;
      didMarkRef.current = true;
    }
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center min-h-screen bg-transparent text-zinc-900 dark:text-white transition-colors duration-300"
      variants={variants}
      initial={initialProp}
      animate="center"
      exit="exit"
      custom={direction}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 15,
        visualDuration: 1.5,
        duration: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}