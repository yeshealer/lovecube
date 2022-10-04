import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

export default function ToWho(props) {
    const { setFirstName, setLastName, setNickName, firstName, lastName, nickName } = props
    const [isButtonAnimation, setIsButtonAnimation] = useState(false)
    const [isRequired, setIsRequired] = useState(false)
    const navigate = useNavigate()

    const handleSetFirstName = (event) => {
        const first_name = event.target.value
        if (first_name.length <= 30) {
            setFirstName(first_name)
        }
        if (firstName > 0) {
            setIsRequired(false)
        } else {
            setIsButtonAnimation(false)
        }
    }

    const handleSetLastName = (event) => {
        const last_name = event.target.value
        if (last_name.length <= 30) {
            setLastName(last_name)
        }
    }

    const handleSetNickName = (event) => {
        const nick_name = event.target.value
        if (nick_name.length <= 30) {
            setNickName(nick_name)
        }
    }

    const handleNextToWho = () => {
        if (firstName.length <= 0) {
            setIsRequired(true)
        } else {
            setFirstName(firstName)
            navigate(`/create-deck/${props.pathname}/occasion`)
        }
    }

    useEffect(() => {
        if (firstName.length > 0) {
            setIsButtonAnimation(true)
        }
    }, [firstName])
    return (
        <div className='flex flex-col items-start w-1/2'>
            <div className='text-3xl my-8'>Who is this for?</div>
            <div className='w-full flex flex-col items-center'>
                <div className='w-full'>The first name <span className='text-[#6c757d]'>(required)</span>:</div>
                <div class="flex mt-2 w-full">
                    <input type="text" id="website-admin" value={firstName} onChange={e => handleSetFirstName(e)} class={`rounded-none outline-none rounded-l-lg bg-gray-50 border text-gray-900 ${isRequired ? 'focus:ring-rose-300 border-rose-700 border-2' : 'focus:border-[#3e9ca3]'} block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 focus:ring-green-400 focus:ring-2`} />
                    <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-r-md border border-r-0 border-gray-300">
                        {firstName.length} / 30
                    </span>
                </div>
            </div>
            <div className='w-full flex flex-col items-center mt-3'>
                <div className='w-full'>The last name <span className='text-[#6c757d]'>(suggested)</span>:</div>
                <div class="flex mt-2 w-full">
                    <input type="text" id="website-admin" value={lastName} onChange={e => handleSetLastName(e)} class="rounded-none outline-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-[#3e9ca3] focus:border-[#3e9ca3] block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 focus:ring-green-400 focus:ring-2" />
                    <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-r-md border border-r-0 border-gray-300">
                        {lastName.length} / 30
                    </span>
                </div>
            </div>
            <div className='w-full flex flex-col items-center mt-3'>
                <div className='w-full'>The nickname <span className='text-[#6c757d]'>(optional)</span>:</div>
                <div class="flex mt-2 w-full">
                    <input type="text" id="website-admin" value={nickName} onChange={e => handleSetNickName(e)} class="rounded-none outline-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-[#3e9ca3] focus:border-[#3e9ca3] block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 focus:ring-green-400 focus:ring-2" />
                    <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-r-md border border-r-0 border-gray-300">
                        {nickName.length} / 30
                    </span>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center w-full'>
                <button type="button" class={`font-bold text-white ${isButtonAnimation ? "bg-[#9a1f60] hover:bg-[#AA2F60] focus:ring-rose-200" : "bg-[#3e9ca3] hover:bg-[#4e9ca3] focus:ring-green-200"} focus:ring-2 focus:outline-none font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center my-10 ${isButtonAnimation && 'next-button-animation'}`} onClick={() => handleNextToWho()}>
                    Next
                    <Icon icon="akar-icons:arrow-right" width={20} height={20} className="ml-1" />
                </button>
                <div className='text-[#6c757d]'>We'll incorporate your names into the messages and images</div>
                <div className='text-[#6c757d]'>(You'll be able to edit these later)</div>
            </div>
        </div>
    )
}
