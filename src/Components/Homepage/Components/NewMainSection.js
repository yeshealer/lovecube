import React from 'react'
import { Icon } from '@iconify/react';
import { NewMainSectionContent } from '../style'

export default function NewMainSection() {
    return (
        <NewMainSectionContent>
            <img src='assets/image/homepage/1.png' alt='main bg' className='w-44 md:w-52 xl:w-60 2xl:w-80 absolute -top-[18%] -left-[6.5%] rotate-[24deg] z-20' draggable={false} />
            <img src='assets/image/homepage/2.png' alt='main bg' className='w-40 xl:w-48 2xl:w-60 absolute left-[6.5%] z-10 hidden md:block' draggable={false} />
            <img src='assets/image/homepage/3.png' alt='main bg' className='w-40 xl:w-48 2xl:w-60 absolute -left-[6%] top-[7%] z-10 hidden sm:block' draggable={false} />
            <img src='assets/image/homepage/4.png' alt='main bg' className='w-44 xl:w-52 2xl:w-64 absolute left-[10%] top-[25%] -rotate-[15deg] z-0 hidden lg:block' draggable={false} />
            <img src='assets/image/homepage/5.png' alt='main bg' className='w-44 xl:w-52 2xl:w-64 absolute -left-[8%] md:-left-[1.5%] top-[34%] rotate-[20deg] z-0 hidden sm:block' draggable={false} />
            <img src='assets/image/homepage/6.png' alt='main bg' className='w-40 xl:w-48 2xl:w-60 absolute -left-[12%] md:-left-[6.5%] bottom-[34%] -rotate-45 z-20 hidden sm:block' draggable={false} />
            <img src='assets/image/homepage/7.png' alt='main bg' className='w-44 md:w-52 xl:w-60 2xl:w-80 absolute left-[2.8%] bottom-[8%] -rotate-[20deg] hidden sm:block' draggable={false} />
            <img src='assets/image/homepage/10.png' alt='main bg' className='w-44 md:w-52 xl:w-60 2xl:w-80 absolute -left-[8.5%] -bottom-[8%] -rotate-45' draggable={false} />
            <img src='assets/image/homepage/8.png' alt='main bg' className='w-44 md:w-52 xl:w-60 2xl:w-80 absolute left-[8.5%] -bottom-[14%] -rotate-[20deg] z-10' draggable={false} />
            <img src='assets/image/homepage/9.png' alt='main bg' className='w-44 md:w-52 xl:w-60 2xl:w-80 absolute left-[20%] bottom-0 rotate-[20deg]' draggable={false} />
            <img src='assets/image/homepage/11.png' alt='main bg' className='w-[200px] md:w-[270px] lg:w-[300px] xl:w-[400px] 2xl:w-[500px] absolute right-[1%] -bottom-[10%] -bottom-[15%] xl:-bottom-[18%]' draggable={false} />
            <div className='text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-center mt-16 font-thin text-[gray]'>Enjoy Free Shipping and 10% off your first order</div>
            <div className='text-[90px] md:text-[110px] lg:text-[130px] xl:text-[150px] 2xl:text-[180px] text-center font-[Daydream] mt-20 xl:mt-32 glow-text'>Story Bric</div>
            <div className='text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-center font-[Bison] widest-font -mt-12 glow-text'>CREATE A BOX FULL OF MEMORIES</div>
            <div className='flex justify-center mt-12 xl:mt-20'>
                <button class="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
                    <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                    <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                    <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                    <div className='inline-flex items-center gap-3 lg:gap-4 xl:gap-5'>
                        <span class="relative text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-xl">Begin for free</span>
                        <Icon icon="akar-icons:circle-chevron-right" className='w-[20px] lg:w-[25px] xl:w-[25px] h-[20px] lg:h-[25px] xl:h-[25px] relative' />
                    </div>
                </button>
            </div>
        </NewMainSectionContent>
    )
}
