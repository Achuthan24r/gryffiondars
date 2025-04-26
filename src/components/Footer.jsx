import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>Providing innovative digital solutions to help your business grow.</p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/contact">Contact</a></li>
            {/* Add more links as needed */}
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: achuabi2419@gmail.com</p>
          <p>Phone: +91 63805 24775</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 R.Achuthan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
