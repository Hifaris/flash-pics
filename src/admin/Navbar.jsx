import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';




const AdminNavbar = () => {

  const navigate = useNavigate()

  const hdlLogout=()=>{
    navigate("/login")
  }
  return (
    <nav className="bg-white p-4 shadow-md flex justify-between items-center">
      <div className="text-2xl font-bold">
        <span className='text-sky-600'>Flash</span><span className="text-orange-600">Pics</span>
      </div>
      <div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={hdlLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
