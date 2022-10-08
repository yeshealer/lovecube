import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import ReactPlayer from 'react-player'
import { TypeAnimation } from 'react-type-animation';
import { VideoSectionContent, Title, Skeleton } from '../style'
import { Stock, Flex, FlexDiv } from '../../Gadgets/GlobalComponents'
import IntroVideo from '../../../video/intro-video.mp4';

export default function VideoSection() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const onLoadedData = () => {
        setIsVideoLoaded(true);
    };

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
                    <Flex className="mt-10">
                        <Stock className="text-xl text-center mr-2 text-stone-700">Perfect for</Stock>
                        <TypeAnimation
                            sequence={[
                                'Wedding Day Gift', 1000, 'every occasion', 1000, 'Anniversaries', 1000,
                                'Birthdays', 1000, "Valentine's Day", 1000, "Mother's Day", 1000
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            className="text-xl text-center font-bold italic text-[#9a1f60]"
                        />
                    </Flex>
                </Stock>
                {/* {isVideoLoaded ? (
                    <ReactPlayer
                        playing
                        url={IntroVideo}
                        width='540px'
                        height='540px'
                        onReady={onLoadedData}
                        playsinline
                        muted
                        loop
                    />
                ) : (
                    <Skeleton className="w-full h-full flex justify-center">
                        <Stock className="w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[660px] md:h-[660px] lg:w-96 lg:h-96 xl:w-[540px] xl:h-[540px] bg-slate-300 rounded-[40px] shadow-2xl" />
                    </Skeleton>
                )} */}
                <div className='flex justify-center w-full'>
                    <img src='https://www.lovecube.com/static/lovecube/img/lifestyle/himInChair.jpg' alt='player background' className='w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[660px] md:h-[660px] lg:w-96 lg:h-96 xl:w-[540px] xl:h-[540px] rounded-[40px] shadow-2xl' />
                </div>
            </Stock>
        </VideoSectionContent>
    )
}
