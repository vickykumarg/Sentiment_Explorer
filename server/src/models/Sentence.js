// models/Sentence.js
import mongoose from "mongoose";

const sentenceSchema = new mongoose.Schema({
  text: { type: String, required: true },
  label: { type: String, enum: ["positive", "negative", "neutral"], required: true }
}, { timestamps: true });

export default mongoose.model("Sentence", sentenceSchema);
