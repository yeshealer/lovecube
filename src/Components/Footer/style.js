import { wrapn } from "wrapn";

export const Body = wrapn('div')`
    w-full flex items-center justify-center pt-3
`

export const Content = wrapn('div')`
    w-full flex flex-col items-center justify-center max-w-7xl pt-16
`

export const LogoSection = wrapn('div')`
    flex items-center flex-col
`

export const LogoTitle = wrapn('p')`
    text-5xl font-semibold ml-1
`

export const FooterLink = wrapn('div')`
    w-full flex justify-between border-t border-black p-5
`