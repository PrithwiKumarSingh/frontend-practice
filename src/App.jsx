import React from 'react'
import Home from './pages/Home'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      {/* <Route path='/notfound' element={<NotFound/>}></Route> */}
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>


  )
}

export default App