import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>
      <div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
