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

      {/* Mobile Menu with Dropdown */}
      <div className="relative md:hidden">
        <button className="text-gray-700">
          <Menu size={30} />
        </button>

        {/* Dropdown Menu */}
        <nav className="absolute top-full right-0 w-48 bg-white shadow-lg flex flex-col items-start p-4 space-y-4 rounded-lg z-10">
          {/* Navigation Links */}
          <a
            className="text-gray-700 hover:text-sky-600 cursor-pointer font-semibold w-full text-left"
            onClick={hdlHome}
          >
            Home
          </a>
          <a
            className="text-gray-700 hover:text-sky-600 cursor-pointer font-semibold w-full text-left"
            onClick={hdlPhotos}
          >
            Photos
          </a>
          <a
            className="text-gray-700 hover:text-sky-600 cursor-pointer font-semibold w-full text-left"
            onClick={hdlCategory}
          >
            Category
          </a>

          {/* Profile and Shopping Cart */}
          <div className="flex space-x-4 items-center w-full mt-2">
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
            className="w-full bg-orange-500 text-white rounded-lg px-4 py-2 hover:bg-orange-600 transition mt-2"
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
