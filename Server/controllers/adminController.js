import productModel from "../models/Product.js";
import userModel from "../models/User.js"; // Add this if not already present

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
    if (!product) return res.status(404).json({ message: "Product not found" });

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
    if (!product) return res.status(404).json({ message: "Product not found" });

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
    if (!deleted) return res.status(404).json({ message: "Product not found" });

    res.json({ message: "Product deleted by admin" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Additional functions from your original branch

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
