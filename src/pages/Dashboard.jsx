import React, { useEffect } from 'react'
import Sidebar from '../admin/Sidebar'
import Navbar from '../admin/Navbar'
import AdminSidebar from '../admin/Sidebar'
import { image } from '../assets/photoMock'
import useAuthStore from '../store/auth-store'
import categoryStore from '../store/category-store'
import photoStore from '../store/product-store'
import { useNavigate } from 'react-router-dom'
import Loading from '../component/Loading'

function Dashboard() {

  const getProduct = photoStore((state)=>state.getProduct)
  const products = photoStore((state)=>state.products)
  const loading = photoStore((state)=>state.loading)
  const token = useAuthStore((state)=> state.token)
  const navigate = useNavigate()
  
  useEffect(()=>{
    getProduct(token,100)
  },[])
  // console.log(products)
  
  const hdlClick = (item) => {
    navigate(`/admin/editPhoto/${item.id}`,{state:item})
  }

  

  return (
    <div className='flex flex-col p-5 m-5 gap-4 bg-white rounded-sm'>
      <div className="flex-1 p-8">
        {
          loading
          ? <Loading/>
          : ( <div className="grid grid-cols-4 gap-4">
            {
             products.map((el)=>(
  
               <img src={el.url} className="w-full h-auto cursor-pointer hover:scale-105" onClick={() => hdlClick(el)}/>
  
             ))
            }
           
           
          </div>)
        }
       
      </div>
    </div>

  )
}

export default Dashboard