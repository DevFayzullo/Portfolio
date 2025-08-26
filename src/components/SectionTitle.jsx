export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">{title}</h2>
      {subtitle && <p className="subtle mt-2">{subtitle}</p>}
    </div>
  );
}
