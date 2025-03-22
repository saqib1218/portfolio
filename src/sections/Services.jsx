import React from 'react';
import { services } from '../utils/constants';
import '../styles/Services.css'; // Import custom CSS for animations and styling
import serviceBg from '../assets/service/services.jpg'; // Import the background image

const Services = () => {
  return (
    <section id="services" className="py-5 services-section">
      <div className="container">
        <h2 className="text-center mb-5">Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4" data-aos="fade-up"
            data-aos-delay={index * 100} >
              <div
                className="service-card"
                style={{height:"32vh", backgroundImage: `url(${serviceBg})` }} // Set the background image
              >
                <div className="service-overlay"></div> {/* Overlay for low opacity */}
                <div className="service-content">
                  <h3 className="service-title">{service}</h3>
                  <p className="service-description">
                    {getServiceDescription(service)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function to get 4-word service descriptions
const getServiceDescription = (service) => {
  switch (service) {
    case 'Full-Stack Web Development':
      return 'End-to-end web app development.';
    case 'REST API Development & Integration':
      return 'Scalable RESTful API solutions.';
    case 'Database Design & Management':
      return 'Efficient database schema design.';
    case 'Frontend Development with React':
      return 'Interactive React user interfaces.';
    case 'Backend Development with Node.js':
      return 'Robust backend systems development.';
      case 'Website Deployment & Hosting':
        return 'Deploying websites and applications to platforms like Vercel, Netlify, and AWS.';
    default:
      return '';
  }
};

export default Services;