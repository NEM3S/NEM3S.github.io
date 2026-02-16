import { motion } from "motion/react";

export default function ProjectCard({ project }) {
  const { title, description, period, tags, onMore } = project;

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="
        relative h-full w-full overflow-hidden rounded-2xl
        bg-white/5 dark:bg-white/5
        border border-white/10
        shadow-[0_30px_80px_rgba(0,0,0,0.55)]
      "
    >
      {/* Bande noire en haut */}
      <div className="absolute inset-x-0 top-0 h-28 bg-black/70" />

      {/* Contenu */}
      <div className="relative flex h-full flex-col p-8">
        <h3 className="text-6xl font-extrabold tracking-tight text-white">
          <span className="drop-shadow-[0_14px_20px_rgba(0,0,0,0.6)]">
            {title}
          </span>
        </h3>

        <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-white/80">
          {description}
        </p>

        <div className="mt-auto pt-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xl font-semibold text-white/90">{period}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="
                    rounded-md bg-white/15 px-3 py-1
                    text-sm font-medium text-white/85
                  "
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={onMore}
            className="
              group inline-flex items-center gap-3
              rounded-lg bg-white/15 px-5 py-2
              text-sm font-semibold text-white/90
              transition hover:bg-white/20
            "
          >
            Voir plus
            <span className="text-lg transition group-hover:translate-x-0.5">
              ↗
            </span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}
