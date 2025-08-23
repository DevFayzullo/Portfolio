// src/pages/About.jsx
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about" className="mt-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          👤 I’m a Frontend Developer | Software Engineer
        </h2>

        {/* Career Objective */}
        <p className="mt-4 text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
          Motivated and detail-oriented Frontend Developer with a strong
          foundation in <strong>React.js</strong>, <strong>Tailwind CSS</strong>
          , and modern web technologies. Passionate about building responsive,
          user-friendly interfaces and writing clean, maintainable code.
          Currently expanding expertise in <strong>TypeScript</strong> and{" "}
          <strong>Next.js</strong> to deliver scalable, production-ready
          applications. Seeking a junior frontend position to grow within a
          collaborative team.
        </p>

        {/* Education & Skills */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Technical Skills */}
          <div
            className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950
                       transition-transform transform-gpu duration-300
                       hover:scale-[1.02] hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700">
            <h3 className="text-xl font-semibold">Technical Skills</h3>
            <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <span className="font-medium">Languages:</span> HTML5, CSS3,
                JavaScript (ES6+), TypeScript
              </li>
              <li>
                <span className="font-medium">Frameworks/Libraries:</span>{" "}
                React.js, Next.js, Tailwind CSS, Bootstrap
              </li>
              <li>
                <span className="font-medium">Tools:</span> Git, GitHub, Vite,
                Webpack, NPM, VS Code
              </li>
              <li>
                <span className="font-medium">Others:</span> Responsive Design,
                REST APIs, JSON, UI/UX Design
              </li>
            </ul>
          </div>

          {/* Education */}
          <div
            className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950
                       transition-transform transform-gpu duration-300
                       hover:scale-[1.02] hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700">
            <h3 className="text-xl font-semibold">Education</h3>
            <ul className="mt-4 space-y-4 text-gray-700 dark:text-gray-300">
              <li>
                <p className="font-medium">
                  Sunmoon University — Korean Language Program
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  TOPIK 6
                </p>
              </li>
              <li>
                <p className="font-medium">
                  Kyungbok University — A.S. in Software Convergence
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Gyeonggi-do, South Korea | Expected Graduation: Feb 2026 |
                  GPA: 4.2 / 4.5
                </p>
                <p className="mt-2 text-sm">
                  <span className="font-medium">Relevant Coursework:</span> Data
                  Structures, Algorithms, OOP, Web Development, Database
                  Systems, UI/UX Design
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Focus / What I'm learning */}
        <div
          className="mt-10 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950
                     transition-transform transform-gpu duration-300
                     hover:scale-[1.02] hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700">
          <h3 className="text-xl font-semibold">Focus & Learning</h3>
          <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>
              Building accessible, responsive UIs with clean, reusable
              components
            </li>
            <li>
              Deepening <span className="font-medium">TypeScript</span> for
              safer, scalable codebases
            </li>
            <li>
              Learning <span className="font-medium">Next.js</span>{" "}
              (SSR/SSG/ISR) for SEO and production readiness
            </li>
            <li>
              Improving performance: code-splitting, lazy loading, memoization
            </li>
          </ul>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold
                       bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            View Projects
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold
                       border border-gray-300 dark:border-gray-700
                       hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
