import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/SectionTitle.jsx";

export default function SkillsSection() {
  const { t } = useTranslation();
  const items = t("skills.items", { returnObjects: true });

  return (
    <section className="container py-10 text-center">
      <h2 className="text-3xl font-bold">⚡ {t("skills.heading")}</h2>
      <p className="subtle mt-2">{t("skills.sub")}</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((s) => (
          <div
            key={s}
            className="rounded-2xl border border-white/10 bg-white/5 py-5 px-6 text-center">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
