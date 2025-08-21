import { useParams, Link } from "react-router-dom";
import projects from "../data/projects.json";

export default function Project() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p className="mb-4">Project not found.</p>
        <Link to="/projects" className="underline underline-offset-4">
          ← Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link to="/projects" className="underline underline-offset-4">
        ← Back to projects
      </Link>

      <h1 className="mt-4 text-3xl font-bold">{project.title}</h1>
      <p className="mt-2 text-neutral-300">{project.short}</p>

      {project.cover && (
        <img
          src={project.cover}
          alt={`${project.title} cover`}
          loading="lazy"
          decoding="async"
          width="1200"
          height="630"
          className="mt-6 aspect-video w-full rounded-xl object-cover"
        />
      )}

      <section className="mt-6 space-y-2">
        <h2 className="text-xl font-semibold">Stack</h2>
        <ul className="flex flex-wrap gap-2">
          {project.stack?.map((s) => (
            <li key={s} className="rounded-lg border px-2 py-1 text-xs">
              {s}
            </li>
          ))}
        </ul>
      </section>

      {project.highlights?.length ? (
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Highlights</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.links?.demo || project.links?.repo ? (
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Links</h2>
          <div className="mt-2 flex gap-4">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4">
                Live Demo
              </a>
            )}
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4">
                GitHub Repo
              </a>
            )}
          </div>
        </section>
      ) : null}
    </main>
  );
}
