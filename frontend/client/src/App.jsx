import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from "./pages/About";
import Login from './pages/Login';
import Register from './components/Register';
import PageGuideTouristique from './pages/PageGuideTouristique';
import SiteTouristique from './pages/SiteTouristique';
import SiteDetail from './pages/SiteDetail';
import SiteList from './components/SiteList';
import Header from "./components/Header";
import Footer from './components/Footer';
import GalleryPage from './pages/GalleryPage';
import { CartProvider } from './context/CartContext';
import Reservation from './pages/Reservation';
import Contact from './pages/Contact'; 
// Nouvelle page pour Culture Vodoun
import CultureVodoun from './pages/CultureVodoun';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/guides" element={<PageGuideTouristique />} />
          <Route path="/guides/guide-touristique" element={<PageGuideTouristique />} />
          <Route path="/guides/site-touristique" element={<SiteTouristique />} />
          <Route path="/site/:slug" element={<SiteDetail />} />
          <Route path="/sites" element={<SiteList />} />
          <Route path="/galerie" element={<GalleryPage />} />
          <Route path="/guides/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register/>} />

        {/* Nouvelle page pour Culture Vodoun */}
        <Route path="/culture-vodoun" element={<CultureVodoun />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
