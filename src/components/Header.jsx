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
      className="fixed h-20 top-5 max-w-[40em] w-[calc(100%-4rem)] rounded-xl flex items-center justify-center z-50 bg-white/60 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-white/10 transition-colors duration-300 backdrop-blur-[7px]"
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
      <div className="absolute right-8">
        <label className="theme">
          <input
            type="checkbox"
            defaultChecked={theme !== "dark"}
            className="input"
            onClick={onToggleTheme}
          />
          <svg
            className="icon icon-sun"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" x2="12" y1="1" y2="3"></line>
            <line x1="12" x2="12" y1="21" y2="23"></line>
            <line x1="4.22" x2="5.64" y1="4.22" y2="5.64"></line>
            <line x1="18.36" x2="19.78" y1="18.36" y2="19.78"></line>
            <line x1="1" x2="3" y1="12" y2="12"></line>
            <line x1="21" x2="23" y1="12" y2="12"></line>
            <line x1="4.22" x2="5.64" y1="19.78" y2="18.36"></line>
            <line x1="18.36" x2="19.78" y1="5.64" y2="4.22"></line>
          </svg>
          <svg className="icon icon-moon" viewBox="0 0 24 24">
            <path d="m12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8c-4.9.1-8.7 4.1-8.7 9 0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2s-.9-.2-1.2.1c-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z"></path>
          </svg>
        </label>
      </div>

      {/* MENU MOBILE DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="sm:hidden absolute top-[6rem] z-60 left-0 right-0 mx-auto max-w-[40em] w-full rounded-xl bg-white/70 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-white/10 backdrop-blur-[10px] overflow-hidden transition-colors duration-300"
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
