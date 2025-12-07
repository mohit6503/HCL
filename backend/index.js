import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./Routes/authRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

// DB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

// ROUTES
app.use("/auth", authRoutes);

export default app;
