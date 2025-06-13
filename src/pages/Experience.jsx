import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Experience() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const experienceData = [
    {
      title: "Cybersecurity Analyst",
      company: "Cognizant Technology Solutions (Cognizant)",
      period: "Aug 2022 – Jul 2023",
      techStack:
        "Splunk Cloud, Elastic SIEM, AWS (GuardDuty, VPC Flow Logs), Nessus, Jira, Confluence, Git, Rest APIs, Agile Methodologies",
      details: [
        "Worked as part of a collaborative cybersecurity team to deliver efficient incident detection and response.",
        "Monitored and analyzed security events using Splunk Cloud and Elastic SIEM.",
        "Investigated phishing emails and performed email header analysis to detect threats.",
        "Conducted vulnerability scans using Nessus and assisted with remediation.",
        "Assisted in cloud security assessments using AWS GuardDuty and VPC Flow Logs.",
        "Improved detection rules and maintained documentation in Confluence.",
        "Authored incident response workflows and knowledge base articles.",
      ],
    },
    {
      title: "Quality Assurance Tester",
      company: "Cognizant | LSEG",
      period: "Jul 2021 – Jul 2022",
      techStack:
        "Jira, Selenium, Java, TestNG, XML, Security Monitoring, Git, Jenkins, IT Support",
      details: [
        "Designed and implemented automation solutions for LSEG using Selenium, Java, and TestNG.",
        "Streamlined testing processes and improved efficiency by 40%.",
        "Used JIRA, Confluence, and Git to manage QA processes across teams.",
        "Applied Agile for sprint planning, backlog grooming, and iterative delivery.",
        "Enhanced QA via Jenkins-based CI/CD pipelines.",
        "Led migration of testing processes to AWS for improved automation.",
        "Communicated with stakeholders for release planning and management.",
      ],
    },
    {
      title: "Programmer Analyst Trainee",
      company: "Cognizant",
      period: "Internship",
      techStack: "Selenium, Java, TestNG, IT Support, Log Analysis",
      details: [
        "Trained in both Quality Assurance and Cybersecurity domains.",
        "Provided Tier 1 troubleshooting and IT support.",
        "Created and executed automated tests using Selenium and Java.",
        "Assisted in basic log analysis, alert review, and access control.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative bg-cover bg-center bg-no-repeat py-16 px-6 font-inter text-white"
      style={{ backgroundImage: "url('/images/experience-bg.png')" }}
    >
      <div className="max-w-6xl mx-auto bg-white/10 rounded-xl p-6">
        <h1 className="text-4xl font-bold text-blue-400 text-center mb-12">
          Experience
        </h1>
        <p className="text-center text-sm italic text-gray-400 mt-6">
  <b>Real-world exposure to real-world challenges</b>
</p>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Logo on Left */}
          <div className="hidden md:flex justify-center items-start w-1/4 animate-float">
            <img
              src="/logos/Cognizant.png"
              alt="Cognizant Logo"
              className="w-56 h-56 object-contain drop-shadow-lg"
            />
          </div>

          {/* Timeline */}
          <div className="relative border-l border-blue-500 pl-6 space-y-12 w-full md:w-3/4">
            {experienceData.map((job, index) => (
              <div key={index} data-aos="fade-up" className="relative">
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-sm text-gray-300 mb-1">
                  {job.company} — {job.period}
                </p>
                <p className="text-xs text-gray-400 italic mb-2">
                  Tech Stack: {job.techStack}
                </p>
                <ul className="list-disc pl-5 mt-2 text-gray-200 text-sm space-y-1">
                  {job.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
