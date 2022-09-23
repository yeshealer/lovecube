import React from "react";
import { useNavigate } from 'react-router-dom'
import { Body, Content, LogoSection, LogoTitle, Navbar, CreateBtn } from "./style";
import { Flex } from "../Gadgets/GlobalComponents";
import { HeaderGroup } from "../Gadgets/Constants";

const Header = () => {
    const navigate = useNavigate()
    return (
        <Body>
            <Content>
                <LogoSection>
                    <img src="assets/image/logo.png" alt="logo" width={40} height={40} />
                    <LogoTitle>LoveCube</LogoTitle>
                </LogoSection>
                <Flex>
                    <Flex className="hidden lg:flex">
                        {HeaderGroup.map(header => {
                            return (
                                <Navbar key={header.name} onClick={() => navigate(header.link)}>{header.name}</Navbar>
                            )
                        })}
                    </Flex>
                    <CreateBtn className="hidden lg:block">Create Yours Now</CreateBtn>
                </Flex>
            </Content>
        </Body>
    )
}

export default Header