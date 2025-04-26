import React from 'react';
import Navbar from './Navbar';
import './profile.css';
import ProfileImage from "../image/WhatsApme.jpeg";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-image">
          <img src={ProfileImage} alt="Profile" className="profile-pic" />
        </div>
        <p>
          R.Achuthan I started my journey in 2025 I need to start my own company
        </p>
        <h2>Profile</h2>
        <hr></hr>

        <div className="profile-section">
          <h3>Frontend Development</h3>
          <ul className="profile-skills">
            <li>React</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>HTML</li>
          </ul>
        </div>

        <div className="profile-section">
          <h3>Backend Development</h3>
          <ul className="profile-skills">
            <li>Node.js</li>
            <li>SQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="profile-section">
          <h3>Data analysis</h3>
          <ul className="profile-skills">
            <li className="python-skill">Python</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
