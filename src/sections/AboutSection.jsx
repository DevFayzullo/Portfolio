import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/SectionTitle.jsx";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="container py-10">
      {/* Title with emoji */}
      <div className="text-center">
        <h2 className="text-3xl font-bold">🧑‍💻 {t("about.heading")}</h2>
        <p
          className="mt-4 max-w-3xl mx-auto text-gray-300"
          dangerouslySetInnerHTML={{ __html: t("about.body") }}
        />
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="/projects" className="btn btn-primary">
            {t("about.learnMore")}
          </a>
          <a href="/contact" className="btn btn-outline">
            {t("about.contactMe")}
          </a>
        </div>
      </div>

      {/* Below cards (Technical/Education/Focus) — skrinshotga yaqin */}
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-semibold mb-3">Technical Skills</h3>
          <p className="text-gray-300 text-sm leading-6">
            <b>Languages:</b> HTML5, CSS3, JavaScript (ES6+), TypeScript
            <br />
            <b>Frameworks/Libraries:</b> React.js, Next.js, Tailwind CSS,
            Bootstrap
            <br />
            <b>Tools:</b> Git, GitHub, Vite, Webpack, NPM, VS Code
            <br />
            <b>Others:</b> Responsive Design, REST APIs, JSON, UI/UX Design
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-semibold mb-3">Education</h3>
          <p className="text-gray-300 text-sm leading-6">
            Sunmoon University — Korean Language Program (TOPIK 6)
            <br />
            Kyungbok University — A.S. in Software Convergence (GPA: 4.2/4.5)
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="font-semibold mb-3">Focus & Learning</h3>
        <ul className="list-disc pl-5 text-gray-300 text-sm leading-7">
          <li>Accessible, responsive UIs with clean, reusable components</li>
          <li>Deepening TypeScript for safer, scalable codebases</li>
          <li>
            Learning Next.js (SSR/SSG/ISR) for SEO and production readiness
          </li>
          <li>Performance: code-splitting, lazy loading, memoization</li>
        </ul>
      </div>
    </section>
  );
}
