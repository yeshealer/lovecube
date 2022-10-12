import React, { useState } from "react";
import { Icon } from "@iconify/react";
import PureModal from 'react-pure-modal';
import { useNavigate } from 'react-router-dom';
import { Stock } from "../../Gadgets/GlobalComponents";
import { PromotionContent } from "../style";
import { ButtonGroup } from '../../Gadgets/Constants';

const Promotion = () => {
    const navigate = useNavigate()

    const [createModalOpen, setCreateModalOpen] = useState(false);
    const onOpenCreateModal = () => setCreateModalOpen(true);
    const onCloseCreateModal = () => setCreateModalOpen(false);

    const CreateModalCloseIcon = (
        <Icon icon="ci:close-small" width="30" height="30" color="#808080" />
    )
    return (
        <>
            <PromotionContent onClick={() => onOpenCreateModal()}>
                <Stock>Summer Sale!, $59.99 $47.99 + Free Shipping!</Stock>
                <Stock>Turn up the heat in your relationship</Stock>
            </PromotionContent>
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
        </>
    )
}

export default Promotion