import React from 'react';
import './footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';

const Footer = () => {
  return (
    <section id='footer'>
      <footer>
        <h3 style={{margin: '0'}}>Aleksandar Ristic</h3>
        <div className="footer_socials">
          <a href="https://www.linkedin.com/in/aleksandar93/" target="blank"><BsLinkedin/></a>
          <a href="https://github.com/ristic93" target="blank"><BsGithub/></a>
          <a href="https://www.instagram.com/vops_popili/?next=%2F" target="blank"><BsInstagram/></a>
        </div>
      </footer>
        <div className="bottom-bar">
          <p style={{margin: '0'}}>&copy; Aleksandar Ristic. All rights reserved <br /> 2022</p>
        </div>
    </section>
  )
}

export default Footer;