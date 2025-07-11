import React from 'react';
import './Navbar.css';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Farmers Store</div>

      <div className="search-container">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search here" />
      </div>

      <div className="nav-actions">
        <FaShoppingCart className="nav-icon" />
        <FaUser className="nav-icon" />
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
