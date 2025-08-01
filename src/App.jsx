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
  };

  const yubor = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_p1uyau5",
        "Gmail",
        formRef.current,
        "L6Q9QKegGJNWV43K7"
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
    <div className={dark ? "container dark" : "container"}>
      <nav className="navbar">
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Aloqa</a>
        <button onClick={() => setDark(!dark)}>
          {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
        <button onClick={() => setLang(lang === "uz" ? "en" : "uz")}>
          {matnlar[lang].til}
        </button>
      </nav>

      <h1 id="portfolio">{matnlar[lang].sarlavha}</h1>
      <div className="grid">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>

      <h2 id="contact">{matnlar[lang].aloqa}</h2>
      <form ref={formRef} onSubmit={yubor}>
        <input type="text" name="name" placeholder="Ismingiz" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea
          name="message"
          placeholder="Xabaringiz..."
          required></textarea>
        <button type="submit">Yuborish</button>
      </form>
      <p>{javob}</p>
    </div>
  );
}

export default App;
