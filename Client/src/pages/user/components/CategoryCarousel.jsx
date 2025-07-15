import React from 'react';
import { useNavigate } from 'react-router-dom';

import fruitsImg from '../../../assets/fruits.png';
import vegetablesImg from '../../../assets/vegetables.png';
import dryFruitsImg from '../../../assets/dryfruits.png';
import dairyImg from '../../../assets/dairy.png';
import cerealsImg from '../../../assets/cereals.png';
import meatImg from '../../../assets/meat.png';
import spicesImg from '../../../assets/spices.png';

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
  const navigate = useNavigate();
  return (
    <section className="p-8 bg-white">
      <h2 className="text-xl mb-4 text-gray-900 flex items-center">Shop by Categories</h2>
      <div className="flex overflow-x-auto gap-16 pb-4 scrollbar-hide">
        {categories.map((category, index) => (
          <div 
            className="min-w-[150px] h-[150px] bg-gray-200 rounded-lg text-center p-2 flex-shrink-0 flex flex-col justify-between shadow-sm hover:cursor-pointer" 
            key={index}
            onClick={() => navigate("/products")}
          >
            <p className="text-base font-bold mb-1">{category.name}</p>
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-[70%] h-[110px] object-fill rounded-lg pl-5" 
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryCarousel;