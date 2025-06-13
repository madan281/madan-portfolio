import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="text-center py-6 border-t border-gray-700 mt-12">
      <div className="flex gap-6 justify-center mb-4 text-white">
        <a
          href="mailto:madan.chinthapally@gmail.com"
          className="hover:text-blue-400 transition duration-200"
          aria-label="Email"
        >
          <FaEnvelope size={20} />
        </a>

        <a
          href="https://linkedin.com/in/madan-chinthapally-b4156827a"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition duration-200"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} />
        </a>

        <a
          href="https://github.com/madan281"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition duration-200"
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </a>
      </div>
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Madan Chinthapally. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
