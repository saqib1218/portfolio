import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {
  useEffect(() => {
   
    AOS.init({
      duration: 1000, 
      once: false, 
    });

   
    const handleScroll = () => {
      AOS.refresh(); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar />
      <About />
      <TechStack />
      <Services />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default App;