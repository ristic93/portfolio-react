import React from "react";
import "./projects.css";
import { FcRightDown2, FcApproval } from "react-icons/fc";
import "animate.css";
import { data } from "../../constants/data";

const Projects = () => {
  return (
    <section id="projects">
      <h2 data-aos="flip-left">My projects</h2>
      <p
        className="container"
        style={{ textAlign: "center", marginBottom: "5em" }}
        data-aos="zoom-in-right"
      >
        Here you can check out some of my recent work{" "}
        <FcApproval style={{ fontSize: "1.4rem" }} />
      </p>

      <article className="container projects_container" data-aos="zoom-in-up">
        {data.map(({ id, image, title, desc, github, live }) => {
          return (
            <div key={id} className="projects_items">
              <div className="projects_image">
                <img src={image} alt={title} className="abcd" />
              </div>
              <p>{title}</p>
              <details>
                <summary>
                  Description
                  <FcRightDown2 className="icon animate__animated animate__shakeY animate__slower animate__infinite" />
                </summary>
                {desc}
              </details>
              <div className="projects_cta">
                <a href={github} className="btn" target="_blank">
                  Code
                </a>
                {live === "" ? null : (
                  <a href={live} className="btn btn-primary" target="_blank">
                    Live
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Projects;
