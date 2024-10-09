import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../layouts/Layout'
import Main_Home from '../component/Main_Home'
import Register from '../pages/Register'
import Login from '../pages/login'
import MainSearch from '../pages/MainSearch'
import Test from '../component/Test'


const router = createBrowserRouter([
 {

    path: "/",
    element: <Layout/>,
    children: [
        {index: true, element: <Main_Home/>},
        {path: 'register', element: <Register/>},
        {path: 'login', element: <Login/>},
        {path: 'search', element: <MainSearch/>},
        {path: 'test', element: <Test/>}
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