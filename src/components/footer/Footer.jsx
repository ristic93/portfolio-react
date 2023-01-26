import React from 'react';
import './footer.css';
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';
import {SiFrontendmentor} from 'react-icons/si';

const Footer = () => {
  return (
    <section id='footer' data-aos="zoom-in-up">
      <span className='bottom-tag'>
        &nbsp;&nbsp;&lt;/body&gt;
        <br />
        &lt;/html&gt;
      </span>
      <footer>
        <h2 style={{margin: '0'}}>Aleksandar Ristic</h2>
        <div className="footer_socials">
          <a href="https://www.linkedin.com/in/aleksandar93/" target="blank"><BsLinkedin/></a>
          <a href="https://github.com/ristic93" target="blank"><BsGithub/></a>
          <a href="https://www.instagram.com/vops_popili/?next=%2F" target="blank"><BsInstagram/></a>
          <a href="https://www.frontendmentor.io/profile/ristic93/solutions" target="blank"><SiFrontendmentor/></a>
        </div>
      </footer>
        <div className="bottom-bar">
          <p style={{margin: '0'}}>&copy; All rights reserved - Aleksandar Ristic <br /> {(new Date().getFullYear())}</p>
        </div>
    </section>
  )
}

export default Footer;