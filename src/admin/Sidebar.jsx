import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminSidebar = () => {
  const navigate = useNavigate();

  const hdlClick = () => {
    navigate("addPhoto"); 
  }

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <h2 className="text-2xl font-bold p-4">Admin Flash Pics</h2>
      <div className='p-4'>
        <ul>
          <li className="mb-4">
            <button className="w-full text-left text-blue-600">Photo management</button>
            <ul className="ml-4 mt-2">
              <Link to={"/admin"} className="mb-2 text-gray-600 cursor-pointer">All photo</Link>
              <li className="mb-2 text-gray-600 cursor-pointer" onClick={hdlClick}>Upload photo</li>
              <li className="mb-2 text-gray-600 cursor-pointer" onClick={hdlClick}>Edit photo</li>
              <li className="mb-2 text-gray-600 cursor-pointer">Delete photo</li>
            </ul>
          </li>
          <li>
            <button className="w-full text-left text-blue-600">Order</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;