import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategoryCarousel from './components/CategoryCarousel';
import FeaturedProducts from './components/FeaturedProducts';
// import Deals from './components/Deals';
import './App.css';

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
