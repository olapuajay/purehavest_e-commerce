import productModel from "../models/Product.js";

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