import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#467612] text-white py-10 px-6">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
        "Changing lives, one harvest at a time."
      </h2>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 max-w-6xl mx-auto">
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-black space-y-1">
            <li className="cursor-pointer hover:underline">About Us</li>
            <li className="cursor-pointer hover:underline">Contact</li>
            <li className="cursor-pointer hover:underline">Blog</li>
            <li className="cursor-pointer hover:underline">Terms & Privacy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Our Social Media</h3>
          <ul className="text-black space-y-1">
            <li className="cursor-pointer hover:underline">Facebook</li>
            <li className="cursor-pointer hover:underline">Instagram</li>
            <li className="cursor-pointer hover:underline">WhatsApp</li>
          </ul>
        </div>

        <div className="bg-white text-black rounded-lg p-6 w-full lg:w-1/3 shadow-md">
          <h3 className="text-xl font-semibold text-center mb-1">Newsletter</h3>
          <p className="italic text-sm text-center mb-4">
            “Get fresh updates to your inbox!”
          </p>
          <input
            type="email"
            placeholder="Type your Email here"
            className="w-full px-4 py-2 rounded bg-gray-200 mb-4 outline-none"
          />
          <button className="w-full bg-[#467612] hover:bg-green-800 text-white py-2 rounded">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
