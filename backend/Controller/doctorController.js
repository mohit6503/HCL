import PatientProfile from "../Models/PatientProfile.js";
import DailyLog from "../Models/DailyLog.js";
import PatientNote from "../Models/PatientNote.js";

export const getAssignedPatients = async (req, res) => {
  try {
    const doctorId = req.params.doctorId;

    const list = await PatientProfile.find({
      assignedDoctorId: doctorId,
    }).populate("patientId", "name email");

    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPatientReport = async (req, res) => {
  try {
    const patientId = req.params.patientId;

    const logs = await DailyLog.find({ patientId }).sort({ createdAt: -1 });
    const notes = await PatientNote.find({ patientId });

    res.json({ logs, notes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addPatientNote = async (req, res) => {
  try {
    const { patientId, doctorId, note } = req.body;

    const saved = await PatientNote.create({
      patientId,
      doctorId,
      note,
    });

    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
