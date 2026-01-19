import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import WheelGesturesPlugin from 'embla-carousel-wheel-gestures'

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
                    {slides.map((index) => (
                        <div className="m-10 embla__slide" key={index}>
                            <div className="embla__content">
                                <div className="embla__slide__number">
                                    <span>{index + 1}</span>
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
