import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 grid gap-10 md:gap-8 md:grid-cols-2 items-center">
      {/* Left Content */}
      <div className="space-y-5 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-snug md:leading-tight">
          Learn <span className="underline decoration-wavy">Sentiment Analysis</span> the fun way!
        </h1>

        <p className="text-base sm:text-lg text-gray-700">
          Use stories, visuals and simple exercises to discover how computers guess if sentences feel
          happy, sad, or in-between.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <Link className="btn bg-black text-white w-full sm:w-auto" to="/learn">
            Start Learning
          </Link>
          <Link className="btn bg-white border w-full sm:w-auto" to="/practice">
            Try Practice
          </Link>
          <Link className="btn bg-white border w-full sm:w-auto" to="/quiz">
            Play Quiz
          </Link>
        </div>

        {/* <p className="text-xs sm:text-sm text-gray-500">
          Fully responsive — works great on phones and laptops.
        </p> */}
      </div>

      {/* Right Card */}
      <div className="card text-center p-6">
        <div className="text-5xl sm:text-6xl">📚✨🧠</div>
        <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
          Example: “I love ice cream!” → Positive. <br />
          “This homework is so hard.” → Negative. <br />
          “I am going to school.” → Neutral.
        </p>
      </div>
    </section>
  );
}
