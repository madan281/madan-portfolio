import { useState } from 'react';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  
  const skills = {
    "Programming Skills": ["Python", "Java", "JavaScript", "C", "SQL"],
    Networking: ["SIEM", "IAM", "Firewalls", "VPNs", "DNS"],
    Frameworks: ["Mitre Attck", "TestNG", "OWASP", "NIST Csf"],
    "Operating Systems": ["Windows", "Linux", "Kali Linux", "macOS", "Ubuntu"],
    "Tools & Cloud": [
      "Splunk",
      "Elastic Stack",
      "Nessus",
      "Postman",
      "Jira",
      "Git",
      "AWS",
      "Azure",
    ],
  };

  return (
    <section
      id="skills"
      className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-6"
      style={{ backgroundImage: "url('/images/skills-bg.png')" }} // Update to your image path
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />

      {/* Main content */}
      <div className="max-w-6xl mx-auto relative z-10 font-inter">
        <h1 className="text-4xl font-bold text-center text-blue-400 mb-12">Skill Set</h1>
        <p className="text-center text-sm italic text-gray-400 mt-6">
          Tools and talents to defend the digital frontier.
        </p>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, items], index) => (
        
            <div key={index}>
              <h2 className="text-xl font-semibold text-blue-300 mb-4">{category}</h2>
              <div className="flex flex-wrap gap-5">
                {items.map((item, idx) => (
             
                  <div
                    key={idx}
                    className="w-16 h-16 hover:scale-110 transition-transform"
                    onMouseEnter={() => setHoveredSkill(item)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                 
                    <img
                      src={`/skills/${item.toLowerCase().replace(/ /g, '-')}.png`}
                      alt={item}
                      className="w-full h-full object-contain"
                      
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hover tooltip */}
      {hoveredSkill && (
        <div
          className="fixed pointer-events-none z-50 px-3 py-1 bg-blue-500 text-white text-sm rounded shadow-lg"
          style={{
            top: cursor.y + 20,
            left: cursor.x + 20,
            transition: 'top 0.05s, left 0.05s',
          }}
        >
          {hoveredSkill}
        </div>
      )}
    </section>
  );
}
