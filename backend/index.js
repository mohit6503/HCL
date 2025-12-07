import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./Routes/authRoutes.js";
import patientRoutes from "./Routes/patientRoutes.js";
import doctorRoutes from "./Routes/doctorRoutes.js";
import dashboardRoutes from "./Routes/dashboardRoutes.js";

dotenv.config();
const app = express();

app.use(cors());


app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.use("/auth", authRoutes);
app.use("/patient", patientRoutes);
app.use("/doctor", doctorRoutes);
app.use("/dashboard", dashboardRoutes);



app.use("/api/patient", patientRoutes);

app.use("/api/doctor", doctorRoutes);


app.listen(process.env.PORT, () => console.log(`Server running on ${process.env.PORT}`));
