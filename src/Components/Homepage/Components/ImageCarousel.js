import React from 'react'
import { Icon } from '@iconify/react';
import Carousel from "react-multi-carousel";
import { ImageCarouselContent } from '../style'
import { Stock, Button } from '../../Gadgets/GlobalComponents'
import { CreateSlider } from '../../Gadgets/Constants';

export default function ImageCarousel() {
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
                infinite
                ssr
                responsive={responsive}
                containerClass="carousel-container w-full"
                removeArrowOnDeviceType={["tablet", "mobile", 'desktop']}
                className="partner-container"
                itemClass="flex justify-center"
                shouldResetAutoplay={false}
            >
                {CreateSlider.map((slider, i) => {
                    return (
                        <img src={slider} alt={"slider-image" + i} className='w-[360px] h-[360px] bg-slate-300 rounded-xl' draggable={false} />
                    )
                })}
            </Carousel>
            <Stock className="mt-5 p-5 px-10">
                <Stock className="text-stone-700 text-lg">
                    There is no better way to let someone know how you feel than with your words. Figuring out exactly what to say can be difficult, but not with the help of <b>LoveCube</b>, a 21st-century love letter.
                </Stock>
                <Stock className="text-stone-700 text-lg mt-5">
                    LoveCube is a personalized love letter in a keepsake box. It’s the perfect sentimental way to say <i><b>“I love you”</b></i> to your boyfriend, girlfriend, husband, wife, mom, dad, or anyone else who is truly special in your life. Express your deepest feelings for someone you care about.
                </Stock>
                <Stock className="text-stone-700 text-lg mt-5">
                    Click below to start your personalized love letter today.
                </Stock>
            </Stock>
            <Button className="flex items-center gap-3 bg-[#3e9ca3] text-white px-5 py-3 text-2xl text-semibold rounded-lg shadow-xl mt-8">
                Create Yours Now
                <Icon icon="akar-icons:arrow-right" />
            </Button>
        </ImageCarouselContent>
    )
}
