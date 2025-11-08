import { motion } from "motion/react";

export default function Background() {
  return (
    <div>
        <div class="grain" className="grain absolute inset-0 z-50 pointer-events-none"></div>
            {/* <div className="pointer-events-none absolute top-0 left-0 w-full h-48 bg-gradient-to-b dark:from-amber-800/10 from-blue-950/20 to-transparent z-0" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t dark:from-amber-800/10 from-blue-950/20 to-transparent z-0" /> */}
            {/* Glow dynamique ultra smooth */}
            
        <div
            className="pointer-events-none absolute w-[65vw] h-[65vw] blur-[80px] rounded-full opacity-35 dark:opacity-10
                    bg-gradient-to-br from-blue-400/60 to-blue-400/40 
                    dark:from-orange-500/70 dark:to-amber-500/30
                    animate-glow z-0"
            style={{
            top: "-45%",
            left: "-35%",
            animation: "glowMove2 10s ease-in-out infinite",
            }}
        ></div>
        <div
            className="pointer-events-none absolute w-[65vw] h-[65vw] blur-[80px] rounded-full opacity-25 dark:opacity-10
                    bg-gradient-to-br from-indigo-700/40 to-purple-500/70 
                    animate-glow2 z-0"
            style={{
            bottom: "-45%",
            right: "-35%",
            animation: "glowMove 10s ease-in-out infinite",
            }}
        ></div>
    </div>
  );
}
