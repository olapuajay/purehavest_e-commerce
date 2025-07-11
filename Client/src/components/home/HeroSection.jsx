import React from 'react';
import heroImage from '../../assets/hero-img.png';
import bgImage from '../../assets/leaves.png';

function HeroSection() {
  return (
    <section className="flex justify-between items-center bg-[#F8F3DF] py-12 px-8 flex-wrap">
      <div className="flex-1 max-w-[600px]">
        <p className="text-green-600 text-2xl mb-2 pl-[60px]">100% Organic products</p>
        <h1 className="text-5xl mb-4 pl-[60px] pb-[80px]">Fresh from the farm to your Doorstep!</h1>
        <div className="flex gap-6 pl-[60px] h-10">
          <button className="signup-btn">Shop Now</button>
          <button className="signup-btn">Become Seller</button>
        </div>
      </div>
      <div className="flex-1 max-w-[650px] relative">
        <img 
          src={bgImage} 
          alt="Background shape" 
          className="absolute top-[-50px] left-[30px] w-[150%] opacity-30" 
        />
        <img 
          src={heroImage} 
          alt="Farm produce" 
          className="relative z-10 w-full h-auto" 
        />
      </div>
    </section>
  );
}

export default HeroSection;