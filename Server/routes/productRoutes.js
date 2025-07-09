import express from 'express';
import { createProduct, getMyProducts, updateProduct, deleteProduct } from '../controllers/productController.js';
import { authenticate, authorize } from '../middleware/authMiddleware.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.post("/", authenticate, authorize("farmer"), upload.single('image'), createProduct);
router.get("/", authenticate, authorize("farmer"), getMyProducts);
router.patch("/:id", authenticate, authorize("farmer"), updateProduct);
router.delete("/:id", authenticate, authorize("farmer"), deleteProduct);

export default router;