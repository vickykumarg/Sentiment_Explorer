import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    correct: { type: Number, required: true },
    total: { type: Number, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Score", scoreSchema);
