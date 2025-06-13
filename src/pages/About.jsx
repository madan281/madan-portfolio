import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function About() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <>
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-16 font-mono flex flex-col md:flex-row items-center gap-10"
        
      >
        {/* Floating Image */}
        <div className="w-52 h-52 sm:w-64 sm:h-64 overflow-hidden border-4 border-green-500 shadow-lg animate-float hexagon" data-aos="fade-right">
          <img
            src="/profile.jpg" alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Terminal-Style Animated Text */}
        <div
          className="bg-black text-green-400 border border-green-600 rounded-lg p-6 w-full md:w-2/3 shadow-md space-y-4 text-sm sm:text-base leading-relaxed glow-text"
          data-aos="fade-left"
        >
          <p className="animate-terminal delay-[0.2s]"><span className="text-green-300">$</span> whoami</p>

          
        <div className="w-full px-2 sm:px-0">
          <p className="animate-terminal delay-[0.4s] text-[8px] sm:text-sm leading-tight whitespace-normal break-words break-all">
            <span className="block font-semibold text-green-200">
              Madan Chinthapally
            </span>
            <span className="block">
              — Cybersecurity Graduate | Cybersecurity Analyst | Threat Hunter
            </span>
          </p>
        </div>





          <p className="animate-terminal delay-[0.6s]"><span className="text-green-300">$</span> cat profile.txt</p>
          <p className="animate-terminal delay-[0.8s]">
            Passionate about securing cloud infrastructures, detecting threats, and solving real-world cyber challenges.
            Experienced with AWS security, Splunk, Elastic Stack, and vulnerability analysis using Nessus.
          </p>
          <p><span className="text-green-300">$</span> echo "Graduated in May 2025 from University of Central Missouri"</p>

          <p className="animate-terminal delay-[1.0s]"><span className="text-green-300">$</span> ls --skills</p>
          <ul className="list-disc ml-6 animate-terminal delay-[1.2s]">
            <li>Splunk, Elastic Stack, AWS, Python</li>
            <li>SIEM, Threat Detection, Incident Response</li>
            <li>Security+, Azure AZ-900, AWS Architect</li>
          </ul>

          <p className="animate-terminal delay-[1.4s]"><span className="text-green-300">$</span> echo "Open to new opportunities in cybersecurity!"</p>
        </div>
      </section>

      {/* ✅ Add Terminal BELOW the About section */}
     
    </>
  );
}
