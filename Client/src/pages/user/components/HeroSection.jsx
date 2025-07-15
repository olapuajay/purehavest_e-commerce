import React from 'react';
import Heroimg from '../../../assets/hero-img.png';
import Leaves from '../../../assets/leaves.png';


function HeroSection() {
  return (
    <section className="bg-[#F8F3DF] w-full min-h-screen px-4 md:px-16 py-6 relative overflow-hidden">
      
      {/* Top Navbar */}
      <div className="flex justify-between items-center mb-12">
        {/* Logo */}
        <div className="text-3xl font-medium text-green-700 italic">
          <span className="font-normal">Pure</span>
          <span className="font-semibold">Harvest</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-8 max-w-xl hidden md:flex">
          <div className="flex items-center w-full bg-white px-4 py-2 rounded-full shadow">
            <span className="text-gray-400 mr-2 text-lg">🔍</span>
            <input
              type="text"
              placeholder="Search here"
              className="w-full outline-none text-gray-700"
            />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button>🛒</button>
          <button>👤</button>
          <button className="bg-green-700 text-white px-4 py-2 rounded-md">Sign up</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Text */}
        <div className="flex-1 max-w-xl mb-12 md:mb-0">
          <p className="text-green-600 text-lg mb-2">100% Organic Products</p>
          <h1 className="text-6xl md:text-7xl font-light leading-tight">
            Fresh from the <span className="italic font-semibold text-green-700">Farm</span> to
            <br />
            Your <span className="italic font-semibold text-green-700">Doorstep</span>!
          </h1>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="bg-green-700 text-white px-6 py-2 rounded-md">
              Shop Now
            </button>
            <button className="bg-green-700 text-white px-6 py-2 rounded-md">
              Become Seller
            </button>
          </div>
        </div>

        {/* Right Hero Image */}
        <div className="flex-1 max-w-[800px] relative">
          <img
            src={Heroimg} // Replace later
            alt="Hero"
            className="w-full relative z-10"
          />
          <img
            src={Leaves} // Replace later
            alt="Leaves Decoration"
            className="absolute top-[-30px] left-[60px] w-[130%] opacity-90 z-0"
             
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
