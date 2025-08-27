import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO.jsx";
import SkillsSection from "@/sections/SkillsSection.jsx";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <SEO page="about" url="/about" />

      <section id="about" className="mt-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            {t("about.heading")}
          </h2>

          <p className="mt-4 text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
            {t("about.body")}
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div
              className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950
                            transition-transform transform-gpu duration-300 hover:scale-[1.02] hover:shadow-lg">
              <h3 className="text-xl font-semibold">
                {t("about.skills.title")}
              </h3>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <span className="font-medium">
                    {t("about.skills.languagesLabel")}
                  </span>{" "}
                  {t("about.skills.languages")}
                </li>
                <li>
                  <span className="font-medium">
                    {t("about.skills.frameworksLabel")}
                  </span>{" "}
                  {t("about.skills.frameworks")}
                </li>
                <li>
                  <span className="font-medium">
                    {t("about.skills.toolsLabel")}
                  </span>{" "}
                  {t("about.skills.tools")}
                </li>
                <li>
                  <span className="font-medium">
                    {t("about.skills.othersLabel")}
                  </span>{" "}
                  {t("about.skills.others")}
                </li>
              </ul>
            </div>

            <div
              className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950
                            transition-transform transform-gpu duration-300 hover:scale-[1.02] hover:shadow-lg">
              <h3 className="text-xl font-semibold">
                {t("about.education.title")}
              </h3>
              <ul className="mt-4 space-y-4 text-gray-700 dark:text-gray-300">
                <li>
                  <p className="font-medium">
                    {t("about.education.sunmoon.title")}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t("about.education.sunmoon.detail")}
                  </p>
                </li>
                <li>
                  <p className="font-medium">
                    {t("about.education.kyungbok.title")}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t("about.education.kyungbok.meta")}
                  </p>
                  <p className="mt-2 text-sm">
                    <span className="font-medium">
                      {t("about.education.courseworkLabel")}
                    </span>{" "}
                    {t("about.education.coursework")}
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="mt-10 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950
                          transition-transform transform-gpu duration-300 hover:scale-[1.02] hover:shadow-lg">
            <h3 className="text-xl font-semibold">{t("about.focus.title")}</h3>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>{t("about.focus.item1")}</li>
              <li>{t("about.focus.item2")}</li>
              <li>{t("about.focus.item3")}</li>
              <li>{t("about.focus.item4")}</li>
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold
                         bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              {t("about.btn.viewProjects")}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold
                         border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              {t("about.btn.contact")}
            </Link>
          </div>
        </div>
      </section>

      <SkillsSection />
    </>
  );
}
