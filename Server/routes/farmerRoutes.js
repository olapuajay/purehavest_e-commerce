import express from 'express';
import { registerFarmer, loginFarmer, updateProfile } from '../controllers/farmerController.js';
import { authenticate, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/register", registerFarmer);
router.post("/login", loginFarmer);
router.get("/profile", authenticate, authorize("farmer"), updateProfile);
router.patch("/updateprofile", authenticate, authorize("farmer"), updateProfile);

export default router;