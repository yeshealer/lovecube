import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { InscriptionList } from '../../Gadgets/Constants'

export default function MoreOption(props) {
    const navigate = useNavigate()
    const [isButtonAnimation, setIsButtonAnimation] = useState(false)
    const [isRequired, setIsRequired] = useState(false)

    const {
        occasion,
        toFirstName,
        pathname,
        setMoreOption,
        moreOption,
        selectedDescribe,
        inscription
    } = props

    const handleSetInscription = (event) => {
        const OccasionText = event.target.value
        if (OccasionText.length <= 30) {
            setMoreOption(OccasionText)
        }
        if (OccasionText.length > 0) {
            setIsRequired(false)
            setIsButtonAnimation(true)
        } else {
            setIsButtonAnimation(false)
        }
    }

    const handleSelectInscription = (inscription) => {
        setMoreOption(inscription)
        setIsRequired(false)
        setIsButtonAnimation(true)
    }

    const handleNextOccasion = () => {
        if (moreOption.length <= 0) {
            setIsRequired(true)
        } else {
            setMoreOption(moreOption)
            navigate(`/create-deck/${pathname}/create-card`)
        }
    }

    useEffect(() => {
        if (moreOption.length > 0) {
            setIsButtonAnimation(true)
        }
    }, [moreOption])
    return (
        <div className='flex flex-col items-start w-9/10 sm:w-2/3 md:w-1/2'>
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

            <div className='text-2xl md:text-3xl my-8'>Choose more inscription</div>

            <table class="w-full text-sm text-left text-gray-500 text-gray-400">
                <tbody>
                    {InscriptionList[0][pathname].map((inscription, index) => {
                        return (
                            <tr class="border border-gray-300 bg-transparent cursor-pointer focus:bg-gray-100 active:bg-gray-100 transition-all duration-100" key={index} onClick={() => handleSelectInscription(inscription)}>
                                <th scope="row" class="py-2 px-6 text-center font-medium text-gray-700 whitespace-nowrap text-base">
                                    {inscription}
                                </th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div className='text-[#6c757d] text-center w-full py-4'>or write your own</div>

            <div className='w-full flex flex-col items-center'>
                <div className='w-full'>Inscription:</div>
                <div class="flex mt-2 w-full">
                    <input type="text" id="website-admin" value={moreOption} onChange={e => handleSetInscription(e)} class={`rounded-none outline-none rounded-l-lg bg-gray-50 border text-gray-900 ${isRequired ? 'focus:ring-rose-300 border-rose-700 border-2' : 'focus:border-[#3e9ca3]'} block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 focus:ring-green-400 focus:ring-2`} placeholder="" />
                    <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-r-md border border-r-0 border-gray-300">
                        {moreOption.length} / 30
                    </span>
                </div>
                {isRequired && <div className='text-xs self-start text-rose-700'>Please select or fill the occasion</div>}
                <button type="button" class={`font-bold text-white ${isButtonAnimation ? "bg-[#9a1f60] hover:bg-[#AA2F60] focus:ring-rose-200" : "bg-[#3e9ca3] hover:bg-[#4e9ca3] focus:ring-green-200"} focus:ring-2 focus:outline-none font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center my-10 ${isButtonAnimation && 'next-button-animation'}`} onClick={() => handleNextOccasion()}>
                    Next
                    <Icon icon="akar-icons:arrow-right" width={20} height={20} className="ml-1" />
                </button>
            </div>
        </div>
    )
}