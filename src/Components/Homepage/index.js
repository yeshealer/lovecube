import React from "react";
import { Helmet } from "react-helmet";
import {
    Promotion,
    VideoSection,
    CreateLoveCube,
    ImageCarousel,
    UsersReview,
    BoxImageCarousel,
    LoveCubeGuide,
    Payment,
    Warning,
    NewMainSection,
    NewCreateGroup
} from './Components'
import { Body } from "./style";
import "react-multi-carousel/lib/styles.css";

const Homepage = () => {
    return (
        <>
            <Helmet>
                <title>Personalized Love Letters | Love Note Gifts | LoveCube</title>
            </Helmet>
            <Body>
                <Promotion />
                <NewMainSection />
                <NewCreateGroup />
                {/* <VideoSection /> */}
                {/* <CreateLoveCube /> */}
                <ImageCarousel />
                <UsersReview />
                <BoxImageCarousel />
                <LoveCubeGuide />
                <Payment />
                <Warning />
            </Body>
        </>
    )
}

export default Homepage