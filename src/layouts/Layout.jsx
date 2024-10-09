import React from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='flex flex-col h-screen'>
       <Navbar/>

       <div className='flex1'>
        <Outlet/>
       </div>


    </div>
  )
}

export default Layout