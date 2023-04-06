import React from "react";
import "./contact.css";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { RiSendPlane2Line } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "emailjs-com";
import "animate.css";
import Tilt from "react-parallax-tilt";

const Contact = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      "service_fhba7a9",
      "template_qs1cf69",
      form.current,
      "MfuZtRUc_pdX0gc0C"
    );

    event.target.reset();
  };

  return (
    <section id="contact">
      <h2 data-aos="flip-left">Need a Frontend Developer?</h2>

      <article className="container contact_container">
        <div className="contact_options" data-aos="zoom-in-right">
          <h3>Contact me</h3>
          <Tilt>
            <div className="contact_option">
              <a href="mailto:ristic16210@gmail.com" target="_blank">
                <AiOutlineMail
                  style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}
                  className="animate__animated animate__headShake animate__infinite"
                />
                <h4>E-mail</h4>
                <p>ristic16210@gmail.com</p>
                <p>Send message</p>
              </a>
            </div>
          </Tilt>
          <Tilt>
            <div className="contact_option">
              <a
                href="https://api.whatsapp.com/send?phone=381692108991"
                target="_blank"
              >
                <AiOutlineWhatsApp
                  style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}
                  className="animate__animated animate__headShake animate__infinite"
                />
                <h4>WhatsApp</h4>
                <p>+381 69 210 89 91</p>
                <p>Send message or call</p>
              </a>
            </div>
          </Tilt>
        </div>
        <form ref={form} onSubmit={sendEmail} data-aos="zoom-in-left">
          <div className="contact_form-div">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              placeholder="What's your name?"
              required
            />
          </div>
          <div className="contact_form-div">
            <label htmlFor="">Mail</label>
            <input
              type="email"
              name="email"
              placeholder="What's your email?"
              required
            />
          </div>
          <div className="contact_form-div">
            <label htmlFor="">Message</label>
            <textarea
              name="message"
              rows="7"
              placeholder="What do you want to say?"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send message{" "}
            <RiSendPlane2Line className="animate__animated animate__tada animate__infinite" />
          </button>
        </form>
      </article>
    </section>
  );
};

export default Contact;
