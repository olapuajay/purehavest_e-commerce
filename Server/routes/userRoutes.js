import express from 'express';
import { loginUser, registerUser, profile, updateProfile } from '../controllers/userController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authenticate, profile);
router.patch("/updateprofile", authenticate, updateProfile);

export default router;