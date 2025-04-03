import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx"; // Import your ThemeContext
import HomeImgLight from "../assets/images/HomeImgLight.svg";
import HomeImgDark from "../assets/images/HomeImgDark.svg";
import PrimaryButton from "../UIComponents/PrimaryButton.jsx";

const Home = () => {
  const [name] = useState("Ravi Teja Karanam");
  const [currentProfession, setCurrentProfession] = useState("");
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
  const [description, setDescription] = useState(
    "I am a software engineer with a strong foundation in full-stack development and a deep interest in solving real-world problems through technology."
  );
  const { theme } = useContext(ThemeContext); // Use theme from context

  const profession = ["Software Engineer.", "", "Full Stack Developer."];

  useEffect(() => {
    const professionToDisplay = profession[currentProfessionIndex];
    let i = 0;
    setCurrentProfession("");

    const interval = setInterval(() => {
      if (i < professionToDisplay.length) {
        setCurrentProfession(professionToDisplay.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentProfession("");
          setCurrentProfessionIndex((prev) => (prev + 1) % profession.length);
        }, 500);
      }
    }, 150);

    return () => clearInterval(interval); // Cleanup
  }, [currentProfessionIndex]);

  return (
    <div
      className="flex flex-col-reverse mt-5 md:flex-row justify-between items-center md:mt-10 z-1"
      id="home"
      data-aos="fade-up"
    >
      <div className="text-container md:w-1/2 w-full">
        <h1 className="text-2xl mt-5 md:mt-10 md:text-3xl lg:text-4xl">
          Hi There! I am <strong>{name}</strong>
        </h1>
        <h2 className="text-sm mt-2 md:mt-2 md:text-md lg:text-lg">
          I am a <span>{currentProfession}</span>
        </h2>
        <p className="mt-2 md:mt-2">{description}</p>
        <div className="contact-container md:w-1/2 w-full mt-5 lg:mt-10 md:mt-5 flex">
          <PrimaryButton label={"Contact Me"} href={"#contact"} />
        </div>
      </div>

      <div className="image-container mt-10 md:mt-0 md:w-1/2 w-full flex justify-center items-center">
        <img
          src={theme === "dark" ? HomeImgDark : HomeImgLight}
          alt="Home illustration"
          className="w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default Home;
