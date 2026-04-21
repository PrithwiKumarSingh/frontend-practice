import React from 'react'

const ProjectView = ({info}) => {
  return (
          <div className='w-313 mx-auto bg-[#0F172A] text-[#E5E7EB] border-x-2 border-t-2'>

         {/* heading */}
      <div className='text-center'>
        <h1 className='text-8xl font-bold mt-10 text-amber-300'>{info?.frontMatter?.title}</h1>
        <h2 className='text-3xl font-semibold'>{info?.frontMatter?.description}</h2>
        <div className='flex gap-5 justify-center my-4'>
          <a className='hover:text-blue-700 font-bold text-lg' target='_blank' href={info?.frontMatter?.live}>🌐View Live</a>
          <a className='hover:text-blue-700 font-bold text-lg' target='_blank' href="https://www.pexels.com/">📷Free Photo Assets</a>
          <a className='hover:text-blue-700 font-bold text-lg' target='_blank' href="https://boxicons.com/">⭐Open Source Icons</a>
        </div>
      </div>

      {/* Body Resouce */}

      <div className=' grid grid-cols-3 text-center border-t-2'>
        <div className='border-r-2 py-4'>
          <h2 className='text-2xl font-semibold'>Recreate this to learn:</h2>
          <ul className=' w-40 mx-auto text-start font-semibold'>
            {
                info?.frontMatter?.wwyl.map((d,index)=> <li key={index} className='list-disc'>{d}</li>)
            }
            
            
          </ul>
        </div>

        <div className='text-2xl text-center py-4 border-r-2'>
          <h2 className='text-2xl font-semibold mb-4'>Color Palette:</h2>
          <div className='grid grid-cols-2 w-60 font-medium mx-auto gap-2 '>
            {
                    info?.frontMatter?.colors.map((d,index)=>{
                        console.log(d);
                        return(
                            <div key={index} className='flex gap-1 items-center'>
                            <div style={{ backgroundColor: `#${d}` }} className={`h-6 w-6 rounded-full border-[0.2px] border-gray-400`}></div>
                             <p className='text-xl'>{d}</p>
                        </div>
                        );

                        })
                }
          </div>
          
        </div>

        <div className='py-4'>
          <h2 className='text-2xl font-extrabold mb-2'>Resources:</h2>
          <div className='flex flex-col text-start w-52 mx-auto font-semibold underline'>
            {
                info?.frontMatter?.resources.map((data,index)=> <a target='_blank' key={index} className='hover:text-blue-700' href={data?.link}>{data?.title}</a>)
            }
            
            
          </div>
        </div>
      </div>

      {/* movitivaton  */}

      <div className='px-35 py-15 bg-[#0F172A] grid grid-cols-3 gap-45 border-t-2 border-b-2'>
        <div className='w-90 py-6 px-4 bg-black text-white'>
          <h2 className='text-3xl font-extrabold'>Up for a challenge?</h2>
          <p className='text-lg font-extralight'>{info?.frontMatter?.challenge1}</p>
        </div>
        <div className='w-90 py-6 px-4 bg-[#494949] text-white'>
          <h2 className='text-4xl font-extrabold'>Too easy?</h2>
          <p className='text-lg'>{info?.frontMatter?.challenge2}.</p>
        </div>
        <div className='w-50 py-6 px-4 border-2'>
          <h2 className='text-4xl font-extrabold'>Too hard?</h2>
          <p className='text-xl font-medium mt-2'>That's ok!</p>
          <a className='font-semibold hover:text-blue-700 underline' href="/projects">View other projects</a>
        </div>
      </div>


      {/* image */}
      <div className='p-10 text-center bg-[#0F172A]'>
        <h2 className='text-5xl font-extrabold mb-12'>Reference image</h2>
        <div className='rounded-xl overflow-hidden drop-shadow-2xl '>
          <img src={`https://www.frontendpractice.com/${info?.frontMatter?.previewImage}`} alt="" />
        </div>
      </div>


      </div>
  )
}

export default ProjectView