import React from 'react'
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
                                <i>{Review.review}</i>
                            </ReviewText>
                            <Stock className="flex flex-col items-start ml-10 -mt-10">
                                <img src={Review.image} alt={Review.name} className="w-20 h-20 bg-slate-300 rounded-full" />
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
