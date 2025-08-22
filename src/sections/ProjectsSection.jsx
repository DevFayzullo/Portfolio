// src/sections/ProjectsSection.jsx
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle.jsx";
import projectsData from "../data/projects.json";

export default function ProjectsSection({ variant = "full" }) {
  const projects = projectsData
    .filter((p) => p.visibility === "public")
    .sort((a, b) => a.order - b.order);

  return (
    <section id="projects" className="mt-24 px-6">
      <SectionTitle emoji="💻" title="Projects" />
      <div
        className={`mt-10 grid gap-8 ${
          variant === "compact" ? "md:grid-cols-2" : "md:grid-cols-3"
        }`}>
        {projects.map((p) => (
          <Link
            to={`/projects/${p.slug}`}
            key={p.id}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden
                       transition-transform transform-gpu duration-300 hover:scale-[1.03] hover:shadow-lg">
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
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
                {p.short}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.stack?.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
