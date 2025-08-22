// routes/analyze.js
import express from "express";
import { simpleSentiment } from "../utils/sentiment.js"; // wherever you defined it

const router = express.Router();

router.post("/analyze", (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text required" });

  const result = simpleSentiment(text);
  res.json(result);
});

export default router;
