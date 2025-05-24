import { useState } from 'react';
import Gallery from '../components/Gallery';
import Cart from '../components/Cart';
import '../styles/Gallery.css';

export default function GalleryPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="gallery-page">
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <button className="cart-close-btn" onClick={toggleCart}>
          ×
        </button>
        <Cart />
      </div>
      <div className="gallery-content">
        <h1>Galerie d’art</h1>
        <Gallery onAddToCart={toggleCart} />
      </div>
    </div>
  );
}