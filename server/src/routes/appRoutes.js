import express from "express";
import {
  analyzeSentiment,
  getSentences,
  saveSentence,
  getAllSentences,
  saveScore,
  getLeaderboard
} from "../controllers/appController.js";

const router = express.Router();

// Sentiment analysis
router.post("/analyze", analyzeSentiment);

// Example sentences (sample set)
router.get("/sentences", getSentences);

// Save / fetch analyzed sentences
router.post("/sentence", saveSentence);
router.get("/sentence/all", getAllSentences);

// Scores + leaderboard
router.post("/score", saveScore);
router.get("/leaderboard", getLeaderboard);

export default router;
