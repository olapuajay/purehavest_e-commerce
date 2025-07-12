import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaPlus, FaBoxOpen, FaClipboardList, FaUser } from 'react-icons/fa'

function Sidebar() {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded hover:bg-green-100 ${
      isActive ? "bg-green-200 font-semibold" : ""
    }`;

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 p-4 sticky top-0">
      <h2 className="text-2xl font-bold mb-6 text-green-700">Farmer Panel</h2>

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
  )
}

export default Sidebar
