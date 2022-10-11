import React from 'react'
import { Icon } from '@iconify/react'
import { UsersReviewContent, ReviewGroup, ReviewText, ReviewCard, ReviewerName, ReviewerPosition } from '../style'
import { Stock } from '../../Gadgets/GlobalComponents'
import { Reviews } from '../../Gadgets/Constants'

export default function UsersReview() {
    return (
        <UsersReviewContent>
            <ReviewGroup>
                {Reviews.map((Review, index) => {
                    return (
                        <ReviewCard key={index} className={(index > 2 && index % 3 === 0) ? 'md:col-start-2 md:col-end-3' : ''}>
                            <ReviewText>
                                <Icon icon="bxs:quote-alt-left" className='inline-block mr-3' color='lightgray' width={30} />
                                <i>{Review.review}</i>
                                <Icon icon="bxs:quote-alt-right" className='inline-block ml-3' color='lightgray' width={30} />
                            </ReviewText>
                            <Stock className="flex flex-col items-start ml-10 -mt-10">
                                <img src={Review.image} alt={Review.name} className="w-20 h-20 bg-slate-300 rounded-full border-[5px] border-white" draggable={false} />
                                <ReviewerName className="mt-4">{Review.name}</ReviewerName>
                                <ReviewerPosition>{Review.position}</ReviewerPosition>
                            </Stock>
                        </ReviewCard>
                    )
                })}
            </ReviewGroup>
        </UsersReviewContent>
    )
}
