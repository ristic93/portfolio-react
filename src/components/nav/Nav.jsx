import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { FiMonitor } from "react-icons/fi";
import { TiMessages } from "react-icons/ti";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");


  return (
    <nav>
      <a
        href="#"
        title="Home"
        onClick={() => {
          setActiveNav("#");
        }}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        title="About"
        onClick={() => {
          setActiveNav("#about");
        }}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        title="Skills"
        onClick={() => {
          setActiveNav("#skills");
        }}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <BiCodeAlt />
      </a>
      <a
        href="#projects"
        title="Projects"
        onClick={() => {
          setActiveNav("#projects");
        }}
        className={activeNav === "#projects" ? "active" : ""}
      >
        <FiMonitor />
      </a>
      <a
        href="#contact"
        title="Contact"
        onClick={() => {
          setActiveNav("#contact");
        }}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <TiMessages />
      </a>
    </nav>
  );
};

export default Nav;
