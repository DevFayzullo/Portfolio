import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ProjectCard from "../components/ProjectCard";
import Loading from "../components/Loading";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import projectsData from "../data/projects.json";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [javob, setJavob] = useState("");
  const [loading, setLoading] = useState(true);
  const formRef = useRef();

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    const visible = (projectsData || [])
      .filter((p) => (p.visibility ?? "public") === "public")
      .sort(
        (a, b) =>
          (a.order ?? 999) - (b.order ?? 999) ||
          (a.title || "").localeCompare(b.title || "")
      );
    setProjects(visible);
    setLoading(false);
  }, []);

  const yubor = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setJavob("✅ Your message has been sent!");
        e.target.reset();
      })
      .catch(() => {
        setJavob("❌ Failed to send your message.");
      });
  };

  if (loading) return <Loading />;

  return (
    <>
      <h1 id="portfolio" className="text-3xl font-bold text-center mt-10 mb-6">
        📂 My Portfolio
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <ProjectCard key={proj.id ?? proj.slug} project={proj} />
        ))}
      </div>
      <section id="about" className="mt-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Title + CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold">👤 About Me</h2>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Frontend Developer focused on building clean, accessible, and
              performant web apps.
            </p>

            {/* Download Buttons */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <a
                href="/resume/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold
                     bg-blue-600 text-white hover:bg-blue-700 transition"
                aria-label="Download Resume (EN)">
                {/* Download icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M12 3a1 1 0 011 1v9.586l2.293-2.293a1 1 0 111.414 1.414l-4.004 4.004a1 1 0 01-1.414 0l-4.004-4.004a1 1 0 111.414-1.414L11 13.586V4a1 1 0 011-1z" />
                  <path d="M5 20a1 1 0 100-2h14a1 1 0 100 2H5z" />
                </svg>
                Resume
              </a>

              <a
                href="/resume/resume-kr.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold
                     border border-gray-300 dark:border-gray-700
                     hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                aria-label="Download Resume (KR)">
                🇰🇷 Resume‑KR
              </a>
            </div>
          </div>

          {/* Content Cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Core Skills */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="text-xl font-semibold">Core Skills</h3>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Responsive UI, Accessibility (ARIA), Design Systems</li>
                <li>
                  Performance optimization (code‑split, memoization, lazy
                  loading)
                </li>
                <li>Clean architecture, reusable components, Git workflow</li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
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
                    className="text-sm rounded-lg border border-gray-200 dark:border-gray-700 px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 md:col-span-2">
              <h3 className="text-xl font-semibold">Experience</h3>
              <ul className="mt-3 space-y-4">
                <li>
                  <p className="font-medium">Frontend Projects (Portfolio)</p>
                  <ul className="mt-1 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                    <li>
                      Built interactive UIs in React + Tailwind;
                      component‑driven architecture.
                    </li>
                    <li>
                      Implemented state management with Redux Toolkit, React
                      Query for data fetching.
                    </li>
                    <li>
                      Optimized Lighthouse scores: image optimization,
                      tree‑shaking, code‑split.
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="font-medium">Collaborative Work</p>
                  <ul className="mt-1 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                    <li>
                      Used GitHub flow (branch → PR → review → merge), clear
                      commit messages.
                    </li>
                    <li>
                      Wrote readable README and documentation for each project.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Education */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="text-xl font-semibold">Education</h3>
              <ul className="mt-3 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Software Convergence — University (ongoing)</li>
                <li>
                  Self‑learning: React, TypeScript, Redux Toolkit, SEO basics
                </li>
              </ul>
            </div>

            {/* Interests / Goals */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="text-xl font-semibold">Goals</h3>
              <ul className="mt-3 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Join a frontend team and ship user‑centric products</li>
                <li>Deepen TypeScript + Next.js, testing (Jest/RTL)</li>
                <li>Contribute to open‑source and design systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <h2
        id="contact"
        className="text-2xl font-semibold mt-16 mb-4 text-center">
        📬 Contact Me
      </h2>
      <form
        ref={formRef}
        onSubmit={yubor}
        className="space-y-4 max-w-xl mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 border rounded bg-gray-800 text-white border-gray-600"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 border rounded bg-gray-800 text-white border-gray-600"
        />
        <textarea
          name="message"
          placeholder="Your Message..."
          required
          className="w-full p-3 border rounded bg-gray-800 text-white border-gray-600"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 hover:scale-105 transition">
          Send Message
        </button>
      </form>
      <p className="mt-4 text-center">{javob}</p>
      <div className="mt-16 text-center space-x-4">
        <a
          href="https://t.me/devFayzullo"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-400 hover:text-blue-300 transition">
          Telegram Blog
        </a>
        <a
          href="https://blog.naver.com/devfayzullo"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-400 hover:text-blue-300 transition">
          Naver Blog
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-700 pt-6 text-center">
        <p className="mb-4">Connect with me:</p>
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://github.com/DevFayzullo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition transform hover:text-blue-400 hover:scale-125">
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/abduganiev-fayzullo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition transform hover:text-blue-400 hover:scale-125">
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/FayzulloDev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="transition transform hover:text-blue-400 hover:scale-125">
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/abduganiyevfayzullo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition transform hover:text-blue-400 hover:scale-125">
            <FaInstagram />
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-400">
          © {new Date().getFullYear()} DevFayzullo. All rights reserved.
        </p>
      </footer>
    </>
  );
}
