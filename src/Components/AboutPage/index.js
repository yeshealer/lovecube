import React from 'react'
import { Icon } from '@iconify/react';
import { Body, HeaderTitle, SubTitle } from './style'
import { Button, Flex, Stock } from '../Gadgets/GlobalComponents'
import { AboutQuestion } from '../Gadgets/Constants'

export default function AboutPage() {
  return (
    <Body>
      <HeaderTitle>About us</HeaderTitle>
      <img src='assets/image/logo.png' alt='logo' width={60} height={60} />
      <Stock className='text-lg lg:text-xl xl:text-2xl text-stone-700 mt-2 text-center'><i>"The most desired gift of love is not diamonds or roses or chocolate. It's focused attention."</i></Stock>

      <SubTitle>Finding the perfect meaningful gift is tough.</SubTitle>
      <Stock className='block md:flex items-center w-full max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl gap-10 xl:gap-20 p-5 pb-0 text-stone-700'>
        <Stock className='w-full md:w-3/5'>
          <Stock className='text-base lg:text-base xl:text-xl leading-8'>It doesn't matter if you're deep in the throes of a new romance or you want to please someone you've been with for decades; finding the right gift is not easy.</Stock>
          <Stock className='text-base lg:text-base xl:text-xl mt-5 leading-8'>A great gift does not have to be expensive but it should reflect the uniqueness of your relationship with your special someone.</Stock>
        </Stock>
        <Stock className='flex flex-col items-start w-full md:w-2/5 mt-5 md:mt-0'>
          {AboutQuestion.map(question => {
            return (
              <Flex className='gap-3'>
                <Stock className='w-3 h-3 rounded-full bg-[#3e9ca3]' />
                <Stock className='text-base lg:text-base xl:text-xl leading-7 xl:leading-9'>{question}</Stock>
              </Flex>
            )
          })}
        </Stock>
      </Stock>

      <SubTitle>LoveCube takes the uncertainty and frustration out of finding a meaningful gift.</SubTitle>
      <Stock className='w-full block md:flex items-start gap-5 max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl p-5 pb-0 text-stone-700'>
        <Stock className='w-full md:w-[25%] flex flex-col justify-center items-center'>
          <Icon icon="ant-design:mail-twotone" color="#3e9ca3" width="50" height="50" />
          <Stock className='text-base lg:text-base xl:text-xl tracking-wide leading-7 lg:leading-8'>A LoveCube is a modern-day love letter. The focus is on them, and who doesn't want to hear wonderful things about themselves?</Stock>
        </Stock>
        <Stock className='w-full md:w-[43%] flex flex-col justify-center items-center mt-5 md:mt-0'>
          <Icon icon="bx:message-edit" color="#3e9ca3" width="50" height="50" />
          <Stock className='text-base lg:text-base xl:text-xl tracking-wide leading-7 lg:leading-8'>Based on a short survey where you tell us about your special someone and your relationship, we'll craft messages and suggest images you can use to create the perfect keepsake. Use the messages and images "as-is", add your own, or completely replace the ones we generate with your own.</Stock>
        </Stock>
        <Stock className='w-full md:w-[32%] flex flex-col justify-center items-center mt-5 md:mt-0'>
          <Icon icon="bx:gift" color="#3e9ca3" width="50" height="50" />
          <Stock className='text-base lg:text-base xl:text-xl tracking-wide leading-7 lg:leading-8'>Your messages and photos will be beautifully printed and nestled into a handsome keepsake box. They will never forget receiving a LoveCube.</Stock>
        </Stock>
      </Stock>

      <SubTitle>Proudly based in Chattanooga, TN, USA.</SubTitle>
      <Stock className='w-full flex flex-col md:flex-row items-center md:items-start gap-5 max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl p-5 pb-0 text-stone-700'>
        <Stock className='text-base lg:text-base xl:text-xl leading-7 lg:leading-8 w-full md:w-[55%]'>LoveCubes are printed, assembled, and shipped from my family's printing business (<i>Spendid Printing</i>) in Chattanooga, TN. With standard delivery, transit time is generally only 2-3 days in the continental US. Orders are usually printed and shipped the next business day, so you'll get your printed LoveCube in less than a week. Electronic LoveCubes ("Nimbles") are available immediately.</Stock>
        <img src='assets/image/chattanooga.png' alt='map-1' className='w-[90%] md:w-[45%] drop-shadow-2xl' />
      </Stock>

      <SubTitle>Family-owned for 40 years.</SubTitle>
      <Stock className='w-full flex items-start gap-5 max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl p-5 pb-0 text-stone-700'>
        <Stock className='w-1/3 flex flex-col items-center justify-center'>
          <img src='https://www.lovecube.com/static/lovecube/img/about/davidBox.jpg' alt='boxmakeman' className='rounded-xl shadow-xl' />
          <Stock className='text-base lg:text-base xl:text-xl leading-7 lg:leading-8 w-full lg:w-2/3 text-center'>David (my nephew) assembling LoveCubes for shipment.</Stock>
        </Stock>
        <Stock className='w-2/3'>
          <Stock className='text-base lg:text-base xl:text-xl leading-7 lg:leading-8'>Personalized printing (i.e., stationery, invitations, business cards, etc.) has been part of our business from the beginning. We understand that every job has to look great and that individuals have concerns above what commercial customers have. We're eager to connect by phone or email if you have any questions about your order.</Stock>
          <Stock className='gap-5 mt-5 flex items-start sr-only md:not-sr-only'>
            <Stock className='bg-[#3e9ca3] rounded-[30px] w-1/2 text-base lg:text-base xl:text-xl leading-7 lg:leading-8 p-2 lg:p-6 text-white flex flex-col items-center'>
              <Stock className='text-center'>It was so nice to get a real person on the phone to discuss my LoveCube. I would recommend this company to anyone.</Stock>
              <Stock>- Amy</Stock>
            </Stock>
            <Stock className='bg-[#3e9ca3] rounded-[30px] w-1/2 text-base lg:text-base xl:text-xl leading-7 lg:leading-8 p-2 lg:p-6 text-white flex flex-col items-center'>
              <Stock className='text-center'>They went ABOVE & BEYOND! Customer service and attention to detail are top notch.</Stock>
              <Stock>- Lauren</Stock>
            </Stock>
          </Stock>
        </Stock>
      </Stock>
      <Stock className='w-full max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl p-5 gap-5 flex flex-col sm:flex-row items-start not-sr-only md:sr-only'>
        <Stock className='bg-[#3e9ca3] rounded-[30px] w-full sm:w-1/2 text-base lg:text-base xl:text-xl leading-7 lg:leading-8 p-2 lg:p-6 text-white flex flex-col items-center'>
          <Stock className='text-center'>It was so nice to get a real person on the phone to discuss my LoveCube. I would recommend this company to anyone.</Stock>
          <Stock>- Amy</Stock>
        </Stock>
        <Stock className='bg-[#3e9ca3] rounded-[30px] w-full sm:w-1/2 text-base lg:text-base xl:text-xl leading-7 lg:leading-8 p-2 lg:p-6 text-white flex flex-col items-center'>
          <Stock className='text-center'>They went ABOVE & BEYOND! Customer service and attention to detail are top notch.</Stock>
          <Stock>- Lauren</Stock>
        </Stock>
      </Stock>

      <SubTitle>Our 100% Risk-Free Guarantee.</SubTitle>
      <Stock className='w-full flex flex-col items-end gap-5 max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl p-5 pb-0 text-stone-700'>
        <Stock className='flex flex-col md:flex-row items-end md:items-start justify-between'>
          <Stock className='text-base lg:text-base xl:text-xl w-full md:w-8/12 pr-10'>
            <Stock className='leading-7 lg:leading-8'>It's important to us that we meet your expectations, and we stand behind every LoveCube we print. If there is any concern regarding your order, contact us by phone or email, and we'll work to make it right. Finally, If your special someone isn't thrilled with their LoveCube, return it to us for a full refund.</Stock>
            <Stock className='leading-7 lg:leading-8 mt-5'>Thanks for visiting our site and considering LoveCube for your special gift.</Stock>
          </Stock>
          <img src='assets/image/ClifBrown.jpg' alt='ceo selfi' className='w-[220px] rounded-lg shadow-xl mr-20' />
        </Stock>
        <img src='https://www.lovecube.com/static/lovecube/img/about/signature.png' alt='ceo sign' className='w-[200px] -mt-10' />
      </Stock>

      <Stock className='w-full flex flex-col items-center max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl p-5 pb-10 text-stone-700 border-b-[3px] border-[#3e9ca3]'>
        <Button className='bg-[#9a1f60] p-2 px-4 text-white text-base lg:text-base xl:text-xl rounded-md shadow-xl border border-[#3e9ca3]'>Click Here To Make Someone Feel Amazing!</Button>
        <Stock className='text-base lg:text-base xl:text-xl mt-2 text-stone-500'>(No credit card required to start)</Stock>
      </Stock>
    </Body>
  )
}
