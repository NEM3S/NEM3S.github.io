import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import Carousel from "../components/Carousel";

export default function ProjectSection({ direction }) {
    const OPTIONS = { loop: true }
    const SLIDE_COUNT = 4
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


    const [emblaRef, emblaApi] = useEmblaCarousel();
    return (
        <div className="flex flex-col pt-48 sm:pt-56 pb-24 w-full overflow-y-auto overflow-x-hidden min-h-screen bg-transparent  text-zinc-900 dark:text-white transition-colors duration-300">
            <div className="pl-10 pr-10 mb-16 flex flex-col items-center justify-start">
                <motion.h1
                    className="text-5xl font-bold mb-10 self-center"
                    initial={{ opacity: 0, y: direction > 0 ? 50 : -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: direction > 0 ? -50 : 50 }}
                    transition={{ duration: 0.5 }}
                >
                    Mes projets
                </motion.h1>
                <motion.p
                    className="text-zinc-700 dark:text-gray-300 mb-4 text-left max-w-[750px]"
                    initial={{ opacity: 0, y: direction > 0 ? 50 : -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: direction > 0 ? -50 : 50 }}
                    transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                >
                    Quelques-unes de mes dernières créations.
                </motion.p>
            </div>
            <Carousel slides={SLIDES} options={OPTIONS} />
        </div>
    );
}
