import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <article className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-4 shadow transition transform hover:scale-[1.02] hover:bg-neutral-800">
      <header className="mb-3">
        <h3 className="text-lg font-semibold">
          <Link
            to={`/projects/${project.slug}`}
            className="transition underline-offset-4 group-hover:text-blue-400 group-hover:underline">
            {project.title}
          </Link>
        </h3>
      </header>

      {project.cover && (
        <img
          src={project.cover}
          alt={`${project.title} cover`}
          loading="lazy"
          decoding="async"
          width="800"
          height="450"
          className="mb-3 aspect-video w-full rounded-lg object-cover transition group-hover:opacity-90"
        />
      )}

      <p className="mb-3 text-sm text-neutral-300">{project.short}</p>

      <ul className="mb-4 flex flex-wrap gap-2" aria-label="Technology stack">
        {project.stack?.map((s) => (
          <li
            key={s}
            className="rounded-lg border px-2 py-1 text-xs transition group-hover:border-blue-400 group-hover:text-blue-300">
            {s}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4 text-sm">
        <Link
          to={`/projects/${project.slug}`}
          className="transition underline underline-offset-4 hover:scale-105">
          Case study
        </Link>
        {project.links?.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            className="transition underline underline-offset-4 hover:scale-105">
            Demo
          </a>
        )}
        {project.links?.repo && (
          <a
            href={project.links.repo}
            target="_blank"
            rel="noreferrer"
            className="transition underline underline-offset-4 hover:scale-105">
            Repo
          </a>
        )}
      </div>
    </article>
  );
}
