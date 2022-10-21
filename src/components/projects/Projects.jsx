import React from 'react';
import './projects.css';
import img1 from '../../assets/react-shopping-list.png';
import img2 from '../../assets/kod-brku-menu.png';
import img3 from '../../assets/river-meni.png';
import img4 from '../../assets/e-commerce.png';
import img5 from '../../assets/CRUD-app.png';
import img6 from '../../assets/digital-clock.png';
import img7 from '../../assets/weather-app.png';
import img8 from '../../assets/budget-app.png';
import {FcRightDown2} from 'react-icons/fc';
import {FcApproval} from 'react-icons/fc';

const Projects = () => {

  const data = [
    {
      id: 1,
      image: img8,
      title: 'Budget app (React)',
      desc: 'In order to make this app i worked with hooks: useState, useEffect, useContext and useReduce. Solved income and expense amounts by storing data in localstorage for XY days. Learned how to work with Context and Reducer.',
      github: 'https://github.com/ristic93/react-budget-app',
      live: 'https://budget-app-2022.netlify.app'
    },
    {
      id: 2,
      image: img1,
      title: 'Shopping list (React)',
      desc: 'Simple shopping list made by using HTML5, CSS3, JavaScript, React.js. Also used hooks like useState, useEffect, and useRef in order to make it.',
      github: 'https://github.com/ristic93/React-shopping-list',
      live: 'https://loquacious-frangollo-e85cf6.netlify.app'
    },
    {
      id: 3,
      image: img2,
      title: 'Digital menu',
      desc: 'Digital menu for a fast food bar - Kod Brku. Made by using HTML, SASS & JavaScript. This project is made for displays like tablets and smartphones. Made for a client, and made together with my colleague Nikola. QR code is scanned 100+ times every day.',
      github: 'https://github.com/ristic93/Digital-Menu-Kod-brku',
      live: 'https://www.kodbrku.rs'
    },
    {
      id: 4,
      image: img3,
      title: 'Digital menu',
      desc: 'Digital menu for a caffe bar - River-Caffe. Made by using HTML, SASS & JavaScript. This project is made for displays like tablets and smartphones. Made for a client, and made together with my colleague Nikola. QR code is scanned 100+ times every day.',
      github: 'https://github.com/ristic93/Digital-Menu-River-Caffe',
      live: 'http://river-caffe.rs/'
    },
    {
      id: 5,
      image: img4,
      title: 'Ecommerce',
      desc: 'Simple WebShop app made by using HTML5, CSS3, Bootstrap 5 and Javascript with Fetch API. Also worked with session and local storage in order to save state of orders in shopping cart.',
      github: 'https://github.com/ristic93/JS-Ecommerce',
      live: 'https://mellow-crostata-c3ca2e.netlify.app/'
    },
    {
      id: 6,
      image: img5,
      title: 'CRUD app',
      desc: 'Made by using HTML5, CSS3, Bootstrap 5 and Javascript. Learned how to manipulate with DOM elements. Create, read, update and delete methods.',
      github: 'https://github.com/ristic93/Basic-CRUD-app',
      live: 'https://cosmic-bonbon-8d8e2e.netlify.app/'
    },
    {
      id: 7,
      image: img6,
      title: 'Digital clock',
      desc: 'Made by using HTML5, CSS3 and Javascript. Learned how to manipulate with DOM elements and Date Objects.',
      github: 'https://github.com/ristic93/JS-Digital-Clock',
      live: 'https://gentle-kitsune-17f053.netlify.app'
    },
    {
      id: 8,
      image: img7,
      title: 'Weather app',
      desc: 'Simple weather app that is showing temperature based on your current location. Made by using HTML5, CSS3 and Javascript with Fetch API.',
      github: 'https://github.com/ristic93/JS-Weather-app',
      live: 'https://superlative-kleicha-a80af8.netlify.app'
    },
  ]

  return (
    <section id='projects'>
        <h3>My projects</h3>
        <p className='container' style={{textAlign: 'center', marginBottom: '5em'}}>Here you can check out some of my recent work <FcApproval style={{fontSize: '1.4rem'}}/></p>

      <article className="container projects_container">
        {
          data.map(({id, image, title, desc, github, live}) => {
            return (
              <div key={id} className="projects_items">
                  <div className="projects_image">
                    <img src={image} alt={title} className='abcd'/>
                  </div>
                  <p>{title}</p>
                  <details>
                    <summary>Description < FcRightDown2 className='icon'/></summary>
                    {desc}
                  </details>
                  <div className="projects_cta">
                    <a href={github} className='btn' target='_blank'>Code</a>
                    <a href={live} className='btn btn-primary' target='_blank'>Live</a>
                  </div>
              </div>
              )
          })
        }
      </article>
    </section>
  )
}

export default Projects;