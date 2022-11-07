import React from 'react';
import './about.css';
import Img from '../../assets/about-me.png';
import {FcIdea, FcPositiveDynamic, FcMultipleDevices, FcPuzzle, FcPortraitMode} from 'react-icons/fc';
import {DiCss3, DiJavascript1, DiHtml5, DiReact} from 'react-icons/di';

const about = () => {
  return (
    <section id='about'>
      <h2 data-aos="flip-left">About me</h2>
      <article className="container about_container" data-aos="zoom-in-right">
          <div className="text">
              <h3>A few words about me</h3>
              <p style={{fontSize: '1.1rem'}}>Ambitious, hard-working and well organized. Communicative, creative and resourceful. Great problem-solving skills. Reliable team player who is able to adapt to new surroundings <FcPortraitMode className='about_icons'/>. </p>
              <h3>How I can contribute</h3>
              <p style={{fontSize: '1.1rem'}}>I develop websites with HTML <DiHtml5 style={{color: '#dd4b25', fontSize: '1.4rem'}}/>, CSS <DiCss3 style={{color: '#254bdd', fontSize: '1.4rem'}}/> & JavaScript <DiJavascript1 style={{color: '#e8de4e', fontSize: '1.4rem'}}/>. I love taking complex problems and turning them into simple <FcIdea className='about_icon'/>. I also love the logic and structure of coding and always strive to write elegant and efficient code whether it be HTML, CSS or JavaScript <FcMultipleDevices className='about_icons'/>. Currently I am focused on learning React <DiReact style={{color: 'lightblue', fontSize: '1.4rem'}}/>, so I would like to raise my knowledge to a higher level as well as improving knowledge in existing ones <FcPuzzle className='about_icons'/>.</p>
              <h3>What are my goals</h3>
              <p style={{fontSize: '1.1rem'}}>I am seeking a challenge, engaging projects and opportunity to grow and learn new skills and technologies  <FcPositiveDynamic className='about_icons'/>.</p>
          </div>
          <div className="img" data-aos="zoom-in-left">
              <img src={Img} alt="About image" />
          </div>
      </article>
    </section>
  )
}

export default about;