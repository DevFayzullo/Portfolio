import SectionTitle from "../components/SectionTitle.jsx";

const skills = [
  "React",
  "Tailwind CSS",
  "Redux Toolkit",
  "TypeScript (learning)",
  "Next.js (basic)",
  "JavaScript (ES6+)",
  "Git / GitHub",
  "REST APIs",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="mt-24 px-6 text-center">
      <SectionTitle
        emoji="⚡"
        title="Skills"
        subtitle="Technologies I work with"
      />
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-xl border border-gray-200 dark:border-gray-800 p-6
                       transform-gpu transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <p className="font-semibold">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
