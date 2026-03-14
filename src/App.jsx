import React from 'react'
import Home from './pages/Home'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import ProjectDetails from './pages/ProjectDetails';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/faq' element={<NotFound/>}></Route>
      <Route path='/projects/:slug' element={<ProjectDetails/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>


  )
}

export default App