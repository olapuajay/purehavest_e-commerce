import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/hero-img.png'; // update with your image
import bgImage from '../assets/leaves.png'; // new background image
function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="tagline">100% Organic products</p>
        <h1>Fresh from the farm to your Doorstep!</h1>
        <div className="hero-buttons">
          <button className="signup-btn">Shop Now</button>
          <button className="signup-btn">Become Seller</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={bgImage} alt="Background shape" className="bg-layer" />
        <img src={heroImage} alt="Farm produce" />
      </div>
    </section>
  );
}

export default HeroSection;
