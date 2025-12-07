import express from "express";
import auth from "../middleware/authMiddleware.js";
import { getDoctorDashboard, getPatientDashboard } from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/patient/:id", auth, getPatientDashboard);
router.get("/doctor/:id", auth, getDoctorDashboard);

export default router;
