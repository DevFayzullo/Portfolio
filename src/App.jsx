// at top
import { Routes, Route, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";

// helper to style active links
const navClasses = ({ isActive }) =>
  `font-semibold transition ${
    isActive
      ? "text-white underline underline-offset-4"
      : "text-blue-400 hover:text-blue-300"
  }`;

export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <div className="max-w-5xl mx-auto p-6">
        {/* Header / Nav */}
        <nav className="flex flex-wrap justify-between items-center gap-4 sticky top-0 bg-gray-900/95 backdrop-blur shadow px-4 py-3 z-50">
          <NavLink to="/" className={navClasses}>
            DevFayzullo
          </NavLink>

          <div className="flex gap-6">
            {/* Active class when on /projects */}
            <NavLink to="/projects" className={navClasses}>
              Projects
            </NavLink>

            {/* Smooth scroll to sections on Home (works from any route) */}
            <HashLink
              smooth
              to="/#about"
              className="text-blue-400 hover:text-blue-300 font-semibold transition">
              About
            </HashLink>
            <HashLink
              smooth
              to="/#contact"
              className="text-blue-400 hover:text-blue-300 font-semibold transition">
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

        <footer className="mt-16 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} DevFayzullo. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
