
import React from 'react';
import "../styles/About.css" // Import custom CSS for animations and styling
import saqibImage from '../assets/images/black blue shrt.png'; // Import your image
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

const About = () => {
  return (
    <section id="about" className="mb-4 about-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: About Text */}
          <div className="col-md-6">
            <h2 className="mb-4">About Me</h2>
            <p className="lead">
              Hi, I'm <strong>Saqib</strong>, a passionate{' '}
              <span className="mern-stack">MERN Stack Developer</span> with expertise in building modern web applications.
              I specialize in creating scalable and efficient solutions using{' '}
              <strong>React, Next.js, Express, Node.js, and MongoDB</strong>.
            </p>
            {/* Social Icons */}
            <div className="social-icons mt-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon" />
              </a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon" />
              </a>
              <a href="mailto:your.email@gmail.com">
                <FaEnvelope className="icon" />
              </a>
            </div>
          </div>
          {/* Right Side: Image */}
          <div className="col-md-6 text-center sm-mt-4">
            <img
              src={saqibImage}
              alt="Saqib"
              className="img-fluid rounded-circle shadow-lg about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;