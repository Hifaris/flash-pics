import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate() 
  
  const hdlHome =()=>{
    navigate("/")
  }


  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-md absolute top-0">
        <div className="text-3xl font-bold text-sky-900">
          Flash <span className="text-orange-600">Pics</span>
        </div>
        <ul className="flex space-x-6">
          <li className="text-gray-700 hover:text-sky-800 cursor-pointer font-semibold" onClick={hdlHome}>Home</li>
          <li className="text-gray-700 hover:text-sky-800 cursor-pointer font-semibold">Photos</li>
          <li className="text-gray-700 hover:text-sky-800 cursor-pointer font-semibold">Illustrations</li>
          <li className="text-gray-700 hover:text-sky-800 cursor-pointer font-semibold">Collection</li>
          <li className="text-gray-700 hover:text-sky-800 cursor-pointer font-semibold">Trend</li>
        </ul>
        <div className="space-x-4">
         
          <button className="text-white bg-orange-500 rounded-lg px-4 py-2 hover:bg-orange-600 transition">
            Register
          </button>
        </div>
      </nav>
  );
};

export default Header;
