import React from 'react'
import Carousel from "react-multi-carousel";
import { ImageCarouselContent } from '../style'
import { GuideSlider } from '../../Gadgets/Constants';

export default function BoxImageCarousel() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1280, min: 800 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 800, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <ImageCarouselContent>
            <Carousel
                swipeable
                draggable
                responsive={responsive}
                infinite
                itemClass="flex justify-center"
                containerClass="carousel-container w-full"
                removeArrowOnDeviceType={["tablet", "mobile", 'desktop']}
                className="partner-container"
                ssr
                shouldResetAutoplay={false}
            >
                {GuideSlider.map((slider, i) => {
                    return (
                        <img src={slider} alt={"guide-slider" + i} className='w-[360px] h-[360px] bg-slate-300 rounded-xl' draggable={false} />
                    )
                })}
            </Carousel>
        </ImageCarouselContent>
    )
}
