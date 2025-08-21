import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ProjectCard from "./components/ProjectCard";
import Loading from "./components/Loading";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function App() {
  const [projects, setProjects] = useState([]);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(true);
  const [fetchErr, setFetchErr] = useState("");
  const [emailReady, setEmailReady] = useState(true); // ENV keys check
  const formRef = useRef(null);

  // ✅ EmailJS keys — .env dan
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    // ENV mavjudligini tekshir
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.warn("EmailJS ENV variables are missing. Check your .env file.");
      setEmailReady(false);
    }

    const ac = new AbortController();
    (async () => {
      try {
        const res = await fetch("/data/projects.json", { signal: ac.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const visible = (data || [])
          .filter((p) => (p.visibility ?? "public") === "public")
          .sort(
            (a, b) =>
              (a.order ?? 999) - (b.order ?? 999) ||
              a.title.localeCompare(b.title)
          );
        setProjects(visible);
      } catch (e) {
        console.error(e);
        setFetchErr("Failed to load projects. Please refresh.");
      } finally {
        setLoading(false);
      }
    })();
    return () => ac.abort();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailReady) {
      setMsg("❌ Email is not configured. Please try again later.");
      return;
    }

    const fd = new FormData(formRef.current);

    // 🐝 Honeypot
    if ((fd.get("company") || "").toString().trim().length) return;

    // ⏱️ Time to submit
    const startedAt = Number(fd.get("startedAt") || 0);
    if (Date.now() - startedAt < 2000) return;

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setMsg("✅ Your message has been sent!");
      e.target.reset();
    } catch (err) {
      console.error(err);
      setMsg("❌ Failed to send your message.");
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 bg-black/70 px-3 py-2 rounded">
        Skip to content
      </a>
      <div className="max-w-5xl mx-auto p-6">
        <nav className="flex flex-wrap justify-between items-center gap-4 sticky top-0 bg-gray-900/95 backdrop-blur shadow px-4 py-3 z-50">
          <a
            href="#portfolio"
            className="text-blue-400 font-semibold hover:text-blue-300 transition">
            Portfolio
          </a>
          <div className="flex gap-6">
            <a
              href="#about"
              className="text-blue-400 font-semibold hover:text-blue-300 transition">
              About
            </a>
            <a
              href="#contact"
              className="text-blue-400 font-semibold hover:text-blue-300 transition">
              Contact
            </a>
          </div>
        </nav>

        <main id="main">
          <h1
            id="portfolio"
            className="text-3xl font-bold text-center mt-10 mb-6">
            📂 My Portfolio
          </h1>

          {fetchErr ? (
            <p className="text-center text-red-400">{fetchErr}</p>
          ) : projects.length === 0 ? (
            <p className="text-center text-gray-300">No projects yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {projects.map((proj) => (
                <ProjectCard key={proj.id ?? proj.slug} {...proj} />
              ))}
            </div>
          )}

          <section id="about" className="mt-16">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              👤 About Me
            </h2>
            <p className="text-center max-w-2xl mx-auto text-gray-200">
              I am a passionate software engineer focused on frontend
              development. I enjoy building interactive UIs with React and
              Tailwind CSS, aiming for clean, responsive design and real-world
              impact.
            </p>
          </section>

          <h2
            id="contact"
            className="text-2xl font-semibold mt-16 mb-4 text-center">
            📬 Contact Me
          </h2>
          {/* Contact form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4 max-w-xl mx-auto">
            {/* hidden anti-bot fields */}
            <input type="hidden" name="startedAt" value={Date.now()} />
            <div className="sr-only" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <label className="block">
              <span className="text-sm">Your Name</span>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 border rounded bg-gray-800 text-white border-gray-600"
              />
            </label>

            <label className="block">
              <span className="text-sm">Your Email</span>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 border rounded bg-gray-800 text-white border-gray-600"
              />
            </label>

            <label className="block">
              <span className="text-sm">Your Message</span>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full p-3 border rounded bg-gray-800 text-white border-gray-600"
              />
            </label>

            <button
              type="submit"
              disabled={!emailReady}
              title={!emailReady ? "Email is not configured" : undefined}
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 hover:scale-105 transition disabled:opacity-60 disabled:hover:scale-100">
              Send Message
            </button>
          </form>
          <p className="mt-4 text-center">{msg}</p>

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
        </main>

        <footer className="mt-16 border-t border-gray-700 pt-6 text-center">
          <p className="mb-4">Connect with me:</p>
          <div className="flex justify-center gap-6 text-2xl">
            <a
              href="https://github.com/DevFayzullo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="GitHub">
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/abduganiev-fayzullo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/FayzulloDev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="Twitter">
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/abduganiyevfayzullo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            © {new Date().getFullYear()} DevFayzullo. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
