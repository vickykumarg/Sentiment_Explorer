


// routes/analyze.js
import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/analyze", async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text required" });
  }

  

  try {
  const response = await axios.post(
    "https://api-inference.huggingface.co/models/distilbert/distilbert-base-uncased-finetuned-sst-2-english",
    { inputs: text },
    {
      headers: {
        Authorization: `Bearer ${process.env.HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      timeout: 15000, // 15 seconds
    }
  );

  // Hugging Face may return an error object if model is loading
  if (response.data.error) {
    console.error("HF API returned error:", response.data.error);
    return res.status(503).json({ error: "Model is loading, please try again in a few seconds" });
  }

  // Handle both single and nested array response
  const result = Array.isArray(response.data[0]) ? response.data[0][0] : response.data[0];

  res.json({
    sentiment: result.label,
    confidence: result.score,
  });
} catch (err) {
  console.error("Hugging Face error response:", err.response?.data);
  console.error("Full error:", err.message);
  res.status(500).json({ error: "Failed to analyze sentiment" });
}

});

export default router;

