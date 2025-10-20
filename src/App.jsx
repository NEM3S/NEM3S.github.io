import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    
    <div className="min-h-screen w-full bg-gray-950 text-white flex flex-col items-center justify-center">

      <Navbar />


      <motion.h1
        className="text-6xl font-bold mb-8 ml-2 mr-2 text-center"
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 15,
          duration: 1.2,
        }}
      >
        Mathis "NEM3S" Hamet
      </motion.h1>

      <motion.p
        className="text-2xl text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        .NET Developper
      </motion.p>

      <motion.button
        className="mt-10 px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
      >
        Explore
      </motion.button>
    </div>
  );
}
