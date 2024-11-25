import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserRound, ShoppingCart, Menu, X } from "lucide-react";
import useAuthStore from "../store/auth-store";

function MainNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
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
  const hdlphotos = () => {
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
          onClick={hdlphotos}
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
            className="text-gray-700 hover:text-sky-600 cursor-pointer font-semibold"
            onClick={() => {
              setMenuOpen(false);
              hdlHome();
            }}
          >
            Home
          </a>
          <a
            className="text-gray-700 hover:text-sky-600 cursor-pointer font-semibold"
            onClick={() => {
              setMenuOpen(false);
              hdlphotos();
            }}
          >
            Photos
          </a>
          <a
            className="text-gray-700 hover:text-sky-600 cursor-pointer font-semibold"
            onClick={() => {
              setMenuOpen(false);
              hdlCategory();
            }}
          >
            Category
          </a>
        </nav>
      )}

      {/* Actions */}
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
