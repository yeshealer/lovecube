import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import Atropos from 'atropos/react';
import ReactCardFlip from 'react-card-flip';
import { useNavigate } from 'react-router-dom'
import { useImageURI } from '../../../Hooks/hooks'

export default function CreateCard(props) {
    const navigate = useNavigate()
    const [isCardShow, setIsCardShow] = useState(false)
    const [isFlipped, setIsFlipped] = useState(false)
    const {
        toFirstName,
        occasion,
        inscription,
        pathname,
        selectedDescribe,
        moreOption,
        setTopCardImage
    } = props

    const imageURI = useImageURI(
        occasion,
        toFirstName,
        inscription
    )
    setTopCardImage(imageURI)

    const handleNextCreateCard = () => {
        navigate(`/create-deck/${pathname}/upload`)
    }
    return (
        <div className='flex flex-col w-9/10 sm:w-2/3 md:w-1/2'>
            <div className='flex items-center gap-1 mt-7'>
                <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                <div className='text-base sm:text-lg md:text-xl text-[#6c757d]'>This is for: </div>
                <div className='text-base sm:text-lg md:text-xl'>{toFirstName}</div>
                <div className='flex items-center cursor-pointer' onClick={() => navigate(`/create-deck/${pathname}/to-who`)}>
                    <Icon icon="bx:edit" color="#3e9ca3" width="24" height="24" />
                    <div className='text-[#3e9ca3] text-base sm:text-lg md:text-xl'>edit</div>
                </div>
            </div>

            <div className='flex items-center gap-1 mt-1'>
                <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                <div className='text-base sm:text-lg md:text-xl text-[#6c757d]'>Occasion: </div>
                <div className='text-base sm:text-lg md:text-xl'>{occasion}</div>
                <div className='flex items-center cursor-pointer' onClick={() => navigate(`/create-deck/${pathname}/occasion`)}>
                    <Icon icon="bx:edit" color="#3e9ca3" width="24" height="24" />
                    <div className='text-[#3e9ca3] text-base sm:text-lg md:text-xl'>edit</div>
                </div>
            </div>

            <div className='flex items-center gap-1 mt-1'>
                <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                <div className='text-base sm:text-lg md:text-xl text-[#6c757d]'>Inscription: </div>
                <div className='text-base sm:text-lg md:text-xl'>{inscription}</div>
                <div className='flex items-center cursor-pointer' onClick={() => navigate(`/create-deck/${pathname}/inscription`)}>
                    <Icon icon="bx:edit" color="#3e9ca3" width="24" height="24" />
                    <div className='text-[#3e9ca3] text-base sm:text-lg md:text-xl'>edit</div>
                </div>
            </div>

            <div className='flex items-center gap-1 mt-1'>
                <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                <div className='text-base sm:text-lg md:text-xl text-[#6c757d]'>Traits: </div>
                <div className='text-base sm:text-lg md:text-xl'>{selectedDescribe.length} amazing traits</div>
                <div className='flex items-center cursor-pointer' onClick={() => navigate(`/create-deck/${pathname}/describe`)}>
                    <Icon icon="bx:edit" color="#3e9ca3" width="24" height="24" />
                    <div className='text-[#3e9ca3] text-base sm:text-lg md:text-xl'>edit</div>
                </div>
            </div>

            <div className='flex items-center gap-1 mt-1'>
                <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                <div className='text-base sm:text-lg md:text-xl text-[#6c757d]'>More Message: </div>
                <div className='text-base sm:text-lg md:text-xl'>{moreOption}</div>
                <div className='flex items-center cursor-pointer' onClick={() => navigate(`/create-deck/${pathname}/more-option`)}>
                    <Icon icon="bx:edit" color="#3e9ca3" width="24" height="24" />
                    <div className='text-[#3e9ca3] text-base sm:text-lg md:text-xl'>edit</div>
                </div>
            </div>

            <div className='text-3xl my-8'>Let's see the first card</div>

            <div className='text-center text-[#6c757d]'>
                <div className='text-2xl'>Everything look good?</div>
                <div>You can edit your answers by clicking the edit buttons above</div>
            </div>
            <button className={`border border-[#3e9ca3] bg-[#3e9ca3] hover:bg-[#4eaca2] focus:ring-2 focus:ring-[#4ebfa2] text-white rounded-md p-2 max-w-[200px] self-center mt-5 ${isCardShow ? 'mb-0' : 'mb-32'}`} onClick={() => setIsCardShow(true)}>Show me the top card!</button>
            {isCardShow &&
                <>
                    <div className='self-center mt-5'>
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                            <div className='bg-gray-200 rounded-2xl shadow-xl w-[350px] sm:w-[400px] md:w-[450px] h-[350px] sm:h-[400px] md:h-[450px]'>
                                <Atropos shadow highlight={false} alwaysActive activeOffset={40}>
                                    <img src={imageURI} alt="card" data-atropos-offset="5" />
                                </Atropos>
                            </div>
                            <div className='bg-gray-200 rounded-2xl shadow-xl w-[350px] sm:w-[400px] md:w-[450px] h-[350px] sm:h-[400px] md:h-[450px] text-center flex items-center px-10'>
                                It's hard to put into words just how special you are to me. With this gift, I have tried to do that. Every sentiment is 100% true.
                            </div>
                        </ReactCardFlip>
                    </div>
                    <button className='text-white bg-[#9a1f60] w-[100px] py-2 rounded-md self-center mt-5 hover:bg-[#bb337c] animation-all duration-300' onClick={() => setIsFlipped(!isFlipped)}>Flip Card</button>
                    <div className='text-center mt-3 text-[#6c757d]'>If something doesn't look right, make changes using the <b>I want to edit</b> button</div>
                    <button type="button" class={`w-[200px] justify-between self-center font-bold text-white bg-[#3e9ca3] hover:bg-[#4e9ca3] focus:ring-green-200 focus:ring-2 focus:outline-none font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center my-10`} onClick={() => handleNextCreateCard()}>
                        Look's right
                        <Icon icon="akar-icons:arrow-right" width={20} height={20} className="ml-1" />
                    </button>
                </>
            }
        </div >
    )
}