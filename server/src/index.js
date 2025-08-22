import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import exerciseRoutes from "./routes/exercise.js";
import analyzeRoutes from "./routes/analyze.js";
import scoreRoutes from "./routes/score.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

app.use(cors({ origin: CLIENT_URL.split(","), credentials: false }));
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_, res) => {
  res.send("Sentiment for Kids API is running ✅");
});

app.use("/api", exerciseRoutes);
app.use("/api", analyzeRoutes);
app.use("/api", scoreRoutes);

app.get("/",(req,res)=>{
  res.send("It's Working");
})

// Boot
const start = async () => {
  await connectDB(process.env.MONGO_URI);
  app.listen(PORT, () => console.log(`[Server] http://localhost:${PORT}`));
};

start();
