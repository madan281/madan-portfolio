import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Security Monitoring System on AWS",
      description: "Automated cloud threat detection using GuardDuty & Lambda.",
      fullDescription:
        "Built an automated threat detection and alerting system using AWS CloudTrail, GuardDuty, CloudWatch, and Lambda. Developed Lambda functions to respond to high-severity findings and integrated with SNS for real-time notifications to the security team.",
      tech: ["AWS", "CloudTrail", "GuardDuty", "Lambda"],
      doc: "/docs/aws-security-monitoring.pdf",
      backgroundImage: "/images/SMS.png",
    },
    {
      title: "Threat Detection with GuardDuty",
      description: "Simulated attacks on OWASP Juice Shop monitored via GuardDuty.",
      fullDescription:
        "Simulated cyberattacks against OWASP Juice Shop hosted on AWS. Used AWS GuardDuty to detect SQL injections, recon attempts, and RCE events. Correlated results with CloudTrail findings to analyze response timeline.",
      tech: ["AWS", "GuardDuty", "OWASP Juice Shop", "CloudFormation"],
      doc: "/docs/guardduty-threat-detection.pdf",
      backgroundImage: "/images/threat.png",
    },
    {
      title: "Elastic Stack SIEM Dashboard",
      description: "SIEM dashboard with visual threat detections.",
      fullDescription:
        "Configured Elasticsearch, Logstash, and Kibana to ingest and visualize logs from simulated attack sources. Built dashboards showing brute-force attempts, malicious IPs, and login anomalies.",
      tech: ["Elastic Stack", "Kibana", "Logstash", "Beats"],
      backgroundImage: "/images/dashboard.png",
    },
    {
      title: "Cybersecurity Portfolio Website",
      description: "This portfolio built with React, Tailwind, AOS & Framer Motion.",
      fullDescription:
        "Designed and developed this fully responsive cybersecurity portfolio site using React and Tailwind CSS. Added scroll-triggered animations, secure intro screen, modal popups, and GitHub integration to showcase projects and skills.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "AOS", "JavaScript"],
      doc: "/docs/portfolio-project-details.pdf",
      link: "https://github.com/madan281/portfolio-website",
      backgroundImage: "/images/porfolio.png",
    },
    {
      title: "AI & Cybersecurity Research",
      description: "Explored AI’s role in security, threats, and adversarial attacks.",
      fullDescription:
        "Conducted research on AI’s application in cybersecurity including machine learning for intrusion detection, behavioral analytics, and threat modeling. Covered ethical considerations and risks of adversarial machine learning.",
      tech: ["AI in Security", "Machine Learning", "Cybersecurity Research"],
      doc: "/docs/ai-cybersecurity-research.pdf",
      slides: "/docs/ai-cybersecurity-slides.pptx",
      backgroundImage: "/images/AI.png",
    },
    {
      title: "SSH & Web Honeypot",
      description: "Captured hacker attempts using a Flask & Paramiko honeypot.",
      fullDescription:
        "Developed a hybrid honeypot using Flask (web) and Paramiko (SSH) to log login attempts, usernames, passwords, and shell commands. Parsed logs into dashboards for attack analysis. Useful for understanding attacker behavior.",
      tech: ["Python", "Flask", "Paramiko", "Cybersecurity"],
      link: "https://github.com/madan281/honeypot",
      backgroundImage: "/images/honeypot.png",
    },
    {
      title: "Zero Trust Architecture on AWS",
      description: "Built a secure multi-tier VPC with Zero Trust access policies.",
      fullDescription:
        "Used AWS networking and IAM services to build a Zero Trust architecture. Included IAM policies, NACLs, Security Groups, and VPC peering to validate identity before granting access. Enforced least privilege.",
      tech: ["AWS", "VPC", "IAM", "Zero Trust"],
      backgroundImage: "/images/zero.png",
    },
    {
      title: "Vulnerability Assessment with Nessus",
      description: "Performed VA scans and CVSS scoring using Nessus.",
      fullDescription:
        "Used Nessus to scan Linux-based cloud instances. Generated risk reports and remediation guides based on CVSS scores. Identified high-risk misconfigurations and unpatched vulnerabilities.",
      tech: ["Nessus", "CVSS", "Vulnerability Management"],
      backgroundImage: "/images/VA.png",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Element name="projects">
      <div className="max-w-6xl mx-auto py-16 px-6">
        <motion.h1
          className="text-4xl font-extrabold text-blue-400 mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h1>
        <p className="text-center text-sm italic text-gray-400 mt-6">
  Applied knowledge through hands-on security builds
</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </Element>
  );
}
