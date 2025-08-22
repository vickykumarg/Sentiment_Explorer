/**
 * A tiny, classroom-safe sentiment helper.
 * It uses small positive/negative word lists and simple scoring.
 * Returns { label: 'positive'|'negative'|'neutral', score: number (0..1) }
 */
const POSITIVE = [
  "love", "like", "enjoy", "happy", "excited", "fun", "awesome",
  "great", "amazing", "fantastic", "cool", "wonderful", "smile",
  "yay", "pleased", "delighted", "satisfied", "proud", "grateful",
  "cheerful", "hopeful", "relieved", "content"
];


const NEGATIVE = [
  "hate", "dislike", "sad", "angry", "upset", "frustrated", "bored",
  "tired", "mad", "worst", "bad", "annoying", "cry", "disappointed",
  "unhappy", "stressed", "lonely", "frightened", "regret", "guilty",
  "messy", "trouble"
];

export function simpleSentiment(text) {
  if (!text) return { label: "neutral", score: 0.5 };

  const words = text
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .split(/\s+/)
    .filter(Boolean);

  let pos = 0, neg = 0;

  for (const w of words) {
    if (POSITIVE.includes(w)) pos++;
    if (NEGATIVE.includes(w)) neg++;
  }
  const total = pos + neg;
  if (total === 0) return { label: "neutral", score: 0.5 };

  const confidence = Math.min(1, total / Math.max(4, words.length)); // cap confidence
  if (pos > neg) return { label: "positive", score: 0.5 + 0.5 * confidence };
  if (neg > pos) return { label: "negative", score: 0.5 + 0.5 * confidence };
  return { label: "neutral", score: 0.5 };
}

export const SAMPLE_SENTENCES = [
  { id: 1, text: "I love ice cream!", label: "positive" },
  { id: 2, text: "This homework is so hard.", label: "negative" },
  { id: 3, text: "I am going to school.", label: "neutral" },
  { id: 4, text: "The park is awesome and fun!", label: "positive" },
  { id: 5, text: "My toy is broken, I'm sad.", label: "negative" },
  { id: 6, text: "The sky is blue.", label: "neutral" }
];
