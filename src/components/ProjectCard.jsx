import { useTranslation } from "react-i18next";

export default function ProjectCard({ project }) {
  const { t } = useTranslation();
  const {
    title,
    short,
    stack = [],
    year,
    category,
    links = {},
    cover,
  } = project || {};
  const live = links.demo;
  const code = links.repo;

  return (
    <article className="group card">
      {/* image */}
      <div className="img-zoom">
        <img
          src={cover}
          alt={title}
          className="w-full aspect-[16/10] object-cover"
          loading="lazy"
        />
      </div>

      {/* overlay footer like screenshot */}
      <div className="card-footer p-5">
        {/* chips row */}
        <div className="flex flex-wrap gap-2 text-gray-300">
          {year && <span className="chip">{year}</span>}
          {category && <span className="chip">{category}</span>}
          {stack.slice(0, 3).map((t2) => (
            <span key={t2} className="chip">
              {t2}
            </span>
          ))}
        </div>

        {/* title & short */}
        <h3 className="mt-3 text-lg font-semibold">{title}</h3>
        {short && <p className="mt-2 text-sm text-gray-300">{short}</p>}

        {/* links */}
        <div className="mt-4 flex items-center gap-4 text-sm">
          {live && (
            <a
              className="text-blue-400 hover:underline"
              href={live}
              target="_blank"
              rel="noreferrer">
              {t("projects.live")}
            </a>
          )}
          {code && (
            <a
              className="text-gray-300 hover:underline"
              href={code}
              target="_blank"
              rel="noreferrer">
              {t("projects.code")}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
