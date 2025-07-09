import express from "express";
import { getAllProducts, approveProduct, rejectProduct, deleteProductByAdmin } from "../controllers/adminController.js";
import { authenticate, authorize } from "../middleware/authMiddleware.js";

const Router = express.Router();

Router.get("/products", authenticate, authorize("admin"), getAllProducts);
Router.patch("/products/:id/approve", authenticate, authorize("admin"), approveProduct);
Router.patch("/products/:id/reject", authenticate, authorize("admin"), rejectProduct);
Router.delete("/products/:id", authenticate, authorize("admin"), deleteProductByAdmin);

export default Router;