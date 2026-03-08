import React from 'react'
import { Link } from 'react-router-dom'
import NotFoundPage from "../assets/notfound.jpg";

const NotFound = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center '>
        

        <div >
            <img className="h-160 w-full" src={NotFoundPage} alt="404 Not Found" />
        </div>

        <div >
        <Link to="/">
                
                    <button className='mx-6 hover:bg-black hover:text-white transition-all duration-300 md:cursor-pointer py-3 px-6 font-bold text-xl text-slate-700 border border-black  '>Return Home</button>
        </Link>
        <Link to="/projects">
                
                    <button className='hover:bg-black hover:text-white transition-all duration-300 md:cursor-pointer py-3 px-6 font-bold text-xl text-slate-700 border border-black  '>Return Projects</button>
        </Link>
        </div>
    </div>
  )
}

export default NotFound