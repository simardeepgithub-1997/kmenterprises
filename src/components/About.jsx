import React from 'react';
import { Award, User, Target } from 'lucide-react';
import ownerImg from '../assets/31993c9a-f0f7-4e8b-8695-074704ed4239.jpeg';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <h2 className="section-title">About Us</h2>

        <div className="about-content">
          <div className="about-text">
            <h3 className="about-subtitle">K.M Enterprises</h3>
            <p className="about-description">
              Welcome to <strong>K.M Enterprises</strong>, your trusted partner in high-quality industrial components and machinery spare parts. Based on a foundation of engineering excellence, we are dedicated to providing robust and dimensional accurate parts for various heavy-duty applications.
            </p>
            <p className="about-description">
              Led by owner <strong>Gurjeet Singh</strong>, K.M Enterprises focuses on customer satisfaction and long-term durability. We pride ourselves on maintaining an industry-leading standard across our entire product range, ensuring that every part that leaves our facility meets rigorous quality checks.
            </p>

            <div className="about-features">
              <div className="about-feature-item">
                <div className="about-feature-icon"><Award size={24} /></div>
                <div>
                  <h4 className="about-feature-title">Quality Assurance</h4>
                  <p className="about-feature-desc">Rigorous testing on all manufactured parts.</p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="about-feature-icon"><User size={24} /></div>
                <div>
                  <h4 className="about-feature-title">Expert Leadership</h4>
                  <p className="about-feature-desc">Guided by Gurjeet Singh's industry expertise.</p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="about-feature-icon"><Target size={24} /></div>
                <div>
                  <h4 className="about-feature-title">Precision Focus</h4>
                  <p className="about-feature-desc">Exact measurements for perfect fitments.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image-wrapper">
            <div className="about-image-placeholder has-image">
              <img src={ownerImg} alt="Gurjeet Singh - K.M Enterprises Owner" className="about-owner-img" />
            </div>
            <div className="about-experience-badge">
              <span className="exp-number">40+</span>
              <span className="exp-text">Years of<br />Trust</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
