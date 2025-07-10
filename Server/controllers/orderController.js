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

export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const validStatus = ["confirmed", "shipped", "delivered"];
    if(!validStatus.includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }
    const order = await orderModel.findById(req.params.id);
    if(!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    order.status = status;
    const updatedOrder = await order.save();
    
    res.status(200).json({ message: "Order status updated", order: updatedOrder, });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update order status" });
  }
};

export const markOrderAsPaid = async (req, res) => {
  try {
    const order = await orderModel.findById(req.params.id);
    if(!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    order.paymentStatus = "paid";
    await order.save();

    res.status(200).json({ message: "Payment marked as successfull", order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update payment status" });
  }
};