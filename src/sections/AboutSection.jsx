import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="mt-24 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">
        {t("aboutSection.heading")}
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
        {t("aboutSection.body", {
          react: "React.js",
          tailwind: "Tailwind CSS",
          ts: "TypeScript",
          next: "Next.js",
        })}
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/about"
          className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold
                     bg-blue-600 text-white hover:bg-blue-700 transition-colors">
          {t("aboutSection.learnMore")}
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold
                     border border-gray-300 dark:border-gray-700
                     hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          {t("aboutSection.contact")}
        </Link>
      </div>
    </section>
  );
}
