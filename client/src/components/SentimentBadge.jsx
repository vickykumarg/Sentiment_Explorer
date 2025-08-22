import React from "react";

export default function SentimentBadge({ label }) {
  const map = {
    positive: { text: "Positive 😊", cls: "bg-green-100 text-green-800" },
    negative: { text: "Negative 😞", cls: "bg-red-100 text-red-800" },
    neutral:  { text: "Neutral 🙂",  cls: "bg-gray-100 text-gray-800" },
  };
  const { text, cls } = map[label] || map.neutral;
  return <span className={"px-3 py-1 rounded-full text-xs font-semibold " + cls}>{text}</span>
}
