import React from 'react'
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  return (
    <nav className=' fixed shadow-md top-0 z-50 w-full h-18 border-b-2 bg-white'>
        <div className='md:w-7xl  mx-auto h-full flex justify-between px-3 items-center'>
            <a className='text-2xl md:text-3xl font-bold' href="/"> Fronted Practice</a>
            <div className=' hidden md:block '>
                <a className='mx-3 font-bold text-xl' href="/">Home</a>
                <a className='mx-3 font-bold text-xl' href="/projects">Projects</a>
                <a className='mx-3 font-bold text-xl' href="/faq">FAQ</a>
            </div>
            <div className='md:hidden '>{<TiThMenu className='text-3xl '/>}</div>
        </div>
    </nav>
  )
}

export default Navbar