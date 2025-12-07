import express from "express";
import auth from "../middleware/authMiddleware.js";
import allow from "../middleware/roleMiddleware.js";
import { markGoalStatusByPatient, getPatientNotes } from "../controllers/patientController.js";

const router = express.Router();

router.put("/mark-goal", auth, allow("PATIENT"), markGoalStatusByPatient);
router.get("/notes/:patientId", auth, allow("PATIENT"), getPatientNotes);

export default router;
