import React, { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import { useLocation, useNavigate } from 'react-router-dom'
import { Modal } from 'react-responsive-modal';
import { Body, Content, LogoSection, LogoTitle, Navbar, CreateBtn } from "./style";
import { Flex } from "../Gadgets/GlobalComponents";
import { HeaderGroup, ButtonGroup } from "../Gadgets/Constants";

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [isShow, setIsShow] = useState(true)
    const [mobileModalOpen, setMobileModalOpen] = useState(false);
    const [createModalOpen, setCreateModalOpen] = useState(false);

    useEffect(() => {
        if (location.pathname.includes('create-deck')) {
            setIsShow(false)
        } else {
            setIsShow(true)
        }
    }, [location, location.pathname])


    const onOpenMobileModal = () => setMobileModalOpen(true);
    const onCloseMobileModal = () => setMobileModalOpen(false);
    const onOpenCreateModal = () => setCreateModalOpen(true);
    const onCloseCreateModal = () => setCreateModalOpen(false);

    const MobileModalCloseIcon = (
        <Icon icon="eva:close-circle-outline" width="30" height="30" />
    )
    const CreateModalCloseIcon = (
        <Icon icon="ci:close-small" width="30" height="30" color="#808080" />
    )
    return (
        <Body>
            <Content>
                <LogoSection onClick={() => navigate('/')}>
                    <img src="assets/image/logo.png" alt="logo" width={40} height={40} draggable={false} />
                    <LogoTitle>LoveCube</LogoTitle>
                </LogoSection>
                {isShow && <Flex>
                    <Flex className="hidden lg:flex">
                        {HeaderGroup.map(header => {
                            return (
                                <Navbar key={header.name} onClick={() => navigate(header.link)}>{header.name}</Navbar>
                            )
                        })}
                    </Flex>
                    <CreateBtn className="hidden lg:block" onClick={() => onOpenCreateModal()}>Create Yours Now</CreateBtn>
                </Flex>}
                <div className='bg-transparent hover:bg-[#FFFFFF30] rounded-md transition-all duration-500 block p-1 cursor-pointer lg:hidden' onClick={() => onOpenMobileModal()}>
                    <Icon icon="entypo:menu" className='w-[25px] md:w-[30px] h-[25px] md:h-[30px] text-black' />
                </div>
            </Content>
            <Modal
                open={mobileModalOpen}
                onClose={onCloseMobileModal}
                top
                classNames={{
                    modal: 'w-auto rounded-xl'
                }}
                closeIcon={MobileModalCloseIcon}
            >
                <div className='flex flex-col items-start w-full'>
                    {HeaderGroup.map(header => {
                        return (
                            <Navbar key={header.name} onClick={() => {
                                navigate(header.link)
                                onCloseMobileModal()
                            }}>{header.name}</Navbar>
                        )
                    })}
                </div>
            </Modal>
            <Modal
                open={createModalOpen}
                onClose={onCloseCreateModal}
                center
                classNames={{
                    modal: 'w-auto rounded-xl'
                }}
                closeIcon={CreateModalCloseIcon}
            >
                <div className='flex flex-col w-full py-3 px-2 sm:px-7'>
                    <div className="flex flex-col items-center">
                        <img src="assets/image/logo.png" alt="logo" width={50} height={50} draggable={false} />
                        <div className="text-xl sm:text-2xl md:text-3xl mt-2 text-[#212529]">Who is this for?</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-5">
                        {ButtonGroup.map((button) => {
                            return (
                                <button className="text-white text-base sm:text-lg bg-[#3e9ca3] rounded-lg w-[120px] sm:w-[200px] p-2" key={button} onClick={() => navigate(`/create-deck/${button.toLowerCase()}/to-who`)}>{button}</button>
                            )
                        })}
                    </div>
                </div>
            </Modal>
        </Body>
    )
}

export default Header