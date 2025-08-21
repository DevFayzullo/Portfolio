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

      <section id="about" className="mt-16">
        <h2 className="text-2xl font-semibold mb-4 text-center">👤 About Me</h2>
        <p className="text-center max-w-2xl mx-auto">
          I am a passionate software engineer with a strong interest in frontend
          development. I enjoy building interactive user interfaces using React
          and Tailwind CSS. I strive for clean, responsive design and love
          solving real-world problems through code.
        </p>
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

      <div className="mt-16 text-center">
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
      </div>
    </>
  );
}
