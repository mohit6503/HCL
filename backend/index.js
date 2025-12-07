import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./Config/db.js";

const app = express();

app.use(express.json());
app.use(cors());

connectDB();


app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
