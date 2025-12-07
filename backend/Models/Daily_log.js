import mongoose from "mongoose";

const dailyLogSchema = new mongoose.Schema(
  {
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: String, required: true },
    steps: { type: Number, default: 0 },
    water: { type: Number, default: 0 },
    sleep: { type: Number, default: 0 },
    notes: { type: String, default: "" },
    goalStatus: { type: String, enum: ["MET", "MISSED", "PENDING"], default: "PENDING" }
  },
  { timestamps: true }
);

export default mongoose.model("DailyLog", dailyLogSchema);
