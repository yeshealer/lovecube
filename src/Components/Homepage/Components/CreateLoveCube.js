import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateLoveCubeContent, CreateButton } from '../style'
import { Stock } from '../../Gadgets/GlobalComponents'
import { ButtonGroup } from '../../Gadgets/Constants'

export default function CreateLoveCube() {
    const navigate = useNavigate()
    return (
        <CreateLoveCubeContent>
            <Stock className="text-2xl font-semibold">Create a LoveCube for my</Stock>
            <Stock className="grid grid-cols-1 sm:grid-cols-2 max-w-[700px] gap-4 mt-8">
                {ButtonGroup.map((button) => {
                    return (
                        <CreateButton key={button} onClick={() => navigate(`/create-deck/${button.toLowerCase()}/to-who`)}>{button}</CreateButton>
                    )
                })}
            </Stock>
        </CreateLoveCubeContent>
    )
}
