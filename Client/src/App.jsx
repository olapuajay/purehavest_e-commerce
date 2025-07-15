import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
    
      </BrowserRouter>
      
      <Footer />
    </>
  );
}

export default App;
