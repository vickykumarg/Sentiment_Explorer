import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger icons

function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        "block px-3 py-2 rounded-xl text-sm sm:text-base md:text-base font-medium " +
        (isActive
          ? "bg-black text-white"
          : "hover:bg-black/10 transition-colors duration-200")
      }
      onClick={onClick}
    >
      {label}
    </NavLink>
  );
}

// Custom logo component
// function Logo() {
//   return (
//     <div className="flex items-center gap-2">
//       {/* Simple kid-friendly smiley icon */}
//       <svg
//         className="w-8 h-8"
//         viewBox="0 0 64 64"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <circle cx="32" cy="32" r="30" fill="#FACC15" stroke="#000" strokeWidth="2"/>
//         <circle cx="22" cy="24" r="4" fill="#000"/>
//         <circle cx="42" cy="24" r="4" fill="#000"/>
//         <path d="M20 42C24 50 40 50 44 42" stroke="#000" strokeWidth="3" strokeLinecap="round"/>
//       </svg>
//       <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-blue-700">
//         Mood Explorer
//       </span>
//     </div>
//   );
// }

// Custom professional logo
// function Logo() {
//   return (
//     <div className="flex items-center gap-2">
//       {/* Abstract "Mood Explorer" icon */}
//       <svg
//         className="w-8 h-8"
//         viewBox="0 0 64 64"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <rect x="8" y="24" width="8" height="32" rx="2" fill="#3B82F6"/>
//         <rect x="24" y="16" width="8" height="40" rx="2" fill="#10B981"/>
//         <rect x="40" y="32" width="8" height="24" rx="2" fill="#F59E0B"/>
//         <rect x="56" y="8" width="8" height="48" rx="2" fill="#EF4444"/>
//         <circle cx="4" cy="60" r="4" fill="#3B82F6"/>
//         <circle cx="60" cy="4" r="4" fill="#EF4444"/>
//       </svg>

//       <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-blue-700">
//         Sentiment Explorer
//       </span>
//     </div>
//   );
// }

// function Logo() {
//   return (
//     <div className="flex items-center gap-2">
//       {/* Professional Sentiment Explorer icon */}
//       <svg
//         className="w-8 h-8"
//         viewBox="0 0 64 64"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         {/* Sentiment bars */}
//         <rect x="10" y="28" width="8" height="24" rx="2" fill="#10B981"/>   {/* Positive */}
//         <rect x="26" y="32" width="8" height="20" rx="2" fill="#FBBF24"/>   {/* Neutral */}
//         <rect x="42" y="36" width="8" height="16" rx="2" fill="#EF4444"/>   {/* Negative */}

//         {/* Wave connecting moods */}
//         <path 
//           d="M10 28 C18 20, 34 44, 50 36" 
//           stroke="#3B82F6" 
//           strokeWidth="2" 
//           fill="none" 
//           strokeLinecap="round"
//         />

//         {/* Optional accent dots */}
//         <circle cx="10" cy="28" r="2" fill="#10B981"/>
//         <circle cx="26" cy="32" r="2" fill="#FBBF24"/>
//         <circle cx="42" cy="36" r="2" fill="#EF4444"/>
//       </svg>

//       <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-blue-700">
//         Sentiment Explorer
//       </span>
//     </div>
//   );
// }


function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Professional Sentiment Explorer icon */}
      <svg
        className="w-8 h-8"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Speech bubble base */}
        <path
          d="M42 12H22C16.4772 12 12 16.4772 12 22V36.2857C12 41.8085 16.4772 46.2857 22 46.2857H26.8571L32 52L37.1429 46.2857H42C47.5228 46.2857 52 41.8085 52 36.2857V22C52 16.4772 47.5228 12 42 12Z"
          fill="url(#bubbleGradient)"
        />
        
        {/* Sentiment dots */}
        <circle cx="22" cy="26" r="4" fill="#10B981" /> {/* Positive */}
        <circle cx="32" cy="26" r="4" fill="#FBBF24" /> {/* Neutral */}
        <circle cx="42" cy="26" r="4" fill="#EF4444" /> {/* Negative */}
        
        {/* Analysis line connecting dots */}
        <path 
          d="M22 30 C26 34, 38 34, 42 30" 
          stroke="#3B82F6" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round"
        />
        
        {/* Subtle shine effect */}
        <path
          d="M22 16C22 16 26 14 32 14C38 14 42 16 42 16"
          stroke="white"
          strokeWidth="1.5"
          strokeOpacity="0.3"
          strokeLinecap="round"
        />
        
        <defs>
          <linearGradient id="bubbleGradient" x1="12" y1="12" x2="52" y2="46" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6"/>
            <stop offset="1" stopColor="#1D4ED8"/>
          </linearGradient>
        </defs>
      </svg>

      <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-blue-700">
        Sentiment Explorer
      </span>
    </div>
  );
}



export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-3">
            <NavItem to="/" label="Home" />
            <NavItem to="/learn" label="Learn" />
            <NavItem to="/practice" label="Practice" />
            <NavItem to="/quiz" label="Quiz" />
            <NavItem to="/about" label="About" />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden bg-white border-t shadow-sm flex flex-col">
            <NavItem to="/" label="Home" onClick={() => setMenuOpen(false)} />
            <NavItem to="/learn" label="Learn" onClick={() => setMenuOpen(false)} />
            <NavItem to="/practice" label="Practice" onClick={() => setMenuOpen(false)} />
            <NavItem to="/quiz" label="Quiz" onClick={() => setMenuOpen(false)} />
            <NavItem to="/about" label="About" onClick={() => setMenuOpen(false)} />
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t mt-6 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-center text-gray-600">
          Built Sentiment Explorer with ❤️ for young learners.
        </div>
      </footer>
    </div>
  );
}
