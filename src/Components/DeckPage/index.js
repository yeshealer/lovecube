import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import PureModal from 'react-pure-modal';
import axios from 'axios'
import {
    Body,
    HeaderTitle
} from './style'

export default function DeckPage() {
    const navigate = useNavigate()
    const [currentEmail, setCurrentEmail] = useState("")
    const [details, setDetails] = useState([])
    const [progress, setProgress] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loginEmail, setLoginEmail] = useState('')

    useEffect(() => {
        (async () => {
            if (isLoggedIn) {
                setIsLoading(true)
            }
            const cookie = decodeURIComponent(document.cookie)
            const cookieData = cookie.split(';')
            for (let i = 0; i < cookieData.length; i++) {
                if (cookieData[i].includes("userId")) {
                    setIsLoggedIn(true)
                    const startId = cookieData[i].lastIndexOf("userId=")
                    const email = cookieData[i].slice((7 + startId), cookieData[i].length + 1)
                    setCurrentEmail(email)
                    const URL = `https://agile-lake-31041.herokuapp.com/readData?yourMail=${email}`
                    const result = await axios({
                        method: 'get',
                        url: URL,
                        headers: { 'Content-Type': 'application/json' },
                    })
                    setDetails(result.data)
                    setIsLoading(false)
                }
            }
        })()
    }, [isLoggedIn])

    const handleProgress = () => {
        setProgress(!progress)
    }

    const handleSetLoginEmail = (e) => {
        setLoginEmail(e.target.value)
    }

    const handleUpdateLoginEmail = () => {
        document.cookie = `userId=${loginEmail}`
        setIsLoggedIn(true)
    }

    return (
        <Body>
            <HeaderTitle>
                {isLoggedIn ? "All your LoveCubes in one place" : "Unlock My LoveCube"}
                {isLoggedIn && <div className='text-xl font-normal'>- {currentEmail} -</div>}
            </HeaderTitle>
            <div className='w-full max-w-6xl border-b-[3px] border-[#3e9ca3] flex flex-col items-center justify-center  '>
                <div className='w-full max-w-5xl border flex flex-col items-center justify-center py-5 mb-5'>
                    {isLoggedIn ? (
                        <>
                            <div className='flex items-center gap-2 cursor-pointer w-full flex justify-center' onClick={() => handleProgress()}>
                                <div className='text-2xl text-gray-500'>LoveCubes in progress</div>
                                <Icon icon="akar-icons:chevron-down" width={20} color="gray" height={20} />
                            </div>
                            {details.length > 0 ? <div className={`w-full flex justify-center flex-col items-center mt-10 gap-5`}>
                                {details.map((detail, index) => {
                                    const fullDate = new Date(detail.currentTime / 1000 * 1000)
                                    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                                    const year = fullDate.getFullYear();
                                    const month = months[fullDate.getMonth()];
                                    const date = fullDate.getDate();
                                    const hour = fullDate.getHours();
                                    const min = fullDate.getMinutes();
                                    const finalTime = month + '. ' + date + ', ' + year + ', ' + hour + ':' + min
                                    return (
                                        <div className='border divide-y w-4/5' key={index}>
                                            <div className='flex justify-between w-full p-3'>
                                                <div className='text-lg text-gray-600'>{index + 1}. <span className='text-[#3e9ca3]'>{detail.inscription}</span></div>
                                                <button className='text-base text-[#3e9ca3]' onClick={() => navigate(`/cards/${detail._id}`)}>edit</button>
                                            </div>
                                            <div className='grid grid-cols-2 p-3 text-gray-600'>
                                                <div>
                                                    <div className='text-base'><b>From:</b> {detail.fromFirstName}</div>
                                                    <div className='text-base'><b>Occasion:</b> {detail.occasion}</div>
                                                </div>
                                                <div>
                                                    <div className='text-base'><b>For:</b> {detail.toFirstName}</div>
                                                    <div className='text-base'><b>Created:</b> {finalTime}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div> : <div className='mt-5 text-3xl font-bold text-gray-600'>There is no LoveCube.</div>}
                        </>
                    ) : (
                        <div className='grid grid-cols-5 w-full px-10 gap-10'>
                            <div className='w-full flex flex-col items-center my-3 col-span-3'>
                                <div className='w-full'>Email Address:</div>
                                <div className="flex w-full">
                                    <input type="text" id="website-admin" value={loginEmail} onChange={e => handleSetLoginEmail(e)} className="outline-none rounded-lg bg-gray-50 border text-gray-900 focus:ring-[#3e9ca3] focus:border-[#3e9ca3] block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 focus:ring-green-400 focus:ring-2" />
                                </div>
                                <div className='text-sm self-start'>We'll never share your email with anyone else.</div>
                                <button type="button" className={`font-bold text-white bg-[#3e9ca3] hover:bg-[#4e9ca3] focus:ring-green-200 focus:ring-2 focus:outline-none font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mt-5`} onClick={() => handleUpdateLoginEmail()}>
                                    Log In
                                </button>
                            </div>
                            <div className='col-span-2'>
                                <div className='text-gray-700'>Enter your email and we'll send you link(s) to your saved LoveCube(s) so you can come back and finish them.</div>
                                <div className='text-gray-700 mt-5'>If you don't receive the email, please check your spam folder. If you still can't find the email contact us.</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='loading-modal'>
                <PureModal
                    isOpen={isLoading}
                >
                    <div className='w-full flex justify-center items-center'>
                        <Icon icon="line-md:loading-twotone-loop" width={70} height={70} color="white" />
                    </div>
                </PureModal>
            </div>
        </Body>
    )
}
