import React from 'react'

const Footer = () => {
  return (
    <div className=' text-center w-full h-35 border-t border-slate-700 p-8 bg-[#0F172A] text-[#E5E7EB] '>
        <h1 className='font-sm '>CloneCraft - © 2026</h1>
        <div className='flex gap-25 mt-4 justify-center text-xl'>
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/faq">FAQ</a>
        </div>
    </div>
  )
}

export default Footer