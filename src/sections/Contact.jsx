import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Import FontAwesome icons
import '../styles/Contact.css'; // Import custom CSS for styling

const Contact = () => {
  return (
    <section id="contact" className="py-5 contact-section">
      <div className="container">
        <h2 className="text-center mb-5">Contact Info</h2>
        <div className="contact-info">
          {/* Email */}
          <div className="contact-item">
            <div className="contact-icon">
              <FaEnvelope className="icon" />
            </div>
            <div className="contact-details">
              <h3>Email</h3>
              <p>saqibifitikhar756@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="contact-item">
            <div className="contact-icon">
              <FaPhone className="icon" />
            </div>
            <div className="contact-details">
              <h3>Phone</h3>
              <p>+92 340 3118722</p>
            </div>
          </div>

          {/* Address */}
          <div className="contact-item">
            <div className="contact-icon">
              <FaMapMarkerAlt className="icon" />
            </div>
            <div className="contact-details">
              <h3>Address</h3>
              <p>Islamabad, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;