import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };
  // Function to handle menu click (for mobile view)

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[var(--primary-light-color)]  bg-[var(--nav-background-color)]">
        <div className="flex justify-between items-center md:px-16 md:py-2 px-2 py-2">
          <div
            className="md:hidden cursor-pointer"
            onClick={() => toggleMenu()}
          >
            {isMenuOpen ? (
              <i className="fa-solid fa-xmark fa-icon"></i>
            ) : (
              <i className="fa-solid fa-bars fa-icon"></i>
            )}
          </div>
          <h1 className="font-bold">Ravi Teja Karanam</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#home"
                  className="hover:text-[var(--secondary-text-color)]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[var(--secondary-text-color)]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-[var(--secondary-text-color)]"
                >
                  Experience
                </a>
              </li>
              {/*<li>
                <a
                  href="#projects"
                  className="hover:text-[var(--secondary-text-color)]"
                >
                  Projects
                </a>
              </li>*/}
              <li>
                <a
                  href="#contact"
                  className="hover:text-[var(--secondary-text-color)]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed left-0 w-full bg-[var(--nav-background-color)] shadow-lg p-4 md:hidden mobile-menu rounded-b-md z-10">
            <ul className="flex flex-col space-y-2">
              <li className="">
                <a
                  href="#home"
                  className="hover:text-[var(--secondary-text-color)] w-full block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[var(--secondary-text-color)] w-full block"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-[var(--secondary-text-color)] w-full block"
                >
                  Experience
                </a>
              </li>
              {/*<li>
                <a
                  href="#projects"
                  className="hover:text-[var(--secondary-text-color)] w-full block"
                >
                  Projects
                </a>
              </li>*/}
              <li>
                <a
                  href="#contact"
                  className="hover:text-[var(--secondary-text-color)] w-full block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
