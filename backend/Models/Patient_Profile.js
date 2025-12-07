import mongoose from "mongoose";

const patientProfileSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,  
    },

    assignedDoctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null, 
    }
  },
  { timestamps: true }
);

export default mongoose.model("PatientProfile", patientProfileSchema);
