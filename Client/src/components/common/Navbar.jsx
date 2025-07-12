import React from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleUserRedirect = () => {
    if (!isAuthenticated) return navigate("/login");

    if (user?.role === "admin") navigate("/admin/dashboard");
    else if (user?.role === "farmer") navigate("/farmer/dashboard");
    else navigate("/profile");
  };

  const handleCartClick = () => {
    if (user?.role === "user") {
      navigate("/cart");
    }
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-300">
      <div className="text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>
        Farmers Store
      </div>

      <div className="flex items-center border border-black rounded-full px-4 py-2 w-[750px] bg-white">
        <FaSearch className="text-black" />
        <input
          type="text"
          placeholder="Search here"
          className="border-none outline-none ml-2 w-full text-gray-500"
        />
      </div>

      <div className="flex items-center gap-6">
        {user?.role === "user" && (
          <FaShoppingCart className="text-xl cursor-pointer" onClick={handleCartClick} />
        )}

        <FaUser className="text-xl cursor-pointer" onClick={handleUserRedirect} />

        {!isAuthenticated ? (
          <>
            <button
              onClick={() => navigate("/signup")}
              className="bg-green-600 text-white border-none rounded-lg px-8 py-2"
            >
              Sign Up
            </button>
            <button
              onClick={() => navigate("/login")}
              className="border border-green-600 text-green-600 rounded-lg px-8 py-2"
            >
              Login
            </button>
          </>
        ) : (
          <>
            <span className="font-medium">Welcome, {user?.name}</span>
            <button
              onClick={handleLogout}
              className="text-red-600 font-semibold border border-red-500 px-4 py-1 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
