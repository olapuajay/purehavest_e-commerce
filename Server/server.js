import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./config/db.js";
import userRoutes from './routes/userRoutes.js';


connectDB();

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);

const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
