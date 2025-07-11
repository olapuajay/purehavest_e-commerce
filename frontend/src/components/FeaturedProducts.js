import React from 'react';
import './FeaturedProducts.css';

import honeyImg from '../assets/honey.png';
import milkImg from '../assets/milk.png';
import oilImg from '../assets/oil.png';

const FeaturedProducts = () => {
  return (
    <section className="featured-section">
      <h2 className="featured-heading">Featured Products</h2>

      <div className="featured-container">
        {/* Left - Honey */}
        <div className="featured-left">
          <img src={honeyImg} alt="Honey Jar" className="featured-img tall-img" />
            <button className="shop-button">Shop Now</button>
        </div>

        {/* Right - Milk and Oil stacked */}
        <div className="featured-right">
          <img src={milkImg} alt="Milk Bottles" className="featured-img" />
          <img src={oilImg} alt="Groundnut Oil" className="featured-img" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
