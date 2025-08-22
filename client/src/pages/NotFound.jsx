import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10 text-center space-y-3">
      <h2 className="text-4xl font-black">404</h2>
      <p>Page not found.</p>
      <Link to="/" className="btn bg-black text-white inline-block">Go Home</Link>
    </section>
  )
}
