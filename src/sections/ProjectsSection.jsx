import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import projectsData from "@/data/projects.json";

export default function ProjectsSection({ variant = "full" }) {
  const { t } = useTranslation();
  const isCompact = variant === "compact";

  // 1) faqat public + order bo‘yicha (eski mantiq)
  const all = (Array.isArray(projectsData) ? projectsData : [])
    .filter((p) => p.visibility === "public")
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  // 2) compact: featured top 4, full: all
  const list = isCompact ? all.filter((p) => p.featured).slice(0, 4) : all;

  return (
    <section id="projects" className="mt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center">
          💻 {t("projects.heading")}
        </h2>
        {isCompact ? (
          <p className="text-center text-gray-700 dark:text-gray-300 mt-2">
            {t("projects.leadCompact")}
          </p>
        ) : null}

        <div
          className={`mt-10 grid gap-8 ${
            isCompact ? "md:grid-cols-2" : "md:grid-cols-3"
          }`}>
          {list.map((p) => (
            <Link
              key={p.id}
              to={`/projects/${p.slug}`}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden
                         bg-white dark:bg-gray-950
                         transition-transform transform-gpu duration-300
                         hover:scale-[1.02] hover:shadow-lg
                         hover:border-gray-300 dark:hover:border-gray-700"
              aria-label={t("projects.openProjectAria", { title: p.title })}>
              {/* Cover */}
              {p.cover && (
                <img
                  src={p.cover}
                  alt={p.title}
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                />
              )}

              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {p.short}
                </p>

                {/* Meta chips */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.year && (
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800">
                      {p.year}
                    </span>
                  )}
                  {p.category && (
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800">
                      {p.category}
                    </span>
                  )}
                  {p.stack?.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full border border-gray-200 dark:border-gray-700">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {(p.links?.demo || p.links?.repo) && (
                  <div className="mt-4 flex gap-3">
                    {p.links.demo && (
                      <a
                        href={p.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                        onClick={(e) => e.stopPropagation()}>
                        {t("projects.live")}
                      </a>
                    )}
                    {p.links.repo && (
                      <a
                        href={p.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:underline"
                        onClick={(e) => e.stopPropagation()}>
                        {t("projects.repoShort")}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* CTA for compact */}
        {isCompact && (
          <div className="mt-8 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold
                         bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              {t("projects.seeAll")}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
