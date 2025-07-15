import React from 'react';
import Heroimg from '../../../assets/hero-img.png';
import Leaves from '../../../assets/leaves.png';
import { useNavigate } from 'react-router-dom';


function HeroSection() {
  const navigate = useNavigate()
  return (
    <section className="bg-[#F8F3DF] w-full min-h-screen px-4 md:px-16 md:pt-36 py-6 relative overflow-hidden">
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
            <button onClick={() => navigate("/products")} className="bg-green-700 text-white px-6 py-2 rounded-md hover:cursor-pointer">
              Shop Now
            </button>
            <button onClick={() => navigate("/register")} className="bg-green-700 text-white px-6 py-2 rounded-md">
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
