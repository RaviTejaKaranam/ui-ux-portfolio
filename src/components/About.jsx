import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import AboutImgLight from "../assets/images/AboutImgLight.svg";
import AboutImgDark from "../assets/images/AboutImgDark.svg";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "Python",
    "Tailwind CSS",
    "Bootstrap",
    "Figma",
    "Git",
    "GitHub",
    "SQL",
    "MongoDB",
    "REST APIs",
    "AWS",
    "Docker",
  ];

  const startYear = 2020;
  const breakMonths = 34;
  const today = new Date();
  const monthsWorked =
    (today.getFullYear() - startYear) * 12 + today.getMonth() - breakMonths;
  const yearsOfExperience = (monthsWorked / 12).toFixed(1);

  return (
    <div className="about" id="about" data-aos="fade-up" data-aos-delay="100">
      <h1 className="text-xl mt-5 md:mt-10 md:text-2xl lg:text-3xl text-center font-semibold">
        About Me
      </h1>
      <div className="flex flex-col md:flex md:flex-row justify-between mt-5 gap-10">
        <div className="about-content flex flex-col items-center justify-between gap-3 md:w-1/2 my-2 md:my-0 md:items-start">
          <div className="font-medium text-md">My Skills</div>
          <div className="skills-list flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-item bg-[var(--skills-background-color)] px-3 py-1 rounded-xs shadow-md"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className="about-text w-full md:w-1/2">
          <p className="leading-relaxed">
            <span className="block italic text-primary mb-4">
              “Pixels, performance, and problem-solving — that’s my kind of
              stack.”
            </span>
            I’m a{" "}
            <span className="font-semibold text-[var(--secondary-text-color)]">
              Full-Stack Software Engineer
            </span>{" "}
            with over
            <span className="font-semibold text-[var(--secondary-text-color)]">
              {" "}
              {yearsOfExperience} years of experience
            </span>{" "}
            delivering scalable, secure, and elegant applications.
            <br className="my-2" />I hold a{" "}
            <span className="font-semibold text-[var(--secondary-text-color)]">
              Master’s degree in Computer Science
            </span>
            , and I’ve contributed to both enterprise systems and modern web
            platforms — always with a focus on clean architecture and
            performance.
            <br className="my-2" />I love learning, building, and solving
            problems — whether it's on the web, in the cloud, or anywhere
            technology can make a difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
