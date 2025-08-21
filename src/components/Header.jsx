import { NavLink } from "react-router-dom";

const navClasses = ({ isActive }) =>
  `px-3 py-2 rounded-xl transition-colors ${
    isActive
      ? "bg-gray-100 dark:bg-gray-800"
      : "hover:bg-gray-100 dark:hover:bg-gray-800"
  }`;

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        <NavLink to="/" className="flex items-center gap-3" aria-label="Home">
          <img
            src="/devfayzullo-icon-dark.svg"
            alt="DevFayzullo"
            className="h-8 w-8"
          />
          <span className="font-bold tracking-tight hidden sm:inline">
            DevFayzullo
          </span>
        </NavLink>
        <nav className="flex items-center gap-1">
          <NavLink to="/about" className={navClasses}>
            About
          </NavLink>
          <NavLink to="/projects" className={navClasses}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={navClasses}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
