import React, { useContext } from "react";
import { ThemeContext } from "../context/Themecontext.jsx";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      {theme === "light" ? (
        <i
          className="fa-solid fa-cloud-moon cursor-pointer"
          onClick={toggleTheme}
        ></i>
      ) : (
        <i
          className="fa-solid fa-cloud-sun cursor-pointer"
          onClick={toggleTheme}
        ></i>
      )}
    </div>
  );
};

export default ThemeToggle;
