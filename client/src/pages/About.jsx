import React from "react";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      {/* About Section */}
      <div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-blue-700">
          About Sentiment Explorer
        </h2>

        <div className="card space-y-5 text-gray-700 leading-relaxed mt-6">
          <p className="text-lg">
            Sentiment Explorer is designed to introduce{" "}
            <span className="font-semibold">6th grade students</span> to the
            world of{" "}
            <span className="text-blue-600 font-bold">
              Artificial Intelligence (AI)
            </span>{" "}
            in a simple and engaging way. By using fun examples and interactive
            activities, students learn how computers can recognize emotions in
            everyday language.
          </p>

          <p className="text-lg">
            Through practice, learners discover how sentences can be{" "}
            <b>positive</b>, <b>negative</b>, or <b>neutral</b>, making abstract
            AI concepts easy to understand and exciting to explore.
          </p>

          <p className="text-lg">
            Our goal is to make technology approachable while inspiring
            curiosity, creativity, and critical thinking in young minds. 🚀
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white shadow-lg rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Contact Us
        </h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Mobile */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Location */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Location
            </label>
            <input
              type="text"
              placeholder="Enter your location"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Message */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
