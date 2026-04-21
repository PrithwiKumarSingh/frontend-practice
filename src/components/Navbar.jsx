import React from 'react'
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  return (
    <nav className=' fixed shadow-md text-[#e0e0e0] top-0 z-50 w-full h-18 border border-[#1E1E1E]  bg-[#0F172A]'>
        <div className='md:w-7xl  mx-auto h-full flex justify-between px-3 items-center'>
            <a className='text-2xl md:text-3xl font-bold text-[#FFBF00]' href="/"> <span className='text-[#e0e0e0]'>Clone</span>Craft</a>
            <div className=' hidden md:block '>
                <a className='mx-10 hover:underline hover:text-[#FFBF00]  font-bold text-xl' href="/">Home</a>
                <a className='mx-10 hover:underline hover:text-[#FFBF00] font-bold text-xl' href="/projects">Projects</a>
                <a className='mx-10 hover:underline hover:text-[#FFBF00] font-bold text-xl' href="/faq">FAQ</a>
            </div>
            <div className='md:hidden '>{<TiThMenu className='text-3xl '/>}</div>
        </div>
    </nav>
  )
}

export default Navbar