import React from 'react'
import Sidebar from '../admin/Sidebar'
import Navbar from '../admin/Navbar'

function Dashboard({children}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-6 bg-gray-100 h-full">{children}</main>
      </div>
    </div>
  )
}

export default Dashboard