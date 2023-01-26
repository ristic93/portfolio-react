import React from 'react';
import CV from '../../assets/CV.pdf';
import 'animate.css';
import {BiDownload} from 'react-icons/bi';

const Cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV <BiDownload className='animate__animated animate__flash animate__infinite animate__slow'/></a>
        <a href="https://www.frontendmentor.io/profile/ristic93/solutions" target="blank" className='btn btn-primary'>Frontend Mentor</a>
    </div>
  )
}

export default Cta;