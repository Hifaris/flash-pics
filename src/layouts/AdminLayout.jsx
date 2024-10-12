import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../admin/Sidebar'
import AdminNavbar from '../admin/Navbar'


function AdminLayout() {
    return (
        <div className='flex bg-neutral-100 h-screen w-screen overflow-hidden'>
            <AdminSidebar />
            <div className='flex flex-col flex-1'>
                <AdminNavbar />
                <div className='flex-1 p-2 min-h-0 overflow-auto'>
                    <Outlet />
                </div>
            </div>

        </div>
    )
}

export default AdminLayout