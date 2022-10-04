import React from 'react';
import './header.css';
import Cta from './Cta'
import HeaderSocials from './HeaderSocials';
import {MdWavingHand} from 'react-icons/md';

const Header = () => {
  return (
    <header>
        <div className="container header_container">
          <p><MdWavingHand style={{color: 'var(--color-primary)', fontSize: '1.4rem'}}/> Hello world. I am</p>
          <h1>Aleksandar Ristic</h1>
          <h2>Front-End developer</h2>
          <p>Welcome to my page. Here you can read more about me, <br/> or get in touch in sections below.</p>
          <Cta/>
          <HeaderSocials/>

          <a href="#footer" className='scroll_down'>Scroll down</a>
        </div>
    </header>
  )
}

export default Header;