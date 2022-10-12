import React, { useRef, useEffect } from 'react'
import { Icon } from '@iconify/react';
import { TypeAnimation } from 'react-type-animation';
import { VideoSectionContent, Title } from '../style'
import { Stock, Flex, FlexDiv } from '../../Gadgets/GlobalComponents'

export default function VideoSection() {
    const vidRef = useRef();
    const markRef = useRef();

    useEffect(() => { vidRef.current.play(); }, []);

    useEffect(() => {
        const path = document.getElementById('star-path');
        const pathLength = path.getTotalLength();
        path.style.strokeDasharray = pathLength + ' ' + pathLength;
        path.style.strokeDashoffset = pathLength;
        path.getBoundingClientRect();
        window.addEventListener("scroll", function (e) {
            const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 8;
            const drawLength = pathLength * scrollPercentage;
            path.style.strokeDashoffset = pathLength - drawLength;
            if (scrollPercentage >= 0.99) {
                path.style.strokeDasharray = "none";
            } else {
                path.style.strokeDasharray = pathLength + ' ' + pathLength;
            }
        });
    })
    return (
        <VideoSectionContent>
            <Stock className="w-full grid grid-cols-1 lg:grid-cols-2 max-w-5xl xl:max-w-7xl items-center justify-center gap-10 relative">
                <Stock className="row-end-3 lg:row-end-auto">
                    <FlexDiv>
                        <Title>Create a</Title>
                        <Title>Personalized</Title>
                        <Title>Love Letter</Title>
                    </FlexDiv>
                    <Flex className="mt-10 text-stone-700">
                        <FlexDiv className="border-r border-[#3e9ca3] p-3 px-5 w-64">
                            <Icon icon="emojione-monotone:wrapped-gift" color="#9a1f60" width="35" height="35" />
                            <Stock className="text-sm sm:text-lg mt-3">More meaningful</Stock>
                            <Stock className="text-sm sm:text-lg">than flowers</Stock>
                        </FlexDiv>
                        <FlexDiv className="border-l border-[#3e9ca3] p-3 px-1 sm:px-5 w-64">
                            <Icon icon="bx:happy-heart-eyes" color="#9a1f60" width="35" height="35" />
                            <Stock className="text-sm sm:text-lg text-center mt-3">More memorable than</Stock>
                            <Stock className="text-sm sm:text-lg text-center">a night on the town</Stock>
                        </FlexDiv>
                    </Flex>
                    <Flex className="mt-10 font-['Open sans bold']">
                        <Stock className="text-xl text-center mr-2 text-stone-700">Perfect for</Stock>
                        <TypeAnimation
                            sequence={[
                                'Wedding Day Gift', 1000, 'every occasion', 1000, 'Anniversaries', 1000,
                                'Birthdays', 1000, "Valentine's Day", 1000, "Mother's Day", 1000
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            className='text-xl text-center italic text-[#9a1f60] font-black'
                        />
                    </Flex>
                </Stock>
                <div className='w-full h-full flex justify-center rounded-2xl'>
                    <video playsInline autoPlay muted loop className='rounded-2xl w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] xl:w-[540px] xl:h-[540px]' poster='assets/image/preload.png' ref={vidRef}>
                        <source src="https://lovecube-com.s3.us-east-2.amazonaws.com/static/lovecube/videos/lc_stop_motion.webm" type="video/webm" />
                        <source src="https://lovecube-com.s3.us-east-2.amazonaws.com/static/lovecube/videos/lc_stop_motion.mp4" type="video/mp4" />
                    </video>
                </div>
                <svg id="heart-arrow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="200" height="200" className="absolute -bottom-20 lg:-bottom-24 left-40 lg:left-48 xl:left-80 hidden md:block">
                    <path d="M54 29C65.12 79.2 29.12 112.32 46.4 110.88C78.08 109.44 43.52 133.92 74.7032 133.9805C100.2301 129.4805 120.4995 132.4858 129.8869 111.0902C134.0182 97.2029 124.2608 79.1827 106.2421 88.9402C109.2474 68.6707 88.9779 65.664 77.3398 74.2968C60.4458 90.4349 70.2032 108.455 74.7032 133.9805C88.2061 210.5597 98 122.4 158 192L142.4 187.2 158 192 154.4 177.6" stroke="#9a1f60" strokeWidth={5} id="star-path" fill='none' ref={markRef} />
                </svg>
            </Stock>
        </VideoSectionContent>
    )
}
