import { wrapn } from "wrapn";

export const Body = wrapn('div')`
    w-full flex items-center justify-center pt-3 bg-[#f3f4f6]
`

export const Content = wrapn('div')`
    w-full flex flex-col items-center justify-center max-w-7xl pt-16 text-stone-700
`

export const LogoSection = wrapn('div')`
    flex items-center flex-col
`

export const LogoTitle = wrapn('p')`
    text-3xl sm:text-4xl font-semibold ml-1 text-stone-700
`

export const FooterLink = wrapn('div')`
    w-full flex flex-col md:flex-row items-center justify-between border-t border-grey p-5 mt-5
`