import React from 'react';
import MainNavbar from '../component/MainNavbar';
import { Outlet } from 'react-router-dom';

function UserLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <MainNavbar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-gray-100 p-4 md:p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default UserLayout;
