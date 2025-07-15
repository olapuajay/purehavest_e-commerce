import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const goToCart = () => {
    navigate("/cart");
    setMenuOpen(false);
  };

  const goToProfile = () => {
    navigate("/profile");
    setMenuOpen(false);
  };

  const goToRegister = () => {
    navigate("/register");
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-4 md:px-10 py-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div 
          className="text-2xl font-semibold italic text-green-700 cursor-pointer" 
          onClick={() => navigate("/")}
        >
          Pure<span className="not-italic text-black">Harvest</span>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center border border-gray-400 rounded-full px-4 py-2 bg-white w-[300px] md:w-[400px] lg:w-[500px]">
            <FaSearch className="text-gray-600" />
            <input
              type="text"
              placeholder="Search here"
              className="ml-2 w-full outline-none text-gray-700 bg-transparent"
            />
          </div>
        </div>

        {/* Right Icons & Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <FaShoppingCart className="text-xl cursor-pointer" onClick={goToCart} />
          <FaUser className="text-xl cursor-pointer" onClick={goToProfile} />
          <button
            className="bg-green-700 text-white px-4 py-2 rounded-md"
            onClick={goToRegister}
          >
            Sign up
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl text-gray-700 cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {/* Search */}
          <div className="flex items-center border border-gray-400 rounded-full px-4 py-2 bg-white">
            <FaSearch className="text-gray-600" />
            <input
              type="text"
              placeholder="Search here"
              className="ml-2 w-full outline-none text-gray-700 bg-transparent"
            />
          </div>

          {/* Cart */}
          <div 
            className="flex items-center gap-2 text-gray-800 cursor-pointer"
            onClick={goToCart}
          >
            <FaShoppingCart className="text-xl" />
            <span>Cart</span>
          </div>

          {/* Profile */}
          <div 
            className="flex items-center gap-2 text-gray-800 cursor-pointer"
            onClick={goToProfile}
          >
            <FaUser className="text-xl" />
            <span>Account</span>
          </div>

          {/* Sign up */}
          <button
            onClick={goToRegister}
            className="w-full bg-green-700 text-white py-2 rounded-md"
          >
            Sign up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
