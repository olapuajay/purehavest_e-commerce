import productModel from "../models/Product.js";
import userModel from "../models/User.js";
import farmerModel from "../models/Farmer.js";
import mongoose from "mongoose";

export const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find().populate("farmer", "name email");
    res.json({ message: "Products List", products });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const approveProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if(!product) return res.status(404).json({ message: "Product not found" });

    product.status = "approved";
    await product.save();

    res.status(200).json({ message: "Product approved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const rejectProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if(!product) return res.status(404).json({ message: "Product not found" });

    product.status = "rejected";
    await product.save();

    res.status(200).json({ message: "Product rejected" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteProductByAdmin = async (req, res) => {
  try {
    const deleted = await productModel.findByIdAndDelete(req.params.id);
    if(!deleted) return res.status(404).json({ message: "Product not found" });

    res.json({ message: "Product deleted by admin" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};



// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json({ message: "Users List", users });
    
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get a user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User found", user });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Delete a user by ID
export const deleteUserById = async (req, res) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};


// farmer controller section

export const getAllFarmers = async (req, res) => {
  try {
    const farmers = await farmerModel.find().select("-password");
    res.status(200).json({ message: "Farmers List", farmers });
  } catch (error) {
    console.error("Error in getAllFarmers:", error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};


export const getFarmerById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid farmer ID format" });
    }

    const farmer = await farmerModel.findById(id).select("-password");
    if (!farmer) {
      return res.status(404).json({ message: "Farmer not found" });
    }

    res.status(200).json({ message: "Farmer found", farmer });
  } catch (error) {
    console.error("❌ Error in getFarmerById:", error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};


export const deleteFarmerById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedFarmer = await farmerModel.findByIdAndDelete(id);
    if (!deletedFarmer) {
      return res.status(404).json({ message: "Farmer not found" });
    }

    res.status(200).json({ message: "Farmer deleted successfully" });
  } catch (error) {
    console.error("❌ Error in deleteFarmerById:", error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};


