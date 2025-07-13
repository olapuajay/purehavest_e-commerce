import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function FarmerDetails() {
  const { id } = useParams();
  const [farmer, setFarmer] = useState(null);
  const API = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFarmer = async () => {
      try {
        const res = await axios.get(`${API}/admin/allfarmers/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setFarmer(res.data.farmer);
      } catch (error) {
        console.log("Failed to fetch farmer: ", error);
      }
    };
    fetchFarmer();
  }, [id, token]);

  if(!farmer) return <div className='p-4'>Loading...</div>;

  return (
    <div className='p-4 max-w-2xl mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Farmer Details</h1>
      <div className='bg-white rounded-lg shadow p-6'>
        <img src={farmer.avatar || 'https://placehold.co/100x100'} alt="Avatar" className="w-24 h-24 rounded-full object-cover border" />
        <div>
          <h2 className='text-xl font-semibold text-green-700'>{farmer.name}</h2>
          <p className='text-gray-600'>{farmer.email}</p>
          <p className='text-gray-500 text-sm'>Joined: {new Date(farmer.createdAt).toDateString()}</p>
        </div>
      </div>
      <button onClick={() => navigate(`/admin/farmers/${id}/products`)} className='mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 hover:cursor-pointer'>
        View Products by Farmer
      </button>
    </div>
  )
}

export default FarmerDetails
