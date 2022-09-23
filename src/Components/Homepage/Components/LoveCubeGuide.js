import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import { LoveCubeGuideContent, Guide } from '../style'
import { Stock } from '../../Gadgets/GlobalComponents'
import { CreateGuide } from '../../Gadgets/Constants'

export default function LoveCubeGuide() {
    return (
        <LoveCubeGuideContent>
            <Stock className="text-3xl text-stone-700 font-semibold">Creating a LoveCube Is Easy</Stock>
            <Stock className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-7xl gap-x-10 gap-y-3 mt-10">
                {CreateGuide.map((guide) => {
                    return (
                        <Guide key={guide.title}>
                            <Player
                                autoplay
                                loop
                                src={guide.animation}
                                style={{ height: '120px', width: '120px' }}
                            />
                            <Stock className="text-stone-700 text-3xl">{guide.title}</Stock>
                            <Stock className="text-stone-700 text-center mt-5">{guide.description}</Stock>
                        </Guide>
                    )
                })}
            </Stock>
        </LoveCubeGuideContent>
    )
}
