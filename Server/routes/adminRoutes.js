import express from "express";
import {
  getAllProducts,
  approveProduct,
  rejectProduct,
  deleteProductByAdmin,
  getAllUsers,
  getUserById,
  deleteUserById,
  getAllFarmers,
  getFarmerById,
  deleteFarmerById,
} from "../controllers/adminController.js";
import { authenticate, authorize } from "../middleware/authMiddleware.js";

const Router = express.Router();

// Product routes
Router.get("/products", authenticate, authorize("admin"), getAllProducts);
Router.patch("/products/:id/approve", authenticate, authorize("admin"), approveProduct);
Router.patch("/products/:id/reject", authenticate, authorize("admin"), rejectProduct);
Router.delete("/products/:id", authenticate, authorize("admin"), deleteProductByAdmin);

// User routes
Router.get("/allusers", authenticate, authorize("admin"), getAllUsers);
Router.get("/allusers/:id", authenticate, authorize("admin"), getUserById);
Router.delete("/allusers/:id", authenticate, authorize("admin"), deleteUserById);

// Farmer routes
Router.get("/allfarmers", authenticate, authorize("admin"), getAllFarmers);
Router.get("/allfarmers/:id", authenticate, authorize("admin"), getFarmerById);
Router.delete("/allfarmers/:id", authenticate, authorize("admin"), deleteFarmerById);

export default Router;