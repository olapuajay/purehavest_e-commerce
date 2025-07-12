import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { FaPlus, FaBoxOpen, FaClipboardList, FaUser } from 'react-icons/fa';

function Sidebar() {
  const [profile, setProfile] = useState(null);
  const token = localStorage.getItem('token');
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${API}/farmers/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data.farmer);
      } catch (error) {
        console.log("Failed to fetch profile:", error);
      }
    };
    fetchProfile();
  }, [token]);

  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded hover:bg-green-100 ${
      isActive ? "bg-green-200 font-semibold" : ""
    }`;

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 p-4 sticky top-0">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={profile?.avatar || 'https://placehold.co/100x100'}
          alt="Avatar"
          className="w-20 h-20 rounded-full object-cover border mb-2"
        />
        <h2 className="text-lg font-bold text-green-700">{profile?.name}</h2>
        <p className="text-sm text-gray-500">{profile?.email}</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4">
        <NavLink to="/farmer/add-product" className={linkClasses}>
          <FaPlus /> Add Product
        </NavLink>

        <NavLink to="/farmer/my-products" className={linkClasses}>
          <FaBoxOpen /> My Products
        </NavLink>

        <NavLink to="/farmer/orders" className={linkClasses}>
          <FaClipboardList /> Orders
        </NavLink>

        <NavLink to="/farmer/profile" className={linkClasses}>
          <FaUser /> Profile
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
