import React from "react";
import { FcEngineering } from "react-icons/fc";
import Sphere from "../../constants/icons";

const Skills = () => {
  return (
    <section id="skills">
      <h2 data-aos="flip-left">My Skills</h2>
      <p
        className="container"
        style={{ marginBottom: "2rem", textAlign: "center" }}
        data-aos="zoom-in-right"
      >
        Below you can see my skills and technologies that I use every day. I am
        trying to keep up with the newest trends in the industry and to keep
        learning new skills and technologies as well as improving knowledge in
        existing ones <FcEngineering style={{ fontSize: "1.4rem" }} />.
      </p>

      <Sphere />
    </section>
  );
};

export default Skills;
