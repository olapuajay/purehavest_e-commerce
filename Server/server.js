import express from "express";
import dotenv from "dotenv";
import authRoutes from './routes/authRoutes.js';
dotenv.config();

const app = express();

app.use(express.json);

app.use("/api/auth", authRoutes);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello from server!");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
