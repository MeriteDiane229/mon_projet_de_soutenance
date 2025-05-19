import { useCart } from '../context/CartContext';
import '../styles/Gallery.css'; 


const images = [
  { id: 1, title: 'Masque Vodoun', price: 20, src: '/img/galerie1.jpg' },
  { id: 2, title: 'Danse rituelle', price: 30, src: '/img/galerie6.jpg' },
  { id: 3, title: 'Statue bois', price: 25, src: '/img/galerie9.jpg' },
  { id: 4, title: 'Masque Vodoun', price: 20, src: '/img/galerie1.jpg' },
  { id: 5, title: 'Danse rituelle', price: 30, src: '/img/galerie6.jpg' },
  { id: 6, title: 'Statue bois', price: 25, src: '/img/galerie9.jpg' },
  { id: 1, title: 'Masque Vodoun', price: 20, src: '/img/galerie1.jpg' },
  { id: 2, title: 'Danse rituelle', price: 30, src: '/img/galerie6.jpg' },
  { id: 3, title: 'Statue bois', price: 25, src: '/img/galerie9.jpg' },
  { id: 1, title: 'Masque Vodoun', price: 20, src: '/img/galerie1.jpg' },
  { id: 2, title: 'Danse rituelle', price: 30, src: '/img/galerie6.jpg' },
  { id: 3, title: 'Statue bois', price: 25, src: '/img/galerie9.jpg' },
  { id: 1, title: 'Masque Vodoun', price: 20, src: '/img/galerie1.jpg' },
  { id: 2, title: 'Danse rituelle', price: 30, src: '/img/galerie6.jpg' },
  { id: 3, title: 'Statue bois', price: 25, src: '/img/galerie9.jpg' },
];

export default function Gallery() {
  const { addToCart } = useCart();

  return (
    <div className="gallery">
      {images.map(image => (
        <div key={image.id} className="card">
          <img src={image.src} alt={image.title} />
          <h3>{image.title}</h3>
          <p>{image.price} €</p>
          <button onClick={() => addToCart(image)}>Ajouter au panier</button>
        </div>
      ))}
    </div>
  );
}
