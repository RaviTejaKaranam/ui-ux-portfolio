import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import StateStreetDark from "../assets/images/StateStreetDarkLogo.svg";
import StateStreetLight from "../assets/images/StateStreetLightLogo.svg";
import CognizantDark from "../assets/images/CognizantDarkLogo.svg";
import CognizantLight from "../assets/images/CognizantLightLogo.svg";

export const Experience = () => {
  const { theme } = useContext(ThemeContext);

  const experience = [
    {
      logo: theme === "dark" ? StateStreetDark : StateStreetLight,
      title: "Full Stack Developer",
      company: "State Street",
      duration: "Oct 2021 - Dec 2022",
      description: `At State Street, I worked as a Full Stack Developer on GMAS, a web-based automation platform used by over 1000 employees. I developed responsive user interfaces using React, JavaScript, and jQuery, and built scalable RESTful APIs with C#, VB.NET, and SQL. I played a key role in modernizing legacy systems by migrating modules to a Blazor and .NET Core architecture, resulting in a 45% improvement in submission performance. I also optimized database interactions by converting stored procedures to LINQ queries, reducing load by 35%. Beyond coding, I mentored interns, led 20+ frontend training sessions, and contributed to hiring efforts—helping scale the engineering team and foster a strong development culture.`,
    },
    {
      logo: theme === "dark" ? CognizantDark : CognizantLight,
      title: "Application Security Engineer",
      company: "Cognizant",
      duration: "Oct 2020 - Oct 2021",
      description: `At Cognizant, I worked as an Application Security Engineer, closely collaborating with development teams to embed secure coding practices into the software development lifecycle. I integrated automated security testing into CI/CD pipelines and authored over 100 custom security test cases to proactively detect and mitigate vulnerabilities. By guiding teams in areas such as input validation, authentication, and secure API development, I helped reduce post-release security defects by 60%. I also contributed to remediation efforts by advising on secure code fixes for issues like SQL injection, XSS, and CSRF, ultimately improving overall code quality and resilience.`,
    },
    {
      logo: theme === "dark" ? CognizantDark : CognizantLight,
      title: "Intern",
      company: "Cognizant",
      duration: "Jan 2020 - Jun 2020",
      description: `During my internship, I developed a secure banking application focused on protecting user-sensitive data through encryption and secure key management. I implemented AES-based encryption and decryption mechanisms, along with a custom key management system to safeguard authentication and data access workflows. Additionally, I built a data masking and privacy compliance tool using JavaScript, which automated the detection and anonymization of personally identifiable information (PII) in plain text files. These projects enhanced compliance with security and privacy standards while strengthening my practical experience in secure software development and algorithm design.`,
    },
  ];

  return (
    <div
      className="experience"
      id="experience"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <h1 className="text-xl mt-5 md:mt-10 md:text-2xl lg:text-3xl text-center font-semibold">
        Experience
      </h1>
      <div className="experience-content mt-2 flex flex-col items-center justify-between gap-5 md:gap-10">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="experience-item w-full flex flex-col md:flex-row gap-3 md:gap-5 items-center justify-between md:p-4 md:border md:border-[var(--border-color)] rounded-md shadow-md"
          >
            {exp.logo && (
              <div>
                <img
                  src={exp.logo}
                  alt={`${exp.company} Logo`}
                  className="w-20 h-20 object-contain"
                />
              </div>
            )}
            <div className="flex flex-col w-full">
              <div className="">
                <h2 className="font-semibold md:text-lg">{exp.title}</h2>
                <p className="text-[var(--secondary-text-color)]">
                  {exp.company}
                </p>
                <p className="text-[var(--secondary-text-color)]">
                  {exp.duration}
                </p>
              </div>
              <div className="experience-description">
                <p className="leading-relaxed mt-2">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
