import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./config/db.js";
import userRoutes from './routes/userRoutes.js';
import farmerRoutes from './routes/farmerRoutes.js'
import productRoutes from './routes/productRoutes.js'
import adminRoutes from './routes/adminRoutes.js';
import publicProductRoutes from './routes/publicProductRoutes.js';
import orderRoutes from './routes/orderRoutes.js';


connectDB();

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/farmers", farmerRoutes);
app.use("/api/farmers/products", productRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/products", publicProductRoutes);
app.use("/api/orders", orderRoutes);

const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
