import mongoose from "mongoose";

export async function connectDB(uri) {
  try {
    if (!uri) {
      console.warn("[DB] No MONGO_URI provided. Server will run with in-memory storage only.");
      return false;
    }
    await mongoose.connect(uri, { dbName: "sentiment_kids" });
    console.log("[DB] Connected");
    return true;
  } catch (err) {
    console.error("[DB] Connection error:", err.message);
    return false;
  }
}
