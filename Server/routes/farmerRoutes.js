import express from 'express';
import { registerFarmer, loginFarmer, updateProfile, farmerStats } from '../controllers/farmerController.js';
import { authenticate, authorize } from '../middleware/authMiddleware.js';

const Router = express.Router();

Router.post("/register", registerFarmer);
Router.post("/login", loginFarmer);
Router.get("/profile", authenticate, authorize("farmer"), updateProfile);
Router.patch("/updateprofile", authenticate, authorize("farmer"), updateProfile);
Router.get("/stats", authenticate, authorize("farmer"), farmerStats);

export default Router;