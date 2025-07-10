import orderModel from "../models/Order.js";
import productModel from "../models/Product.js";

export const placeOrder = async (req, res) => {
  try {
    const { items, totalAmount } = req.body;
    const order = await orderModel.create({
      user: req.user.id,
      items, totalAmount,
    });
    res.status(201).json({ message: "Order placed", orderDetails: order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to place order" });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ user: req.user.id }).populate("items.product", "name price category image");
    res.status(200).json({ message: "User orders", orders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};

export const getFarmerOrders = async (req, res) => {
  try {
    const farmerProducts = await productModel.find({ farmer: req.user.id });
    const productIds = farmerProducts.map((p) => p._id);

    const orders = await orderModel
      .find({ "items.product": { $in: productIds } })
      .populate("user", "name email")
      .populate("items.product", "name email");

    res.status(200).json({ message: "Total Orders", orders });
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Failed to fetch farmer orders"});
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await orderModel
      .find()
      .populate("user", "name email")
      .populate("items.product", "name email");

    res.status(200).json({ message: "All Orders", orders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to fetch all orders" });
  }
};