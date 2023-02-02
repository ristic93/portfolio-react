import React from "react";
import "./header.css";
import Cta from "./Cta";
import HeaderSocials from "./HeaderSocials";
import { MdWavingHand } from "react-icons/md";
import "animate.css";

const Header = () => {
  return (
    <header>
      <span className="top-tag animate__animated animate__backInDown animate__slow animate__delay-0.5s">
        <a href="https://github.com/ristic93/portfolio-react" target="blank">
          &lt;body&gt;
        </a>
      </span>
      <article className="container header_container">
        <div className="animate__animated animate__swing animate__slow">
          <p>
            <MdWavingHand
              style={{ color: "var(--color-primary)", fontSize: "1.4rem" }}
              className="animate__animated animate__tada animate__infinite"
            />{" "}
            Hello world. I am
          </p>
          <h1>Aleksandar Ristic</h1>
        </div>
        <span className="proffesion animate__animated animate__fadeInUp animate__slower animate__delay-1s">
          Junior Front-End developer
        </span>
        <div className="animate__animated animate__fadeInUp animate__slower animate__delay-3s">
          <p>
            Here you can read more about me, <br /> or get in touch in sections
            below.
          </p>
          <Cta />
        </div>

        <HeaderSocials />
        <a
          href="#footer"
          className="scroll_down animate__animated animate__rotateInDownRight animate__slow animate__delay-2s"
        >
          Scroll down
        </a>
      </article>
    </header>
  );
};

export default Header;
