import PatientProfile from "../Models/Patient_Profile.js";
import DailyLog from "../Models/Daily_log.js";
import PatientNote from "../Models/Patient_Notes.js";
import User from "../Models/User.js";

export const getPatientDashboard = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.findById(id).select("name email");
    const latestLog = await DailyLog.findOne({ patientId: id }).sort({
      createdAt: -1,
    });

    const notes = await PatientNote.find({ patientId: id }).sort({
      createdAt: -1,
    });

    res.json({ user, latestLog, notes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getDoctorDashboard = async (req, res) => {
  try {
    const doctorId = req.params.id;

    const patients = await PatientProfile.find({
      assignedDoctorId: doctorId,
    }).populate("patientId", "name");

    const reports = await Promise.all(
      patients.map(async (p) => {
        const log = await DailyLog.findOne({ patientId: p.patientId._id }).sort(
          { createdAt: -1 }
        );

        return { patient: p.patientId, latestLog: log };
      })
    );

    res.json({ patients: reports });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
