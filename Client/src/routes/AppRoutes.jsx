import { Routes, Route, Navigate } from "react-router-dom";

// Auth pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// User Pages
import Home from "../pages/user/Home";
import Products from "../pages/user/Products";
import ProductDetails from "../pages/user/ProductDetails";
import Cart from "../pages/user/Cart";
import Checkout from "../pages/user/Checkout";
import Orders from "../pages/user/Orders";
import Profile from "../pages/user/Profile";
import Invoice from "../pages/user/Invoice";

// Farmer Pages
import FarmerDashboard from "../pages/farmer/Dashboard";
import AddProduct from "../pages/farmer/AddProduct";
import MyProducts from "../pages/farmer/MyProducts";
import FarmerOrders from "../pages/farmer/Orders";
import FarmerProfile from "../pages/farmer/Profile";

// Admin Pages
import AdminDashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";
import Farmers from "../pages/admin/Farmers";
import AdminOrders from "../pages/admin/Orders";
import Returns from "../pages/admin/Returns";

import ProtectedRoute from "../components/common/ProtectedRoute";
import RoleGaurd from "../components/common/RoleGaurd";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoute allowedRoles={['user']} />}>
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/invoice/:id" element={<Invoice />} />
      </Route>

      <Route element={<ProtectedRoute allowedRoles={['farmer']} />}>
        <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
        <Route path="/farmer/add-product" element={<AddProduct />} />
        <Route path="/farmer/my-products" element={<MyProducts />} />
        <Route path="/farmer/orders" element={<FarmerOrders />} />
        <Route path="/farmer/profile" element={<FarmerProfile />} />
      </Route>

      <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/farmers" element={<Farmers />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/admin/returns" element={<Returns />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRoutes;
