import DailyLog from "../Models/DailyLog.js";
import PatientNote from "../Models/PatientNote.js";

export const markGoalStatusByPatient = async (req, res) => {
  try {
    const { logId, status } = req.body;

    const updated = await DailyLog.findByIdAndUpdate(
      logId,
      { goalStatus: status },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPatientNotes = async (req, res) => {
  try {
    const patientId = req.params.patientId;

    const notes = await PatientNote.find({ patientId }).populate(
      "doctorId",
      "name"
    );

    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
