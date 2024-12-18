import React from "react";
import { useNavigate } from "react-router-dom";
import { UserRound, ShoppingCart, Menu } from "lucide-react";
import useAuthStore from "../store/auth-store";

function MainNavbar() {
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
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
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

      {/* Mobile Menu with Hover Dropdown */}
      <div className="relative md:hidden group">
        {/* Menu Icon */}
        <button className="text-gray-700">
          <Menu size={30} />
        </button>

        {/* Dropdown Menu */}
        <nav className="absolute left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-2 transition-all duration-300 z-10">
          {/* Navigation Links */}
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

          {/* Profile and Shopping Cart */}
          <div className="flex space-x-4 mt-4">
            <UserRound
              color="#316eaf"
              size={30}
              className="cursor-pointer"
              onClick={hdlProfile}
            />
            <ShoppingCart
              color="#316eaf"
              size={30}
              className="cursor-pointer"
              onClick={hdlCart}
            />
          </div>

          {/* Logout Button */}
          <button
            className="w-full bg-white border border-orange-500 text-orange-500 rounded-lg px-4 py-2 hover:bg-orange-500 hover:text-white transition mt-2"
            onClick={hdlLogout}
          >
            Logout
          </button>
        </nav>
      </div>

      {/* Desktop Actions */}
      <div className="hidden md:flex space-x-4 items-center">
        <UserRound
          color="#316eaf"
          size={30}
          className="cursor-pointer"
          onClick={hdlProfile}
        />
        <ShoppingCart
          color="#316eaf"
          size={30}
          className="cursor-pointer"
          onClick={hdlCart}
        />
        <button
          className="bg-white border border-orange-500 text-orange-500 rounded-lg px-4 py-2 hover:bg-orange-500 hover:text-white transition"
          onClick={hdlLogout}
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default MainNavbar;
