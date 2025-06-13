import { FaTimes, FaGithub, FaFilePdf, FaRegFilePowerpoint } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const {
    title,
    fullDescription,
    tech = [],
    backgroundImage,
    link,
    doc,
    slides,
  } = project;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
      <div className="bg-gray-900 rounded-lg shadow-xl max-w-3xl w-full overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-2xl hover:text-red-400"
        >
          <FaTimes />
        </button>

        {/* Header Image */}
        {backgroundImage && (
          <div
            className="h-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}

        {/* Content */}
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">{title}</h2>

          <p className="text-gray-300 text-sm leading-relaxed">{fullDescription}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <span key={i} className="bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-300">
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 mt-4 text-xl">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
                title="GitHub"
              >
                <FaGithub />
              </a>
            )}
            {doc && (
              <a
                href={doc}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300"
                title="Case Study"
              >
                <FaFilePdf />
              </a>
            )}
            {slides && (
              <a
                href={slides}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300"
                title="Slides"
              >
                <FaRegFilePowerpoint />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
