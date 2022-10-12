import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { DescribeList } from '../../Gadgets/Constants'

export default function Describe(props) {
    const navigate = useNavigate()
    const {
        toFirstName,
        occasion,
        inscription,
        pathname,
        setSelectedButton,
        selectedButton
    } = props

    const handleClickButton = (describe) => {
        if (!selectedButton.includes(describe)) {
            setSelectedButton([...selectedButton, describe])
        } else {
            setSelectedButton(selectedButton.filter(item => item !== describe))
        }
    }

    const handleNextDescribe = () => {
        navigate(`/create-deck/${props.pathname}/more-option`)
    }
    return (
        <div className='flex flex-col items-center w-full'>
            <div className='w-9/10 sm:w-2/3 md:w-1/2'>
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
                    <div className={`text-base ${inscription.length > 18 ? 'hidden sm:block' : 'block'}`}>{inscription}</div>
                    <div className='flex items-center cursor-pointer' onClick={() => navigate(`/create-deck/${pathname}/inscription`)}>
                        <Icon icon="bx:edit" color="#3e9ca3" width="24" height="24" />
                        <div className='text-[#3e9ca3] text-base'>edit</div>
                    </div>
                </div>
                <div className={`text-base ${inscription.length > 18 ? 'block sm:hidden text-end' : 'hidden'}`}>{inscription}</div>
            </div>

            <div className='text-2xl md:text-3xl my-8 text-center sm:text-start'>What words describe <span className='italic'>{toFirstName}</span> best?</div>
            <div className='text-center'>
                {DescribeList.map(describe => {
                    return (
                        <button key={describe} className={`border text-base px-2 py-1.5 rounded-md mr-2 mb-2 ${selectedButton.includes(describe) ? 'bg-[#9a1f60] text-white border-[#9a1f60]' : 'bg-white text-[#808080] border-[#808080]'} focus:ring-4 focus:ring-rose-300 hover:border-[#9a1f60]`} onClick={() => handleClickButton(describe)}>{describe}</button>
                    )
                })}
            </div>
            {selectedButton.length === 0 ? (
                <button className='bg-[#729396] font-medium rounded-lg text-base px-5 py-2.5 text-center text-white items-center my-10 cursor-pointer' disabled>
                    <div>Select one or more traits</div >
                    <div>(10+ Recommended)</div>
                </button >
            ) : (
                <button className='bg-[#3e9ca3] focus:ring-green-200 focus:ring-4 focus:outline-none font-medium rounded-lg text-base px-5 py-2.5 text-center text-white items-center my-10' onClick={() => handleNextDescribe()}>
                    <div><span className='bg-white text-black px-2 rounded-md bold text-sm font-bold'>{selectedButton.length}</span> Traits Selected</div >
                    <div>Select More Or Click To Continue</div>
                </button >
            )
            }
        </div >
    )
}