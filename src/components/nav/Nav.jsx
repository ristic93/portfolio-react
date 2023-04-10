import React, { useState, useEffect, useContext } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { FiMonitor } from "react-icons/fi";
import { TiMessages } from "react-icons/ti";
import ThemeContext from "../../context/ThemeContext";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const aboutSection = document.querySelector("#about");
      const skillsSection = document.querySelector("#skills");
      const projectsSection = document.querySelector("#projects");
      const contactSection = document.querySelector("#contact");

      if (currentScrollPos < aboutSection.offsetTop - 100) {
        setActiveNav("#home");
      } else if (
        currentScrollPos >= aboutSection.offsetTop - 100 &&
        currentScrollPos < skillsSection.offsetTop - 100
      ) {
        setActiveNav("#about");
      } else if (
        currentScrollPos >= skillsSection.offsetTop - 100 &&
        currentScrollPos < projectsSection.offsetTop - 100
      ) {
        setActiveNav("#skills");
      } else if (
        currentScrollPos >= projectsSection.offsetTop - 100 &&
        currentScrollPos < contactSection.offsetTop - 100
      ) {
        setActiveNav("#projects");
      } else if (currentScrollPos >= contactSection.offsetTop - 100) {
        setActiveNav("#contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <a
        href="#home"
        title="Home"
        onClick={() => {
          setActiveNav("#home");
        }}
        className={
          activeNav === "#home"
            ? "active"
            : "" || theme === "light"
            ? "light"
            : "dark"
        }
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        title="About"
        onClick={() => {
          setActiveNav("#about");
        }}
        className={
          activeNav === "#about"
            ? "active"
            : "" || theme === "light"
            ? "light"
            : "dark"
        }
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        title="Skills"
        onClick={() => {
          setActiveNav("#skills");
        }}
        className={
          activeNav === "#skills"
            ? "active"
            : "" || theme === "light"
            ? "light"
            : "dark"
        }
      >
        <BiCodeAlt />
      </a>
      <a
        href="#projects"
        title="Projects"
        onClick={() => {
          setActiveNav("#projects");
        }}
        className={
          activeNav === "#projects"
            ? "active"
            : "" || theme === "light"
            ? "light"
            : "dark"
        }
      >
        <FiMonitor />
      </a>
      <a
        href="#contact"
        title="Contact"
        onClick={() => {
          setActiveNav("#contact");
        }}
        className={
          activeNav === "#contact"
            ? "active"
            : "" || theme === "light"
            ? "light"
            : "dark"
        }
      >
        <TiMessages />
      </a>
    </nav>
  );
};

export default Nav;
