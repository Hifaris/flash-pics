import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const hdlNavigate = (path) => {
    setMenuOpen(false);
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

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 p-4 md:hidden z-10">
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
          <div className="space-y-2 mt-4">
            <button
              className="text-sky-900 border border-sky-900 rounded-lg px-4 py-2 hover:bg-sky-900 hover:text-white transition w-full"
              onClick={() => hdlNavigate("/login")}
            >
              Login
            </button>
            <button
              className="text-white bg-orange-500 rounded-lg px-4 py-2 hover:bg-orange-600 transition w-full"
              onClick={() => hdlNavigate("/register")}
            >
              Register
            </button>
          </div>
        </nav>
      )}

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
