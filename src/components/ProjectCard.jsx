import { motion } from "motion/react";
import { useMemo } from "react";
import ShinyText from "./ShinyText";

export default function ProjectCard({ project }) {
    const { title, description, period, tags, onMore } = project;

    const randomSpeed = useMemo(() => Math.random() * 2 + 1, []);
    const randomDelay = useMemo(() => Math.random(), []);

    return (
        <motion.article
            transition={{ duration: 0.2 }}
            className="
        relative h-full w-full overflow-hidden rounded-2xl
        bg-white/5 dark:bg-white/5
      "
        >
            {/* Bande noire en haut */}
            <div className="absolute inset-x-0 top-0 h-28 sm:h-36 bg-black/70 drop-shadow-[0_14px_20px_rgba(0,0,0,0.6)]" />

            {/* Contenu */}
            <div className="relative flex h-full flex-col p-4 sm:p-8 xl:pt-6">
                <h3 className="xl:text-8xl md:text-7xl flex items-center justify-center sm:justify-start font-extrabold text-white">
                    <ShinyText
                    text={title}
                    speed={randomSpeed}
                    delay={randomDelay}
                    color="#b5b5b5"
                    shineColor="#ffffff"
                    spread={155}
                    direction="left"
                    yoyo={true}
                    pauseOnHover={false}
                    disabled={false}
                    className="inline-block overflow-visible leading-[1.05] pb-[0.12em]"
                    />
                </h3>

                <p className="mt-8 max-w-[52ch] text-xl md:text-2xl leading-relaxed text-white/80 line-clamp-4">
                    {description}
                </p>

                <div className="mt-auto pt-10 flex flex-col items-start justify-between gap-4">
                    <div className="">
                        <p className="text-xl font-semibold text-white/90 sm:block hidden">{period}</p>
                    </div>
                    <div className="flex w-full justify-between">
                        <div className="flex flex-wrap gap-2">
                            {tags.map((t) => (
                                <span
                                    key={t}
                                    className="
                                    flex items-center justify-center
                                    rounded-md bg-white/15 w-11 h-11
                                    text-sm font-medium text-white/85"
                                >
                                    <img src={t} className="p-2" />
                                </span>
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={onMore}
                            className="
                            group inline-flex items-center gap-3
                            rounded-lg bg-white/15 px-4 py-2 h-11
                            text-sm font-semibold text-white/90
                            transition hover:bg-white/20"
                        >
                            <span className="md:block hidden">Voir plus</span>
                            <span className="text-lg transition group-hover:translate-x-0.5">
                                ↗
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}
