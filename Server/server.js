import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();

connectDB();

const app = express();

app.use(express.json);

const port = process.env.PORT || 8001;

app.get("/", (req, res) => {
  res.send("Hello from server!");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
