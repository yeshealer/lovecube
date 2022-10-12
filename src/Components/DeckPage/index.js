import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
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
    useEffect(() => {
        (async () => {
            const cookie = decodeURIComponent(document.cookie)
            const cookieData = cookie.split(';')
            for (let i = 0; i < cookieData.length; i++) {
                if (cookieData[i].includes("userId")) {
                    const startId = cookieData[i].lastIndexOf("userId=")
                    const email = cookieData[i].slice((7 + startId), cookieData[i].length + 1)
                    const detail = await axios.get(`https://agile-lake-31041.herokuapp.com/readData?yourMail=${email}`)
                    setDetails(detail.data)
                    setCurrentEmail(email)
                }
            }
        })()
    }, [])

    const handleProgress = () => {
        setProgress(!progress)
    }
    return (
        <Body>
            <HeaderTitle>
                All your LoveCubes in one place
                <div className='text-xl font-normal'>- {currentEmail} -</div>
            </HeaderTitle>
            <div className='w-full max-w-6xl border-b-[3px] border-[#3e9ca3] flex flex-col items-center justify-center  '>
                <div className='w-full max-w-5xl border flex flex-col items-center justify-center py-5 mb-5'>
                    <div className='flex items-center gap-2 cursor-pointer w-full flex justify-center' onClick={() => handleProgress()}>
                        <div className='text-2xl text-gray-500'>LoveCubes in progress</div>
                        <Icon icon="akar-icons:chevron-down" width={20} color="gray" height={20} />
                    </div>
                    <div className={`w-full flex justify-center flex-col items-center mt-10 gap-5`}>
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
                    </div>
                </div>
            </div>
        </Body>
    )
}
