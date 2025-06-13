import { motion } from "framer-motion";

export default function ProjectCard({ project, index, onClick }) {
  const { backgroundImage, title, short } = project;

  return (
    <motion.div
      onClick={onClick}
      className="relative cursor-pointer bg-gray-900 rounded-lg overflow-hidden border border-gray-700 shadow-md transition hover:scale-[1.02]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="bg-black bg-opacity-70 p-6 h-full">
        <h3 className="text-xl font-bold text-blue-300 mb-2">{title}</h3>
        <p className="text-sm text-gray-300">{short}</p>
      </div>
    </motion.div>
  );
}
