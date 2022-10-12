import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { Body, SubTitle } from './style'

export default function EditCardPage() {
    const location = useLocation()
    const pathname = location.pathname
    const paths = pathname.split('/')
    const uniqueId = paths[paths.length - 1]

    const [updateEmail, setUpdateEmail] = useState("")
    const [details, setDetails] = useState([])

    useEffect(() => {
        (async () => {
            const details = await axios.get(`https://agile-lake-31041.herokuapp.com/getDataById?uniqueId=${uniqueId}`)
            setDetails(details.data[0])
            setUpdateEmail(details.data[0].yourMail)
        })()
    }, [uniqueId])


    const handleSetUpdatedEmail = (event) => {
        const updated_email = event.target.value
        if (updated_email.length <= 30) {
            setUpdateEmail(updated_email)
        }
    }

    return (
        <Body>
            <SubTitle>Edit, swap, update and more!</SubTitle>
            <div className='border rounded-md p-4 flex flex-col items-center text-[#3F51B5] bg-[#f2f2f2]'>
                <div className='font-bold text-lg'>Save Adan's LoveCube!</div>
                <div className=''>We'll send you a link for returning later.</div>
                <div class="flex mt-2 w-full">
                    <input type="text" id="website-admin" value={updateEmail} onChange={e => handleSetUpdatedEmail(e)} class="rounded-none outline-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-[#3e9ca3] focus:border-[#3e9ca3] block flex-1 min-w-0 w-full text-sm border-[#3F51B5] p-2.5 focus:ring-purple-400 focus:ring-2" />
                    <button class="inline-flex items-center px-3 text-base text-white bg-[#3F51B5] hover:bg-[#4F69C5] animation-all duration-300 font-bold rounded-r-md border border-l-0 border-gray-300">
                        Update email
                    </button>
                </div>
            </div>
            <div className='max-w-6xl my-10 grid grid-cols-4 gap-4'>
                <img src={details.topCardImage} alt="top Card" className='w-48 h-48 rounded-xl border-4 border-[#e2e2e2] shadow-xl' />
                <img src={details.finalCardImage} alt="final Card" className='w-48 h-48 rounded-xl border-4 border-[#e2e2e2] shadow-xl' />
            </div>
        </Body>
    )
}
