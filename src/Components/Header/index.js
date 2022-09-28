import React, { useState } from "react";
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom'
import { Modal } from 'react-responsive-modal';
import { Body, Content, LogoSection, LogoTitle, Navbar, CreateBtn } from "./style";
import { Flex } from "../Gadgets/GlobalComponents";
import { HeaderGroup } from "../Gadgets/Constants";

const Header = () => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    const closeIcon = (
        <Icon icon="eva:close-circle-outline" width="30" height="30" />
    )
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
                <div className='bg-transparent hover:bg-[#FFFFFF30] rounded-md transition-all duration-500 block p-1 cursor-pointer lg:hidden' onClick={() => onOpenModal()}>
                    <Icon icon="entypo:menu" className='w-[25px] md:w-[30px] h-[25px] md:h-[30px] text-black' />
                </div>
            </Content>
            <Modal
                open={open}
                onClose={onCloseModal}
                top
                classNames={{
                    modal: 'w-auto rounded-xl'
                }}
                closeIcon={closeIcon}
            >
                <div className='flex flex-col items-start w-full'>
                    {HeaderGroup.map(header => {
                        return (
                            <Navbar key={header.name} onClick={() => navigate(header.link)}>{header.name}</Navbar>
                        )
                    })}
                </div>
            </Modal>
        </Body>
    )
}

export default Header