import React, { useState } from "react";
import { UserRound, ShoppingCart, Menu, Home, Camera, List, LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/auth-store";

function MainNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const actionLogout = useAuthStore((state) => state.actionLogout);
  const navigate = useNavigate();

  const navigationItems = [
    { 
      icon: Home, 
      label: 'Home', 
      action: () => navigate("/user") 
    },
    { 
      icon: Camera, 
      label: 'Photos', 
      action: () => navigate("/user/search") 
    },
    { 
      icon: List, 
      label: 'Category', 
      action: () => navigate("/user/categories") 
    },
    { 
      icon: User, 
      label: 'Profile', 
      action: () => navigate("/user/profile") 
    },
    { 
      icon: ShoppingCart, 
      label: 'Shopping Cart', 
      action: () => navigate("user/cart") 
    },
    { 
      icon: LogOut, 
      label: 'Logout', 
      action: () => {
        actionLogout();
        navigate("/login");
      } 
    }
  ];

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
        {navigationItems.slice(0, 3).map((item) => (
          <a
            key={item.label}
            className="text-gray-700 hover:text-sky-600 cursor-pointer font-semibold flex items-center"
            onClick={item.action}
          >
            <item.icon className="mr-2" size={20} />
            {item.label}
          </a>
        ))}
      </nav>

      {/* Desktop Actions */}
      <div className="hidden md:flex space-x-4 items-center">
        <div className="flex space-x-4">
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
      </div>

      {/* Mobile Menu Toggle */}
      <div className="relative md:hidden">
        <button
          className="text-gray-700 relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={30} />
        </button>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMobileMenuOpen(false)}>
            <nav 
              className="absolute top-16 right-4 w-64 bg-white shadow-2xl rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center p-4 hover:bg-gray-100 cursor-pointer border-b"
                  onClick={() => {
                    item.action();
                    setMobileMenuOpen(false);
                  }}
                >
                  <item.icon className="mr-4" size={24} color="#316eaf" />
                  <span className="text-gray-800 font-semibold">{item.label}</span>
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default MainNavbar;
