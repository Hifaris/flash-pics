import React from "react";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-500">Flash Pics</div>
      <nav className="space-x-6">
        <a href="#" className="text-gray-700">Home</a>
        <a href="#" className="text-gray-700">Photos</a>
        <a href="#" className="text-gray-700">Videos</a>
        <a href="#" className="text-gray-700">Illustrations</a>
        <a href="#" className="text-gray-700">Collection</a>
      </nav>
      <div className="space-x-4">
        <button className="text-gray-700">Sign In</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">Register</button>
      </div>
    </header>
  );
};

export default Navbar;