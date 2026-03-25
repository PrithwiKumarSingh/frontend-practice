import React from 'react'

const ProjectCard = (props) => {
  return (
    <div>
    <div className=' w-full relative transition-all duration-300 hover:-translate-y-4'>
    <div className=' w-fit border-2 h-auto '>
        <div className="border-2 absolute w-24 h-10 bg-[#BCFF93]  -right-2 -top-2 content-center" style={props.data.label === "Level 2"? {backgroundColor: "#FCFF74" }: props.data.label === "Level 3"? { backgroundColor:"#FFD430" } : { backgroundColor:"#BCFF93" } }>
            <h2 className='text-black text-xl flex justify-center font-bold'>{props.data.label}</h2>
             </div>
        <div className='overflow-hidden'>
            <img className='h-100 w-100' src={props.data.image} alt="" />
        </div>
        <div className=' text-start py-4 px-4 border-t-2 bg-[#faebd7]'>
            <h2 className='text-3xl text-slate-800 font-extrabold  underline '>{props.data.name}</h2>
        </div>
    </div>
    </div>
    </div>
  )
}

export default ProjectCard