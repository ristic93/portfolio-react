import React from "react";
import "./projects.css";
import { FcApproval } from "react-icons/fc";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import "animate.css";
import { data } from "../../constants/data";
import Tilt from "react-parallax-tilt";

const Projects = () => {
  return (
    <section id="projects">
      <h2 data-aos="flip-left">My work showcase</h2>
      <p
        className="container"
        style={{ textAlign: "center", marginBottom: "5em" }}
        data-aos="zoom-in-right"
      >
        Here you can check out some of my recent projects{" "}
        <FcApproval style={{ fontSize: "1.4rem" }} />
      </p>
      <article className="container projects_container" data-aos="zoom-in-up">
        {data.map(({ id, image, title, desc, tags, github, live }) => {
          return (
            <Tilt key={id}>
              <div  className="projects_items">
                <div className="projects_image">
                  <img src={image} alt={title} className="abcd" />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="projects_info">
                  <span>{tags}</span>
                  <div className="projects_cta">
                    <a href={github} target="_blank" title="github">
                      <AiFillGithub className="icon" />
                    </a>
                    {live === "" ? null : (
                      <a href={live} target="_blank" title="live">
                        <AiFillEye className="icon" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Tilt>
          );
        })}
      </article>
    </section>
  );
};

export default Projects;
