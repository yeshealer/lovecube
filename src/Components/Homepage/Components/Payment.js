import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import PureModal from 'react-pure-modal';
import { PromotionDetailContent } from '../style'
import { Flex, Stock } from '../../Gadgets/GlobalComponents'
import { PaymentImages } from '../../Gadgets/Constants'
import { ButtonGroup } from '../../Gadgets/Constants';
import 'react-pure-modal/dist/react-pure-modal.min.css';

export default function Payment() {
    const navigate = useNavigate()
    const [animation, setAnimation] = useState("")
    const [createModalOpen, setCreateModalOpen] = useState(false);

    const onOpenCreateModal = () => setCreateModalOpen(true);
    const onCloseCreateModal = () => setCreateModalOpen(false);

    const CreateModalCloseIcon = (
        <Icon icon="ci:close-small" width="30" height="30" color="#808080" />
    )
    return (
        <PromotionDetailContent>
            <Flex className="gap-2">
                <Icon icon="emojione:growing-heart" className="h-[50px] w-[50px] sm:h-[70px] sm:w-[70px]" />
                <Stock className="text-2xl text-stone-700 sm:text-3xl font-semibold">Summer Sale!!!</Stock>
                <Icon icon="emojione:growing-heart" className="h-[50px] w-[50px] sm:h-[70px] sm:w-[70px]" />
            </Flex>
            <Stock className="flex items-end justify-center">
                <Stock className="text-stone-700 text-xl line-through">$59.99</Stock>
                <Stock className="text-stone-700 text-2xl font-semibold">$47.99</Stock>
            </Stock>
            <Stock className="text-stone-700 text-center text-lg mt-3">plus free shipping in the US</Stock>
            <Stock className="text-stone-700 text-center text-lg"><i>No credit card required until you've given final approval.</i></Stock>
            <Stock className="grid grid-cols-4 sm:flex gap-4 mt-5">
                {PaymentImages.map((paymentImage, index) => {
                    return (
                        <img src={`assets/image/${paymentImage}.png`} alt={paymentImage} key={paymentImage} className={`w-auto h-[40px] ${index === PaymentImages.length - 1 && 'col-span-3'}`} />
                    )
                })}
            </Stock>
            <button className="relative inline-block text-white px-5 py-3 font-medium text-xl flex items-center gap-3 group mt-10" onMouseLeave={() => setAnimation("")} onMouseEnter={() => setAnimation("animate-ping")} onClick={() => onOpenCreateModal()}>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-md transform translate-x-1 translate-y-1 bg-gray-600 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"></span>
                <span className="absolute inset-0 w-full h-full bg-[#9A1F60] rounded-md group-hover:bg-gray"></span>
                <span className="relative text-white">Create Yours Now</span>
                <Icon icon="akar-icons:arrow-right" className={`relative ${animation}`} />
            </button>
            <div className="createModal">
                <PureModal
                    isOpen={createModalOpen}
                    closeButton={CreateModalCloseIcon}
                    closeButtonPosition="bottom"
                    onClose={() => {
                        onCloseCreateModal();
                        return true;
                    }}
                    className="mt-10"
                >
                    <div className='flex flex-col w-full py-3 px-2 sm:px-7'>
                        <div className="flex flex-col items-center">
                            <img src="assets/image/logo.png" alt="logo" width={50} height={50} draggable={false} />
                            <div className="text-3xl mt-2 text-[#212529]">Who is this for?</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-5">
                            {ButtonGroup.map((button) => {
                                return (
                                    <div className="w-full flex justify-center" key={button}>
                                        <button className="text-white text-lg bg-[#3e9ca3] rounded-lg w-[160px] sm:w-[200px] p-2" key={button} onClick={() => {
                                            navigate(`/create-deck/${button.toLowerCase()}/to-who`)
                                            onCloseCreateModal()
                                        }}>{button}</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </PureModal>
            </div>
        </PromotionDetailContent>
    )
}
