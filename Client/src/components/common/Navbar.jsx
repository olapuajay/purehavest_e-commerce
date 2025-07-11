import React from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-300">
      <div className="text-xl font-bold">Farmers Store</div>

      <div className="flex items-center border border-black rounded-full px-4 py-2 w-[750px] bg-white">
        <FaSearch className="text-black" />
        <input 
          type="text" 
          placeholder="Search here" 
          className="border-none outline-none ml-2 w-full text-gray-500"
        />
      </div>

      <div className="flex items-center gap-8">
        <FaShoppingCart className="text-xl cursor-pointer" />
        <FaUser className="text-xl cursor-pointer" />
        <button className="bg-green-600 text-white border-none rounded-lg px-12 py-2 cursor-pointer">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;