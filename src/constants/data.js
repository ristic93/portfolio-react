import { v4 as uuidv4 } from 'uuid';
import img1 from '../assets/river-meni.png';
import img2 from '../assets/kod-brku-menu.png';
import img3 from '../assets/e-commerce.png';
import img4 from '../assets/Social-media-dashboard.png';
import img5 from '../assets/budget-app.png';
import img6 from '../assets/webshop.png';

export const data = [
    {
        id: uuidv4(),
        image: img6,
        title: 'FusionShop',
        desc: 'In order to make this web shop I worked with useState, useEffect, createContext & useContext, React-Router-Dom, SCSS and Material Ui for styling table in cart section.',
        github: 'https://github.com/ristic93/react-web-shop',
        live: 'https://fusionshop.netlify.app'
    },
    {
        id: uuidv4(),
        image: img5,
        title: 'Budget App',
        desc: 'In order to make this app i worked with hooks: useState, useEffect, useContext and useReduce. Solved income and expense amounts by storing data in localstorage for XY days. Learned how to work with Context and Reducer.',
        github: 'https://github.com/ristic93/react-budget-app',
        live: 'https://budget-app-2022.netlify.app'
    },
    {
        id: uuidv4(),
        image: img4,
        title: 'Social Media Dashboard',
        desc: 'Created using React.js & Tailwind-CSS used Vite.js as module bundler. Responsive for mobile devices and also implement dark & light mode.',
        github: 'https://github.com/ristic93/social-media-dashboard',
        live: 'https://social-media-dashboard93.netlify.app/'
    },
    {
        id: uuidv4(),
        image: img3,
        title: 'Ecommerce',
        desc: 'Simple WebShop app made by using HTML5, CSS3, Bootstrap 5 and Javascript with Fetch API. Also worked with session and local storage in order to save state of orders in shopping cart.',
        github: 'https://github.com/ristic93/JS-Ecommerce',
        live: 'https://mellow-crostata-c3ca2e.netlify.app/'
    },
    {
        id: uuidv4(),
        image: img2,
        title: 'Digital menu',
        desc: 'Digital menu for a fast food bar - Kod Brku. Made by using HTML, SASS & JavaScript. This project is made for displays like tablets and smartphones. Made for a client, and made together with my colleague Nikola. QR code is scanned 100+ times every day.',
        github: 'https://github.com/ristic93/Digital-Menu-Kod-brku',
        live: 'https://www.kodbrku.rs'
    },
    {
        id: uuidv4(),
        image: img1,
        title: 'Digital menu',
        desc: 'Digital menu for a caffe bar - River-Caffe. Made by using HTML, SASS & JavaScript. This project is made for displays like tablets and smartphones. Made for a client, and made together with my colleague Nikola. QR code is scanned 100+ times every day.',
        github: 'https://github.com/ristic93/Digital-Menu-River-Caffe',
        live: 'http://river-caffe.rs/'
    }
]