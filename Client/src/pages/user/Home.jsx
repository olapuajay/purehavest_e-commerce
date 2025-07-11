// src/pages/user/Home.jsx
import HeroSection from '../../components/home/HeroSection';
import FeaturedProducts from '../../components/home/FeaturedProducts';
import CategoryCarousel from '../../components/home/CategoryCarousel';

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
