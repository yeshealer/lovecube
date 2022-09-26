import { wrapn } from "wrapn";

export const Body = wrapn('div')`
    w-full flex flex-col items-center justify-center
`

export const HeaderTitle = wrapn('div')`
    text-4xl font-semibold text-stone-600 py-12 w-full text-center max-w-7xl
`

export const SubTitle = wrapn('div')`
    text-3xl font-semibold py-8 text-[#9a1f60]
`

export const Content = wrapn('div')`
    w-full max-w-7xl
`