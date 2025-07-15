import Leaves from '../../../assets/leaves.png';
export default function JoinUsBanner() {
  return (
   <div className="bg-[#f9f3e4] py-10 px-4">
  <div className="bg-white min-h-[600px] rounded-lg shadow-md p-8 text-center relative overflow-hidden flex items-center justify-center">
    {/* Leaf background */}
    <img
      src={Leaves}
      alt="Leaves"
      className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none"
    />

    {/* Centered Overlay Content */}
    <div className="relative z-10">
      <p className="text-2xl sm:text-5xl italic mb-6 font-semibold">

        "Join 1000+ Happy buyers & 500+ verified farmers today!"
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded">
          Sign Up as Farmer
        </button>
        <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded">
          Start Shopping
        </button>
      </div>
    </div>
  </div>
</div>

  );
}
