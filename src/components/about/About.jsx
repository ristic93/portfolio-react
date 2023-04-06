import React from "react";
import "./about.css";
import Img from "../../assets/about-me.png";
import { FcIdea, FcPositiveDynamic, FcPortraitMode } from "react-icons/fc";
import Tilt from "react-parallax-tilt";

const about = () => {
  return (
    <section id="about">
      <h2 data-aos="flip-left">Introduction overview</h2>
      <article className="container about_container" data-aos="zoom-in-right">
        <div className="text">
          <h3>A few words about me</h3>
          <p style={{ fontSize: "1.1rem" }}>
            Ambitious, hard-working and well organized. Communicative, creative
            and resourceful. Great problem-solving skills. Reliable team player
            who is able to adapt to new surroundings
            <FcPortraitMode className="about_icons" />.
          </p>
          <h3>How I can contribute</h3>
          <p style={{ fontSize: "1.1rem" }}>
            As a Frontend Developer, I have a strong foundation in React.js,
            JavaScript, Vite.js, Tailwind CSS, Bootstrap, SCSS/Sass, CSS3, and
            HTML5. I love taking complex problems and turning them into simple{" "}
            <FcIdea className="about_icon" />. I also love the logic and
            structure of coding and always strive to write elegant and efficient
            code. I am eager to learn and grow as a developer, and excited to
            work on challenging projects that push me to improve my skills.
          </p>
          <h3>What are my goals</h3>
          <p style={{ fontSize: "1.1rem" }}>
            I am seeking a challenge, engaging projects and opportunity to grow
            and learn new skills and technologies
            <FcPositiveDynamic className="about_icons" />.
          </p>
        </div>
        <Tilt>
          <div className="img" data-aos="zoom-in-left">
            <img src={Img} alt="About" />
          </div>
        </Tilt>
      </article>
    </section>
  );
};

export default about;
