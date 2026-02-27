import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import WheelGesturesPlugin from 'embla-carousel-wheel-gestures'
import ProjectCard from './ProjectCard'

const Carousel = (props) => {
    const { slides, options, hoveredIndex, setHoveredIndex } = props

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { ...options, dragFree: true, containScroll: 'trimSnaps' },
        [WheelGesturesPlugin(),AutoScroll({ speed: 1, playOnInit: true, stopOnInteraction: false,stopOnMouseEnter: true, startDelay: 10 })]
    )
    
    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((project, index) => (
                        <div className="m-2 embla__slide" key={index}>
                            <div className="embla__content">
                                <div className="embla__slide__content">
                                    <ProjectCard
                                        project={project}
                                        index={index}
                                        hoveredIndex={hoveredIndex}
                                        setHoveredIndex={setHoveredIndex}
                                    />
                                </div>  
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel
