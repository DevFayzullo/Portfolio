import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO.jsx";
import projectsData from "@/data/projects.json";

export default function ProjectDetail() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const list = Array.isArray(projectsData)
    ? projectsData
    : Array.isArray(projectsData?.items)
    ? projectsData.items
    : [];

  const { project, related } = useMemo(() => {
    const p = list.find(
      (x) =>
        (String(x.slug) === String(slug) || String(x.id) === String(slug)) &&
        x.visibility !== "hidden"
    );
    const rel = p
      ? list
          .filter(
            (x) =>
              x.id !== p.id &&
              x.visibility !== "hidden" &&
              (x.category === p.category || x.featured)
          )
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
          .slice(0, 3)
      : [];
    return { project: p || null, related: rel };
  }, [list, slug]);

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

  if (!project) {
    return (
      <>
        <SEO
          page="projects"
          url="/projects/not-found"
          jsonLdOverride={jsonLd}
        />
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl font-bold">{t("projects.notFound.title")}</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {t("projects.notFound.body")}
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              to="/projects"
              className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition">
              {t("projects.cta.backToProjects")}
            </Link>
            <Link
              to="/"
              className="px-4 py-2 rounded-xl border hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              {t("projects.cta.home")}
            </Link>
          </div>
        </div>
      </>
    );
  }

  const live = project.links?.demo;
  const code = project.links?.repo;

  return (
    <>
      <SEO
        page="projects"
        url={`/projects/${project.slug || project.id || ""}`}
        jsonLdOverride={jsonLd}
      />

      <article className="mt-16 px-6 max-w-5xl mx-auto">
        <nav className="text-sm text-gray-600 dark:text-gray-400">
          <Link to="/" className="hover:underline">
            {t("nav.home")}
          </Link>{" "}
          <span>/</span>{" "}
          <Link to="/projects" className="hover:underline">
            {t("nav.projects")}
          </Link>{" "}
          <span>/</span>{" "}
          <span className="text-gray-900 dark:text-gray-100">
            {project.title}
          </span>
        </nav>

        <header className="mt-4">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          {project.short && (
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {project.short}
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {project.year && (
              <span className="px-3 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-800">
                {project.year}
              </span>
            )}
            {project.role && (
              <span className="px-3 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-800">
                {project.role}
              </span>
            )}
            {project.category && (
              <span className="px-3 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-800">
                {project.category}
              </span>
            )}
            {project.stack?.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs border border-gray-200 dark:border-gray-700">
                {tech}
              </span>
            ))}
          </div>
        </header>

        {project.cover && (
          <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
            <img
              src={project.cover}
              alt={`${project.title} cover`}
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>
        )}

        {project.highlights?.length > 0 && (
          <section className="mt-8">
            <h2 className="text-xl font-semibold">
              {t("projects.highlights")}
            </h2>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </section>
        )}

        {(live || code) && (
          <section className="mt-8">
            <div className="flex flex-wrap gap-3">
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition">
                  {t("projects.live")}
                </a>
              )}
              {code && (
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                  {t("projects.repo")}
                </a>
              )}
            </div>
          </section>
        )}
        {related.length > 0 && (
          <section className="mt-12">
            <h3 className="text-lg font-semibold">{t("projects.related")}</h3>
            <div className="mt-5 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {related.map((rp) => (
                <Link
                  to={`/projects/${rp.slug}`}
                  key={rp.id}
                  className="rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden
                             transition-transform transform-gpu duration-300 hover:scale-[1.03] hover:shadow-md">
                  {rp.cover && (
                    <img
                      src={rp.cover}
                      alt={rp.title}
                      className="w-full aspect-video object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="p-4">
                    <p className="font-medium">{rp.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                      {rp.short}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            ← {t("projects.cta.backToProjects")}
          </Link>
        </div>
      </article>
    </>
  );
}
