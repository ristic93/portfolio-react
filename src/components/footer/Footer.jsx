import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { SiFrontendmentor } from "react-icons/si";

const Footer = () => {
  return (
    <section id="footer" data-aos="zoom-in-up">
      <span className="bottom-tag">
        <a href="https://github.com/ristic93/portfolio-react" target="_blank" rel="noreferrer" >
          &nbsp;&nbsp;&lt;/body&gt;
          <br />
          &lt;/html&gt;
        </a>
      </span>
      <footer>
        <h2 style={{ margin: "0" }}>Aleksandar Ristic</h2>
        <div className="footer_socials">
          <a href="https://www.linkedin.com/in/aleksandar93/" target="_blank" title="Linkedin" rel="noreferrer">
            <BsLinkedin />
          </a>
          <a href="https://github.com/ristic93" target="_blank" title="GitHub" rel="noreferrer">
            <BsGithub />
          </a>
          <a
            href="https://www.instagram.com/vops_popili/?next=%2F"
            target="_blank" title="Instagram" rel="noreferrer"
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.frontendmentor.io/profile/ristic93/solutions"
            target="_blank" title="Frontend Mentor" rel="noreferrer"
          >
            <SiFrontendmentor />
          </a>
        </div>
      </footer>
      <div className="bottom-bar">
        <p style={{ margin: "0" }}>
          &copy; All rights reserved - Aleksandar Ristic <br />{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
};

export default Footer;
