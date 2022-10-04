import React, { useEffect, useState, useRef } from 'react'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';

export default function SendMail(props) {
    const navigate = useNavigate()
    const mainContent = useRef()

    const [isRequired, setIsRequired] = useState(false)

    const {
        toFirstName,
        pathname,
        occasion,
        inscription,
        selectedDescribe,
        moreOption,
        fromFirstName,
        setSendMail,
        sendMail
    } = props

    const handleSetLastName = (event) => {
        const mailAddress = event.target.value
        if (mailAddress.length <= 50) {
            setIsRequired(false)
            setSendMail(event.target.value)
        }
    }


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pn09oep', 'template_44pzhd1', mainContent.current, 'XZf5ifDKJM2Li_XL-')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const handleNextFromWho = () => {
    }

    useEffect(() => {
        if (sendMail.length <= 0) {
            setIsRequired(true)
        } else {
            setIsRequired(false)
        }
    }, [sendMail])
    return (
        <div className='flex flex-col items-start w-1/2'>
            <div className='flex items-center gap-1 mt-7'>
                <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                <div className='text-xl text-[#6c757d]'>This is for: </div>
                <div className='text-xl'>{toFirstName}</div>
                <div className='flex items-center cursor-pointer' onClick={() => navigate(`/create-deck/${pathname}/to-who`)}>
                    <Icon icon="bx:edit" color="#3e9ca3" width="24" height="24" />
                    <div className='text-[#3e9ca3] text-xl'>edit</div>
                </div>
            </div>
            <div className='flex items-center gap-1 mt-1'>
                <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                <div className='text-xl text-[#6c757d]'>Occasion: </div>
                <div className='text-xl'>{occasion}</div>
                <div className='flex items-center cursor-pointer' onClick={() => navigate(`/create-deck/${pathname}/occasion`)}>
                    <Icon icon="bx:edit" color="#3e9ca3" width="24" height="24" />
                    <div className='text-[#3e9ca3] text-xl'>edit</div>
                </div>
            </div>

            <div className='flex items-center gap-1 mt-1'>
                <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                <div className='text-xl text-[#6c757d]'>Inscription: </div>
                <div className='text-xl'>{inscription}</div>
                <div className='flex items-center cursor-pointer' onClick={() => navigate(`/create-deck/${pathname}/inscription`)}>
                    <Icon icon="bx:edit" color="#3e9ca3" width="24" height="24" />
                    <div className='text-[#3e9ca3] text-xl'>edit</div>
                </div>
            </div>

            <div className='flex items-center gap-1 mt-1'>
                <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                <div className='text-xl text-[#6c757d]'>Traits: </div>
                <div className='text-xl'>{selectedDescribe.length} amazing traits</div>
                <div className='flex items-center cursor-pointer' onClick={() => navigate(`/create-deck/${pathname}/describe`)}>
                    <Icon icon="bx:edit" color="#3e9ca3" width="24" height="24" />
                    <div className='text-[#3e9ca3] text-xl'>edit</div>
                </div>
            </div>


            <div className='flex items-center gap-1 mt-1'>
                <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                <div className='text-xl text-[#6c757d]'>More Inscription: </div>
                <div className='text-xl'>{moreOption}</div>
                <div className='flex items-center cursor-pointer' onClick={() => navigate(`/create-deck/${pathname}/more-option`)}>
                    <Icon icon="bx:edit" color="#3e9ca3" width="24" height="24" />
                    <div className='text-[#3e9ca3] text-xl'>edit</div>
                </div>
            </div>

            <div className='flex items-center gap-1 mt-1'>
                <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                <div className='text-xl text-[#6c757d]'>Title card created</div>
            </div>

            <div className='flex items-center gap-1 mt-1'>
                <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                <div className='text-xl text-[#6c757d]'>Final image: </div>
                <div className='flex items-center cursor-pointer' onClick={() => navigate(`/create-deck/${pathname}/upload`)}>
                    <Icon icon="bx:edit" color="#3e9ca3" width="24" height="24" />
                    <div className='text-[#3e9ca3] text-xl'>edit</div>
                </div>
            </div>

            <div className='flex items-center gap-1 mt-1'>
                <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                <div className='text-xl text-[#6c757d]'>Message: </div>
                <div className='flex items-center cursor-pointer' onClick={() => navigate(`/create-deck/${pathname}/own-msg`)}>
                    <Icon icon="bx:edit" color="#3e9ca3" width="24" height="24" />
                    <div className='text-[#3e9ca3] text-xl'>edit</div>
                </div>
            </div>

            <div className='flex items-center gap-1 mt-1'>
                <Icon icon="akar-icons:circle-check" color="#3e9ca3" width="24" height="24" />
                <div className='text-xl text-[#6c757d]'>This is from: </div>
                <div className='text-xl'>{fromFirstName}</div>
                <div className='flex items-center cursor-pointer' onClick={() => navigate(`/create-deck/${pathname}/to-who`)}>
                    <Icon icon="bx:edit" color="#3e9ca3" width="24" height="24" />
                    <div className='text-[#3e9ca3] text-xl'>edit</div>
                </div>
            </div>

            <div className='text-3xl my-8'>Just one more thing</div>
            <div className='w-full'>
                <div className='text-center text-[#6c757d]'>We need your email to save your LoveCube.</div>
                <div className='text-center text-[#6c757d]'>We'll email you a link so you can come back to it.</div>

                <div className='w-full flex flex-col items-center mt-3'>
                    <div className='w-full'>Email address <span className='text-[#9a1f60]'>*</span></div>
                    <div class="flex mt-2 w-full">
                        <input type="email" id="website-admin" value={sendMail} onChange={e => handleSetLastName(e)} class="rounded-none outline-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-[#3e9ca3] focus:border-[#3e9ca3] block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 focus:ring-green-400 focus:ring-2" />
                        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-r-md border border-r-0 border-gray-300">
                            {sendMail.length} / 50
                        </span>
                    </div>
                    <div className='text-[#6c757d] text-sm mt-1'><span className='text-[#9a1f60]'>*</span> We'll never spam you or share your email with anyone else. <b>Promise!</b>😇</div>
                </div>

                <div className='flex flex-col items-center justify-center w-full'>
                    <button type="button" class={`font-bold text-white ${!isRequired ? "bg-[#9a1f60] hover:bg-[#AA2F60] focus:ring-rose-200" : "bg-[#3e9ca3] hover:bg-[#4e9ca3] focus:ring-green-200"} focus:ring-2 focus:outline-none font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mt-10 ${isRequired && 'next-button-animation'}`} onClick={() => handleNextFromWho()}>
                        Send
                        <Icon icon="akar-icons:arrow-right" width={20} height={20} className="ml-1" />
                    </button>
                    <button className='text-[#6c757d] mt-2 hover:underline'>Continue without email</button>
                </div>
            </div>

            <form ref={mainContent} onSubmit={sendEmail}>
                <div>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="user_email" />
                </div>
                <div>
                    <label>Message</label>
                    <textarea name="message" />
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}