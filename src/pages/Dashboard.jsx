import React, { useEffect } from 'react'
import Sidebar from '../admin/Sidebar'
import Navbar from '../admin/Navbar'
import AdminSidebar from '../admin/Sidebar'
import { image } from '../assets/photoMock'
import useAuthStore from '../store/auth-store'
import categoryStore from '../store/category-store'
import photoStore from '../store/product-store'

function Dashboard() {

  const getProduct = photoStore((state)=>state.getProduct)
  const products = photoStore((state)=>state.products)
  const token = useAuthStore((state)=> state.token)
 
  
  useEffect(()=>{
    getProduct(token,4)
  },[])
  console.log(products)
  
  

  return (
    <div className='flex flex-col p-5 m-5 gap-4 bg-white rounded-sm'>
      <div className="flex-1 p-8">
        <div className="grid grid-cols-4 gap-4">
          {
           products.map((el)=>(

             <img src={el.url} className="w-full h-auto" />

           ))
          }
         
         
        </div>
      </div>
    </div>

  )
}

export default Dashboard