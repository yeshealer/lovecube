import React, { useState, useRef, useEffect } from 'react'
import { Icon } from '@iconify/react';
import { TypeAnimation } from 'react-type-animation';
import { VideoSectionContent, Title } from '../style'
import { Stock, Flex, FlexDiv } from '../../Gadgets/GlobalComponents'

export default function VideoSection() {
    const vidRef = useRef();

    useEffect(() => { vidRef.current.play(); }, []);
    return (
        <VideoSectionContent>
            <Stock className="w-full grid grid-cols-1 lg:grid-cols-2 max-w-5xl xl:max-w-7xl items-center justify-center gap-10">
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
                    <video preload playsinline autoplay muted loop className='rounded-2xl w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] xl:w-[540px] xl:h-[540px]' poster='assets/image/preload.png' ref={vidRef}>
                        <source src="https://lovecube-com.s3.us-east-2.amazonaws.com/static/lovecube/videos/lc_stop_motion.webm" type="video/webm" />
                        <source src="https://lovecube-com.s3.us-east-2.amazonaws.com/static/lovecube/videos/lc_stop_motion.mp4" type="video/mp4" />
                    </video>
                </div>
            </Stock>
        </VideoSectionContent>
    )
}
