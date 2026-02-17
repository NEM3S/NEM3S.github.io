import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import WheelGesturesPlugin from 'embla-carousel-wheel-gestures'
import ProjectCard from './ProjectCard'

const Carousel = (props) => {
    const { slides, options } = props

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { ...options, dragFree: true, containScroll: 'trimSnaps' },
        [WheelGesturesPlugin(),AutoScroll({ speed: 2, playOnInit: true, stopOnInteraction: false,stopOnMouseEnter: true, startDelay: 10 })]
    )
    
    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((p, index) => (
                        <div className="m-2 embla__slide" key={index}>
                            <div className="embla__content">
                                <div className="embla__slide__content">
                                    <ProjectCard project={p} />
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
