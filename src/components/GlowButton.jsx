import { motion } from "motion/react";
import { useState } from "react";

export default function GlowButton({ children, onClick, className = "" }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <motion.button
      onClick={onClick}
      className={`btn group overflow-hidden active:grayscale ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseMove={handleMove}
    >
      {/* Glow animé */}
      <span
        className="pointer-events-none absolute w-[200%] h-[200%] 
                   rounded-full bg-gradient-to-r from-blue-200/40 to-blue-400/10 dark:from-orange-400/40 dark:to-orange-200/10 blur-2xl opacity-0 
                   group-hover:opacity-50 transition-opacity duration-300 ease-out"
        style={{ top: pos.y - 100, left: pos.x - 100 }}
      ></span>

      {/* Contenu */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
