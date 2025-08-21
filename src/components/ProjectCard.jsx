export default function ProjectCard({
  image,
  title,
  description,
  tags = [],
  github,
  demo,
}) {
  return (
    <div
      className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5
                    transition-transform duration-300 transform-gpu hover:scale-[1.03] hover:shadow-lg
                    hover:border-gray-300 dark:hover:border-gray-700">
      {image && (
        <img
          src={image}
          alt={title}
          className="rounded-lg mb-4 aspect-video object-cover"
        />
      )}
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
      {tags?.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs rounded-lg border border-gray-200 dark:border-gray-700 px-2 py-1">
              {t}
            </span>
          ))}
        </div>
      )}
      <div className="flex gap-4 mt-4">
        {github && (
          <a className="text-blue-600 hover:underline" href={github}>
            GitHub
          </a>
        )}
        {demo && (
          <a className="text-blue-600 hover:underline" href={demo}>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
