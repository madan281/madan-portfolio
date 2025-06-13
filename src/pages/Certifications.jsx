import { useState, useEffect, useRef } from "react";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const modalRef = useRef(null);

  const certs = [
    {
      title: "AWS Solutions Architect – Associate",
      id: "AWS05062897",
      logo: "aws.png",
      image: "aws-cert.png",
      desc: "Validated ability to design and deploy secure, scalable AWS infrastructure using AWS services like EC2, VPC, IAM, and RDS.",
    },
    {
      title: "CompTIA Security+",
      id: "COMP001022619494",
      logo: "securityplus.png",
      image: "securityplus-cert.png",
      desc: "Covers core cybersecurity skills including risk management, threat detection, cryptography, identity management, and compliance.",
    },
    {
      title: "Azure Fundamentals (AZ-900)",
      id: "F8102194B843DFC8",
      logo: "azure.png",
      image: "azure-cert.png",
      desc: "Demonstrates foundational knowledge of cloud services and how they are provided with Microsoft Azure.",
    },
    {
      title: "CompTIA IT Fundamentals+",
      id: "COMP001022619494",
      logo: "itfplus.png",
      image: "itfplus-cert.png",
      desc: "Introduces IT concepts including infrastructure, software development, database fundamentals, and cybersecurity awareness.",
    },
    {
      title: "PCAP – Python Essentials",
      logo: "pcap.png",
      image: "pcap-cert.png",
      desc: "Demonstrates proficiency in Python programming concepts, data types, control flow, and functions.",
    },
    {
      title: "Cisco Cybersecurity Essentials",
      logo: "cisco.png",
      image: "cisco-cert.png",
      desc: "Covers security principles, network defense, and common attack vectors based on Cisco's foundational cybersecurity training.",
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-16 px-6 text-white"
      style={{ backgroundImage: `url('/images/cyber-certifications.png')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto font-inter">
        <h1 className="text-4xl font-bold text-blue-400 mb-2 text-center">
          Certifications
        </h1>
        <p className="text-sm text-gray-300 text-center mb-6 italic">
          🔽 Click on any certification to view credential
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {certs.map((cert, index) => (
            <button
              key={index}
              onClick={() => setSelectedCert(cert)}
             className="bg-transparent p-4 rounded-lg shadow hover:shadow-xl transition transform hover:scale-105 flex items-center gap-4 text-left w-full animate-fade-in-up"

            >
              <img
                src={`/logos/${cert.logo}`}
                alt={`${cert.title} logo`}
                className="w-12 h-12 object-contain"
              />
              <div>
                <p className="text-blue-300 font-semibold">{cert.title}</p>
                {cert.id && <p className="text-gray-400 text-xs">ID: {cert.id}</p>}
                <p className="text-gray-300 text-xs mt-1 line-clamp-2">{cert.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
          tabIndex={0}
        >
          <div
            ref={modalRef}
            className="bg-gray-900 rounded-lg p-6 max-w-xl w-full text-center relative animate-fade-in-scale"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-2 right-2 text-white text-xl font-bold hover:text-red-400"
            >
              ✕
            </button>
            <img
              src={`/certs/${selectedCert.image}`}
              alt={selectedCert.title}
              className="w-full rounded shadow mb-4"
            />
            <h2 className="text-2xl font-bold text-blue-400">{selectedCert.title}</h2>
            {selectedCert.id && (
              <p className="text-gray-400 text-sm mb-2">
                Credential ID: {selectedCert.id}
              </p>
            )}
            <p className="text-gray-300 text-sm">{selectedCert.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}
