import mongoose from "mongoose";

const auditLogSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    action: {
      type: String,
      required: true,
    },
    time:{
        type: Date,
        default: Date.now
    }

  },
  { timestamps: true }
);

export default mongoose.model("AuditLog", auditLogSchema);
