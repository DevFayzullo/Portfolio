import AboutSection from "../sections/AboutSection.jsx";
import ProjectsSection from "../sections/ProjectsSection.jsx";
import ContactSection from "../sections/ContactSection.jsx";
import SkillsSection from "../sections/SkillsSection.jsx";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I’m <span className="text-blue-600">DevFayzullo</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Frontend Developer | Software Engineer
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            View Projects
          </a>
          <a
            href="/resume/resume.pdf"
            download
            className="px-5 py-3 border rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            Download Resume
          </a>
        </div>
      </section>

      <AboutSection variant="compact" />
      <SkillsSection />
      <ProjectsSection variant="compact" />
      <ContactSection variant="compact" />
    </>
  );
}
