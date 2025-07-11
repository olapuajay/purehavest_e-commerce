import Navbar from './components/common/Navbar';
import HeroSection from './components/home/HeroSection';
import CategoryCarousel from './components/home/CategoryCarousel';
import FeaturedProducts from './components/home/FeaturedProducts';
// import Deals from './components/Deals';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <FeaturedProducts />
      {/* <Deals /> */}
    </>
  );
}

export default App;
