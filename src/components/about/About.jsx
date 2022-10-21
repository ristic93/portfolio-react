import React from 'react';
import './about.css';
import Img from '../../assets/about-me.png';
import {FcIdea} from 'react-icons/fc';
import {FcPositiveDynamic} from 'react-icons/fc';
import {FcMultipleDevices} from 'react-icons/fc';
import {FcPuzzle} from 'react-icons/fc';
import {FcPortraitMode} from 'react-icons/fc';
import {FcMindMap} from 'react-icons/fc';
import {FaReact} from 'react-icons/fa';

const about = () => {
  return (
    <section id='about'>
                <h3>About me</h3>
        <article className="container about_container">
            <div className="text">
                <h4>A few words about me</h4>
                <p style={{fontSize: '1.1rem'}}>Ambitious, hard-working and well organized. Communicative, creative and resourceful. Great problem-solving skills. Reliable team player who is able to adapt to new surroundings <FcPortraitMode className='about_icons'/>. </p>
                <h4>How I can contribute</h4>
                <p style={{fontSize: '1.1rem'}}>I develop websites with HTML, CSS and JavaScript <FcMultipleDevices className='about_icons'/>. I love taking complex problems and turning them into simple <FcIdea className='about_icons'/>. I also love the logic and structure of coding and always strive to write elegant and efficient code whether it be HTML, CSS or JavaScript <FcMindMap className='about_icons'/>. Currently I am focused on learning React <FaReact style={{color: 'lightblue', fontSize: '1.4rem'}}/>, so I would like to raise my knowledge to a higher level as well as improving knowledge in existing ones <FcPuzzle className='about_icons'/>.</p>
                <h4>What are my goals</h4>
                <p style={{fontSize: '1.1rem'}}>I am seeking a challenge, engaging projects and opportunity to grow and learn new skills and technologies  <FcPositiveDynamic className='about_icons'/>.</p>
            </div>
            <div className="img">
                <img src={Img} alt="About image" />
            </div>
        </article>
    </section>
  )
}

export default about;