import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const sectionRef = useRef(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
    <Navbar></Navbar>
    <div className='w-full mt-18 h-auto bg-[#FAEBD7] border-b-2'>
        <div className='  flex gap-12  md:w-7xl mx-auto p-8  h-95 md:h-168'>
                <div className='mx-auto max-w-xl md:p-8 '>
                    <h1 className=' text-3xl md:text-5xl font-bold md:mt-20'>Become a better frontend developer.</h1>
                    <p className='text-xl font-sm my-6 max-w-2xl'>Take your frontend skills to the next level by recreating <span className=' font-bold'>real websites</span> from real companies.</p>
                    <p className='text-xl font-sm my-6 max-w-2xl' >The perfect type of practice for developers of all skill levels. Are you up for the challenge?</p>
                    <div className='flex gap-4 my-6'>
                        <Link to="/projects">
                        <button className='hover:bg-black hover:text-white transition-all duration-300 md:cursor-pointer py-3 px-6 font-bold text-xl text-slate-500 border border-black  '>View Projects</button>
                        </Link>
                        <button onClick={handleScroll} className='hover:bg-black hover:text-white transition-all duration-300 md:cursor-pointer py-3 px-6 font-bold text-xl text-slate-500 border border-black  '>Learn More</button>
                    </div>
                </div>
                <div className='hidden md:block mx-w-auto'>
                    <img className='h-120 mt-16 object-cover ' src="https://www.frontendpractice.com/project-collage.png" />
            </div>
        </div>
    </div>
    <div  className=' w-full text-center my-12'>
        <h2 className='text-4xl font-bold '>Frontend Practice provides you with the <br /> inspiration and resources to create <br /> beautiful websites.</h2>
    </div>
    <div className=' w-full text-center my-12'>
        <h2 className='text-2xl font-semibold '>Here are some ways you can benefit <br /> from using our platform:</h2>
    </div>


    <div className='w-full flex justify-center my-8'>
        <div className=' w-250 grid grid-cols-2 gap-4 grid-rows-2'>
            <div className='border-2 mx-w-sm flex gap-6 p-4'>
                <div>
                    <img className='h-28 w-45' src="https://images.prismic.io/frontendpractice/f990db40-ba07-479c-b52c-3b2c6caabc89_domain.png?auto=compress,format" alt="" />
                </div>
                <div className='flex items-center text-xl w-100 font-bold text-center'>
                    <p className='text-wrap'>Enhance your skills by building real websites selected for their educational value.</p>
                </div>
            </div>
            <div className='flex border-2 mx-w-sm mx-auto p-4 gap-6'>
                <div>
                    <img className='h-25 w-45' src="https://images.prismic.io/frontendpractice/65eee214-bbfe-4f9e-ad0f-70f7785679be_layout.png?auto=compress,format" alt="" />
                </div>
                <div className="flex items-center text-xl w-100 font-bold text-center">
                    <p>Test and improve your frontend knowledge through various challenges.</p>
                </div>
            </div>
            <div className=' flex border-2 mx-w-sm mx-auto p-4 gap-6'>
                <div>
                    <img className='h-25 w-45' src="https://images.prismic.io/frontendpractice/8d3c1f70-6ff3-41f0-b9d6-3b46f2899359_pantone.png?auto=compress,format" alt="" />
                </div>
                <div className="flex items-center text-xl w-100 font-bold text-center">
                    <p>Use the provided color palettes for each project to save time.</p>
                </div>
            </div>
            <div className='flex border-2 mx-w-sm mx-auto p-4 gap-6'>
                <div>
                    <img className='h-25 w-45' src="https://images.prismic.io/frontendpractice/d6e88860-7347-4d32-acf8-aa1f01db8685_idea.png?auto=compress,format" alt="" />
                </div>
                <div className="flex items-center text-xl w-100 font-bold text-center">
                    <p>Find helpful, curated resources to tackle challenging elements.</p>
                </div>
            </div>

        </div>


    </div>

    <div ref={sectionRef} className='w-full text-center my-12'>
        <h2 className='text-3xl font-extrabold  '>Ready to become a better <br /> frontend developer?</h2>
    </div>

    <Link to="/projects" >
    <div className='flex justify-center mb-12'>
    <button className='hover:bg-black hover:text-white transition-all duration-300 md:cursor-pointer py-3 px-6 font-bold text-xl text-slate-700 border border-black  '>Get Started</button>
    </div>
    </Link>

    <Footer/>

    </>
  )
}

export default Home