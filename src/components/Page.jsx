import { motion } from "motion/react";

export default function Page({ children, direction }) {
  const variants = {
    enter: (dir) => ({ y: dir > 0 ? 2000 : -2000, opacity: 0, filter: "blur(25px)" }),
    center:      { y: 0, opacity: 1, filter: "blur(0px)" },
    exit:  (dir) => ({ y: dir > 0 ? -2000 : 2000, opacity: 0, filter: "blur(25px)" }),
  };

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white"
      variants={variants}
      initial="enter"
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
