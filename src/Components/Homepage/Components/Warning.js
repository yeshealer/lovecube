import React from 'react'
import { Icon } from '@iconify/react';
import { WarningContent } from '../style'
import { Flex, Stock } from '../../Gadgets/GlobalComponents'

export default function Warning() {
    return (
        <WarningContent>
            <img src={`assets/image/bar_teal.jpg`} alt='warning-bar' className="w-full h-7" />
            <Flex className="flex-col p-3 bg-[#3e9ca3] w-full">
                <Flex className="gap-3">
                    <Icon icon="openmoji:warning" width="50" height="50" />
                    <Stock className="text-2xl font-black">Warning</Stock>
                    <Icon icon="openmoji:warning" width="50" height="50" />
                </Flex>
                <Stock className="text-center text-base md:text-lg font-bold max-w-7xl p-3">
                    Persons receiving a LoveCube have been known to experience the following side effects: Profound feelings of affection, sensations of being admired, skipped heartbeats, lump(s) in throat, butterflies in stomach and an irresistible urge to snuggle warm puppies and cute kittens. Please gift responsibly.
                </Stock>
            </Flex>
            <img src={`assets/image/bar_teal.jpg`} alt='warning-bar' className="w-full h-7" />
        </WarningContent>
    )
}
