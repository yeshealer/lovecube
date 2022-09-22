import React from "react";
import { Body, Content, LogoSection, LogoTitle, Navbar, CreateBtn } from "./style";
import { Flex } from "../Gadgets/GlobalComponents";
import { HeaderGroup } from "../Gadgets/Constants";

const Header = () => {
    return (
        <Body>
            <Content>
                <LogoSection>
                    <img src="assets/image/logo.png" alt="logo" width={40} height={40} />
                    <LogoTitle>LoveCube</LogoTitle>
                </LogoSection>
                <Flex>
                    <Flex>
                        {HeaderGroup.map(header => {
                            return (
                                <Navbar key={header}>{header}</Navbar>
                            )
                        })}
                    </Flex>
                    <CreateBtn>Create Yours Now</CreateBtn>
                </Flex>
            </Content>
        </Body>
    )
}

export default Header