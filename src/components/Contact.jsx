import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="contact-subtitle">Get in touch for requirements, bulk orders, or custom components.</p>
        
        <div className="contact-grid">
          <div className="contact-info-container">
            <div className="contact-card primary-contact-card">
              <div className="contact-icon large"><Phone size={32} /></div>
              <h3>Call Us Directly</h3>
              <p>For immediate assistance and sales inquiries.</p>
              <a href="tel:+919814825861" className="contact-link highlight">
                +91 98148 25861
              </a>
            </div>
            
            <div className="contact-details-grid">
              <div className="contact-card">
                <div className="contact-icon"><Mail size={24} /></div>
                <h4>Email</h4>
                <a href="mailto:kmindustries61@gmail.com" className="contact-link">
                  kmindustries61@gmail.com
                </a>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon"><MapPin size={24} /></div>
                <h4>Location</h4>
                <p className="contact-address">
                  House no. 5, Gurdev Nagar, L-8/222,<br/>
                  Amritsar-Tarn Taran Rd, Guru Nanak Colony,<br/>
                  Dilbagh Nagar, Amritsar,<br/>
                  Amritsar Cantt., Punjab 143001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
