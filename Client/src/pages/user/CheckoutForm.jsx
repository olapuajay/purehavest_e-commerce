import React from 'react';

function CheckoutForm() {
  return (
    <div className="max-w-md mx-auto px-4 py-6 text-sm font-medium">
      {/* Back */}
      <p className="text-xs text-gray-600 cursor-pointer mb-4">&lt; Back</p>

      {/* Contact Details */}
      <div className="border border-green-700 rounded-md p-4 mb-6">
        <h2 className="text-center mb-4 font-medium">Contact Details</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full border rounded px-3 py-2 mb-3 text-sm outline-none"
        />
        <input
          type="text"
          placeholder="Contact Number"
          className="w-full border rounded px-3 py-2 text-sm outline-none"
        />
      </div>

      {/* Delivery Address */}
      <div className="border border-green-700 rounded-md p-4 mb-6">
        <h2 className="text-center mb-4 font-medium">Select Delivery Address</h2>
        <input
          type="text"
          placeholder="(House No., Building, Street, Area )"
          className="w-full border rounded px-3 py-2 mb-3 outline-none"
        />
        <input
          type="text"
          placeholder="Pin Code"
          className="w-full border rounded px-3 py-2 mb-3 outline-none"
        />
        <input
          type="text"
          placeholder="Locality / Town"
          className="w-full border rounded px-3 py-2 mb-3 outline-none"
        />
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="City /District"
            className="w-1/2 border rounded px-3 py-2 outline-none"
          />
          <input
            type="text"
            placeholder="State"
            className="w-1/2 border rounded px-3 py-2 outline-none"
          />
        </div>
        <div className="flex justify-between">
          <button className="border border-green-700 text-green-700 px-6 py-2 rounded hover:bg-green-50">
            Cancel
          </button>
          <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800">
            Save
          </button>
        </div>
      </div>

      {/* Payment Method */}
      <div className="border border-green-700 rounded-md p-4 mb-6">
        <h2 className="text-center mb-4 font-medium">Select Payment Method</h2>
        <div className="space-y-2">
          <label className="flex justify-between items-center border rounded px-4 py-2 cursor-pointer">
            <span>Cash on Delivery (Cash/ UPI )</span>
            <input type="radio" name="payment" />
          </label>
          <label className="flex justify-between items-center border rounded px-4 py-2 cursor-pointer">
            <span>Netbanking</span>
            <input type="radio" name="payment" />
          </label>
          <label className="flex justify-between items-center border rounded px-4 py-2 cursor-pointer">
            <span>UPI (Gpay, Paytm, Phonepe/more)</span>
            <input type="radio" name="payment" />
          </label>
          <label className="flex justify-between items-center border rounded px-4 py-2 cursor-pointer">
            <span>Pay Later</span>
            <input type="radio" name="payment" />
          </label>
          <label className="flex justify-between items-center border rounded px-4 py-2 cursor-pointer">
            <span>Credit / Debit Card</span>
            <input type="radio" name="payment" />
          </label>
        </div>
      </div>

      {/* Place Order Button */}
      <div className="text-center">
        <button className="bg-green-700 hover:bg-green-800 text-white italic px-6 py-2 rounded">
          Place Order
        </button>
      </div>
    </div>
  );
}

export default CheckoutForm;
