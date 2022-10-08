import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import { LastCardMessage } from '../../Gadgets/Constants'

export default function OwnMsg(props) {
    const [isButtonAnimation, setIsButtonAnimation] = useState(false)
    const navigate = useNavigate()
    const {
        toFirstName,
        occasion,
        inscription,
        pathname,
        selectedDescribe,
        setOwnMessage,
        ownMessage,
        moreOption
    } = props

    const handleSetOwnMessage = (event) => {
        const message = event.target.value
        setOwnMessage(message)
    }

    const handleNextOwnMsg = () => {
        navigate(`/create-deck/${pathname}/from-who`)
    }

    useEffect(() => {
        if (ownMessage.length > 0) {
            setIsButtonAnimation(true)
        } else {
            setIsButtonAnimation(false)
        }
    }, [ownMessage])
    return (
        <div className='flex flex-col items-center w-9/10 md:w-2/3'>
            <div className='w-full md:w-3/4'>
                <div className='flex items-center gap-1 mt-7'>
                    <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                    <div className='text-base text-[#6c757d]'>This is for: </div>
                    <div className='text-base'>{toFirstName}</div>
                    <div className='flex items-center cursor-pointer' onClick={() => navigate(`/create-deck/${pathname}/to-who`)}>
                        <Icon icon="bx:edit" color="#3e9ca3" width="24" height="24" />
                        <div className='text-[#3e9ca3] text-base'>edit</div>
                    </div>
                </div>

                <div className='flex items-center gap-1 mt-1'>
                    <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                    <div className='text-base text-[#6c757d]'>Occasion: </div>
                    <div className='text-base'>{occasion}</div>
                    <div className='flex items-center cursor-pointer' onClick={() => navigate(`/create-deck/${pathname}/occasion`)}>
                        <Icon icon="bx:edit" color="#3e9ca3" width="24" height="24" />
                        <div className='text-[#3e9ca3] text-base'>edit</div>
                    </div>
                </div>

                <div className='flex items-center gap-1 mt-1'>
                    <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                    <div className='text-base text-[#6c757d]'>Inscription: </div>
                    <div className={`text-base ${inscription.length > 18 && 'hidden sm:block'}`}>{inscription}</div>
                    <div className='flex items-center cursor-pointer' onClick={() => navigate(`/create-deck/${pathname}/inscription`)}>
                        <Icon icon="bx:edit" color="#3e9ca3" width="24" height="24" />
                        <div className='text-[#3e9ca3] text-base'>edit</div>
                    </div>
                </div>
                <div className={`text-base ${inscription.length > 18 && 'block sm:hidden'} text-end w-full`}>{inscription}</div>

                <div className='flex items-center gap-1 mt-1'>
                    <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                    <div className='text-base text-[#6c757d]'>Traits: </div>
                    <div className='text-base'>{selectedDescribe.length} amazing traits</div>
                    <div className='flex items-center cursor-pointer' onClick={() => navigate(`/create-deck/${pathname}/describe`)}>
                        <Icon icon="bx:edit" color="#3e9ca3" width="24" height="24" />
                        <div className='text-[#3e9ca3] text-base'>edit</div>
                    </div>
                </div>

                <div className='flex items-center gap-1 mt-1'>
                    <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                    <div className='text-base text-[#6c757d]'>More Message: </div>
                    <div className={`text-base ${moreOption.length > 18 && 'hidden sm:block'}`}>{moreOption}</div>
                    <div className='flex items-center cursor-pointer' onClick={() => navigate(`/create-deck/${pathname}/more-option`)}>
                        <Icon icon="bx:edit" color="#3e9ca3" width="24" height="24" />
                        <div className='text-[#3e9ca3] text-base'>edit</div>
                    </div>
                </div>
                <div className={`text-base ${moreOption.length > 18 && 'block sm:hidden'} text-end w-full`}>{moreOption}</div>

                <div className='flex items-center gap-1 mt-1'>
                    <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                    <div className='text-base text-[#6c757d]'>Title card created</div>
                </div>

                <div className='flex items-center gap-1 mt-1'>
                    <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                    <div className='text-base text-[#6c757d]'>Final image: </div>
                    <div className='flex items-center cursor-pointer' onClick={() => navigate(`/create-deck/${pathname}/upload`)}>
                        <Icon icon="bx:edit" color="#3e9ca3" width="24" height="24" />
                        <div className='text-[#3e9ca3] text-base'>edit</div>
                    </div>
                </div>

                <div className='text-2xl md:text-3xl my-8 text-center'>Select a message for the last card</div>

                <div className='flex flex-col'>
                    <select id="messages" class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onClick={event => {
                        setOwnMessage(event.target.value)
                    }}>
                        {LastCardMessage.map((lastMessage, index) => {
                            return (
                                <option value={lastMessage.description} key={index} selected={ownMessage === lastMessage.description}>{lastMessage.title}</option>
                            )
                        })}
                    </select>

                    <div className='self-center my-5 text-[#6c757d]'>or write your own</div>

                    <label for="message" class="block mb-2 text-base font-medium text-gray-900">Closing card message:</label>
                    <textarea value={ownMessage} onChange={(event) => handleSetOwnMessage(event)} d="message" rows="4" class="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Your message..." spellcheck="false" data-ms-editor="true"></textarea>

                    <button type="button" class={`font-bold text-white self-center w-[100px] ${isButtonAnimation ? "bg-[#9a1f60] hover:bg-[#AA2F60] focus:ring-rose-200" : "bg-[#3e9ca3] hover:bg-[#4e9ca3] focus:ring-green-200"} focus:ring-2 focus:outline-none font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center my-10 ${isButtonAnimation && 'next-button-animation'}`} onClick={() => handleNextOwnMsg()}>
                        Next
                        <Icon icon="akar-icons:arrow-right" width={20} height={20} className="ml-1" />
                    </button>
                </div>
            </div>
        </div>
    )
}