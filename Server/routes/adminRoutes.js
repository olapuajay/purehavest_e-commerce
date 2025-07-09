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


Router.get("/products", authenticate, authorize("admin"), getAllProducts);
Router.patch("/products/:id/approve", authenticate, authorize("admin"), approveProduct);
Router.patch("/products/:id/reject", authenticate, authorize("admin"), rejectProduct);
Router.delete("/products/:id", authenticate, authorize("admin"), deleteProductByAdmin);
Router.get("/users", authenticate, authorize("admin"), getAllUsers);
Router.get("/users/:id", authenticate, authorize("admin"), getUserById);
Router.delete("/users/:id", authenticate, authorize("admin"), deleteUserById);
Router.get("/farmers", authenticate, authorize("admin"), getAllFarmers);
Router.get("/farmers/:id", authenticate, authorize("admin"), getFarmerById);
Router.delete("/farmers/:id", authenticate, authorize("admin"), deleteFarmerById);



export default Router;