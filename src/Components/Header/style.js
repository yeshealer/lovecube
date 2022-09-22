import { wrapn } from "wrapn";

export const Body = wrapn('div')`
    w-full flex items-center justify-center py-3
`

export const Content = wrapn('div')`
    w-full flex items-center justify-between max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl
`

export const LogoSection = wrapn('div')`
    flex items-center
`

export const LogoTitle = wrapn('p')`
    text-4xl font-semibold ml-1
`

export const Navbar = wrapn('div')`
    ml-7 font-bold text-[15px]
`

export const CreateBtn = wrapn('button')`
    bg-[#3e9ca3] text-white ml-7 font-bold py-1.5 px-3 text-lg rounded-md
`