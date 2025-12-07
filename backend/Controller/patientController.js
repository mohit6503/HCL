import DailyLog from "../Models/Daily_log.js";
import PatientProfile from "../Models/Patient_Profile.js";
import DoctorNote from "../Models/Patient_Notes.js";
import User from "../Models/User.js";

// --------------------- CREATE TODAY'S LOG ---------------------
export const createDailyLog = async (req, res) => {
  try {
    const { patientId, date, steps, water, sleep, notes } = req.body;

    const log = await DailyLog.create({
      patientId,
      date,
      steps,
      water,
      sleep,
      notes: notes || ""
    });

    return res.status(201).json(log);
  } catch (err) {
    console.error("LOG CREATE ERROR:", err);
    return res.status(500).json({ message: "Error creating log" });
  }
};

// --------------------- MARK GOAL STATUS ---------------------
export const markGoalStatus = async (req, res) => {
  try {
    const { logId, status } = req.body;

    const updated = await DailyLog.findByIdAndUpdate(
      logId,
      { goalStatus: status },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Log not found" });
    }

    return res.json(updated);
  } catch (err) {
    console.error("MARK GOAL ERROR:", err);
    return res.status(500).json({ message: "Unable to update goal" });
  }
};

// --------------------- PATIENT DASHBOARD ---------------------
export const getPatientDashboard = async (req, res) => {
  try {
    const patientId = req.params.patientId;

    const latestLog = await DailyLog.findOne({ patientId })
      .sort({ date: -1 })
      .lean();

    const reminders = [
      { id: 1, text: "Annual blood test reminder" }
    ];

    const tip = { text: "Drink 8 glasses of water daily." };

    const notes = await DoctorNote.find({ patientId })
      .populate("doctorId", "name email")
      .sort({ createdAt: -1 });

    return res.json({
      latestLog,
      reminders,
      tip,
      notes
    });
  } catch (err) {
    console.error("DASHBOARD ERROR:", err);
    return res.status(500).json({ message: "Error loading dashboard" });
  }
};

// --------------------- GET PATIENT PROFILE ---------------------
export const getPatientProfile = async (req, res) => {
  try {
    const patientId = req.params.patientId;

    let profile = await PatientProfile.findOne({ patientId });

    if (!profile) {
      const user = await User.findById(patientId);
      return res.json({
        name: user.name,
        age: "",
        allergies: "",
        medications: ""
      });
    }

    return res.json(profile);
  } catch (err) {
    console.error("PROFILE ERROR:", err);
    return res.status(500).json({ message: "Error loading profile" });
  }
};

// --------------------- UPDATE PATIENT PROFILE ---------------------
export const updatePatientProfile = async (req, res) => {
  try {
    const { patientId, name, age, allergies, medications } = req.body;

    let profile = await PatientProfile.findOne({ patientId });

    if (!profile) {
      profile = await PatientProfile.create({
        patientId,
        name,
        age,
        allergies,
        medications
      });
    } else {
      profile.name = name;
      profile.age = age;
      profile.allergies = allergies;
      profile.medications = medications;
      await profile.save();
    }

    return res.json(profile);
  } catch (err) {
    console.error("PROFILE UPDATE ERROR:", err);
    return res.status(500).json({ message: "Error saving profile" });
  }
};
