import { motion } from "motion/react";

export default function Header({ theme, onToggleTheme }) {
  return (
    <motion.header
      className="fixed h-20 top-0 w-full flex items-center justify-center z-50 bg-white/30 dark:bg-black/30 border-b border-zinc-200/60 dark:border-white/10 transition-colors duration-300 backdrop-blur-sm"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 1.3 }}
    >
      <div className="w-full max-w-5xl px-6 sm:px-10 flex items-center justify-between gap-6">
        <nav className="flex-1 flex justify-center gap-6 sm:gap-8 py-4 text-lg sm:text-xl font-medium text-zinc-700 dark:text-white">
          <a
            href="#about"
            className="hover:text-blue-500 dark:hover:text-orange-400 transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-blue-500 dark:hover:text-orange-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-blue-500 dark:hover:text-orange-400 transition-colors"
          >
            Contact
          </a>
        </nav>
        <label class="theme">
          <input type="checkbox" checked={theme !== "dark"} class="input" onClick={onToggleTheme}/>
          <svg class="icon icon-sun" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="5"></circle><line x1="12" x2="12" y1="1" y2="3"></line><line x1="12" x2="12" y1="21" y2="23"></line><line x1="4.22" x2="5.64" y1="4.22" y2="5.64"></line><line x1="18.36" x2="19.78" y1="18.36" y2="19.78"></line><line x1="1" x2="3" y1="12" y2="12"></line><line x1="21" x2="23" y1="12" y2="12"></line><line x1="4.22" x2="5.64" y1="19.78" y2="18.36"></line><line x1="18.36" x2="19.78" y1="5.64" y2="4.22"></line></svg>
          <svg class="icon icon-moon" viewBox="0 0 24 24"><path d="m12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8c-4.9.1-8.7 4.1-8.7 9 0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2s-.9-.2-1.2.1c-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z"></path></svg>
        </label>
      </div>
    </motion.header>
  );
}
