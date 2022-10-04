import React from 'react';
import './skills.css';
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';
import {DiSass} from 'react-icons/di';
import {BsFillBootstrapFill} from 'react-icons/bs';
import {IoLogoJavascript} from 'react-icons/io';
import {DiReact} from 'react-icons/di';
import {FaGitSquare} from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai';
import {FcBullish} from 'react-icons/fc';

const Skills = () => {
  return (
    <section id='skills'>
        <h3>My Skills</h3>
        <p className='container' style={{marginBottom: '8rem', textAlign: 'center'}}>Below you can see my skills and technologies that I use every day. I am trying to keep up with the newest trends in the industry and to keep learning new skills and technologies as well as improving knowledge in existing ones <FcBullish style={{fontSize: '1.4rem'}}/>.</p>

      <article className="container skills_container">
        <div className="skills_details">
          <AiFillHtml5 className='i'/>
          <p>HTML</p>
          <small>Markup Language</small>
        </div>
        <div style={{background: 'var(--color-primary)', color: 'var(--color-bg)'}} className="skills_details">
          <DiCss3 className='i'/>
          <p>CSS</p>
          <small>Style Sheets</small>
        </div>
        <div style={{background: 'var(--color-white)', color: 'var(--color-bg)'}} className="skills_details">
          <DiSass className='i'/>
          <p>SASS/SCSS</p>
          <small>Stylesheet Language</small>
        </div>
        <div style={{background: 'var(--color-light)', color: 'var(--color-bg)'}} className="skills_details">
          <BsFillBootstrapFill className='i'/>
          <p>Bootstrap</p>
          <small>CSS framework</small>
        </div>
        <div style={{border: '1px solid var(--color-primary)', background: 'transparent', color: 'var(--color-primary)'}} className="skills_details">
          <IoLogoJavascript className='i'/>
          <p>JavaScript</p>
          <small>Programming Language</small>
        </div>
        <div className="skills_details">
          <DiReact className='i'/>
          <p>React</p>
          <small>JS Library</small>
        </div>
        <div style={{background: 'var(--color-primary)', color: 'var(--color-bg)'}} className="skills_details">
          <FaGitSquare className='i'/>
          <p>Git</p>
          <small>Version control system</small>
        </div>
        <div style={{background: 'var(--color-white)', color: 'var(--color-bg)'}} className="skills_details">
          <AiFillGithub className='i'/>
          <p>GitHub</p>
          <small>Hosting service</small>
        </div>
      </article>
    </section>
  )
}

export default Skills;