import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header className="fixed h-20 top-0 w-full flex items-center justify-center bg-gray-900/80 backdrop-blur-md z-50"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}>
        <nav className="flex justify-center gap-8 py-4 text-xl font-medium">
          <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
        </nav>
      </motion.header>
  );
}
