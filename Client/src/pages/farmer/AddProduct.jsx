import React, { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../../contexts/AuthContext'

const categories = [
  "Dairy", "Cereals", "Grains", "Vegetables", "Fruits", "Spices", "Dryfruits", "Meat",
];

function AddProduct() {
  const { token } = useAuth();

  const [formData, setFormData] = useState({
    name: "", price: "", category: "", quantity: "", description: "", image: null,
  });

  const [loading, setLoading] = useState(false);

  const API = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if(name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!formData.image) return alert("Please select an image!");
    try {
      setLoading(true);

      const data = new FormData();
      for(const key in formData) {
        data.append(key, formData[key]);
      }

      const res = await axios.post(`${API}/farmers/products`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Product added successfully!");

      setFormData({
        name: "", price: "", category: "", quantity: "", description: "", image: null,
      });
    } catch (error) {
      console.log(error);
      alert("Failed to add product");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="bg-white p-6 rounded shadow max-w-3xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
          className="border p-2 rounded"
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="number"
          name="price"
          placeholder="Price (₹)"
          value={formData.price}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  )
}

export default AddProduct
