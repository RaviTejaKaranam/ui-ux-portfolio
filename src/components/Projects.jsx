import React, { useState } from "react";
import buttonAnimation from "../assets/images/buttonAnimations.png";
import PrimaryButton from "../UIComponents/PrimaryButton";
import realEstateAPI from "../assets/images/realEstateAPI.png";

export const projects = () => {
  const [projects, setProjects] = useState([
    {
      name: "Button Animations",
      description:
        "This project showcases a collection of interactive button animations designed to elevate the user experience and add a dynamic feel to web interfaces. The library features a wide range of creative and modern button animations implemented using React and Framer Motion, focusing on unique, subtle, and experimental interactions. ",
      image: buttonAnimation,
      link: "https://button-animations-psi.vercel.app/",
    },
    {
      name: "Real estate API",
      description:
        "A full-featured Real Estate Marketplace API built with Node.js, Express, and MongoDB. This project covers modern backend architecture including user authentication, authorization, image uploads with AWS S3, and email functionality via AWS SES. It integrates Google Maps for geolocation-based property listings and supports advanced search/filtering. Users can manage their listings, reset passwords, and communicate with agents via email. The project is structured with clean routes, controllers, and middleware, and includes a PDF booklet with step-by-step source code guidance.",
      image: realEstateAPI,
      link: "https://github.com/RaviTejaKaranam/real-estate-api",
    },
  ]);
  return (
    <div
      id="projects"
      className="projects"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h1 className="text-xl mt-5 md:mt-10 md:text-2xl lg:text-3xl text-center font-semibold">
        Projects
      </h1>
      <div className="projects-list experience-content mt-2 flex flex-col items-center justify-between gap-5 md:gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card flex flex-col md:flex-row gap-3 md:gap-5  md:p-4"
          >
            <img src={project.image} alt={project.name} className="md:w-1/2" />
            <div>
              <h2 className="font-semibold">{project.name}</h2>
              <p className="mb-4">{project.description}</p>
              <PrimaryButton href={project.link} label="View Project" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default projects;
