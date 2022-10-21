import React from 'react';
import CV from '../../assets/cv.pdf';

const Cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#projects" className='btn btn-primary'>My projects</a>
    </div>
  )
}

export default Cta;