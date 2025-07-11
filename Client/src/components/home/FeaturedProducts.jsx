import React from 'react';
import honeyImg from '../../assets/honey.png';
import milkImg from '../../assets/milk.png';
import oilImg from '../../assets/oil.png';

const FeaturedProducts = () => {
  return (
    <section className="py-8 px-8 text-center bg-white">
      <h2 className="text-3xl mb-8">Featured Products</h2>

      <div className="flex justify-center gap-8 items-stretch flex-wrap">
        {/* Left - Honey */}
        <div className="flex-1 min-w-[300px]">
          <img 
            src={honeyImg} 
            alt="Honey Jar" 
            className="w-full rounded-2xl object-cover h-full" 
          />
          <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Shop Now
          </button>
        </div>

        {/* Right - Milk and Oil stacked */}
        <div className="flex-1 min-w-[500px] flex flex-col gap-6">
          <img 
            src={milkImg} 
            alt="Milk Bottles" 
            className="w-full rounded-2xl object-cover" 
          />
          <img 
            src={oilImg} 
            alt="Groundnut Oil" 
            className="w-full rounded-2xl object-cover" 
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;