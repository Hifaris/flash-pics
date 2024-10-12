import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../layouts/Layout'
import Main_Home from '../component/Main_Home'
import Register from '../pages/Register'
import Login from '../pages/login'
import MainSearch from '../pages/MainSearch'
import Test from '../component/Test'
import { ProtectRoute } from './protectRoute'
import UserLayout from '../layouts/UserLayout'
import AdminLayout from '../layouts/AdminLayout'
import Dashboard from '../pages/Dashboard'
import Cart from '../component/cart'


const router = createBrowserRouter([
 {

    path: "/",
    element: <Layout/>,
    children: [
        {index: true, element: <Main_Home/>},
        {path: 'register', element: <Register/>},
        {path: 'login', element: <Login/>},
        {path: 'search', element: <MainSearch/>},
        {path: "/photo/:id", element: <Test/>},
        { path: '/cart', element: <Cart /> }
    ]
 },

 {
  path: "/user",
  element: <ProtectRoute element={<UserLayout/>} allow={["USER"]}/>,
  children:[
    {index:true, element: <Main_Home/>},
    {path: 'search', element: <MainSearch/>},
    // {path: "/photo/:id", element: <Test/>},
    // {path: '*', element: <Main_Home/>},
    
  ]
 },
 {
  path: "/admin",
  element: <ProtectRoute element={<AdminLayout/>} allow={["ADMIN"]} />,
  children:[
    {index: true, element: <Dashboard/>}
  ]
 }

])

function AppRoute() {
  return (
    <div>

        <RouterProvider router={router}/>
    </div>
  )
}

export default AppRoute