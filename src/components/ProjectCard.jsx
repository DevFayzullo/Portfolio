import { motion } from "framer-motion";

function ProjectCard({ nomi, izoh, link }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-6 rounded-lg shadow-md hover:shadow-xl transition hover:scale-105"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}>
      <h3 className="text-xl font-bold mb-2">{nomi}</h3>
      <p className="mb-4">{izoh}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
        Ko‘rish
      </a>
    </motion.div>
  );
}

export default ProjectCard;
