import PatientProfile from "../Models/Patient_Profile.js";
import DailyLog from "../Models/Daily_log.js";
import PatientNote from "../Models/Patient_Notes.js";
import User from "../Models/User.js";


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

export const getDoctorDashboard = async (req, res) => {
  try {
    const doctorId = req.params.doctorId;

    // Find all patients assigned to this doctor
    const profiles = await PatientProfile.find({ assignedDoctorId: doctorId })
      .populate("patientId", "name email");

    const patients = [];

    for (const profile of profiles) {
      const latestLog = await DailyLog.findOne({ patientId: profile.patientId._id })
        .sort({ date: -1 });

      patients.push({
        patient: {
          id: profile.patientId._id,
          name: profile.patientId.name,
        },
        latestLog,
        upcomingCheck: "Next Week"
      });
    }

    return res.json({ patients });
  } catch (err) {
    console.error("DOCTOR DASHBOARD ERROR:", err);
    return res.status(500).json({ message: "Failed to load doctor dashboard" });
  }
};

