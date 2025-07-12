import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';

function Orders() {
  const { token } = useAuth();
  const [orders, setOrders] = useState([]);
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`${API}/orders/farmer`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(res.data)
        setOrders(res.data.orders);
      } catch (error) {
        console.log("Failed to fetch farmer orders" + error);
      }
    };
    fetchOrders();
  }, [token]);

  return (
    <div className='p-6'>
      <h2 className='text-2xl font-bold mb-4'>My Orders</h2>
      {orders.length === 0 ? (
        <p className='text-gray-500'>No orders found</p>
      ) : (
        <div className='overflow-x-auto'>
          <table className='min-w-full bg-white border border-gray-200'>
            <thead className='bg-green-100'>
              <tr>
                <th className='px-4 py-2 text-left'>Customer</th>
                <th className='px-4 py-2 text-left'>Product</th>
                <th className='px-4 py-2 text-left'>Image</th>
                <th className='px-4 py-2 text-left'>Quantity</th>
                <th className='px-4 py-2 text-left'>Price</th>
                <th className='px-4 py-2 text-left'>Ordered On</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => order.items.map((item, index) => (
                <tr key={index} className='border-t'>
                  <td className='px-4 py-2'>
                    <div className='font-medium'>{order.user?.name}</div>
                    <div className='text-sm text-gray-500'>{order.user?.email}</div>
                  </td>
                  <td className='px-4 py-2'>{item.product?.name}</td>
                  <td className="px-4 py-2">
                      <img
                        src={item.product?.image}
                        alt={item.product?.name}
                        className="h-12 w-12 rounded object-cover"
                      />
                  </td>
                  <td className="px-4 py-2">{item.quantity}</td>
                  <td className="px-4 py-2">₹{item.product?.price}</td>
                  <td className="px-4 py-2">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              )))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Orders
