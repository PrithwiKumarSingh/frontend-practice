import React from 'react'
import { useParams } from 'react-router-dom';
import {projects} from '../data/Projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  console.log(project);
  
  return (
    <>
    <Navbar/>
    <div className='w-full mt-15 '>
      <div className='w-313 mx-auto bg-[#F9F9F9] border-x-2 border-t-2'>

         {/* heading */}
      <div className='text-center'>
        <h1 className='text-8xl font-bold mt-10'>{project.name}</h1>
        <h2 className='text-3xl font-semibold'>About page</h2>
        <div className='flex gap-5 justify-center my-4'>
          <a href="">🌐View Live</a>
          <a href="">📷Free Photo Assets</a>
          <a href="">⭐Open Source Icons</a>
        </div>
      </div>

      {/* Body Resouce */}

      <div className=' grid grid-cols-3 text-center border-t-2'>
        <div className='border-r-2 py-4'>
          <h2 className='text-2xl font-semibold'>Recreate this to learn:</h2>
          <ul className=' w-40 mx-auto text-start font-semibold'>
            <li className='list-disc'>Typography choices</li>
            <li className='list-disc'>Spacing</li>
            <li className='list-disc'>Unique grid layout</li>
            <li className='list-disc'>Multi-column footer</li>
            <li className='list-disc'>and more!</li>
          </ul>
        </div>

        <div className='text-2xl text-center py-4 border-r-2'>
          <h2 className='text-2xl font-semibold mb-4'>Color Palette:</h2>
          <div className='grid grid-cols-2 w-60 font-medium mx-auto gap-2 '>
            <div className='flex gap-1 items-center'>
              <div className='h-6 w-6 rounded-full border-[0.2px] border-gray-400 bg-[#fbffa7] '></div>
              <p className='text-xl'>#fbffa7</p>
            </div>
            <div className='flex gap-1 items-center'>
              <div className='h-6 w-6 rounded-full border-[0.2px] border-gray-400 bg-[#ff764d] '></div>
              <p className='text-xl'>#fbffa7</p>
            </div>
            <div className='flex gap-1 items-center'>
              <div className='h-6 w-6 rounded-full border-[0.2px] border-gray-400 bg-[#b1c5ff] '></div>
              <p className='text-xl'>#fbffa7</p>
            </div>
            <div className='flex gap-1 items-center'>
              <div className='h-6 w-6 rounded-full border-[0.2px] border-gray-400 bg-[#d5b3ff] '></div>
              <p className='text-xl'>#fbffa7</p>
            </div>
            <div className='flex gap-1 items-center'>
              <div className='h-6 w-6 rounded-full border-[0.2px] border-gray-400 bg-[#b6ffc0] '></div>
              <p className='text-xl'>#fbffa7</p>
            </div>
            <div className='flex gap-1 items-center'>
              <div className='h-6 w-6 rounded-full border-[0.2px] border-gray-400 bg-[#0000ff] '></div>
              <p className='text-xl'>#fbffa7</p>
            </div>
          </div>
          
        </div>

        <div className='py-4'>
          <h2 className='text-2xl font-extrabold mb-2'>Resources:</h2>
          <div className='flex flex-col text-start w-52 mx-auto font-semibold underline'>
            <a className='hover:text-blue-700' href="">A Complete Guide to Grid</a>
            <a className='hover:text-blue-700' href="">A Complete Guide to Flexbox</a>
            <a className='hover:text-blue-700' href="">CSS Box Model</a>
            <a className='hover:text-blue-700' href="">Multi-Level Sticky Footer</a>
          </div>
        </div>
      </div>

      {/* movitivaton  */}

      <div className='px-35 py-15 bg-white grid grid-cols-3 gap-45 border-t-2 border-b-2'>
        <div className='w-90 py-6 px-4 bg-black text-white'>
          <h2 className='text-3xl font-extrabold'>Up for a challenge?</h2>
          <p className='text-lg font-extralight'>Try building the mega-menu that appears when you click "More +" in the main menu.</p>
        </div>
        <div className='w-90 py-6 px-4 bg-[#494949] text-white'>
          <h2 className='text-4xl font-extrabold'>Too easy?</h2>
          <p className='text-lg'>Is it responsive on mobile? Make the 2nd menu bar sticky on scroll.</p>
        </div>
        <div className='w-50 py-6 px-4 border-2'>
          <h2 className='text-4xl font-extrabold'>Too hard?</h2>
          <p className='text-xl font-medium mt-2'>That's ok!</p>
          <a className='font-semibold hover:text-blue-700 underline' href="">View other projects</a>
        </div>
      </div>


      {/* image */}
      <div className='p-10 text-center bg-white'>
        <h2 className='text-5xl font-extrabold mb-12'>Reference image</h2>
        <div className='rounded-xl overflow-hidden drop-shadow-2xl '>
          <img src="https://www.frontendpractice.com/fullsize/C1-Ableton.jpg" alt="" />
        </div>
      </div>


      </div>
    </div>

    <Footer/>
    </>
  )
}

export default ProjectDetails