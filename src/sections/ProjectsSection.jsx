import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/SectionTitle.jsx";
import ProjectCard from "@/components/ProjectCard.jsx";
import projects from "@/data/projects.json";

export default function ProjectsSection() {
  const { t } = useTranslation();
  const list = Array.isArray(projects) ? projects : [];
  const items = [...list].sort((a, b) => {
    const fa = a.featured ? 1 : 0,
      fb = b.featured ? 1 : 0;
    if (fb - fa) return fb - fa;
    const oa = (a.order ?? 9999) - (b.order ?? 9999);
    if (oa) return oa;
    return (b.year ?? 0) - (a.year ?? 0);
  });

  return (
    <section className="container py-12">
      <h2 className="text-3xl font-bold text-center">
        💻 {t("projects.heading")}
      </h2>
      <p className="subtle text-center mt-2">{t("projects.lead")}</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {items.map((p) => (
          <ProjectCard key={p.id || p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
