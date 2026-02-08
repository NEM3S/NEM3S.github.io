import { motion } from "motion/react";
import VariableProximity from "../components/VariableProximity";
import { useRef, useLayoutEffect, useState } from "react";

export default function HomeSection() {
  const containerRef = useRef(null);
  const [radius, setRadius] = useState(300);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const updateRadius = () => {
      const rect = containerRef.current.getBoundingClientRect();
      setRadius(Math.max(rect.width, rect.height) * 0.6);
    };

    updateRadius(); // initial

    const observer = new ResizeObserver(updateRadius);
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-4">
      <motion.div
        ref={containerRef}
        className="relative"
        initial={{ opacity: 0, scale: 10, y: -1000, filter: "blur(120px)" }}
        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 1.5,
          ease: [0.16, 0.48, 0.01, 0.98],
          delay: 0.2
        }}
      >
        <VariableProximity
          label="Mathis H."
          className="variable-proximity-demo text-7xl sm:text-8xl lg:text-[9rem] xl:text-[11rem] font-[550] hover:font-[900] transition-[font-weight] duration-[1s] ease-[cubic-bezier(.23,0,.32,1)] cursor-default mb-8 text-center"
          fromFontVariationSettings="'wght' 200, 'opsz' 9"
          toFontVariationSettings="'wght' 900, 'opsz' 18"
          containerRef={containerRef}
          radius={radius}
          falloff="linear"
        />
      </motion.div>

      <motion.p
        className="text-md sm:text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Développeur .NET
      </motion.p>
    </div>
  );
}
