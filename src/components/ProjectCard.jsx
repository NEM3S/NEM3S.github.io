import { motion } from "motion/react";
import { useMemo } from "react";
import ShinyText from "./ShinyText";

export default function ProjectCard({ project,index,
  hoveredIndex,
  setHoveredIndex }) {
    const { title, description, period, languages, onMore } = project;

    const randomSpeed = useMemo(() => Math.random() * 2 + 1, []);
    const randomDelay = useMemo(() => Math.random(), []);
    const randomAngle = useMemo(() => Math.random(), []);

    return (
        <motion.article
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
                filter:
                hoveredIndex === null || hoveredIndex === index
                    ? "blur(0px) saturate(1)"
                    : "blur(3px) saturate(0.1)"
            }}
            transition={{ duration: 0.2 }}
            className="
        flex flex-col h-full w-full overflow-hidden rounded-2xl
        bg-black/5 dark:bg-white/5
      "
        >
            <div className="flex p-6 w-full items-center justify-center sm:justify-start bg-black/10 dark:bg-white/10 [@media(max-height:500px)]:p-4">
                <h3 className="xl:text-7xl md:text-6xl text-[8vw] flex font-black text-white [@media(max-height:500px)]:text-5xl">
                    <ShinyText
                    text={title}
                    speed={randomSpeed}
                    delay={randomDelay}
                    color="var(--shine-color-text)"
                    shineColor="var(--shine-color)"
                    spread={155}
                    direction={randomAngle > 0.5 ? "left" : "right"}
                    yoyo={true}
                    pauseOnHover={false}
                    disabled={false}
                    className="inline-block overflow-visible leading-[1.1]"
                    />
                </h3>
            </div>
            <div>
                <p className="p-6 max-w-[52ch] text-lg mr-2 ml-2 md:mr-10 md:ml-10 md:text-xl leading-relaxed dark:text-white text-black line-clamp-4 [@media(max-height:500px)]:p-4 [@media(max-height:500px)]:m-0">
                    {description}
                </p>
            </div>
            <div className="flex h-full flex-col p-4 sm:p-8 xl:pt-6 [@media(max-height:500px)]:p-4">
                <div className="mt-auto flex flex-col items-start justify-between gap-4">
                    <div>
                        <p className="text-xl font-semibold dark:text-white/90 text-black/90 sm:block hidden [@media(max-height:500px)]:hidden">{period}</p>
                    </div>
                    <div className="flex w-full gap-2 justify-between">
                        <div className="flex flex-wrap gap-2">
                            {languages.map((l) => (
                                <span
                                    key={l}
                                    className="
                                    flex items-center justify-center
                                    rounded-md bg-black/15 dark:bg-white/15 w-11 h-11
                                    text-sm font-medium"
                                >
                                    <img src={l} className="p-2" />
                                </span>
                            ))}
                        </div>
                        <div className="flex items-end">
                            <button
                                type="button"
                                onClick={onMore}
                                className="
                                group inline-flex items-center gap-3
                                rounded-lg bg-black/15 dark:bg-white/15 px-4 py-2 h-11
                                text-sm font-semibold transition hover:bg-black/20 dark:hover:bg-white/20"
                            >
                                <span className="md:block hidden">Voir plus</span>
                                <span className="text-lg transition group-hover:translate-x-0.5">
                                    ↗
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}
