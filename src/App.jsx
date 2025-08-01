import { useEffect, useState, useRef } from "react";
import ProjectCard from "./components/ProjectCard";
import emailjs from "@emailjs/browser";

function App() {
  const [projects, setProjects] = useState([]);
  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState("uz");
  const [javob, setJavob] = useState("");
  const formRef = useRef();

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const matnlar = {
    uz: {
      sarlavha: "📂 Portfolio",
      aloqa: "📬 Menga yozing",
      til: "Tilni almashtirish",
    },
    en: {
      sarlavha: "📂 My Portfolio",
      aloqa: "📬 Contact Me",
      til: "Switch Language",
    },
    ko: {
      sarlavha: "📂 포트폴리오",
      aloqa: "📬 연락하기",
      til: "언어 변경",
    },
  };

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
        setJavob("✅ Xabaringiz yuborildi!");
        e.target.reset();
      })
      .catch(() => {
        setJavob("❌ Xabar yuborishda xatolik yuz berdi.");
      });
  };

  return (
    <div
      className={
        dark
          ? "dark bg-gray-900 text-white min-h-screen"
          : "bg-white text-gray-800 min-h-screen font-sans"
      }>
      <div className="max-w-5xl mx-auto p-6">
        <nav className="flex flex-wrap justify-between items-center gap-4 sticky top-0 bg-white dark:bg-gray-800 shadow px-4 py-3 z-50">
          <a
            href="#portfolio"
            className="text-blue-600 dark:text-blue-400 font-semibold">
            Portfolio
          </a>
          <a
            href="#contact"
            className="text-blue-600 dark:text-blue-400 font-semibold">
            Aloqa
          </a>
          <button
            onClick={() => setDark(!dark)}
            className="bg-gray-200 dark:bg-gray-700 text-sm px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600">
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
          <button
            onClick={() =>
              setLang(lang === "uz" ? "en" : lang === "en" ? "ko" : "uz")
            }
            className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600">
            {matnlar[lang].til}
          </button>
        </nav>

        <h1
          id="portfolio"
          className="text-3xl font-bold text-center mt-10 mb-6">
          {matnlar[lang].sarlavha}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <ProjectCard key={i} {...proj} />
          ))}
        </div>

        <h2
          id="contact"
          className="text-2xl font-semibold mt-12 mb-4 text-center">
          {matnlar[lang].aloqa}
        </h2>
        <form
          ref={formRef}
          onSubmit={yubor}
          className="space-y-4 max-w-xl mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Ismingiz"
            required
            className="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Xabaringiz..."
            required
            className="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-white"></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition">
            Yuborish
          </button>
        </form>
        <p className="mt-4 text-center">{javob}</p>
      </div>
    </div>
  );
}

export default App;
