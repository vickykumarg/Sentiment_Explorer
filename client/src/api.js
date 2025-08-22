





import axios from "axios";

//  "https://sentiment-explorer-khaki.vercel.app/api";

const API = "http://localhost:5000/api";

export async function analyze(text) {
  const res = await axios.post(`${API}/analyze`, { text });
  return res.data; // { ok, label, score }
}

// expects { text, label }
export async function saveSentence({ text, label }) {
  const res = await axios.post(`${API}/sentences`, { text, label });
  return res.data;
}

export async function fetchSentences() {
  const res = await axios.get(`${API}/sentences`);
  return res.data;
}

// expects { name, correct, total }
export async function saveScore({ name, correct, total }) {
  const res = await axios.post(`${API}/score`, { name, correct, total });
  return res.data;
}

export async function getLeaderboard() {
  const res = await axios.get(`${API}/leaderboard`);
  return res.data;
}
