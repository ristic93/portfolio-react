import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({duration: 2500});

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
  );
}

export default App;
