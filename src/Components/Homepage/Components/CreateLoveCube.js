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
                        <button key={button} onClick={() => navigate(`/create-deck/${button.toLowerCase()}/to-who`)} class="text-[#3e9ca3] w-[300px] sm:w-[270px] md:w-[350px] hover:text-white relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                            <span class="w-full h-full bg-gradient-to-br from-[#3e9ca3] via-[#60bb0e] to-[#00ffc4] group-hover:from-[#3e9ca3] group-hover:via-[#60bb0e] group-hover:to-[#3e9ca3] group-hover:border-2 group-hover:border-green-300 group-hover:rounded-xl absolute"></span>
                            <span class="relative w-full py-3 transition-all ease-out bg-white rounded-md group-hover:bg-opacity-0 duration-400">
                                <span class="relative">{button}</span>
                            </span>
                        </button>
                    )
                })}
            </Stock>
        </CreateLoveCubeContent>
    )
}
