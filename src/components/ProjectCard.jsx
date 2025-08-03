import { motion } from "framer-motion";

function ProjectCard({ name, description, link }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-6 rounded-lg shadow-md hover:shadow-xl transition hover:scale-105 flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="mb-4">{description}</p>
      <a
        href={link}
        s
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        View on GITHUB
      </a>
    </motion.div>
  );
}

export default ProjectCard;
