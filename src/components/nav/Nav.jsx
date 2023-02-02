import React, { useState, useContext } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { FiMonitor } from "react-icons/fi";
import { TiMessages } from "react-icons/ti";
import ThemeContext from "../../context/ThemeContext";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const { theme } = useContext(ThemeContext);

  return (
    <nav>
      <a
        href="#"
        title="Home"
        onClick={() => {
          setActiveNav("#");
        }}
        className={
          activeNav === "#"
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
