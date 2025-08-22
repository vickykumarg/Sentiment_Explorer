import express from "express";
import Score from "../models/Score.js";

const router = express.Router();

// POST /api/scores → save user score
router.post("/scores", async (req, res) => {
  try {
    const { name, correct, total } = req.body;
    const score = new Score({ name, correct, total });
    await score.save();
    res.json(score);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/scores → leaderboard
router.get("/scores", async (_, res) => {
  try {
    const scores = await Score.find().sort({ correct: -1, createdAt: 1 }).limit(20);
    res.json(scores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
