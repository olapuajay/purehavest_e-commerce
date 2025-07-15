import React from 'react';
import honeyImg from '../../../assets/honeybr.png'; // Replace with actual image path
import milkImg from '../../../assets/milkbr.png';   // Replace with actual image path
import oilImg from '../../../assets/oil.png';     // Replace with actual image path

const FeaturedProducts = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Featured Products
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Honey Product Card */}
        <div className="bg-[#F3F1E5]  rounded-2xl flex-1 p-6 flex flex-col justify-between text-center">
          <div>
            <img src={honeyImg} alt="Honey" className="mx-auto w-48 mb-4" />
            <h3 className="text-2xl font-semibold">Pure Forest Honey</h3>
            <p className="text-green-700 mt-2">Golden Sweetness, Naturally</p>
          </div>
          <button className="mt-6 bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            Shop Now
          </button>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8 flex-1">
          {/* Milk Card */}
          <div className="bg-[#F3F1E5] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <img src={milkImg} alt="Milk" className="w-58 md:w-52" />
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">A2 Desi Cow Milk</h3>
              <p className="text-gray-700 mt-1">— Pure, Unprocessed, Nutrient-Rich</p>
            </div>
            <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
              Shop Now
            </button>
          </div>

          {/* Oil Card */}
          <div className="bg-[#F3F1E5] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <img src={oilImg} alt="Groundnut Oil" className="w-98 md:w-72" />
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">Cold-Pressed Groundnut Oil</h3>
              <p className="text-gray-700 mt-1">— Healthy Cooking Starts Here</p>
            </div>
            <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

