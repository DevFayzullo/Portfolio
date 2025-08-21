import SectionTitle from "../components/SectionTitle.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

const sampleProjects = [
  {
    id: 1,
    title: "ChatBot UI",
    description:
      "Static chatbot interface built with React + Tailwind. Responsive, typing animation, predefined replies.",
    image: "/projects/chatbot-ui.png",
    tags: ["React", "Tailwind"],
    github: "https://github.com/DevFayzullo/chatbot-ui",
    demo: "https://chatbot-ui-demo.netlify.app",
  },
  {
    id: 2,
    title: "Rest Countries Explorer",
    description:
      "JS app with API integration: country details, filter/search, light/dark theme.",
    image: "/projects/rest-countries.png",
    tags: ["JavaScript", "API"],
    github: "https://github.com/DevFayzullo/rest-countries-explorer",
    demo: "https://rest-countries-demo.netlify.app",
  },
];

export default function ProjectsSection({ variant = "full" }) {
  return (
    <section id="projects" className="mt-24 px-6">
      <SectionTitle emoji="💻" title="Projects" />
      <div
        className={`mt-10 grid gap-8 ${
          variant === "compact" ? "md:grid-cols-2" : "md:grid-cols-3"
        }`}>
        {sampleProjects.map((proj) => (
          <ProjectCard key={proj.id} {...proj} />
        ))}
      </div>
    </section>
  );
}
