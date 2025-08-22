// import axios from "axios";

// const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// export const api = axios.create({ baseURL: API_BASE });

// export async function analyze(text) {
//   const { data } = await api.post("/sentiment/analyze", { text });
//   return data.result;
// }

// export async function fetchSentences() {
//   const { data } = await api.get("/sentences");
//   return data.data;
// }

// export async function saveScore(payload) {
//   const { data } = await api.post("/score", payload);
//   return data.data;
// }

// export async function getLeaderboard() {
//   const { data } = await api.get("/leaderboard");
//   return data.data;
// }


import axios from "axios";

const API = "http://localhost:5000/api"; // adjust if different

export async function analyze(text) {
  const res = await axios.post(`${API}/analyze`, { text });
  return res.data;  // ✅ should return { label, score }
}

export async function saveSentence(sentence) {
  const res = await axios.post(`${API}/sentences`, sentence);
  return res.data;
}

export async function fetchSentences() {
  const res = await axios.get(`${API}/sentences`);
  return res.data;
}

export async function saveScore(score) {
  const res = await axios.post(`${API}/scores`, score);
  return res.data;
}

export async function getLeaderboard() {
  const res = await axios.get(`${API}/scores`);
  return res.data;
}
