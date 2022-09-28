import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import Select from 'react-select';
import { Stock } from '../Gadgets/GlobalComponents'
import { Body, HeaderTitle, Content } from './style'

export default function ContactPage() {
    const [selectedOption, setSelectedOption] = useState(false)

    const handleInputChange = (event) => {
        setSelectedOption(event)
    }

    const options = [
        { value: 'help-site', label: 'I need help with the website' },
        { value: 'help-payment', label: 'I need help with payment' },
        { value: 'help-shipping', label: 'I need help with shipping' },
        { value: 'leave-feedback', label: "I'd like to leave feedback" },
        { value: 'need-else', label: 'I need help with something else' },
        { value: 'report-problem', label: 'I want to report a problem' },
    ];
    return (
        <Body>
            <HeaderTitle>Contact us</HeaderTitle>
            <Content>
                <Stock className='w-full xl:w-[40%] border-y-[3px] border-[#3e9ca3] p-8'>
                    <Stock className='text-base text-[#5F687B] '>If you're a customer with a concern or question, an influencer that is interested in collaborating, or a journalist that would just like some more information, please feel free to reach out.</Stock>
                    <Stock className='text-base text-[#5F687B] mt-5'>The best way to contact us is through the form on the right. We'll make every attempt to get back to you within one business day or less.</Stock>
                    <Stock className='text-base text-[#5F687B] mt-5'>If the form isn't appropriate for some reason, here are some other ways you can contact us:</Stock>
                    <Stock className='flex items-start justify-between mt-10'>
                        <Icon icon="akar-icons:location" color="#3e9ca3" width="30" height="30" className='mt-2' />
                        <Stock className='w-[85%]'>
                            <Stock className='text-[#5F687B] text-[22px] font-semibold'>Location:</Stock>
                            <Stock className='text-[#949CAC] text-base'>Joe Joe Industries, LLC, 9925 Haynes Bridge Rd, Suite 200 - 103, Alpharetta, GA 30022</Stock>
                        </Stock>
                    </Stock>
                    <Stock className='flex items-start justify-between mt-5'>
                        <Icon icon="dashicons:email" color="#3e9ca3" width="30" height="30" className='mt-2' />
                        <Stock className='w-[85%]'>
                            <Stock className='text-[#5F687B] text-[22px] font-semibold'>Email:</Stock>
                            <Stock className='text-[#3e9ca3] text-base cursor-pointer'>info@lovecube.com</Stock>
                        </Stock>
                    </Stock>
                    <Stock className='flex items-start justify-between mt-5'>
                        <Icon icon="carbon:phone" color="#3e9ca3" width="30" height="30" className='mt-2' />
                        <Stock className='w-[85%]'>
                            <Stock className='text-[#5F687B] text-[22px] font-semibold'>Phone:</Stock>
                            <Stock className='text-[#949CAC] text-base cursor-pointer'>1 (239) 494-6695</Stock>
                        </Stock>
                    </Stock>
                </Stock>
                <Stock className='w-full xl:w-[60%] border-y-[3px] border-[#3e9ca3] p-8 flex flex-col items-center'>
                    <Stock className='flex flex-col sm:flex-row w-full gap-5'>
                        <div className='w-full sm:w-1/2'>
                            <label for="your name" className="block mb-2 text-base font-medium text-gray-900">Your name</label>
                            <input type="text" id="your name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
                        </div>
                        <div className='w-full sm:w-1/2'>
                            <label for="your email" className="block mb-2 text-base font-medium text-gray-900">Your email</label>
                            <input type="email" id="your email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" required />
                        </div>
                    </Stock>
                    <div className='w-full'>
                        <label for="your email" className="block my-2 mt-4 text-base font-medium text-gray-900">About what are you writing us?</label>
                        <Select
                            value={selectedOption}
                            onChange={(event) => handleInputChange(event)}
                            options={options}
                            className="w-full"
                        />
                    </div>
                    <div className='w-full'>
                        <label for="your email" className="block my-2 mt-4 text-base font-medium text-gray-900">Subject</label>
                        <input type="text" id="your email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required />
                    </div>
                    <div className='w-full'>
                        <label for="message" class="block my-2 mt-4 text-base font-medium text-gray-900">Your message</label>
                        <textarea id="message" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Your message..." spellcheck="false" data-ms-editor="true"></textarea>
                    </div>
                    <button type="button" class="max-w-xs text-white bg-[#3e9ca3] hover:[#3eacb3] focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-base px-5 py-2.5 mr-2 mb-2 mt-5">Send Message</button>
                </Stock>
            </Content>
        </Body>
    )
}