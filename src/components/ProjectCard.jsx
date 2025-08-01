import { motion } from "framer-motion";

function ProjectCard({ nomi, izoh, link }) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}>
      <h3>{nomi}</h3>
      <p>{izoh}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Ko‘rish
      </a>
    </motion.div>
  );
}

export default ProjectCard;
