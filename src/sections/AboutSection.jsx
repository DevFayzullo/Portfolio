import { Link } from "react-router-dom";
import ResumeButtons from "../components/ResumeButtons.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

export default function AboutSection({ variant = "full" }) {
  const isCompact = variant === "compact";

  return (
    <section id="about" className={`mt-24 px-6 ${isCompact ? "pt-6" : ""}`}>
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          emoji="👤"
          title="About Me"
          subtitle={
            isCompact ? "Frontend Developer | React & Tailwind Enthusiast" : ""
          }
        />

        {/* Intro */}
        <div className="mt-4 text-center">
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Hello! I’m{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              DevFayzullo
            </span>
            , a dedicated{" "}
            <span className="font-semibold">Frontend Developer</span> focused on
            building clean, accessible, and performant web apps using{" "}
            <span className="font-semibold">React</span> and{" "}
            <span className="font-semibold">Tailwind CSS</span>. I care about
            great UX, readability, and maintainable component architecture.
          </p>

          {/* Buttons */}
          {!isCompact && <ResumeButtons />}

          {isCompact && (
            <div className="mt-5 flex items-center justify-center gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold
                           bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                aria-label="Go to About page">
                Read More
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold
                           border border-gray-300 dark:border-gray-700
                           hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Go to Projects page">
                View Projects
              </Link>
            </div>
          )}
        </div>

        {/* Content Cards */}
        <div
          className={`${
            isCompact ? "mt-8" : "mt-10"
          } grid gap-6 md:grid-cols-2`}>
          {/* Core Skills */}
          <div
            className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6
                       transform-gpu transition-transform duration-300 ease-out
                       hover:scale-105 hover:shadow-lg
                       hover:border-gray-300 dark:hover:border-gray-700">
            <h3 className="text-xl font-semibold">Core Skills</h3>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Responsive UI, Accessibility (ARIA), Design Systems</li>
              <li>Clean architecture, reusable components, Git workflow</li>
              <li>Performance: code‑split, memoization, lazy loading</li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div
            className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6
                       transform-gpu transition-transform duration-300 ease-out
                       hover:scale-105 hover:shadow-lg
                       hover:border-gray-300 dark:hover:border-gray-700">
            <h3 className="text-xl font-semibold">Tech Stack</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "React",
                "Vite",
                "Next.js (basic)",
                "TypeScript (learning)",
                "JavaScript (ES6+)",
                "Tailwind CSS",
                "Redux Toolkit",
                "React Query",
                "REST APIs",
                "Git / GitHub",
              ].map((t) => (
                <span
                  key={t}
                  className="text-sm rounded-lg border border-gray-200 dark:border-gray-700 px-3 py-1
                             bg-white dark:bg-gray-900">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div
            className={`rounded-2xl border border-gray-200 dark:border-gray-800 p-6 ${
              isCompact ? "md:col-span-2" : "md:col-span-2"
            } transform-gpu transition-transform duration-300 ease-out
                       hover:scale-105 hover:shadow-lg
                       hover:border-gray-300 dark:hover:border-gray-700`}>
            <h3 className="text-xl font-semibold">Experience</h3>
            <ul className="mt-3 space-y-4">
              <li>
                <p className="font-medium">Frontend Projects (Portfolio)</p>
                <ul className="mt-1 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                  <li>
                    Built interactive UIs in React + Tailwind
                    (component‑driven).
                  </li>
                  <li>
                    State with Redux Toolkit; React Query for fetching/caching.
                  </li>
                  <li>
                    Optimized Lighthouse: images, tree‑shaking, code‑split.
                  </li>
                  <li>
                    Docs & READMEs; used GitHub flow (PR → review → merge).
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div
            className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6
                       transform-gpu transition-transform duration-300 ease-out
                       hover:scale-105 hover:shadow-lg
                       hover:border-gray-300 dark:hover:border-gray-700">
            <h3 className="text-xl font-semibold">Education</h3>
            <ul className="mt-3 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Software Convergence — University (ongoing)</li>
              <li>
                Self‑learning: React, TypeScript, Redux Toolkit, SEO basics
              </li>
            </ul>
          </div>

          {/* Goals */}
          <div
            className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6
                       transform-gpu transition-transform duration-300 ease-out
                       hover:scale-105 hover:shadow-lg
                       hover:border-gray-300 dark:hover:border-gray-700">
            <h3 className="text-xl font-semibold">Goals</h3>
            <ul className="mt-3 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Join a frontend team and ship user‑centric products</li>
              <li>Deepen TypeScript + Next.js; testing (Jest/RTL)</li>
              <li>Contribute to open‑source and design systems</li>
            </ul>
          </div>
        </div>

        {/* Extra CTA for full page */}
        {!isCompact && (
          <div className="mt-10 flex items-center justify-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold
                         bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              See My Projects
            </Link>
            <a
              href="/resume/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold
                         border border-gray-300 dark:border-gray-700
                         hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              Download Resume
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
