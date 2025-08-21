export default function SectionTitle({ emoji, title, subtitle }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">
        {emoji} {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-gray-600 dark:text-gray-300">{subtitle}</p>
      )}
    </div>
  );
}
