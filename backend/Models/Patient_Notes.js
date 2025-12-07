import mongoose from "mongoose";

const patientNoteSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    note: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("PatientNote", patientNoteSchema);
