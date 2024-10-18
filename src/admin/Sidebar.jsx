import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminSidebar = () => {
  const navigate = useNavigate();

  const hdlClick = () => {
    navigate("addPhoto"); 
  }

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <Link to={"/admin"} className="text-2xl font-bold p-4">Admin Flash Pics</Link>
      <div className='p-4'>
        <div className='flex flex-col gap-4'>
          <nav className="mb-4">
            <button className="w-full text-left text-blue-600 text-lg font-semibold">Photo</button>
            <ul className="ml-4 mt-2 flex flex-col">
              <Link to={'/admin'}  className="mb-2 text-gray-600 cursor-pointer">Dashboard</Link>
              <Link to={"allPhotos"} className="mb-2 text-gray-600 cursor-pointer">All photo</Link>
              <li className="mb-2 text-gray-600 cursor-pointer" onClick={hdlClick}>Upload photo</li>
              <li className="mb-2 text-gray-600 cursor-pointer" >Edit photo</li>
              <li className="mb-2 text-gray-600 cursor-pointer">Delete photo</li>
            </ul>
          </nav>
          <nav>
            <Link to={"category"} className="w-full text-left text-blue-600 text-lg font-semibold">Category</Link>
          </nav>
          <nav>
            <button className="w-full text-left text-blue-600 text-lg font-semibold">Order</button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;