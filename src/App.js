import { useState } from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';

// Sections (scrollable components)
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

import Contact from './pages/Contact';

import Footer from './components/Footer';
import SecureIntro from './components/SecureIntro'; // 🔐 Add this line

// Icons
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCertificate,
  FaLaptopCode,
  FaCode,
  FaFileAlt,
  FaEnvelope,
} from 'react-icons/fa';

// Reusable NavLink component using react-scroll
function NavLink({ to, icon, label }) {
  return (
    <ScrollLink
      to={to}
      smooth={true}
      duration={500}
      offset={-60}
      spy={true}
      activeClass="active-nav"
      className="nav-item cursor-pointer flex items-center gap-2 transition"
    >
      {icon}
      <span>{label}</span>
    </ScrollLink>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true); // 🔐 Control intro screen

  return (
    <>
    <div className="bg-blue-600 text-white text-sm text-center py-2">
                🔐 Cybersecurity Portfolio by Madan Chinthapally · Graduate Student @ UCM · AWS + SIEM + Incident Response
      </div>
      {showIntro ? (
        <SecureIntro onComplete={() => setShowIntro(false)} />
      ) : (
        <div className="font-mono min-h-screen text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          {/* Navbar */}
          <nav className="sticky top-0 z-50 bg-gray-800 p-4 flex flex-wrap items-center justify-between shadow-md px-6">
            {/* Branding */}
            <div className="text-2xl font-extrabold text-blue-400 animate-neon-glow tracking-widest">
              CHM
            </div>

            {/* Nav Links */}
            <div className="flex flex-wrap gap-4 justify-center">
              <NavLink to="home" icon={<FaHome />} label="Home" />
              <NavLink to="about" icon={<FaUser />} label="About" />
              <NavLink to="skills" icon={<FaCode />} label="Skills" />
              <NavLink to="experience" icon={<FaBriefcase />} label="Experience" />
              <NavLink to="certifications" icon={<FaCertificate />} label="Certifications" />
              <NavLink to="projects" icon={<FaLaptopCode />} label="Projects" />
              <NavLink to="contact" icon={<FaEnvelope />} label="Contact" />
              {/* ✅ Resume External Link */}
  <a
    href="/docs/MADAN CHINTHAPALLY.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="nav-item flex items-center gap-2 hover:text-blue-400 transition"
  >
    <FaFileAlt />
    <span>Resume</span>
  </a>
            </div>

          </nav>

          {/* Sections */}
          <Element name="home"><Home /></Element>
          <Element name="about"><About /></Element>
          <Element name="skills"><Skills /></Element>
          <Element name="experience"><Experience /></Element>
          <Element name="certifications"><Certifications /></Element>
          <Element name="projects"><Projects /></Element>
          <Element name="contact"><Contact /></Element>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
