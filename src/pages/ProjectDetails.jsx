import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import {projects} from '../data/Projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectView from "../components/ProjectView"


const ProjectDetails = () => {

  const { slug } = useParams();
  console.log(slug);

    const project = projects.filter((p) => p?.slug?.toLowerCase() === slug.toLowerCase());

  console.log(project);

  
  return (
    <div className='bg-[#0F172A]'>
    <Navbar/>
    <div className='w-full mt-15'>
      <div>{

        project.map((d,index) => < ProjectView key={index} info={d} ></ProjectView> )
        }
        </div>



    </div>

    <Footer/>
    </div>
  )
}

export default ProjectDetails