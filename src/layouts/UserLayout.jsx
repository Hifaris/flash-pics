import React from 'react'
import MainNavbar from '../component/MainNavbar'
import { Outlet } from 'react-router-dom'

function UserLayout() {
  return (
    <div className='flex flex-col h-screen'>
       <MainNavbar/>

       <div className='flex1'>
        <Outlet/>
       </div>


    </div>
  )
}

export default UserLayout