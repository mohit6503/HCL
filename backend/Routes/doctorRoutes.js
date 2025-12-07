import express from "express";
import auth from "../middleware/authMiddleware.js";
import allow from "../middleware/roleMiddleware.js";
import { getAssignedPatients, getPatientReport, addPatientNote } from "../Controller/doctorController.js";

const router = express.Router();

router.get("/patients/:doctorId", auth, allow("DOCTOR"), getAssignedPatients);
router.get("/patient-report/:patientId", auth, allow("DOCTOR"), getPatientReport);
router.post("/note", auth, allow("DOCTOR"), addPatientNote);

export default router;
