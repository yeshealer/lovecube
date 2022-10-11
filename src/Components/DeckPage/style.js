import { wrapn } from "wrapn";

export const Body = wrapn('div')`
    w-full flex flex-col items-center justify-center
`

export const HeaderTitle = wrapn('div')`
    text-3xl font-semibold text-stone-600 py-12 border-b-[3px] border-[#3e9ca3] w-full text-center max-w-6xl mb-10
`

export const SubTitle = wrapn('div')`
    text-xl lg:text-2xl xl:text-3xl font-semibold py-8 text-[#9a1f60] text-center
`