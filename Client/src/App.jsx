import Navbar from './components/common/Navbar';
import HeroSection from './components/home/HeroSection';
import CategoryCarousel from './components/home/CategoryCarousel';
import FeaturedProducts from './components/home/FeaturedProducts';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
// import Deals from './components/Deals';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
