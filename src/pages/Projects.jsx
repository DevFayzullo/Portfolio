import projectsData from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = (projectsData || [])
    .filter((p) => (p.visibility ?? "public") === "public")
    .sort(
      (a, b) =>
        (a.order ?? 999) - (b.order ?? 999) ||
        (a.title || "").localeCompare(b.title || "")
    );

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-6 text-2xl font-bold">Projects</h1>

      {projects.length === 0 ? (
        <p className="text-gray-300">No projects yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id ?? p.slug} project={p} />
          ))}
        </div>
      )}
    </main>
  );
}
