import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO.jsx";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <SEO page="notfound" url="/404" />

      <section className="min-h-[60vh] max-w-6xl mx-auto px-6 pt-28 flex flex-col items-start justify-center gap-6">
        <h1 className="text-3xl md:text-4xl font-bold">404</h1>
        <p className="text-gray-700 dark:text-gray-300">{t("hero.subtitle")}</p>
        <Link
          to="/"
          className="inline-flex items-center rounded-xl border px-4 py-2 hover:shadow transition">
          {t("nav.home")}
        </Link>
      </section>
    </>
  );
}
