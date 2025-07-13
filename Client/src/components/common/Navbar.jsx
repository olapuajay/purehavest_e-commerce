import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
    setMenuOpen(false);
  };

  const handleUserRedirect = () => {
    if (!isAuthenticated) return navigate("/login");

    if (user?.role === "admin") navigate("/admin/dashboard");
    else if (user?.role === "farmer") navigate("/farmer/dashboard");
    else navigate("/profile");

    setMenuOpen(false);
  };

  const handleCartClick = () => {
    if (!isAuthenticated || user?.role !== "user") return navigate("/login");

      navigate("/cart");
      setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const isUser = user?.role === "user";
  const isGuest = !user;

  return (
    <nav className="bg-white border-b border-gray-300 px-4 md:px-8 py-4 sticky">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div 
          className="text-xl font-bold cursor-pointer"
          onClick={() => {
            navigate("/");
            setMenuOpen(false);
          }}
        >
          Farmers Store
        </div>

        {/* Hamburger Icon */}
        {(isUser || isGuest) && (  
          <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        )}

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          {/* Search Bar */}
          {(isUser || isGuest) && (
            <div className="flex items-center border border-black rounded-full px-4 py-2 w-[300px] lg:w-[500px] bg-white">
              <FaSearch className="text-black" />
              <input
                type="text"
                placeholder="Search here"
                className="border-none outline-none ml-2 w-full text-gray-500"
              />
            </div>
          )}

          {(isUser || isGuest) && (
            <FaShoppingCart 
              className="text-xl cursor-pointer" 
              onClick={handleCartClick} 
            />
          )}

          {(isUser || isGuest) && (
            <FaUser 
              className="text-xl cursor-pointer" 
              onClick={handleUserRedirect} 
            />
          )}

          {!isAuthenticated ? (
            <button
              onClick={() => navigate("/register")}
              className="border border-green-600 text-green-600 rounded-lg px-4 py-2"
            >
              Sign Up
            </button>
          ) : (
            <>
              <span className="font-medium sm:inline-block">
                Welcome, {user?.name.split(" ")[0]}
              </span>
              <button
                onClick={handleLogout}
                className="text-red-600 font-semibold border border-red-500 px-4 py-1 rounded hover:bg-red-50 cursor-pointer"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {/* Search Bar */}
          {(isUser || isGuest) && (
            <div className="flex items-center border border-black rounded-full px-4 py-2 bg-white">
              <FaSearch className="text-black" />
              <input
                type="text"
                placeholder="Search here"
                className="border-none outline-none ml-2 w-full text-gray-500"
              />
            </div>
          )}

          {(isUser || isGuest) && (
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleCartClick}
            >
              <FaShoppingCart className="text-xl" />
              <span>Cart</span>
            </div>
          )}

          {(isUser || isGuest) && (
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleUserRedirect}
            >
              <FaUser className="text-xl" />
              <span>Account</span>
            </div>
          )}

          {!isAuthenticated ? (
            <button
              onClick={() => {
                navigate("/register");
                setMenuOpen(false);
              }}
              className="border border-green-600 text-green-600 rounded-lg px-4 py-2 w-full"
            >
              Sign Up
            </button>
          ) : (
            isUser && (
              <div className="flex flex-col items-start gap-2">
                <span className="font-medium">
                  Welcome, {user?.name.split(" ")[0]}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-red-600 font-semibold border border-red-500 px-4 py-1 rounded"
                >
                  Logout
                </button>
              </div>
            )
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
