import React from 'react';

const Sidebar = () => {

    const handleCreateProduct = () => {
        console.log('Create product clicked');
        // Add logic to create a product
      };
    
      const handleUpdateProduct = () => {
        console.log('Update product clicked');
        // Add logic to update the product
      };
    
      const handleDeleteProduct = () => {
        console.log('Delete product clicked');
        // Add logic to delete the product
      };
    
      const handleGetAllProducts = () => {
        console.log('Get all products clicked');
        // Add logic to fetch all products
      };
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <h2 className="text-2xl font-bold p-4">Admin Dashboard</h2>
      <ul className="p-4">
        <li className="mb-4"><a href="#" className="text-gray-300">Dashboard</a></li>
        <li className="mb-4"><a href="#" className="text-gray-300">Photo</a></li>
        <li className="mb-4"><a href="#" className="text-gray-300">Orders</a></li>
        <li className="mb-4"><a href="#" className="text-gray-300">Users</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
