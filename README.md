# Sentiment for Kids — MERN

An interactive, fully responsive MERN app that explains Sentiment Analysis to 6th graders using stories, visuals, and simple exercises.

## Quick Start

### 1) Server
```bash
cd server
cp .env.example .env   # set MONGO_URI, optional
npm install
npm run dev            # starts at http://localhost:5000
```

### 2) Client
```bash
cd client
npm install
npm run dev            # starts at http://localhost:5173
```

> Set the client to point at your API by creating `.env` in `client/`:
```
VITE_API_URL=http://localhost:5000/api
```

### Deploy notes
- On Render/Netlify/Vercel, add a SPA rewrite: `/* -> /index.html`.
- On the server, set `CLIENT_URL` with comma-separated origins (e.g. `https://yourapp.com, http://localhost:5173`).

## Features
- Learn page with kid-friendly story and examples.
- Practice page: enter any sentence → server analyzes → shows label + confidence.
- Quiz page: 6 sample sentences, multiple-choice tags, score submission, leaderboard.
- MongoDB persistence if `MONGO_URI` set; in-memory fallback if not.

## Tech
- Client: React + Vite + Tailwind (mobile-first, accessible).
- Server: Express, tiny rule-based sentiment function (no external model).
