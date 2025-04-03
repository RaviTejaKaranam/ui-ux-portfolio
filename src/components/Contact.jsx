import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

export const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const githubLink = "https://github.com/RaviTejaKaranam";
  const linkedinLink =
    "https://www.linkedin.com/in/ravi-teja-karanam-29696717a/";
  const mailId = "rkaranam1999@gmail.com";

  return (
    <div
      className="mt-5 md:mt-10"
      id="contact"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <h1 className="text-2xl font-bold text-center">Contact</h1>
      <p className="text-center mt-2">Feel free to reach out!</p>
      <div className="flex justify-center mt-5">
        <a className="mx-2 cursor-pointer" href={githubLink}>
          {theme === "light" ? (
            <i
              className="fa-brands fa-github fa-2xl"
              size="2xl"
              style={{ color: "#3b2d4d" }}
            ></i>
          ) : (
            <i
              className="fa-brands fa-github fa-2xl"
              size="2xl"
              style={{ color: "#f7f3f9" }}
            ></i>
          )}
        </a>
        <a className="mx-2 cursor-pointer" href={linkedinLink}>
          {theme === "light" ? (
            <i
              className="fa-brands fa-linkedin fa-2xl"
              size="2xl"
              style={{ color: "#3b2d4d" }}
            ></i>
          ) : (
            <i
              className="fa-brands fa-linkedin fa-2xl"
              size="2xl"
              style={{ color: "#f7f3f9" }}
            ></i>
          )}
        </a>
        <a className="mx-2 cursor-pointer" href={`mailto:${mailId}`}>
          {theme === "light" ? (
            <i
              className="fa-solid fa-envelope fa-2xl"
              size="2xl"
              style={{ color: "#3b2d4d" }}
            ></i>
          ) : (
            <i
              className="fa-solid fa-envelope fa-2xl"
              size="2xl"
              style={{ color: "#f7f3f9" }}
            ></i>
          )}
        </a>
      </div>
    </div>
  );
};
export default Contact;
