import mongoose from "mongoose";

const patientProfileSchema = new mongoose.Schema(
  {
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    assignedDoctorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
    name: String,
    age: String,
    allergies: String,
    medications: String
  },
  { timestamps: true }
);

export default mongoose.model("PatientProfile", patientProfileSchema);
