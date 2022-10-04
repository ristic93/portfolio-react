import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/aleksandar93/" target="blank"><BsLinkedin className='header_icons'/></a>
        <a href="https://github.com/ristic93" target="blank"><BsGithub/></a>
        <a href="https://www.instagram.com/vops_popili/?next=%2F" target="blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials;