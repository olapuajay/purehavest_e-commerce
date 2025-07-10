import express from 'express';
import { loginUser, registerUser, profile, updateProfile } from '../controllers/userController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const Router = express.Router();

Router.post("/register", registerUser);
Router.post("/login", loginUser);
Router.get("/profile", authenticate, profile);
Router.patch("/updateprofile", authenticate, updateProfile);

export default Router;