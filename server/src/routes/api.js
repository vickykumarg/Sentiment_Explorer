// import express from "express";
// import Sentence from "../models/Sentence.js";

// const router = express.Router();

// // Save new sentence from Practice
// router.post("/sentences", async (req, res) => {
//   try {
//     const { text, label } = req.body;
//     const sentence = new Sentence({ text, label });
//     await sentence.save();
//     res.json(sentence);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Fetch sentences for Quiz (max 20 at a time, ordered by createdAt)
// router.get("/sentences", async (req, res) => {
//   try {
//     const sentences = await Sentence.find().sort({ createdAt: -1 }).limit(20);
//     res.json(sentences);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// export default router;


// backend/routes/api.js
// import express from "express";
// import Sentence from "../models/Sentence.js";
// import Sentiment from "sentiment"; // 👈 npm install sentiment

// const router = express.Router();
// const sentiment = new Sentiment();

// // Analyze sentence
// router.post("/analyze", async (req, res) => {
//   try {
//     const { text } = req.body;
//     const result = sentiment.analyze(text);

//     // Simple label based on score
//     let label = "neutral";
//     if (result.score > 0) label = "positive";
//     else if (result.score < 0) label = "negative";

//     res.json({
//       label,
//       score: Math.abs(result.score) / 5 // normalize a bit
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Save new sentence
// router.post("/sentences", async (req, res) => {
//   try {
//     const { text, label } = req.body;
//     const sentence = new Sentence({ text, label });
//     await sentence.save();
//     res.json(sentence);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Fetch sentences (max 20 latest)
// router.get("/sentences", async (req, res) => {
//   try {
//     const sentences = await Sentence.find().sort({ createdAt: -1 }).limit(20);
//     res.json(sentences);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// export default router;


// backend/routes/exercise.js
import express from "express";
import Sentiment from "sentiment";
import Sentence from "../models/Sentence.js";
import Score from "../models/Score.js";

const router = express.Router();
const sentiment = new Sentiment();

let memoryScores = []; // fallback if DB not available

// ---------- Analyze Sentiment ----------
router.post("/analyze", async (req, res) => {
  try {
    const { text } = req.body || {};
    if (!text) return res.status(400).json({ error: "Text is required" });

    const result = sentiment.analyze(text);

    let label = "neutral";
    if (result.score > 0) label = "positive";
    else if (result.score < 0) label = "negative";

    res.json({
      ok: true,
      label,
      score: Math.abs(result.score) / 5 // normalize
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------- Save new sentence ----------
router.post("/sentences", async (req, res) => {
  try {
    const { text, label } = req.body;
    if (!text || !label) {
      return res.status(400).json({ error: "Text and label required" });
    }
    const sentence = new Sentence({ text, label });
    await sentence.save();
    res.json({ ok: true, data: sentence });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------- Fetch sentences (latest 20) ----------
router.get("/sentences", async (req, res) => {
  try {
    const sentences = await Sentence.find().sort({ createdAt: -1 }).limit(20);
    res.json({ ok: true, data: sentences });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------- Save Score ----------
router.post("/score", async (req, res) => {
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
    console.warn("[saveScore] DB failed, using memory:", e.message);
  }

  const doc = { _id: String(Date.now()), name, correct, total, createdAt: new Date() };
  memoryScores.push(doc);
  return res.json({ ok: true, data: doc, memory: true });
});

// ---------- Leaderboard ----------
router.get("/leaderboard", async (req, res) => {
  try {
    if (Score.db.readyState === 1) {
      const top = await Score.find().sort({ correct: -1, createdAt: 1 }).limit(10);
      return res.json({ ok: true, data: top });
    }
  } catch (e) {
    console.warn("[getLeaderboard] DB failed, using memory:", e.message);
  }

  const top = memoryScores.sort((a, b) => b.correct - a.correct).slice(0, 10);
  return res.json({ ok: true, data: top, memory: true });
});

export default router;

