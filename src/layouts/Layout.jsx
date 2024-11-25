import React from "react";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-gray-50 p-4 md:p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
