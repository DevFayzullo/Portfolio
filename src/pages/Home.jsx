import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO.jsx";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <SEO page="home" url="/" />
      <section className="container pt-28 pb-24 text-center">
        <h1 className="display-hero">
          {t("hero.titlePrefix")} <span className="text-white"> </span>
          <span className="text-[var(--color-primary)]">{t("hero.name")}</span>
        </h1>
        <p className="mt-4 subtle text-lg">{t("hero.subtitle")}</p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="/projects" className="btn btn-primary">
            {t("hero.cta")}
          </a>
          <a href="/resume.pdf" className="btn btn-outline">
            {t("hero.resume")}
          </a>
        </div>
      </section>
    </>
  );
}
