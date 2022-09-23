import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import {
    Body,
    Content,
    LogoSection,
    LogoTitle,
    FooterLink
} from "./style";
import { Stock, Flex } from "../Gadgets/GlobalComponents";
import { FooterLinks } from "../Gadgets/Constants";

const Footer = () => {
    return (
        <Body>
            <Content>
                <LogoSection>
                    <img src="assets/image/logo.png" alt="logo" width={70} height={70} />
                    <LogoTitle>LoveCube</LogoTitle>
                </LogoSection>
                <Stock className="text-lg sm:text-xl mt-3"><i>As unique and special as your relationship.</i></Stock>
                <Flex className="gap-3">
                    <Player
                        autoplay
                        loop
                        src="https://assets10.lottiefiles.com/packages/lf20_48fu8zca.json"
                        style={{ height: '40px', width: '40px' }}
                    />
                    <Player
                        autoplay
                        loop
                        src="https://assets8.lottiefiles.com/packages/lf20_2ks3pjua.json"
                        style={{ height: '55px', width: '55px' }}
                    />
                </Flex>
                <FooterLink>
                    <Stock>©Copyright <b>Joe Joe Industries, LLC.</b> All Rights Reserved</Stock>
                    <Stock className="block mt-5 sm:mt-0 sm:flex gap-4">
                        {FooterLinks.map((footerLink, index) => {
                            return (
                                <Stock className="text-green-700" key={'footerLink' + index}>{footerLink}</Stock>
                            )
                        })}
                    </Stock>
                </FooterLink>
            </Content>
        </Body>
    )
}

export default Footer