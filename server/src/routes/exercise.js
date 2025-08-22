


import { Router } from "express";
import { 
  analyzeSentiment, 
  getSentences, 
  saveSentence,     // 👈 added
  getAllSentences,  // 👈 added
  saveScore, 
  getLeaderboard 
} from "../controllers/exerciseController.js";

const router = Router();

// Sentiment Analysis
router.post("/sentiment/analyze", analyzeSentiment);

// Example static sentences
router.get("/sentences", getSentences);

// Save a new user sentence
router.post("/sentences", saveSentence);   // 👈 added

// Fetch all saved sentences
router.get("/sentences/all", getAllSentences);   // 👈 added

// Score + Leaderboard
router.post("/score", saveScore);
router.get("/leaderboard", getLeaderboard);

export default router;
