// import SonamasooriRice from '../../../assets/oil.png';
import Turmeric from '../../../assets/turmeric.png';
import Tamarind from '../../../assets/tamarind.png';
import Apples from '../../../assets/apples.png';
import Eggs from '../../../assets/eggs.png';
import Moongdal from '../../../assets/moongdal.png';
import Rice from '../../../assets/rice.png';
const products = [
  {
    name: 'Sonamasoori Rice',
    quantity: '25 kgs',
    price: '500',
   image :Rice ,
  },
  {
    name: 'Moong Dal',
    quantity: '5 kgs',
    price: '200',
    image: Moongdal,
  },
  {
    name: 'Apples',
    quantity: '5 kgs',
    price: '200',
    image: Apples,
  },
  {
    name: 'Eggs',
    quantity: 'Dozen',
    price: '30',
    image:Eggs,
  },
  {
    name: 'Tamarind',
    quantity: '2kgs',
    price: '100',
    image: Tamarind,
  },
  {
    name: 'Turmeric',
    quantity: '2kgs',
    price: '100',
    image: Turmeric,
  },
];

export default function DealsOfTheDay() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-10">Deals of the Day</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg shadow p-4 flex flex-col items-center text-center relative"
          >
            <span className="absolute top-2 left-2 text-red-500 font-semibold text-sm">-50%</span>
            <img
              src={item.image}
              alt={item.name}
              className="w-28 h-28 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-600">{item.quantity}</p>
            <p className="text-green-700 font-semibold mt-2">{item.price}/-</p>
            <button className="mt-3 bg-green-700 hover:bg-green-800 text-white px-4 py-1 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
