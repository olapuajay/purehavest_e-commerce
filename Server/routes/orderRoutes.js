import express from "express";
import { authenticate, authorize } from "../middleware/authMiddleware.js";
import { placeOrder, getUserOrders, getFarmerOrders, getAllOrders, updateOrderStatus, markOrderAsPaid } from "../controllers/orderController.js";

const Router = express.Router();

Router.post("/", authenticate, placeOrder);
Router.get("/myorders", authenticate, getUserOrders);

Router.get("/farmer", authenticate, authorize("farmer"), getFarmerOrders);
Router.get("/", authenticate, authorize("admin"), getAllOrders);

Router.patch("/:id/status", authenticate, authorize("admin"), updateOrderStatus);

Router.patch("/:id/pay", authenticate, markOrderAsPaid);

export default Router;