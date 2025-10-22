import { motion } from "framer-motion";

export default function Page({ children, direction }) {
  const variants = {
    enter: (direction) => ({
      y: direction > 0 ? "100vh" : "-100vh",
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (direction) => ({
      y: direction > 0 ? "-100vh" : "100vh",
      opacity: 0,
    }),
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
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      }}
    >
      {children}
    </motion.div>
  );
}
