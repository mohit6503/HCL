
import express from "express";
import auth from "../middleware/authMiddleware.js";
import allow from "../middleware/roleMiddleware.js";
import { getDoctorDashboard } from "../Controller/doctorController.js";

const router = express.Router();

// Doctor → See all assigned patients
router.get("/dashboard/:doctorId", auth, allow("DOCTOR"), getDoctorDashboard);

export default router;
