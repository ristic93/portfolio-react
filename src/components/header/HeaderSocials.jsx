import React from 'react';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
import 'animate.css';

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a className="animate__animated animate__rollIn animate__slow animate__delay-2s" href="https://www.linkedin.com/in/aleksandar93/" target="_blank" rel="noreferrer"><BsLinkedin className='header_icons' /></a>
      <a className="animate__animated animate__rollIn animate__slow animate__delay-2s" href="https://github.com/ristic93" target="_blank" rel="noreferrer"><BsGithub /></a>
      <a className="animate__animated animate__rollIn animate__slow animate__delay-2s" href="https://www.instagram.com/vops_popili/?next=%2F" target="_blank" rel="noreferrer"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials;