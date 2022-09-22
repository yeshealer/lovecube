import React, { useState } from "react";
import { Icon } from '@iconify/react';
import ReactPlayer from 'react-player'
import { TypeAnimation } from 'react-type-animation';
import { Helmet } from "react-helmet";
import { Player } from '@lottiefiles/react-lottie-player';
import Carousel from "react-multi-carousel";
import {
    Body,
    Promotion,
    VideoSection,
    Title,
    CreateLoveCube,
    CreateButton,
    ImageCarousel,
    UsersReview,
    ReviewCard,
    ReviewGroup,
    Skeleton,
    ReviewerName,
    ReviewerPosition,
    ReviewText,
    LoveCubeGuide,
    Guide,
    PromotionDetail,
    Warning
} from "./style";
import { Stock, Flex, FlexDiv, Button } from "../Gadgets/GlobalComponents";
import { ButtonGroup, Reviews, CreateGuide, PaymentImages } from '../Gadgets/Constants.js';
import IntroVideo from '../../video/intro-video.mp4';
import "react-multi-carousel/lib/styles.css";

const Homepage = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const onLoadedData = () => {
        setIsVideoLoaded(true);
    };

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <Body>
            <Helmet>
                <title>Personalized Love Letters | Love Note Gifts | LoveCube</title>
            </Helmet>
            <Promotion>
                <Stock>Summer Sale!, $59.99 $47.99 + Free Shipping!</Stock>
                <Stock>Turn up the heat in your relationship</Stock>
            </Promotion>
            <VideoSection>
                <Stock>
                    <FlexDiv>
                        <Title>Create a</Title>
                        <Title>Personalized</Title>
                        <Title>Love Letter</Title>
                    </FlexDiv>
                    <Flex className="mt-10">
                        <FlexDiv className="border-r border-[#3e9ca3] p-3 px-5 w-64">
                            <Icon icon="emojione-monotone:wrapped-gift" color="#9a1f60" width="35" height="35" />
                            <Stock className="text-lg mt-3">More meaningful</Stock>
                            <Stock className="text-lg">than flowers</Stock>
                        </FlexDiv>
                        <FlexDiv className="border-l border-[#3e9ca3] p-3 px-5 w-64">
                            <Icon icon="bx:happy-heart-eyes" color="#9a1f60" width="35" height="35" />
                            <Stock className="text-lg mt-3">More memorable than</Stock>
                            <Stock className="text-lg">a night on the town</Stock>
                        </FlexDiv>
                    </Flex>
                    <Flex className="mt-10">
                        <Stock className="text-xl text-center mr-2">Perfect for</Stock>
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
                {isVideoLoaded ? (
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
                    <Skeleton>
                        <Stock className="w-[540px] h-[540px] bg-slate-300 rounded-[40px] shadow-2xl" />
                    </Skeleton>
                )}
            </VideoSection>
            <CreateLoveCube>
                <Stock className="text-2xl font-semibold">Create a LoveCube for my</Stock>
                <Stock className="grid grid-cols-2 max-w-[700px] gap-4 mt-8">
                    {ButtonGroup.map((button) => {
                        return (
                            <CreateButton>{button}</CreateButton>
                        )
                    })}
                </Stock>
            </CreateLoveCube>
            <ImageCarousel>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    infinite={true}
                    containerClass="carousel-container w-full"
                    removeArrowOnDeviceType={["tablet", "mobile", 'desktop']}
                    className="partner-container"
                    ssr={true}
                    shouldResetAutoplay={false}
                >
                    {ButtonGroup.map((slider, i) => {
                        return (
                            <Skeleton key={slider + i}>
                                <Stock className="w-[360px] h-[360px] bg-slate-300 rounded-xl" />
                            </Skeleton>
                        )
                    })}
                </Carousel>
                <Stock className="mt-5">
                    <Stock className="text-lg">
                        There is no better way to let someone know how you feel than with your words. Figuring out exactly what to say can be difficult, but not with the help of <b>LoveCube</b>, a 21st-century love letter.
                    </Stock>
                    <Stock className="text-lg mt-5">
                        LoveCube is a personalized love letter in a keepsake box. It’s the perfect sentimental way to say <i><b>“I love you”</b></i> to your boyfriend, girlfriend, husband, wife, mom, dad, or anyone else who is truly special in your life. Express your deepest feelings for someone you care about.
                    </Stock>
                    <Stock className="text-lg mt-5">
                        Click below to start your personalized love letter today.
                    </Stock>
                </Stock>
                <Button className="flex items-center gap-3 bg-[#3e9ca3] text-white px-5 py-3 text-2xl text-semibold rounded-lg shadow-xl mt-8">
                    Create Yours Now
                    <Icon icon="akar-icons:arrow-right" />
                </Button>
            </ImageCarousel>
            <UsersReview>
                <ReviewGroup>
                    {Reviews.map((Review, index) => {
                        return (
                            <ReviewCard key={index} className={(index > 2 && index % 3 === 0) ? 'col-start-2 col-end-3' : ''}>
                                <ReviewText>
                                    <i>{Review.review}</i>
                                </ReviewText>
                                <Stock className="flex flex-col items-start ml-10 -mt-10">
                                    <Skeleton>
                                        <Stock className="w-20 h-20 bg-slate-300 rounded-full" />
                                    </Skeleton>
                                    <ReviewerName className="mt-4">{Review.name}</ReviewerName>
                                    <ReviewerPosition>{Review.position}</ReviewerPosition>
                                </Stock>
                            </ReviewCard>
                        )
                    })}
                </ReviewGroup>
            </UsersReview>
            <ImageCarousel>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    infinite={true}
                    containerClass="carousel-container w-full"
                    removeArrowOnDeviceType={["tablet", "mobile", 'desktop']}
                    className="partner-container"
                    ssr={true}
                    shouldResetAutoplay={false}
                >
                    {ButtonGroup.map((slider, i) => {
                        return (
                            <Skeleton key={slider + i}>
                                <Stock className="w-[360px] h-[360px] bg-slate-300 rounded-xl" />
                            </Skeleton>
                        )
                    })}
                </Carousel>
            </ImageCarousel>
            <LoveCubeGuide>
                <Stock className="text-3xl font-semibold">Creating a LoveCube Is Easy</Stock>
                <Stock className="grid grid-cols-3 max-w-7xl gap-x-10 gap-y-3 mt-10">
                    {CreateGuide.map((guide) => {
                        return (
                            <Guide>
                                <Player
                                    autoplay
                                    loop
                                    src={guide.animation}
                                    style={{ height: '120px', width: '120px' }}
                                />
                                <Stock className="text-3xl">{guide.title}</Stock>
                                <Stock className="text-center mt-5">{guide.description}</Stock>
                            </Guide>
                        )
                    })}
                </Stock>
            </LoveCubeGuide>
            <PromotionDetail>
                <Flex className="gap-2">
                    <Icon icon="emojione:growing-heart" width="70" height="70" />
                    <Stock className="text-3xl font-semibold">Summer Sale!!!</Stock>
                    <Icon icon="emojione:growing-heart" width="70" height="70" />
                </Flex>
                <Stock className="flex items-end justify-center">
                    <Stock className="text-xl line-through">$59.99</Stock>
                    <Stock className="text-2xl font-semibold">$47.99</Stock>
                </Stock>
                <Stock className="text-center text-lg mt-3">plus free shipping in the US</Stock>
                <Stock className="text-center text-lg"><i>No credit card required until you've given final approval.</i></Stock>
                <Flex className="gap-4 mt-5">
                    {PaymentImages.map((paymentImage) => {
                        return (
                            <img src={`assets/image/${paymentImage}.png`} alt={paymentImage} className="w-auto h-[40px]" />
                        )
                    })}
                </Flex>
                <Button className="flex items-center gap-3 bg-[#9A1F60] text-white px-5 py-3 text-2xl text-semibold rounded-lg shadow-xl mt-10">
                    Create Yours Now
                    <Icon icon="akar-icons:arrow-right" />
                </Button>
            </PromotionDetail>
            <Warning>
                <img src={`assets/image/bar_teal.jpg`} alt='warning-bar' className="w-full h-7" />
                <Flex className="flex-col p-3 bg-[#3e9ca3] w-full">
                    <Flex className="gap-3">
                        <Icon icon="openmoji:warning" width="50" height="50" />
                        <Stock className="text-2xl font-black">Warning</Stock>
                        <Icon icon="openmoji:warning" width="50" height="50" />
                    </Flex>
                    <Stock className="text-center text-lg font-bold max-w-7xl p-3">Persons receiving a LoveCube have been known to experience the following side effects: Profound feelings of affection, sensations of being admired, skipped heartbeats, lump(s) in throat, butterflies in stomach and an irresistible urge to snuggle warm puppies and cute kittens. Please gift responsibly.</Stock>
                </Flex>
                <img src={`assets/image/bar_teal.jpg`} alt='warning-bar' className="w-full h-7" />
            </Warning>
        </Body>
    )
}

export default Homepage