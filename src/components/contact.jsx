import React from 'react';
import Navbar from './Navbar';
import './contact.css';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <h2>Contact us </h2>
        <hr></hr>
        <div className="contact-info">
          <span className="contact-icon">📧</span>
          <strong>Email:</strong> <a href="mailto:achuab2415@gmail.com">achuab2415@gmail.com</a>
        </div>
        <div className="contact-info">
          <span className="contact-icon">📞</span>
          <strong>Phone:</strong> <a href="tel:+916380524775">+91 63805 24775</a> (India)
        </div>
      </div>
    </>
  );
};

export default Contact;
