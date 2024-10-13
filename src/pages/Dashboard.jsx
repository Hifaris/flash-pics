import React from 'react'
import Sidebar from '../admin/Sidebar'
import Navbar from '../admin/Navbar'
import AdminSidebar from '../admin/Sidebar'
import { image } from '../assets/photoMock'
function Dashboard() {
  return (
    <div className='flex flex-col p-5 m-5 gap-4 bg-white rounded-sm'>
      <div className="flex-1 p-8">
        <div className="grid grid-cols-4 gap-4">
          {
           image.map((el)=>(

             <img src={el.image} className="w-full h-auto" />

           ))
          }
         
         
        </div>
      </div>
    </div>

  )
}

export default Dashboard