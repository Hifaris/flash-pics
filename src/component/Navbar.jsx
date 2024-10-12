import React from "react";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
  
  const navigate = useNavigate()

  const hdlRegister = ()=>{
    navigate("/register")
}
  const hdlLogin= ()=>{
    navigate("/login")
}
const hdlHome = ()=>{
  navigate("/")
}


  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
     <div className="text-4xl font-bold text-sky-600 cursor-pointer" onClick={hdlHome}>
      Flash <span className="text-orange-600">Pics</span>
     </div>
      <nav className="space-x-6">
        <a href="#" className="text-gray-700 hover:text-sky-800 cursor-pointer font-semibold" onClick={hdlHome}>Home</a>
        <a href="#" className="text-gray-700 hover:text-sky-800 cursor-pointer font-semibold">Photos</a>
        <a href="#" className="text-gray-700 hover:text-sky-800 cursor-pointer font-semibold">Illustrations</a>
        <a href="#" className="text-gray-700 hover:text-sky-800 cursor-pointer font-semibold">Collection</a>
      </nav>
      <div className="space-x-4">
      <button className="text-sky-900 border border-sky-900 rounded-lg px-4 py-2 hover:bg-sky-900 hover:text-white transition" onClick={hdlLogin}>
          Login
        </button>
     
        <button className="text-white bg-orange-500 rounded-lg px-4 py-2 hover:bg-orange-600 transition" onClick={hdlRegister}>
            Register
          </button>
        <Link to={"/cart"} className="text-white bg-orange-500 rounded-lg px-4 py-2 hover:bg-orange-600 transition">
            Cart
          </Link>
      </div>
    </header>
 
  );
};

export default Navbar;