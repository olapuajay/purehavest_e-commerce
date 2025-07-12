import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import CategoryCarousel from './components/CategoryCarousel';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategoryCarousel />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
