import express from "express";
import auth from "../middleware/authMiddleware.js";
import allow from "../middleware/roleMiddleware.js";
import {
  createDailyLog,
  markGoalStatus,
  getPatientDashboard,
  getPatientProfile,
  updatePatientProfile
} from "../Controller/patientController.js";

const router = express.Router();

// Save daily log
router.post("/log", auth, allow("PATIENT"), createDailyLog);

// Mark goal MET / MISSED
router.put("/mark-goal", auth, allow("PATIENT"), markGoalStatus);

// Dashboard data
router.get("/dashboard/:patientId", auth, allow("PATIENT"), getPatientDashboard);

// Profile fetch
router.get("/profile/:patientId", auth, allow("PATIENT"), getPatientProfile);

// Profile update
router.put("/profile", auth, allow("PATIENT"), updatePatientProfile);


router.put("/assign", auth, allow("DOCTOR"), async (req, res) => {
  const { patientId, doctorId } = req.body;

  await PatientProfile.findOneAndUpdate(
    { patientId },
    { assignedDoctorId: doctorId },
    { new: true, upsert: true }
  );

  res.json({ message: "Patient assigned successfully" });
});

export default router;
