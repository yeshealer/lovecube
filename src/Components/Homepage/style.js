
import { wrapn } from 'wrapn'

export const Body = wrapn('div')`
    w-full flex flex-col items-center justify-center
`

export const Promotion = wrapn('div')`
    w-full flex flex-col justify-center items-center bg-[#9a1f60] text-white text-lg font-semibold p-1
`

export const VideoSection = wrapn('div')`
    grid grid-cols-2 items-center p-5
`

export const CreateLoveCube = wrapn('div')`
    bg-[#3e9ca3] w-full text-center text-white py-10 flex flex-col items-center
`

export const ImageCarousel = wrapn('div')`
    w-full text-center py-10 flex flex-col items-center max-w-[1160px]
`

export const UsersReview = wrapn('div')`
    w-full text-center bg-[#f3f4f6] p-10 flex justify-center
`

export const Title = wrapn('p')`
    text-5xl tracking-wide
`

export const CreateButton = wrapn('button')`
    border-2 bg-white border-[#2f6569] text-[#2f6569] rounded-lg text-[20px] font-semibold w-[350px] py-2
`

export const ReviewGroup = wrapn('div')`
    max-w-7xl grid grid-cols-3 gap-10
`

export const LoveCubeGuide = wrapn('div')`
    w-full bg-[#f3f4f6] flex flex-col justify-center items-center p-10
`

export const ReviewCard = wrapn('div')`
    w-full max-w-md h-min relative
`

export const Skeleton = wrapn('div')`
    animate-pulse flex space-x-4
`

export const ReviewerName = wrapn('div')`
    text-xl font-bold text-stone-600
`

export const ReviewerPosition = wrapn('div')`
    text-base font-semibold text-stone-500
`

export const ReviewText = wrapn('div')`
    bg-white text-lg p-10 pb-14 h-min text-left
`

export const Guide = wrapn('div')`
    bg-white w-full p-5 flex flex-col items-center justify-center
`

export const PromotionDetail = wrapn('div')`
    w-full p-10 max-w-7xl flex flex-col items-center
`

export const Warning = wrapn('div')`
    w-full flex justify-center flex-col items-center shadow-2xl
`