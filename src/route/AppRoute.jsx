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
import AddPhotos from '../admin/AddPhotos'
import Category from '../admin/Category'
import ProtectRouteUser from './ProtectRouteUser'
import ProtectRouteAdmin from './ProtectRouteAdmin'
import AdminDashbord from '../admin/AdminDashbord'
import EditPhoto from '../admin/EditPhoto'
import PhotoCategory from '../pages/PhotoCategory'
import UserProfile from '../component/UserProfile'
import UserOrder from '../component/UserOrder'
import FinishOrder from '../component/FinishOrder'
import Payment from '../component/Payment'
import AllCategory from '../pages/AllCategory'


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
        {path: "categories", element: <AllCategory/>},
        {path: "/category/:id", element: <PhotoCategory/>},
        {path: "*", element: <Login/>}
    ]
 },

 {
  path: "/user",
  element: <ProtectRouteUser element={<UserLayout/>} />,
  // allow={["USER"]}
  children:[
    {index:true, element: <Main_Home/>},
    {path: 'profile', element: <UserProfile/>},
    {path: 'search', element: <MainSearch/>},
    { path: 'user/cart', element: <Cart /> },
    { path: 'order', element: <UserOrder /> },
    { path: 'order/:id', element: <FinishOrder /> },
    { path: 'payment/:id', element: <Payment /> },
    {path: "photo/:id", element: <Test/>},
    {path: "categories", element: <AllCategory/>},
    {path: "category/:id", element: <PhotoCategory/>},
    {path: '*', element: <Main_Home/>},
    
  ]
 },
 {
  path: "/admin",
  element: <ProtectRouteAdmin element={<AdminLayout/>} />,
  children:[
    {index: true, element: <AdminDashbord/>},
    {path: 'allPhotos', element: <Dashboard/>},
    {path: 'addPhoto', element: <AddPhotos/>},
    {path: 'editPhoto/:id', element: <EditPhoto/>},
    {path: 'category', element: <Category/>},
    {path: '*', element: <AdminDashbord/>}
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