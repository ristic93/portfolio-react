import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ThemeContext from "./context/ThemeContext";
import { useContext } from "react";

AOS.init({ duration: 2500 });

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === "light" ? "light" : "dark"} App`}>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
