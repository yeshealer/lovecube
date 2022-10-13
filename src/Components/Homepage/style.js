
import { wrapn } from 'wrapn'

export const Body = wrapn('div')`
    w-full flex flex-col items-center justify-center
`

export const PromotionContent = wrapn('div')`
    w-full flex flex-col justify-center items-center bg-[#9a1f60] text-white text-base sm:text-lg font-semibold p-1 cursor-pointer shadow-xl
`

export const VideoSectionContent = wrapn('div')`
    w-full m-5 flex justify-center
`

export const CreateLoveCubeContent = wrapn('div')`
    bg-[#3e9ca3] w-full text-center text-white py-10 flex flex-col items-center
`

export const ImageCarouselContent = wrapn('div')`
    w-full text-center py-10 flex flex-col items-center max-w-[1160px]
`

export const UsersReviewContent = wrapn('div')`
    w-full text-center bg-[#f3f4f6] p-10 flex justify-center
`

export const Title = wrapn('p')`
    text-4xl xl:text-5xl tracking-wide text-white font-500 glow-text font-medium
`

export const CreateButton = wrapn('button')`
    border-2 bg-white border-[#2f6569] text-[#2f6569] rounded-lg text-[20px] font-semibold w-[300px] sm:w-[270px] md:w-[350px] py-2 hover:bg-emerald-100 animation-all duration-300
`

export const ReviewGroup = wrapn('div')`
    max-w-6xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10
`

export const LoveCubeGuideContent = wrapn('div')`
    w-full bg-[#f3f4f6] flex flex-col justify-center items-center p-10
`

export const ReviewCard = wrapn('div')`
    w-full max-w-md h-min relative
`

export const Skeleton = wrapn('div')`
    animate-pulse flex space-x-4
`

export const ReviewerName = wrapn('div')`
    text-base font-bold text-stone-600
`

export const ReviewerPosition = wrapn('div')`
    text-sm font-semibold text-stone-500
`

export const ReviewText = wrapn('div')`
    bg-white text-[15px] p-10 pb-14 h-min text-left text-stone-800 shadow-lg
`

export const Guide = wrapn('div')`
    bg-white w-full p-5 flex flex-col items-center justify-center
`

export const PromotionDetailContent = wrapn('div')`
    w-full p-10 max-w-7xl flex flex-col items-center
`

export const WarningContent = wrapn('div')`
    w-full flex justify-center flex-col items-center shadow-2xl
`