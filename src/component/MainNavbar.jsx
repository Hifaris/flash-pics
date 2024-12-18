import React, { useState } from "react";
import { UserRound, ShoppingCart, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/auth-store";

function MainNavbar() {
  const [menuOpen, setMenuOpen] = useState(false); // For hover dropdown
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // For mobile menu
  const actionLogout = useAuthStore((state) => state.actionLogout);
  const navigate = useNavigate();

  const hdlLogout = () => {
    actionLogout();
    navigate("/login");
  };
  const hdlCart = () => {
    navigate("user/cart");
  };
  const hdlProfile = () => {
    navigate("/user/profile");
  };
  const hdlHome = () => {
    navigate("/user");
  };
  const hdlPhotos = () => {
    navigate("/user/search");
  };
  const hdlCategory = () => {
    navigate("/user/categories");
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md relative">
      {/* Logo */}
      <div
        className="text-2xl md:text-4xl font-bold text-sky-600 cursor-pointer"
        onClick={hdlHome}
      >
        Flash <span className="text-orange-600">Pics</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <a
          className="text-gray-700 hover:text-sky-600 cursor-pointer font-semibold"
          onClick={hdlHome}
        >
          Home
        </a>
        <a
          className="text-gray-700 hover:text-sky-600 cursor-pointer font-semibold"
          onClick={hdlPhotos}
        >
          Photos
        </a>
        <a
          className="text-gray-700 hover:text-sky-600 cursor-pointer font-semibold"
          onClick={hdlCategory}
        >
          Category
        </a>
      </nav>

      {/* Desktop Actions with Hover Dropdown */}
      <div
        className="hidden md:flex space-x-4 items-center relative"
        onMouseEnter={() => setMenuOpen(true)}
        onMouseLeave={() => setMenuOpen(false)}
      >
        <UserRound
          color="#316eaf"
          size={30}
          className="cursor-pointer"
        />
        <ShoppingCart
          color="#316eaf"
          size={30}
          className="cursor-pointer"
        />
        <button
          className="bg-white border border-orange-500 text-orange-500 rounded-lg px-4 py-2 hover:bg-orange-500 hover:text-white transition"
          onClick={hdlLogout}
        >
          Logout
        </button>

        {/* Hover Dropdown */}
        {menuOpen && (
          <nav className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg flex flex-col items-start p-4 space-y-4 rounded-lg z-10">
            <button
              className="w-full text-gray-700 hover:text-sky-600 cursor-pointer text-left font-semibold"
              onClick={hdlProfile}
            >
              Profile
            </button>
            <button
              className="w-full text-gray-700 hover:text-sky-600 cursor-pointer text-left font-semibold"
              onClick={hdlCart}
            >
              Shopping Cart
            </button>
            <button
              className="w-full bg-orange-500 text-white rounded-lg px-4 py-2 hover:bg-orange-600 transition text-left"
              onClick={hdlLogout}
            >
              Logout
            </button>
          </nav>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <Menu size={30} />
      </button>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 p-4 md:hidden z-10">
          <a
            className="text-gray-700 hover:text-sky-600 cursor-pointer font-semibold"
            onClick={() => {
              setMobileMenuOpen(false);
              hdlHome();
            }}
          >
            Home
          </a>
          <a
            className="text-gray-700 hover:text-sky-600 cursor-pointer font-semibold"
            onClick={() => {
              setMobileMenuOpen(false);
              hdlPhotos();
            }}
          >
            Photos
          </a>
          <a
            className="text-gray-700 hover:text-sky-600 cursor-pointer font-semibold"
            onClick={() => {
              setMobileMenuOpen(false);
              hdlCategory();
            }}
          >
            Category
          </a>
        </nav>
      )}
    </header>
  );
}

export default MainNavbar;
