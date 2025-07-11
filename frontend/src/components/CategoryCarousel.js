import React from 'react';
import './CategoryCarousel.css';

import fruitsImg from '../assets/fruits.png';
import vegetablesImg from '../assets/vegetables.png';
import dryFruitsImg from '../assets/dryfruits.png';
import dairyImg from '../assets/dairy.png';
import cerealsImg from '../assets/cereals.png';
import meatImg from '../assets/meat.png';
import spicesImg from '../assets/spices.png';

const categories = [
  { name: 'Fruits', image: fruitsImg },
  { name: 'Vegetables', image: vegetablesImg },
  { name: 'Dry Fruits', image: dryFruitsImg },
  { name: 'Dairy', image: dairyImg },
  { name: 'Cereals', image: cerealsImg },
  { name: 'Meat & Eggs', image: meatImg },
  { name: 'Spices', image: spicesImg },
];

function CategoryCarousel() {
  return (
    <section className="category-section">
      <h2>Shop by Categories</h2>
      <div className="category-carousel">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <p className="category-title">{category.name}</p>
            <img src={category.image} alt={category.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryCarousel;
