import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO.jsx";
import projects from "@/data/projects.json";

export default function ProjectDetail() {
  const params = useParams();
  const { t } = useTranslation();

  const list = Array.isArray(projects)
    ? projects
    : Array.isArray(projects?.items)
    ? projects.items
    : [];

  const project = useMemo(() => {
    const pid = String(params.id || "");
    return (
      list.find((p) => String(p.id) === pid) ||
      list.find((p) => String(p.slug) === pid) ||
      null
    );
  }, [list, params.id]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project?.title || t("projects.heading"),
    description: project?.short || "",
    programmingLanguage: "JavaScript",
    runtimePlatform: "React",
    codeRepository: project?.links?.repo || "https://github.com/DevFayzullo",
    author: { "@type": "Person", name: "DevFayzullo" },
  };

  const live = project?.links?.demo;
  const code = project?.links?.repo;

  return (
    <>
      <SEO
        page="projects"
        url={`/projects/${project?.slug || project?.id || ""}`}
        jsonLdOverride={jsonLd}
      />

      <section className="container pt-24 pb-16">
        {!project ? (
          <>
            <h1 className="text-2xl md:text-3xl font-bold">
              {t("projects.heading")}
            </h1>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Project not found.
            </p>
            <Link to="/projects" className="mt-6 btn btn-outline">
              {t("nav.projects")}
            </Link>
          </>
        ) : (
          <>
            <h1 className="text-2xl md:text-3xl font-bold">{project.title}</h1>

            {project.cover && (
              <div className="img-zoom mt-6">
                <img
                  src={project.cover}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-2xl border dark:border-gray-800 object-cover max-h-[420px] aspect-[16/10]"
                />
              </div>
            )}

            {project.short && (
              <p className="mt-6 text-gray-700 dark:text-gray-300">
                {project.short}
              </p>
            )}

            {Array.isArray(project.stack) && project.stack.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-8 flex items-center gap-3">
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline">
                  {t("projects.live")}
                </a>
              )}
              {code && (
                <a
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary">
                  {t("projects.code")}
                </a>
              )}
              <Link to="/projects" className="btn btn-outline">
                {t("nav.projects")}
              </Link>
            </div>
          </>
        )}
      </section>
    </>
  );
}
