import express from "express";
import { authenticate } from "../middleware/authMiddleware.js";
import { placeOrder, getUserOrders } from "../controllers/orderController.js";

const Router = express.Router();

Router.post("/", authenticate, placeOrder);
Router.get("/myorders", authenticate, getUserOrders);

export default Router;