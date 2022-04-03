import React, { useEffect, useState } from 'react'
import { SliderData } from 'components/slideshow/SliderData'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";
import 'styles/slideshow.css';


function ImageSlider({ slides }) {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    // goes to next slide ever 7 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 7000);
        return () => clearInterval(interval);
    });

    return (
        <section className="slider">

            {
                SliderData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (
                                <img src={slide.image} alt="travel image" className="image" />
                            )}
                        </div>
                    )
                })
            }
        </section >
    )
}

export default ImageSlider
