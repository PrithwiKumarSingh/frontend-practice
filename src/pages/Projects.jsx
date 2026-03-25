import React,{useState} from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import { FaCheck } from "react-icons/fa";
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [filter,setFilter] = useState("all");
    const [search, setSearch] = useState("");


    
    const projects = [
                {slug:"Ableton" ,color : '#BCFF93' ,label :"Level 1" ,image : "https://www.frontendpractice.com/card/C1-Ableton.jpg" , name: "Ableton"},
                {slug:"abstract" ,color : '#BCFF93' ,label :"Level 1" ,image : "https://www.frontendpractice.com/card/C2-abstract.png" , name: "Abstract"},
                {slug:"Backstage-Talks" ,color : '#BCFF93' ,label :"Level 1" ,image : "https://www.frontendpractice.com/card/C1-Backstage-Talks.png" , name: "Backstage Talks"} ,
                {slug:"basic" ,color : '#FFC700' ,label :"Level 3" ,image : "https://www.frontendpractice.com/card/C2-basic.png" , name: "Basic"},
                {slug:"bonsai" ,color : '#BCFF93' ,label :"Level 1" ,image : "https://www.frontendpractice.com/card/C2-bonsai.png" , name: "Bonsai"},
                {slug:"Canal-Street" ,color : '#FFC700' ,label :"Level 3" ,image : "https://www.frontendpractice.com/card/C1-Canal-Street.png" , name: "Canal Street Market"},
                {slug:"deplace-maison" ,color : '#FFC700' ,label :"Level 3" ,image : "https://www.frontendpractice.com/card/C1-deplace-maison.png" , name: "Deplace Maison"},
                {slug:"figma" ,color : '#FFC700' ,label :"Level 3" ,image : "https://www.frontendpractice.com/card/C2-figma.png" , name: "Figma"},
                {slug:"go-daddy" ,color : '#FFC700' ,label :"Level 2" ,image : "https://www.frontendpractice.com/card/C3-go-daddy.png" , name: "GoDaddy"},
                {slug:"lobe" ,color : '#FFC700' ,label :"Level 1" ,image : "https://www.frontendpractice.com/card/C2-lobe.png" , name: "Lobe"},
                {slug:"Monogram" ,color : '#FFC700' ,label :"Level 2" ,image : "https://www.frontendpractice.com/card/C3-Monogram.png" , name: "Monogram"},
                {slug:"Monstercat" ,color : '#FFC700' ,label :"Level 2" ,image : "https://www.frontendpractice.com/card/C2-Monstercat.png" , name: "Monstercat"},
                {slug:"Nintendo" ,color : '#FFC700' ,label :"Level 3" ,image : "https://www.frontendpractice.com/card/C1-Nintendo.png" , name: "Nintendo"},
                {slug:"studio" ,color : '#FFC700' ,label :"Level 1" ,image : "https://www.frontendpractice.com/card/C3-oh.studio.png" , name: "Studio"},
                {slug:"podia" ,color : '#FFC700' ,label :"Level 2" ,image : "https://www.frontendpractice.com/card/C3-podia.png" , name: "Podia"},
                {slug:"pulse" ,color : '#FFC700' ,label :"Level 1" ,image : "https://www.frontendpractice.com/card/C2-pulse.png" , name: "Pulse"},
                {slug:"Qrates" ,color : '#FFC700' ,label :"Level 3" ,image : "https://www.frontendpractice.com/card/C1-Qrates.png" , name: "Qrates"},
                {slug:"Starbucks" ,color : '#FFC700' ,label :"Level 2" ,image : "https://www.frontendpractice.com/card/C1-Starbucks.png" , name: "Starbucks"},
                {slug:"Stark" ,color : '#FFC700' ,label :"Level 2" ,image : "https://www.frontendpractice.com/card/C3-Stark.png" , name: "Stark"},
    ]

    const retiredProjects = [
  { color: '#BCFF93', label: 'Level 2', image: 'https://www.frontendpractice.com/card/C2-ecwid.png', slug: 'Ecwid' },
  { color: '#BCFF93', label: 'Level 3', image: 'https://www.frontendpractice.com/card/C2-grasshopper.png', slug: 'Grasshopper' },
  { color: '#BCFF93', label: 'Level 1', image: 'https://www.frontendpractice.com/card/C2-instrument.png', slug: 'Instrument' },
  { color: '#BCFF93', label: 'Level 1', image: 'https://www.frontendpractice.com/card/C1-Red-Square.png', slug: 'Red Square' },
  { color: '#BCFF93', label: 'Level 2', image: 'https://www.frontendpractice.com/card/C2-shopify-dev.png', slug: 'Shopify Dev' },
  { color: '#BCFF93', label: 'Level 2', image: 'https://www.frontendpractice.com/card/C2-sketch.png', slug: 'Sketch' },
  { color: '#BCFF93', label: 'Level 2', image: 'https://www.frontendpractice.com/card/C2-trello.png', slug: 'Trello' },
];

    const filteredProjects =projects.filter((p)=>{
        const levelMatch = filter === "all" || p.label === filter;
        const nameMatch = p.name.toLowerCase().includes(search.toLowerCase())

        return levelMatch && nameMatch;
        
        })
    
  return (
    <>
    <Navbar/>
    <div className='w-full mt-40  text-center h-auto'>
        <div className='w-full'>
            <h1 className='text-7xl font-bold mt-15'>Project Library</h1>
            <h2 className='text-2xl font-bold my-6 underline'>How to get started:</h2>
            <div className='mt-4  flex justify-center items-center gap-2'>
                <FaArrowRightLong/>
            <h2 className='text-2xl font-sm'> Choose one of our projects below.</h2>
            </div>
            <div className='mt-4  flex justify-center items-center gap-2'>
                <FaArrowRightLong/>
            <h2 className='text-2xl font-sm'> Recreate all <span className='underline'>or</span> parts of the page.</h2>
            </div>
            <div className='mt-4  flex justify-center items-center gap-2'>
                <FaArrowRightLong/>
            <h2 className='text-2xl font-sm'> Improve and test your skills.</h2>
            </div>
            <div className='mt-4  flex justify-center items-center gap-2'>
                <FaCheck/>
            <h2 className='text-2xl font-bold'> Become a better frontend developer.</h2>
            </div>

            <div className='mt-8 mb-4'>
                <button onClick={()=> setFilter("all")} className='hover:bg-black focus:bg-black focus:text-white hover:text-white transition-all duration-300 md:cursor-pointer py-3 px-6 font-bold text-xl text-black border-2 border-black  ml-3'>View All</button>
                <button onClick={()=> setFilter("Level 1")} className='hover:bg-[#BCFF93] clicked:bg-[#BCFF93]  transition-all duration-300 md:cursor-pointer py-3 px-6 font-bold text-xl text-black border-2 mx-3 '>Level 1</button>
                <button onClick={()=> setFilter("Level 2")} className='focus:bg-[#FCFF74] hover:bg-[#FCFF74]  transition-all duration-300 md:cursor-pointer py-3 px-6 font-bold text-xl text-black border-2  '>Level 2</button>
                <button onClick={()=> setFilter("Level 3")} className='focus:bg-[#FFC700] hover:bg-[#FFC700]  transition-all duration-300 md:cursor-pointer py-3 px-6 font-bold text-xl text-black border-2  mx-3 '>Level 3</button>
            </div>

            <div className='w-180 mx-auto mb-12' >
                <input value={search} onChange={(e)=> setSearch(e.target.value)} className='w-132 h-10 px-4 font-medium text-xl  outline-black focus:outline-2  py-6 border-2 ' type="text" placeholder='Search for Project by name : Ninendo'/>
            </div>

            <div className='bg-[#FCFF73] w-180 mx-auto'>
                <h2 className='text-2xl font-extrabold text-black py-4'>A wonderful variety of projects with well designed layouts, interactive elements, hover effects and animations.</h2>
            </div>
            <div className='  w-400 h-auto my-14 mb-20 grid md:grid-cols-4 md:grid-flow-row gap-8 mx-auto'>
                {
                    filteredProjects.map((project,index)=>(
                        <Link key={index} to={`/projects/${project.slug}`}>
                        <ProjectCard data={project}/>
                        </Link>
                    ))
                }
            </div>


            <div className='w-full border-t-2 my-8'>
                <div className='w-170 mx-auto '>
                    <h2 className='font-extrabold text-4xl my-8'>Retired Projects</h2>
                    <h2 className='font-bold text-xl '>Projects with updates designs and no archived versions available. The projects and reference images are still viewable, should you wish to learn from them.</h2>
                </div>

            <div className='w-400 h-auto my-14 mb-20 grid md:grid-cols-4 md:grid-flow-row gap-8 mx-auto place-items-center'>
                {retiredProjects.map((project, index) => (
                    <Link key={index} to={`/projects/${project.slug}`}>
                    <ProjectCard data={project} />
                    </Link>
                ))}
                </div>


            </div>


            
            
        </div>

        <Footer/>
    </div>
    </>
  )
}

export default Projects