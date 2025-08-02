import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ProjectCard from "./components/ProjectCard";
import Loading from "./components/Loading";
import { FaBars } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function App() {
  const [projects, setProjects] = useState([]);
  const [javob, setJavob] = useState("");
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const yubor = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
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
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <div className="max-w-5xl mx-auto p-6">
        <nav className="flex flex-wrap justify-between items-center gap-4 sticky top-0 bg-gray-900 shadow px-4 py-3 z-50">
          <a
            href="#portfolio"
            className="text-blue-400 font-semibold hover:text-blue-300 transition">
            Portfolio
          </a>
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
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="hover:scale-110 transition">
              <FaBars />
            </button>
          </div>
        </nav>

        <h1
          id="portfolio"
          className="text-3xl font-bold text-center mt-10 mb-6">
          📂 My Portfolio
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <ProjectCard key={i} {...proj} />
          ))}
        </div>

        <section id="about" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            👤 About Me
          </h2>
          <p className="text-center max-w-2xl mx-auto">
            I am a passionate software engineer with a strong interest in
            frontend development. I enjoy building interactive user interfaces
            using React and Tailwind CSS. I strive for clean, responsive design
            and love solving real-world problems through code.
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
            className="w-full p-3 border rounded bg-gray-800 text-white border-gray-600"></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 hover:scale-105 transition">
            Send Message
          </button>
        </form>
        <p className="mt-4 text-center">{javob}</p>

        <div className="mt-16 text-center space-x-4">
          <a
            href="https://t.me/your_telegram_channel"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-400 hover:text-blue-300 transition">
            Telegram Blog
          </a>
          <a
            href="https://blog.naver.com/your_naver_blog"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-400 hover:text-blue-300 transition">
            Naver Blog
          </a>
        </div>

        <footer className="mt-16 border-t border-gray-700 pt-6 text-center">
          <p className="mb-4">Connect with me:</p>
          <div className="flex justify-center gap-6 text-2xl">
            <a
              href="https://github.com/your_username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition">
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/your_username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/your_username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition">
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/your_username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition">
              <FaInstagram />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
