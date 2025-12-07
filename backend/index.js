import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from "./Routes/authRoutes.js";
import patientRoutes from "./Routes/patientRoutes.js";
import doctorRoutes from "./Routes/doctorRoutes.js";
import dashboardRoutes from "./Routes/dashboardRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.use("/auth", authRoutes);
app.use("/patient", patientRoutes);
app.use("/doctor", doctorRoutes);
app.use("/dashboard", dashboardRoutes);

app.listen(3000, () => console.log("Server running on 3000"));
