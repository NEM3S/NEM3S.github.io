import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import Carousel from "../components/Carousel";

export default function ProjectSection() {
    const OPTIONS = { loop: true }
    const SLIDE_COUNT = 4
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


    const [emblaRef, emblaApi] = useEmblaCarousel();
    return (
        <div  className=" pt-60 min-h-screen w-full flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold mb-6">Mes projets</h1>
            <p className="text-zinc-600 dark:text-gray-400 max-w-xl text-center">
                Quelques-unes de mes creations les plus recentes.
            </p>
            <Carousel slides={SLIDES} options={OPTIONS} />
        </div>
    );
}
