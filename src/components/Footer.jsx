import React from 'react'

const Footer = () => {
  return (
    <div className=' text-center w-full h-35 p-8 bg-black text-white '>
        <h1 className='font-sm '>Frontend Practice - © 2026</h1>
        <div className='flex gap-25 mt-4 justify-center text-xl'>
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/faq">FAQ</a>
        </div>
    </div>
  )
}

export default Footer