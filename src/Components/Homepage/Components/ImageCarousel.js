import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import Carousel from "react-multi-carousel";
import { useNavigate } from 'react-router-dom';
import PureModal from 'react-pure-modal';
import { ImageCarouselContent } from '../style'
import { Stock } from '../../Gadgets/GlobalComponents'
import { CreateSlider } from '../../Gadgets/Constants';
import { ButtonGroup } from '../../Gadgets/Constants';
import 'react-pure-modal/dist/react-pure-modal.min.css';

export default function ImageCarousel() {
    const navigate = useNavigate()
    const [animation, setAnimation] = useState("")
    const [createModalOpen, setCreateModalOpen] = useState(false);
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

    const onOpenCreateModal = () => setCreateModalOpen(true);
    const onCloseCreateModal = () => setCreateModalOpen(false);

    const CreateModalCloseIcon = (
        <Icon icon="ci:close-small" width="30" height="30" color="#808080" />
    )
    return (
        <ImageCarouselContent>
            <Carousel
                autoPlay
                autoPlaySpeed={2000}
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
                        <img src={slider} alt={"slider-image" + i} className='w-[360px] h-[360px] bg-slate-300 rounded-xl' draggable={false} key={i} />
                    )
                })}
            </Carousel>
            <Stock className="mt-5 p-5 px-10">
                <Stock className="text-stone-700 text-base">
                    There is no better way to let someone know how you feel than with your words. Figuring out exactly what to say can be difficult, but not with the help of <b>LoveCube</b>, a 21st-century love letter.
                </Stock>
                <Stock className="text-stone-700 text-base mt-5">
                    LoveCube is a personalized love letter in a keepsake box. It’s the perfect sentimental way to say <i><b>“I love you”</b></i> to your boyfriend, girlfriend, husband, wife, mom, dad, or anyone else who is truly special in your life. Express your deepest feelings for someone you care about.
                </Stock>
                <Stock className="text-stone-700 text-base mt-5">
                    Click below to start your personalized love letter today.
                </Stock>
            </Stock>
            <button className="relative inline-block text-white px-5 py-3 font-medium text-xl flex items-center gap-3 group" onMouseLeave={() => setAnimation("")} onMouseEnter={() => setAnimation("animate-ping")} onClick={() => onOpenCreateModal()}>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-md transform translate-x-1 translate-y-1 bg-gray-600 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"></span>
                <span className="absolute inset-0 w-full h-full bg-[#3e9ca3] rounded-md group-hover:bg-gray"></span>
                <span className="relative text-white">Create Yours Now</span>
                <Icon icon="akar-icons:arrow-right" className={`relative ${animation}`} />
            </button>
            <div className="createModal">
                <PureModal
                    isOpen={createModalOpen}
                    closeButton={CreateModalCloseIcon}
                    closeButtonPosition="bottom"
                    onClose={() => {
                        onCloseCreateModal();
                        return true;
                    }}
                >
                    <div className='flex flex-col w-full py-3 px-2 sm:px-7'>
                        <div className="flex flex-col items-center">
                            <img src="assets/image/logo.png" alt="logo" width={50} height={50} draggable={false} />
                            <div className="text-3xl mt-2 text-[#212529]">Who is this for?</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-5">
                            {ButtonGroup.map((button) => {
                                return (
                                    <div className="w-full flex justify-center" key={button}>
                                        <button className="text-white text-lg bg-[#3e9ca3] rounded-lg w-[160px] sm:w-[200px] p-2" key={button} onClick={() => {
                                            navigate(`/create-deck/${button.toLowerCase()}/to-who`)
                                            onCloseCreateModal()
                                        }}>{button}</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </PureModal>
            </div>
        </ImageCarouselContent>
    )
}
