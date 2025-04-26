import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Creative &amp; Innovative Digital Solution</h1>
        <p>We provide professional IT and digital services to help your business grow.</p>
        <button className="hero-cta" onClick={handleGetStarted}>Get Started</button>
      </div>
      <div className="hero-image">
        {/* Placeholder for professional imagery */}
        
      </div>
    </section>
  );
};

export default Hero;
