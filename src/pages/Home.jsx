import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO.jsx";

import AboutSection from "@/sections/AboutSection.jsx";
import SkillsSection from "@/sections/SkillsSection.jsx";
import ProjectsSection from "@/sections/ProjectsSection.jsx";
import ContactSection from "@/sections/ContactSection.jsx";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <SEO page="home" url="/" />

      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          {t("hero.titlePrefix")}{" "}
          <span className="text-[var(--color-primary)]">{t("hero.name")}</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          {t("hero.subtitle")}
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            {t("hero.cta")}
          </a>
          <a
            href="/resume/resume.pdf"
            download
            className="px-5 py-3 border rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            {t("hero.resume")}
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
