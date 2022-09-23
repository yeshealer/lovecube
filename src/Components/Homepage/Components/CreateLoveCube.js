import React from 'react'
import { CreateLoveCubeContent, CreateButton } from '../style'
import { Stock } from '../../Gadgets/GlobalComponents'
import { ButtonGroup } from '../../Gadgets/Constants'

export default function CreateLoveCube() {
    return (
        <CreateLoveCubeContent>
            <Stock className="text-2xl font-semibold">Create a LoveCube for my</Stock>
            <Stock className="grid grid-cols-1 sm:grid-cols-2 max-w-[700px] gap-4 mt-8">
                {ButtonGroup.map((button) => {
                    return (
                        <CreateButton key={button}>{button}</CreateButton>
                    )
                })}
            </Stock>
        </CreateLoveCubeContent>
    )
}
