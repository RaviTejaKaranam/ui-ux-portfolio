import { Header } from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <>
      <Header />
      <div className="container md:px-16 md:py-2 px-2 py-2">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
