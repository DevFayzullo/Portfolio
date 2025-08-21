import { Routes, Route, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

// Active/hover stil helper
const navClasses = ({ isActive }) =>
  `font-semibold transition transform ${
    isActive
      ? "text-white underline underline-offset-4"
      : "text-blue-400 hover:text-blue-300 hover:underline hover:underline-offset-4 hover:scale-105"
  }`;

export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <div className="mx-auto max-w-5xl p-6">
        {/* Header / Nav */}
        <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 bg-gray-900/95 px-4 py-3 shadow backdrop-blur">
          <NavLink to="/" className={navClasses} aria-label="Home">
            DevFayzullo
          </NavLink>
          <div className="flex gap-6">
            <NavLink to="/projects" className={navClasses}>
              Projects
            </NavLink>
            {/* Smooth scroll to Home sections from any route */}
            <HashLink
              smooth
              to="/#about"
              className="font-semibold text-blue-400 transition transform hover:text-blue-300 hover:underline hover:underline-offset-4 hover:scale-105">
              About
            </HashLink>
            <HashLink
              smooth
              to="/#contact"
              className="font-semibold text-blue-400 transition transform hover:text-blue-300 hover:underline hover:underline-offset-4 hover:scale-105">
              Contact
            </HashLink>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<Project />} />
          <Route path="*" element={<div className="p-6">Not found</div>} />
        </Routes>
      </div>
    </div>
  );
}
