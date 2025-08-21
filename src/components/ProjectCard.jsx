import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <article className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-4 shadow">
      <header className="mb-3">
        <h3 className="text-lg font-semibold">
          <Link
            to={`/projects/${project.slug}`}
            className="underline-offset-4 hover:underline focus:outline-none focus-visible:ring">
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
          className="mb-3 aspect-video w-full rounded-lg object-cover"
        />
      )}

      <p className="mb-3 text-sm text-neutral-300">{project.short}</p>

      <ul className="mb-4 flex flex-wrap gap-2" aria-label="Technology stack">
        {project.stack?.map((s) => (
          <li key={s} className="rounded-lg border px-2 py-1 text-xs">
            {s}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4 text-sm">
        <Link
          to={`/projects/${project.slug}`}
          className="underline underline-offset-4">
          Case study
        </Link>
        {project.links?.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4">
            Demo
          </a>
        )}
        {project.links?.repo && (
          <a
            href={project.links.repo}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4">
            Repo
          </a>
        )}
      </div>
    </article>
  );
}
