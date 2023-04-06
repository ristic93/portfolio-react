import { v4 as uuidv4 } from 'uuid';
import img1 from '../assets/e-commerce.png';
import img2 from '../assets/budget-app.png';
import img3 from '../assets/webshop.png';
import img4 from '../assets/landing-page.jpg';
import img5 from '../assets/comments.png';
import img6 from '../assets/Employees-App.png';

export const data = [
    {
        id: uuidv4(),
        image: img6,
        title: 'Employyes App',
        desc: 'Users should be able to register/login & create/edit/delete employees and tasks. Authentication has been implemented as well as fields for searching employees and filtering tasks.',
        tags: '#react #firebase #sass',
        github: 'https://github.com/ristic93/react-crud-firebase',
        live: 'https://react-crud-ef959.web.app/employees'
    },
    {
        id: uuidv4(),
        image: img5,
        title: 'Comments App',
        desc: 'Used a backend server to fetch the data. Implemented user authentication using JWT token & HTTP request methods - GET, POST, PUT & DELETE for posting, editing and deleting comments.',
        tags: '#react #golang #sass',
        github: 'https://github.com/ristic93/comments-app',
        live: ''
    },
    {
        id: uuidv4(),
        image: img4,
        title: 'Single product page',
        desc: 'Solution for E-commerce product page challenge on Frontend Mentor. Dynamic, completly responsive app made from scratch. App have functionalities like add to cart, remove from cart, amount control, responsive galleries, light box gallery etc...',
        tags: '#react #tailwind',
        github: 'https://github.com/ristic93/e-commerce-product-page',
        live: 'https://ecommerce-landing-page16210.netlify.app'
    },
    {
        id: uuidv4(),
        image: img3,
        title: 'FusionShop',
        desc: 'In order to make this web shop I worked with useState, useEffect, ContextApi & React-Router-Dom. Data is fetched from API. User should be able to add or delete items from cart.',
        tags: '#react #scss',
        github: 'https://github.com/ristic93/react-web-shop',
        live: 'https://fusionshop.netlify.app'
    },
    {
        id: uuidv4(),
        image: img2,
        title: 'Budget App',
        desc: 'In order to make this app i worked with useState, useEffect, ContextApi & useReduce. Solved income and expense amounts by storing data in localstorage for XY days. Learned how to work with Context and Reducer.',
        tags: '#react #css',
        github: 'https://github.com/ristic93/react-budget-app',
        live: 'https://budget-app-2022.netlify.app'
    },
    {
        id: uuidv4(),
        image: img1,
        title: 'Ecommerce App',
        desc: 'Simple WebShop app made by using HTML5, CSS3, Bootstrap 5 and Javascript with Fetch API. Also worked with session and local storage in order to save state of orders in shopping cart.',
        tags: '#javascript #css',
        github: 'https://github.com/ristic93/JS-Ecommerce',
        live: 'https://mellow-crostata-c3ca2e.netlify.app/'
    }
]