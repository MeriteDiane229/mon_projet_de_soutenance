import Gallery from '../components/Gallery';
import Cart from '../components/Cart';
import '../styles/Gallery.css';

export default function GalleryPage() {
  return (
    <div className="gallery-page">
      <h1>Galerie d’art</h1>
      <Gallery />
      <Cart />
    </div>
  );
}

