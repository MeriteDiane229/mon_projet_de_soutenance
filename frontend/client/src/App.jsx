import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './components/Register';
import PageGuideTouristique from './pages/PageGuideTouristique';
import SiteTouristique from './pages/SiteTouristique';
import SiteDetail from './pages/SiteDetail';
import SiteList from './components/SiteList';
import Header from './components/Header';
import Footer from './components/Footer';
import GalleryPage from './pages/GalleryPage';
import { CartProvider } from './context/CartContext';
import Reservation from './pages/Reservation';
import Contact from './pages/Contact';
import CultureVodoun from './pages/CultureVodoun';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <main style={{ paddingTop: '90px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/visite" element={<PageGuideTouristique />} />
            <Route path="/visite/guide-touristique" element={<PageGuideTouristique />} />
            <Route path="/visite/site-touristique" element={<SiteTouristique />} />
            <Route path="/site/:slug" element={<SiteDetail />} />
            <Route path="/sites" element={<SiteList />} />
            <Route path="/galerie" element={<GalleryPage />} />
            <Route path="/visite/reservation" element={<Reservation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/culture-vodoun" element={<CultureVodoun />} />
            <Route path="*" element={<div><h1>Page non trouvée</h1><p>L'URL demandée n'existe pas. <a href="/">Retour à l'accueil</a></p></div>} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;