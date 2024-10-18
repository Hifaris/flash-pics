import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserRound } from 'lucide-react';
import { ShoppingCart } from 'lucide-react'


function MainNavbar() {

  const navigate = useNavigate()

  const hdlLogout = () => {
    navigate("/login")
  }
  const hdlCart =()=>{
    navigate("user/cart")
  }
  const hdlProfile =()=>{
    navigate("/user/profile")
  }
  const hdlHome =()=>{
    navigate("/user")
  }
  const hdlphotos =()=>{
    navigate("/user/search")
  }
  
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-4xl font-bold text-sky-600 cursor-pointer" >
        Flash <span className="text-orange-600">Pics</span>
        {console.log('User')}
      </div>
      <nav className="space-x-6 flex gap-6">
        <a className="text-gray-700 hover:text-sky-600 cursor-pointer font-semibold" onClick={hdlHome}>Home</a>
        <a className="text-gray-700 hover:text-sky-600 cursor-pointer font-semibold" onClick={hdlphotos}>Photos</a>
        <a className="text-gray-700 hover:text-sky-600 cursor-pointer font-semibold">Vector</a>
        <a className="text-gray-700 hover:text-sky-600 cursor-pointer font-semibold">Category</a>
      </nav>
      <div className="space-x-4 flex gap-3"> 
        
      
        <UserRound color="#316eaf" size={30} className='mt-2 cursor-pointer' onClick={hdlProfile}/>

        <ShoppingCart color="#316eaf" size={30} className='mt-2 cursor-pointer' onClick={hdlCart}/>

       
        {/* <Link to={"user/cart"} className="text-sky-600 border border-sky-600 bg-white rounded-lg px-4 py-2 hover:bg-sky-600 hover:text-white transition">
          Cart
        </Link> */}

        <button className="bg-white border border-orange-500 text-orange-500 rounded-lg px-4 py-2 hover:bg-orange-500 hover:text-white transition" onClick={hdlLogout}>
          Logout
        </button>

      </div>
    </header>
  )
}

export default MainNavbar