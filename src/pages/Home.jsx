import { FaLinkedin } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="home"
      className="relative bg-fixed bg-center bg-cover min-h-screen flex items-center justify-center px-6 md:px-16 text-white overflow-hidden"
      style={{ backgroundImage: "url('/images/cyber.gif')" }}
    >
      {/* Dark overlay only */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl space-y-6 font-inter text-center md:text-left">
        {/* Neon Heading */}
        <h1
  className="whitespace-nowrap text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 leading-tight opacity-0 animate-fade-in-up"
  style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
>
  Hi, I'm <span className="text-blue-300">Madan Chinthapally</span>
</h1>



        {/* Neon Subheading */}
        <h2
          className="text-xl sm:text-2xl text-blue-300 font-medium drop-shadow-[0_0_6px_#00ffff] opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
        >
          Cybersecurity Graduate | Cloud Security | SIEM Enthusiast
        </h2>

        {/* Typewriter Line */}
        <p
          className="text-gray-300 font-mono text-lg opacity-0 animate-fade-in-up will-change-transform"
          style={{ animationDelay: "1.8s", animationFillMode: "forwards" }}
        >
          Open to new challenges | KS, USA
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-60}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded shadow cursor-pointer transition"
          >
            View Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-60}
            className="border border-blue-400 text-blue-400 px-6 py-2 rounded hover:bg-blue-400 hover:text-white cursor-pointer transition"
          >
            Contact Me
          </ScrollLink>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-6 text-xl text-white mt-6">
          <a
            href="https://linkedin.com/in/madan-chinthapally-b4156827a"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
  href="https://github.com/madan281"
  target="_blank"
  rel="noreferrer"
  className="hover:text-blue-400 transition"
>
  <FaGithub />
</a>
<a
  href="mailto:chinthapallymadan@gmail.com"
  className="hover:text-blue-400 transition"
>
  <FaEnvelope />
</a>

        </div>
        
      </div>
    </section>
  );
}
