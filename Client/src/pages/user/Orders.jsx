import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useAuth } from "../../components/contexts/AuthContext.jsx";

function Orders() {
  const { token, user } = useAuth();
  const API = import.meta.env.VITE_API_URL;

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if(token) {
      fetchOrders();
    }
  }, [token]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(`${API}/orders/myorders`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Orders response: ", res.data);
      setOrders(res.data.orders || []);
    } catch (error) {
      console.log("Failed to fetch orders: ", error);
    }
  }

  const handleCancel = async (id) => {
    const reason = prompt("Why are you cancelling this order?");
    if(reason === null) return;
    try {
      await axios.patch(`${API}/orders/cancel/${id}`, {reason}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchOrders();
    } catch (err) {
      alert("Failed to cancel order");
    }
  };

  const handleReturn = async (id) => {
    try {
      await axios.patch(`${API}/orders/return/${id}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchOrders();
    } catch (err) {
      alert("Failed to request return");
    }
  };

  const getTrackingMessage = (status) => {
    switch(status) {
      case 'confirmed': return "Your order is being prepared";
      case 'shipped': return "Order has been shipped";
      case 'delivered': return "Delivered to your address";
      case 'cancelled': return "Order has been cancelled";
      default: return "Status not available";
    }
  };

  return (
    <div className='md:p-16 py-8'>
      <div className='bg-white shadow rounded p-4 sm:p-6 mt-10'>
        <h3 className='text-lg font-semibold mb-4'>My Orders</h3>
        {orders.length === 0 ? (
          <p className="text-sm text-gray-500">You haven't placed any orders yet.</p>
        ) : (
          orders.map((order) => (
            <div key={order._id} className="border-b py-4 text-sm">
              <div className='flex justify-between'>
                <div>
                  <p><span className="font-semibold">Order ID:</span> {order._id}</p>
                  <p><span className="font-semibold">Total:</span> ₹{order.totalAmount}</p>
                  <p><span className="font-semibold">Status:</span> 
                    <span
                      className={`text-sm font-medium ${order.status === 'delivered' ? 'text-green-600' : order.status === 'cancelled' ? 'text-red-600' : 'text-orange-600'}`} 
                    >
                      {" "}
                      {order.status}
                    </span>
                  </p>
                  <p><span className="font-semibold">Paid:</span> {order.paymentStatus === 'paid' ? 'Yes' : 'No'}</p>
                  <p><span className="font-semibold">Date:</span> {new Date(order.createdAt).toLocaleDateString()}</p>
                </div>
                <div className='text-right space-y-2'>
                  {/* Cancel */}
                  {order.status === 'confirmed' && (
                    <button
                      onClick={() => handleCancel(order._id)}
                      className="text-red-600 border border-red-600 px-3 py-1 rounded hover:bg-red-50"
                    >
                      Cancel
                    </button>
                  )}
                  {order.status === "cancelled" && order.cancelReason && (
                    <p className="text-xs italic text-gray-500">
                      Cancelled Reason: {order.cancelReason}
                    </p>
                  )}

                  {/* Return */}
                  {order.status === 'delivered' && !order.returnRequested && (
                    <button
                      onClick={() => handleReturn(order._id)}
                      className="text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-50"
                    >
                      Return
                    </button>
                  )}

                  {/* Already returned */}
                  {order.returnRequested && (
                    <>
                      {order.returnStatus === "pending" && (
                        <p className="text-xs italic text-yellow-600">Return Pending</p>
                      )}
                      {order.returnStatus === "approved" && (
                        <p className="text-xs italic text-green-600 font-medium">Return Approved</p>
                      )}
                      {order.returnStatus === "rejected" && (
                        <p className="text-xs italic text-red-600">
                          Return Rejected
                          {order.returnNote && ` — ${order.returnNote}`}
                        </p>
                      )}
                    </>
                  )}

                </div>
              </div>
              {/* Track Status */}
              <div className='mt-2'>
                <p className='text-xs text-gray-500 italic'>
                  Tracking: {getTrackingMessage(order.status)}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Orders
