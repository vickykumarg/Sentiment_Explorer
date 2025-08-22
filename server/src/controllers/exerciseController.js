


import Score from "../models/Score.js";
import Sentence from "../models/Sentence.js";
// import { simpleSentiment, SAMPLE_SENTENCES } from "../utils/sentiment.js";

let memoryScores = []; // fallback storage if no DB

// -------- Sentiment Analysis --------
export async function analyzeSentiment(req, res) {
  const { text } = req.body || {};
  const result = simpleSentiment(text || "");
  return res.json({ ok: true, result });
}



export async function getSentences(req, res) {
  try {
    if (Sentence.db.readyState === 1) {
      const docs = await Sentence.find().sort({ createdAt: -1 });
      return res.json(docs);
    }
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// -------- Save Sentence --------
export async function saveSentence(req, res) {
  const { text, label } = req.body || {};
  if (!text || !label) {
    return res.status(400).json({ ok: false, error: "Missing text or label" });
  }
  try {
    if (Sentence.db.readyState === 1) {
      const doc = await Sentence.create({ text, label });
      return res.json({ ok: true, data: doc });
    }
  } catch (e) {
    console.warn("[saveSentence] DB write failed:", e.message);
  }
  return res.json({ ok: false, error: "DB not connected" });
}

// -------- Fetch All Saved Sentences --------
export async function getAllSentences(req, res) {
  try {
    if (Sentence.db.readyState === 1) {
      const docs = await Sentence.find().sort({ createdAt: -1 });
      return res.json({ ok: true, data: docs });
    }
  } catch (e) {
    console.warn("[getAllSentences] DB read failed:", e.message);
  }
  return res.json({ ok: false, error: "DB not connected" });
}

// -------- Save Score --------
export async function saveScore(req, res) {
  const { name, correct, total } = req.body || {};
  if (!name || correct == null || total == null) {
    return res.status(400).json({ ok: false, error: "Missing fields" });
  }
  try {
    if (Score.db.readyState === 1) {
      const doc = await Score.create({ name, correct, total });
      return res.json({ ok: true, data: doc });
    }
  } catch (e) {
    console.warn("[saveScore] DB write failed, using memory:", e.message);
  }
  const doc = { _id: String(Date.now()), name, correct, total, createdAt: new Date() };
  memoryScores.push(doc);
  return res.json({ ok: true, data: doc, memory: true });
}

// -------- Leaderboard --------
export async function getLeaderboard(req, res) {
  try {
    if (Score.db.readyState === 1) {
      const top = await Score.find().sort({ correct: -1, createdAt: 1 }).limit(10);
      return res.json({ ok: true, data: top });
    }
  } catch (e) {
    console.warn("[getLeaderboard] DB read failed, using memory:", e.message);
  }
  const top = memoryScores.sort((a, b) => b.correct - a.correct).slice(0, 10);
  return res.json({ ok: true, data: top, memory: true });
}
