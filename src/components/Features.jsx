import React from 'react';
import { ShieldCheck, Truck, Clock, Wrench } from 'lucide-react';
import './Features.css';

const Features = () => {
  const featureList = [
    {
      icon: <ShieldCheck size={32} />,
      title: 'Premium Quality',
      description: 'Manufactured with high-grade materials to ensure maximum durability and dimensional accuracy.'
    },
    {
      icon: <Truck size={32} />,
      title: 'Pan-India Delivery',
      description: 'Reliable logistics network ensuring your industrial parts reach anywhere in India safely.'
    },
    {
      icon: <Clock size={32} />,
      title: 'Timely Execution',
      description: 'We respect industrial timelines and guarantee prompt delivery for all bulk and custom orders.'
    },
    {
      icon: <Wrench size={32} />,
      title: 'Easy Installation',
      description: 'Precision engineering makes our parts easy to install, saving you valuable operational downtime.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="features-grid">
          {featureList.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
