// src/pages/user/Home.jsx
import HeroSection from '../../components/home/HeroSection';
import FeaturedProducts from '../../components/home/FeaturedProducts';
import CategoryCarousel from '../../components/home/CategoryCarousel';
import Navbar from '../../components/common/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
