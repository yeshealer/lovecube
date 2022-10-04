import React from 'react'
import { Icon } from '@iconify/react';
import { Link, Element } from 'react-scroll'
import { useNavigate } from 'react-router-dom';
import { Body, HeaderTitle } from './style'
import { Stock } from '../Gadgets/GlobalComponents'
import { FAQ } from '../Gadgets/Constants';
import 'react-responsive-modal/styles.css';

export default function FAQPage() {
    const navigate = useNavigate()
    return (
        <Body>
            <HeaderTitle>About us</HeaderTitle>

            <Stock className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-6xl p-5 gap-3'>
                <Link to='shipping' className='cursor-pointer flex flex-col items-center text-[#3e9ca3] font-semibold gap-1 bg-[#EEFEFE] border border-[#EAEAFA] rounded-md'>
                    <Icon icon="ic:twotone-local-shipping" color="#3e9ca3" width="27" height="27" />
                    Shipping
                </Link>
                <Link to='payment' className='cursor-pointer flex flex-col items-center text-[#3e9ca3] font-semibold gap-1 bg-[#EEFEFE] border border-[#EAEAFA] rounded-md'>
                    <Icon icon="fluent:payment-32-filled" color="#3e9ca3" width="27" height="27" />
                    Payment
                </Link>
                <Link to='editing' className='cursor-pointer flex flex-col items-center text-[#3e9ca3] font-semibold gap-1 bg-[#EEFEFE] border border-[#EAEAFA] rounded-md'>
                    <Icon icon="bx:edit" color="#3e9ca3" width="27" height="27" />
                    Editing
                </Link>
                <Link to='product' className='cursor-pointer flex flex-col items-center text-[#3e9ca3] font-semibold gap-1 bg-[#EEFEFE] border border-[#EAEAFA] rounded-md'>
                    <Icon icon="gridicons:product" color="#3e9ca3" width="27" height="27" />
                    Product
                </Link>
            </Stock>
            <Stock className='w-full max-w-6xl p-5'>
                {FAQ.map(faqOne => {
                    return (
                        <Element name={faqOne.name} className='mt-5'>
                            <Stock className='text-xl text-[#3e9ca3]'>{faqOne.question}</Stock>
                            <Stock className='mt-2'>{faqOne.answer}</Stock>
                        </Element>
                    )
                })}
            </Stock>
            <Stock className='w-full text-center max-w-6xl pb-5 border-b-[3px] border-[#3e9ca3]'>If you still have questions, feel free to <span className='text-[#3e9ca3] cursor-pointer' onClick={() => navigate('/contact')}>contact us</span>.</Stock>
        </Body>
    )
}
