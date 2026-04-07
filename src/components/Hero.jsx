import React from 'react';
import { ArrowRight, Settings, Wrench } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      
      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            Premium Industrial Solutions
          </div>
          
          <h1 className="hero-title">
            Engineering <span className="highlight-text">Excellence</span> <br/>
            for Modern Industry
          </h1>
          
          <p className="hero-description">
            K.M Enterprises delivers high-performance spare parts and industrial machinery tailored for durability and precision. Operating with pan-India delivery to meet all your heavy engineering needs.
          </p>
          
          <div className="hero-actions">
            <a href="#products" className="btn btn-secondary hero-btn">
              Explore Products <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn hero-btn hero-btn-outline">
              Contact Us
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon"><Settings size={24} /></div>
              <div className="stat-info">
                <span className="stat-value">Precision</span>
                <span className="stat-label">Engineering</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><Wrench size={24} /></div>
              <div className="stat-info">
                <span className="stat-value">Durable</span>
                <span className="stat-label">Components</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
