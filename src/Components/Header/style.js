import { wrapn } from "wrapn";

export const Body = wrapn('div')`
    w-full flex items-center justify-center py-3 border-b
`

export const Content = wrapn('div')`
    w-full flex items-center justify-between max-w-md sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl px-4
`

export const LogoSection = wrapn('div')`
    flex items-center cursor-pointer
`

export const LogoTitle = wrapn('p')`
    text-3xl font-semibold ml-1 text-stone-500
`

export const Navbar = wrapn('button')`
    lg:ml-7 font-bold text-md my-2 lg:my-0 lg:text-sm text-stone-500 w-[300px] sm:w-[350px] md:w-[400px] lg:w-auto
`

export const CreateBtn = wrapn('button')`
    bg-[#3e9ca3] text-white ml-7 font-bold py-1.5 px-3 text-base rounded-md
`