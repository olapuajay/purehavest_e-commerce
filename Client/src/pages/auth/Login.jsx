import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');

  const { login } = useAuth();
  const navigate = useNavigate();

  const API = import.meta.env.VITE_API_URL;

  const handleLogin = async () => {
    try {
      const endpoint =
        role === 'farmer'
          ? `${API}/farmers/login`
          : `${API}/users/login`;

      const res = await axios.post(endpoint, { email, password });
      console.log("Login Response:", res.data);

      login(res.data.user, res.data.token);

      if (res.data.user.role === 'admin') navigate('/admin/dashboard');
      else if (res.data.user.role === 'farmer') navigate('/farmer');
      else {
        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      alert(error?.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      >
        <option value="user">User</option>
        <option value="farmer">Farmer</option>
        <option value="admin">Admin</option>
      </select>

      <button
        onClick={handleLogin}
        className="w-full bg-green-600 text-white p-2 rounded"
      >
        Login
      </button>
      <p className="mt-4 text-center">
        Don’t have an account? <Link to="/register" className="text-blue-600 underline">Register</Link>
      </p>
    </div>
  );
}

export default Login;
