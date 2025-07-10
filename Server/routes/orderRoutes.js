import express from "express";
import { authenticate, authorize } from "../middleware/authMiddleware.js";
import { placeOrder, getUserOrders, getFarmerOrders, getAllOrders, updateOrderStatus } from "../controllers/orderController.js";

const Router = express.Router();

Router.post("/", authenticate, placeOrder);
Router.get("/myorders", authenticate, getUserOrders);

Router.get("/farmer", authenticate, authorize("farmer"), getFarmerOrders);
Router.get("/", authenticate, authorize("admin"), getAllOrders);

Router.patch("/:id/status", authenticate, authorize("admin"), updateOrderStatus);

export default Router;