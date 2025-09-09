import SEO from "@/components/SEO.jsx";
import ProjectsSection from "@/sections/ProjectsSection.jsx";

export default function Projects() {
  return (
    <>
      <SEO page="projects" url="/projects" />
      <ProjectsSection variant="full" />
    </>
  );
}
