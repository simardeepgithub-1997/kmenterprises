import React from 'react';
import './Products.css';

import img1 from '../assets/283eac10-1a1d-45fc-9f4d-8ccfe1e6cba8.jpeg';
import img2 from '../assets/67bfcb36-2b87-4eda-8ca8-a10d96467db5.jpeg';
import img3 from '../assets/7dbd64c1-67a4-487d-949d-a254a924fa7c.jpeg';
import img4 from '../assets/8ebbea24-9239-47ba-b808-7a3b7ac44b55.jpeg';
import img5 from '../assets/c4a168d0-61a6-4ef6-a71c-fbb9d0af6c3f.jpeg';
import img6 from '../assets/e5f72555-d44c-415e-8414-7a0406960c2a.jpeg';
import img7 from '../assets/engineered-pump-shaft.jpg';
import img8 from '../assets/submersible-pump-shaft.jpg';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Submersible Pump Shaft - Model A',
      description: 'High-grade stainless steel shaft tailored for deep-water submersible pumps.',
      image: img1
    },
    {
      id: 2,
      name: 'Submersible Pump Shaft - Model B',
      description: 'Precision engineered for durability and corrosion resistance.',
      image: img2
    },
    {
      id: 3,
      name: 'Heavy Duty Pump Shaft',
      description: 'Industrial grade shafts built to withstand extreme pressure and conditions.',
      image: img3
    },
    {
      id: 4,
      name: 'Submersible Pump Shaft - Type IV',
      description: 'Advanced tooling design for accurate industrial manufacturing and fitment.',
      image: img4
    },
    {
      id: 5,
      name: 'Premium Pump Shaft',
      description: 'Designed for high efficiency and smooth continuous operations.',
      image: img5
    },
    {
      id: 6,
      name: 'Industrial Submersible Shaft',
      description: 'Engineered for reliability in heavy-duty water pumping applications.',
      image: img6
    },
    {
      id: 7,
      name: 'Engineered Pump Shaft',
      description: 'Dimensionally accurate shafts custom made for standard submersible assemblies.',
      image: img7
    },
    {
      id: 8,
      name: 'Standard Submersible Shaft',
      description: 'Robust base model shafts optimized for long lifecycle.',
      image: img8
    }
  ];

  return (
    <section id="products" className="products section-padding">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
              </div>
              <div className="product-content">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-description">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
