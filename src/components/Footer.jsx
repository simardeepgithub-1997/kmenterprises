import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">KM</span>
              <div className="footer-logo-text">
                <span className="footer-title">K.M Enterprises</span>
              </div>
            </div>
            <p className="footer-desc">
              Premium manufacturer of quality spare parts and industrial machinery components with reliable pan-India delivery.
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} K.M Enterprises. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
