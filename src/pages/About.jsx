import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO.jsx";
import AboutSection from "@/sections/AboutSection.jsx";
import SkillsSection from "@/sections/SkillsSection.jsx";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <SEO page="about" url="/about" />

      <section className="max-w-6xl mx-auto px-6 pt-28 pb-10">
        <h1 className="text-3xl md:text-4xl font-bold">{t("about.heading")}</h1>
        <p className="mt-3 text-gray-700 dark:text-gray-300">
          {t("about.body")}
        </p>
      </section>

      <AboutSection />
      <SkillsSection />
    </>
  );
}
