import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaFileAlt } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 sticky top-0 z-50 shadow-md flex justify-between items-center">
      <div className="text-xl font-bold text-blue-400 tracking-wide">Madan</div>

      <div className="space-x-6 hidden md:flex items-center">
        {/* Internal section links */}
        {['home', 'about', 'projects', 'contact'].map((section) => (
          <ScrollLink
            key={section}
            to={section}
            smooth={true}
            duration={500}
            offset={-60}
            className="cursor-pointer hover:text-blue-300 capitalize"
          >
            {section}
          </ScrollLink>
        ))}

        {/* External Resume Link */}
        <a
          href="/docs/MADAN CHINTHAPALLY.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-blue-400 transition"
        >
          <FaFileAlt className="text-sm" />
          <span>Resume</span>
        </a>
      </div>
    </nav>
  );
}
