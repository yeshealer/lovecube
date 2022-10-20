import React from 'react'
import { NewCreateGroupContent } from '../style'
import { NewCreateButtonGroup } from '../../Gadgets/Constants'

export default function NewCreateGroup() {
    return (
        <NewCreateGroupContent>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-10 w-[1300px] 2xl:w-[1500px]'>
                {NewCreateButtonGroup.map((createButton, index) => (
                    <div className={`p-8 ${createButton.effect}`} key={index + createButton.name}>
                        <div className='p-4 rounded-[50px] rounded-tl-none flex flex-col gap-3 bg-white'>
                            <img src={`assets/image/createButton/${index + 1}.png`} alt='create button' draggable={false} className="rounded-tr-2xl" />
                            <button className="gradient-btn text-md py-3 rounded-full text-center uppercase">
                                {createButton.name}
                                <div className='absolute top-0 rounded-full left-[0.9%] w-[98.6%] h-[93%] top-[3.5%] bg-white hover:opacity-0 opacity-1 animation-all duration-200 text-black flex items-center justify-center'>{createButton.name}</div>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </NewCreateGroupContent>
    )
}
