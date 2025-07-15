import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigate hook
import { FaTrash } from 'react-icons/fa';
import Kiwi from '../../assets/kiwi.png';
import Bananas from '../../assets/bananas.png';
import Grapes from '../../assets/grapes.png';
import Apple from '../../assets/apple.png';
import Mango from '../../assets/mango.png';

function Cart() {
  const navigate = useNavigate(); 

  const handleProceedToPay = () => {
    navigate('/checkoutform'); // Navigate to checkout route
  };

  return (
    <div className="max-w-md mx-auto px-4 py-6 font-medium text-sm">
      {/* Back */}
      <p className="text-xs text-gray-600 cursor-pointer mb-2">&lt; Back</p>

      {/* Heading */}
      <h2 className="text-center text-lg mb-4 font-semibold">Order Details</h2>

      {/* Delivery Notice */}
      <div className="border border-gray-300 rounded-md p-4 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">🕒</span>
          <p className="text-green-700 font-medium">Delivery in 10 mins</p>
        </div>

        {/* Item 1 */}
        <div className="flex items-center gap-4 mb-4">
          <img src={Kiwi} alt="Kiwi" className="w-16 h-16 rounded" />
          <div className="flex-1">
            <p className="font-semibold">KIWI</p>
            <p className="text-xs text-gray-500">Quantity: 6 pieces</p>
            <p className="text-xs text-gray-500">10 mins</p>
            <div className="flex items-center mt-2 gap-2">
              <button className="border px-2">-</button>
              <span>1</span>
              <button className="border px-2">+</button>
            </div>
          </div>
          <div className="text-right">
            <p className="text-green-700 font-semibold">300/-</p>
            <FaTrash className="text-gray-500 cursor-pointer mt-2" />
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-center gap-4">
          <img src={Bananas} alt="Bananas" className="w-16 h-16 rounded" />
          <div className="flex-1">
            <p className="font-semibold">KIWI</p>
            <p className="text-xs text-gray-500">Quantity: 6 pieces</p>
            <p className="text-xs text-gray-500">10 mins</p>
            <div className="flex items-center mt-2 gap-2">
              <button className="border px-2">-</button>
              <span>1</span>
              <button className="border px-2">+</button>
            </div>
          </div>
          <div className="text-right">
            <p className="text-green-700 font-semibold">500/-</p>
            <FaTrash className="text-gray-500 cursor-pointer mt-2" />
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="border border-gray-300 rounded-md p-4 mb-6">
        <h3 className="text-center mb-3 font-medium">Order Summary</h3>
        <div className="flex justify-between text-green-700 mb-2">
          <span>Items Total :</span>
          <span className="text-black">300/-</span>
        </div>
        <div className="flex justify-between text-green-700 mb-2">
          <span>Delivery Fee :</span>
          <span className="text-black">50/-</span>
        </div>
        <div className="flex justify-between text-green-700 mb-2">
          <span>Platform Fee :</span>
          <span className="text-black">20/-</span>
        </div>
        <div className="flex justify-between text-lg font-semibold italic text-orange-600 mt-3">
          <span>Total Amount :</span>
          <span>370/-</span>
        </div>
      </div>

      {/* ✅ Updated Pay Button */}
      <div className="text-center mb-4">
        <button
          onClick={handleProceedToPay}
          className="bg-green-700 hover:bg-green-800 text-white italic px-6 py-2 rounded"
        >
          Proceed to Pay
        </button>
      </div>

      {/* Refund Note */}
      <div className="bg-[#f0f5e9] text-center italic text-sm p-3 rounded mb-6 text-green-900">
        “If damaged or spoiled, return within 24 hours for a refund”
      </div>

      {/* Often Bought Together */}
      <h3 className="text-center font-medium mb-4">Often Bought Together</h3>
      <div className="grid grid-cols-2 gap-4">
        {/* Product 1 */}
        <div className="border rounded p-2 text-center">
          <img src={Grapes} alt="Grapes" className="w-20 h-20 mx-auto" />
          <p className="text-sm mt-1">Grapes</p>
          <p className="text-xs text-gray-500">500-600 g</p>
          <p className="text-sm font-medium">80/-</p>
          <button className="bg-green-700 text-white text-xs px-4 py-1 rounded mt-1">Add</button>
        </div>
        {/* Product 2 */}
        <div className="border rounded p-2 text-center">
          <img src={Bananas} alt="Bananas" className="w-20 h-20 mx-auto" />
          <p className="text-sm mt-1">Bananas</p>
          <p className="text-xs text-gray-500">6 pcs</p>
          <p className="text-sm font-medium">30/-</p>
          <button className="bg-green-700 text-white text-xs px-4 py-1 rounded mt-1">Add</button>
        </div>
        {/* Product 3 */}
        <div className="border rounded p-2 text-center">
          <img src={Mango} alt="Mango" className="w-20 h-20 mx-auto" />
          <p className="text-sm mt-1">Mango</p>
          <p className="text-xs text-gray-500">400-500 g</p>
          <p className="text-sm font-medium">80/-</p>
          <button className="bg-green-700 text-white text-xs px-4 py-1 rounded mt-1">Add</button>
        </div>
        {/* Product 4 */}
        <div className="border rounded p-2 text-center">
          <img src={Apple} alt="Apple" className="w-20 h-20 mx-auto" />
          <p className="text-sm mt-1">Apple</p>
          <p className="text-xs text-gray-500">6 pcs</p>
          <p className="text-sm font-medium">70/-</p>
          <button className="bg-green-700 text-white text-xs px-4 py-1 rounded mt-1">Add</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
