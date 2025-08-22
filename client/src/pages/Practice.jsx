import React, { useState } from "react";
import { analyze, saveSentence } from "../api.js";
import SentimentBadge from "../components/SentimentBadge.jsx";

export default function Practice() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const onGo = async () => {
    if (!text.trim()) return;
    setLoading(true);
    try {
      const r = await analyze(text);
      console.log("Analyze result:", r);

      // Normalize backend response → { label, score }
      const normalized = {
        label: (r.label || r.sentiment || "neutral").toLowerCase(),
        score: r.confidence ?? r.score ?? 0   // ✅ prefer confidence
      };

      setResult(normalized);

      // Save sentence + label to DB
      await saveSentence({ text, label: normalized.label });
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-10 space-y-4">
      <h2 className="text-2xl md:text-4xl font-black">Try it yourself!</h2>
      <div className="card space-y-3">
        <textarea
          className="w-full border rounded-xl p-3 min-h-[120px]"
          placeholder="Type a sentence, e.g., 'I love my puppy!'"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex gap-3">
          <button
            className="btn bg-black text-white"
            onClick={onGo}
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Analyze"}
          </button>
          <button
            className="btn bg-white border"
            onClick={() => {
              setText("");
              setResult(null);
            }}
          >
            Reset
          </button>
        </div>

        {result && (
          <div className="border-t pt-3">
            <div className="flex items-center gap-3">
              <SentimentBadge label={result.label} />
              <span className="text-sm text-gray-700">
                Confidence: {(result.score * 100).toFixed(2)}%
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
