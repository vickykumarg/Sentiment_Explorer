import React, { useEffect, useMemo, useState } from "react";
import { fetchSentences, saveScore, getLeaderboard } from "../api.js";
import SentimentBadge from "../components/SentimentBadge.jsx";

const options = ["positive", "negative", "neutral"];

export default function Quiz() {
  const [sentences, setSentences] = useState([]);
  const [answers, setAnswers] = useState({});
  const [name, setName] = useState("");
  const [score, setScore] = useState(null);
  const [board, setBoard] = useState([]);

  useEffect(() => {
    fetchSentences().then(setSentences);
    getLeaderboard().then(setBoard);
  }, []);

  const correctCount = useMemo(() => {
    if (!sentences.length) return 0;
    let c = 0;
    for (const s of sentences) {
      if (answers[s.id] && answers[s.id] === s.label) c++;
    }
    return c;
  }, [answers, sentences]);

  const submit = async () => {
    const total = sentences.length;
    const correct = correctCount;
    setScore({ correct, total });
    if (name.trim()) {
      const saved = await saveScore({ name: name.trim(), correct, total });
      setBoard(b => [{ name: saved.name, correct: saved.correct, total: saved.total }, ...b].slice(0, 10));
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-4">
        <h2 className="text-2xl md:text-4xl font-black">Quick Quiz</h2>
        <div className="card space-y-4">
          {/* {sentences.map((s) => (
            <div key={s._id} className="border rounded-xl p-3">
              <div className="flex items-center justify-between">
                <p className="text-lg">{s.text}</p>
                <SentimentBadge label={answers[s.id] || "neutral"} />
              </div>
              <div className="mt-2 flex gap-2">
                {options.map(o => (
                  <button
                    key={o}
                    onClick={() => setAnswers(a => ({ ...a, [s.id]: o }))}
                    className={"px-3 py-2 rounded-xl border " + (answers[s.id] === o ? "bg-black text-white" : "bg-white")}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>
          ))} */}
          {sentences.map((s) => (
            <div key={s._id} className="border rounded-xl p-3">
              <div className="flex items-center justify-between">
                <p className="text-lg">{s.text}</p>
                <SentimentBadge label={answers[s._id] || "neutral"} />
              </div>
              <div className="mt-2 flex gap-2">
                {options.map(o => (
                  <button
                    key={o}
                    onClick={() => setAnswers(a => ({ ...a, [s._id]: o }))}
                    className={"px-3 py-2 rounded-xl border " + (answers[s._id] === o ? "bg-black text-white" : "bg-white")}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="flex flex-col sm:flex-row gap-3">
            <input className="border rounded-xl p-2 flex-1" placeholder="Your name (optional)" value={name} onChange={e => setName(e.target.value)} />
            <button className="btn bg-black text-white" onClick={submit}>Submit</button>
          </div>
          {score && (
            <div className="p-3 bg-gray-50 rounded-xl border">
              You got <b>{score.correct}</b> / {score.total} correct!
            </div>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold">
          Leaderboard (Top {sentences.length})
        </h3>
        <div className="card space-y-2">
          {board.length === 0 && <div className="text-gray-500 text-sm">No scores yet.</div>}
          {board.map((b, i) => (
            <div key={i} className="flex justify-between border-b last:border-b-0 pb-2">
              <span className="font-semibold">{b.name || "Anonymous"}</span>
              <span>{b.correct}/{b.total}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500">Saved to MongoDB if configured, otherwise kept temporarily in memory on the server.</p>
      </div>
    </section>
  )
}
