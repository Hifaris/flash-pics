import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();

  const hdlNavigate = (path) => {
    navigate(path);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo */}
      <div
        className="text-4xl font-bold text-sky-600 cursor-pointer"
        onClick={() => hdlNavigate("/")}
      >
        Flash <span className="text-orange-600">Pics</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <a
          className="text-gray-700 hover:text-sky-800 cursor-pointer font-semibold"
          onClick={() => hdlNavigate("/")}
        >
          Home
        </a>
        <a
          className="text-gray-700 hover:text-sky-800 cursor-pointer font-semibold"
          onClick={() => hdlNavigate("/search")}
        >
          Photos
        </a>
        <a
          className="text-gray-700 hover:text-sky-800 cursor-pointer font-semibold"
          onClick={() => hdlNavigate("/categories")}
        >
          Collection
        </a>
      </nav>

      {/* Mobile Menu with Dropdown */}
      <div className="relative md:hidden group">
        {/* Menu Button */}
        <button className="text-gray-700">
          <Menu size={30} />
        </button>

        {/* Dropdown Menu */}
        <nav className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-2 transition-all duration-300 z-10">
          <a
            className="block px-4 py-2 text-gray-700 hover:text-sky-800 hover:bg-gray-100 font-semibold cursor-pointer"
            onClick={() => hdlNavigate("/")}
          >
            Home
          </a>
          <a
            className="block px-4 py-2 text-gray-700 hover:text-sky-800 hover:bg-gray-100 font-semibold cursor-pointer"
            onClick={() => hdlNavigate("/search")}
          >
            Photos
          </a>
          <a
            className="block px-4 py-2 text-gray-700 hover:text-sky-800 hover:bg-gray-100 font-semibold cursor-pointer"
            onClick={() => hdlNavigate("/categories")}
          >
            Collection
          </a>
          <div className="px-4 py-2">
            <button
              className="w-full text-sky-900 border border-sky-900 rounded-lg px-4 py-2 hover:bg-sky-900 hover:text-white transition"
              onClick={() => hdlNavigate("/login")}
            >
              Login
            </button>
            <button
              className="w-full text-white bg-orange-500 rounded-lg px-4 py-2 mt-2 hover:bg-orange-600 transition"
              onClick={() => hdlNavigate("/register")}
            >
              Register
            </button>
          </div>
        </nav>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-4">
        <button
          className="text-sky-900 border border-sky-900 rounded-lg px-4 py-2 hover:bg-sky-900 hover:text-white transition"
          onClick={() => hdlNavigate("/login")}
        >
          Login
        </button>
        <button
          className="text-white bg-orange-500 rounded-lg px-4 py-2 hover:bg-orange-600 transition"
          onClick={() => hdlNavigate("/register")}
        >
          Register
        </button>
      </div>
    </header>
  );
};

export default Navbar;
