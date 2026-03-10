import { motion } from "motion/react";
import VariableProximity from "../components/VariableProximity";
import { useRef, useLayoutEffect, useState } from "react";
import IntroReveal from "../components/IntroReveal";

export default function HomeSection() {
  const measureRef = useRef(null);   // <-- wrapper stable
  const containerRef = useRef(null); // <-- motion div (anim)
  const [radius, setRadius] = useState(200);

  useLayoutEffect(() => {
    if (!measureRef.current) return;

    const updateRadius = () => {
      const rect = measureRef.current.getBoundingClientRect();
      setRadius(Math.max(rect.width, rect.height) * 0.6);
    };

    updateRadius();

    const observer = new ResizeObserver(updateRadius);
    observer.observe(measureRef.current);

    return () => observer.disconnect();
  }, []);

  const dotRef = useRef(null);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-6">
      <div ref={measureRef} className="relative">
        <div ref={containerRef} className="relative inline-block">
          <div className="text-7xl sm:text-8xl lg:text-[9rem] xl:text-[11rem] leading-none">
            <VariableProximity
              label="Mathis H"
              className="font-[550] cursor-default text-center"
              fromFontVariationSettings="'wght' 350, 'opsz' 9"
              toFontVariationSettings="'wght' 900, 'opsz' 18"
              containerRef={containerRef}
              radius={radius}
              falloff="linear"
            />

            <div
              ref={dotRef}
              className="
                absolute
                right-[-0.20em]
                bottom-[0.16em]
                w-[0.18em] h-[0.18em]
                rounded-full
                ml-2
                bg-[oklch(62.3%_0.214_259.815)]
                dark:bg-[oklch(76.9%_0.188_70.08)]
              "
            />
          </div>

          <IntroReveal targetRef={dotRef} />
        </div>
      </div>

      <motion.p
        className="text-md sm:text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Développeur full stack
      </motion.p>
    </div>
  );
}
