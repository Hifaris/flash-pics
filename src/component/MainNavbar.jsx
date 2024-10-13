import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function MainNavbar() {

    const navigate = useNavigate()

    const hdlLogout =()=>{
        navigate("/login")
    }
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
     <div className="text-4xl font-bold text-sky-600 cursor-pointer" >
      Flash <span className="text-orange-600">Pics</span>
     </div>
      <nav className="space-x-6 flex gap-6">
        <a className="text-gray-700 hover:text-sky-600 cursor-pointer font-semibold">Home</a>
        <a className="text-gray-700 hover:text-sky-600 cursor-pointer font-semibold">Photos</a>
        <a className="text-gray-700 hover:text-sky-600 cursor-pointer font-semibold">Illustrations</a>
        <a className="text-gray-700 hover:text-sky-600 cursor-pointer font-semibold">Collection</a>
      </nav>
      <div className="space-x-4">
     
     
        <button className="text-white bg-orange-500 rounded-lg px-4 py-2 hover:bg-orange-600 transition" onClick={hdlLogout}>
            Logout
          </button>
          <Link to={"user/cart"} className="text-white bg-orange-500 rounded-lg px-4 py-2 hover:bg-orange-600 transition">
            Cart
          </Link>
      </div>
    </header>
  )
}

export default MainNavbar