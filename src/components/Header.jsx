import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { div } from "framer-motion/client";

export default function Header({ theme, onToggleTheme, onPageChanged }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 512) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (pageIndex) => {
    onPageChanged(pageIndex);
    setOpen(false);
  };

  return (
    <motion.header
      className="fixed h-20 top-5 max-w-[40em] w-[calc(100%-4rem)] rounded-xl flex items-center justify-center z-50 bg-white/60 dark:bg-zinc-800/50 border border-zinc-400/50 dark:border-white/10 transition-colors duration-300 backdrop-blur-[7px]"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 1.3 }}
    >
      <div className="w-full px-6 sm:px-10 flex items-center justify-center gap-6">
        {/* NAV DESKTOP */}
        <nav className="hidden sm:flex self-center items-center justify-center gap-5 lg:gap-12 py-4 text-lg sm:text-xl font-medium text-zinc-700 dark:text-white">
          <a
            href="#about"
            onClick={() => handleNavClick(1)}
            className="hover:text-blue-500 dark:hover:text-orange-400 transition-colors"
          >
            À Propos
          </a>
          <a
            href="#projects"
            onClick={() => handleNavClick(2)}
            className="hover:text-blue-500 dark:hover:text-orange-400 transition-colors"
          >
            Projets
          </a>
          <a
            href="#contact"
            onClick={() => handleNavClick(3)}
            className="hover:text-blue-500 dark:hover:text-orange-400 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* HAMBURGER MOBILE */}
        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden absolute left-6 sm:left-10 flex flex-col justify-center gap-1.5"
        >
          <span
            className={`h-0.5 w-6 bg-zinc-700 dark:bg-white transition-transform duration-200 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-zinc-700 dark:bg-white transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-zinc-700 dark:bg-white transition-transform duration-200 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* TOGGLE THEME (inchangé) */}
      <div className="absolute right-6">
        <input class="peer sr-only" id="theme" type="checkbox"
              defaultChecked={theme !== "dark"}
              className="input"
              onClick={onToggleTheme} />

        <label for="theme" class="theme-toggle" data-light="light" data-dark="dark">
          <svg id="light" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
          </svg>

          <svg id="dark" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
          </svg>
        </label>
      </div>

      {/* MENU MOBILE DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="sm:hidden absolute top-[6rem] z-60 left-0 right-0 mx-auto max-w-[40em] w-full rounded-xl bg-white/95 dark:bg-zinc-900/95 border border-zinc-200/60 dark:border-white/10 backdrop-blur-[10px] overflow-hidden transition-colors duration-300"
            initial={{ opacity: 0, y: -20, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 1 }}
            transition={{ duration: 0.5, ease: [.15,0,.01,1.02], }}
          >
            <nav className="flex flex-col py-2 text-lg font-medium text-zinc-700 dark:text-white">
              <a
                href="#about"
                onClick={() => handleNavClick(1)}
                className="px-6 py-3 hover:bg-zinc-200/40 dark:hover:bg-white/10 transition-colors"
              >
                À Propos
              </a>
              <a
                href="#projects"
                onClick={() => handleNavClick(2)}
                className="px-6 py-3 hover:bg-zinc-200/40 dark:hover:bg-white/10 transition-colors"
              >
                Projets
              </a>
              <a
                href="#contact"
                onClick={() => handleNavClick(3)}
                className="px-6 py-3 hover:bg-zinc-200/40 dark:hover:bg-white/10 transition-colors"
              >
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
