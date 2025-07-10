import orderModel from "../models/Order.js";

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