import { motion } from "framer-motion";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";

export default function App() {
  
  return (
    
    <div className="relative min-h-screen w-full bg-gray-950 text-white flex flex-col items-center justify-center">

      <Header />

      <HomeSection />
      <HomeSection />

      <motion.button
        className="w-32 h-12 flex items-center justify-center bottom-8 fixed sm:bottom-16
        transition-all duration-300 ease-in-out"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.85 }}
      >
        Explore
      </motion.button>
    </div>
  );
}
