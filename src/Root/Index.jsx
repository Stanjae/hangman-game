import React from 'react'
import NavBar from '../Components/NavBar'
import { Outlet } from 'react-router-dom'

const Index = () => {
  return (
    <div className='w-full bg-[#112444] sm:h-screen h-full'>
        <NavBar/>
        <Outlet/>  
    </div>
  )
}

export default Index
