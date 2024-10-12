import React from 'react';

const AdminSidebar = () => {

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <h2 className="text-2xl font-bold p-4">Admin Flash Pics</h2>
      <ul className="p-4">
        <li className="mb-4"><a href="#" className="text-gray-300">Dashboard</a></li>
        <li className="mb-4"><a href="#" className="text-gray-300">Photo</a></li>
        <li className="mb-4"><a href="#" className="text-gray-300">Orders</a></li>
        <li className="mb-4"><a href="#" className="text-gray-300">Users</a></li>
      </ul>
    </div>
  );
};

export default AdminSidebar;