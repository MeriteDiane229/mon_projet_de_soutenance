import { useCart } from '../context/CartContext';
import '../styles/Gallery.css';

const images = [
  { id: 'mask1', title: 'Masque Vodoun 1', price: 20, src: '/img/galerie18.jpg' },
  { id: 'dance1', title: 'Danse rituelle 1', price: 30, src: '/img/galerie13.jpg' },
  { id: 'statue1', title: 'Statue bois 1', price: 25, src: '/img/galerie9.jpg' },
  { id: 'mask2', title: 'Masque Vodoun 2', price: 20, src: '/img/galerie11.jpg' },
  { id: 'dance2', title: 'Danse rituelle 2', price: 30, src: '/img/galerie12.jpg' },
  { id: 'statue2', title: 'Statue bois 2', price: 25, src: '/img/galerie7.jpg' },
  { id: 'mask3', title: 'Masque Vodoun 3', price: 20, src: '/img/galerie2.jpg' },
  { id: 'dance3', title: 'Danse rituelle 3', price: 30, src: '/img/galerie3.jpg' },
  { id: 'statue3', title: 'Statue bois 3', price: 25, src: '/img/galerie5.jpg' },
  { id: 'mask4', title: 'Masque Vodoun 4', price: 20, src: '/img/galerie10.jpg' },
  { id: 'dance4', title: 'Danse rituelle 4', price: 30, src: '/img/galerie8.jpg' },
  { id: 'statue4', title: 'Statue bois 4', price: 25, src: '/img/galerie13.jpg' },
  { id: 'mask5', title: 'Masque Vodoun 5', price: 20, src: '/img/galerie16.jpg' },
  { id: 'dance5', title: 'Danse rituelle 5', price: 30, src: '/img/galerie15.jpg' },
  { id: 'statue5', title: 'Statue bois 5', price: 25, src: '/img/galerie14.jpg' },
  { id: 'mask6', title: 'Masque Vodoun 6', price: 20, src: '/img/galerie17.jpg' },

  { id: 'dance4', title: 'Danse rituelle 4', price: 30, src: '/img/galerie19.jpg' },
  { id: 'statue4', title: 'Statue bois 4', price: 25, src: '/img/galerie20.jpg' },
  { id: 'mask5', title: 'Masque Vodoun 5', price: 20, src: '/img/galerie21.jpg' },
  { id: 'dance5', title: 'Danse rituelle 5', price: 30, src: '/img/galerie22.jpg' },
  { id: 'statue5', title: 'Statue bois 5', price: 25, src: '/img/galerie23.jpg' },
  { id: 'mask6', title: 'Masque Vodoun 6', price: 20, src: '/img/galerie24.jpg' },

    { id: 'dance5', title: 'Danse rituelle 5', price: 30, src: '/img/galerie25.jpg' },
  { id: 'statue5', title: 'Statue bois 5', price: 25, src: '/img/galerie26.jpg' },
  { id: 'mask6', title: 'Masque Vodoun 6', price: 20, src: '/img/galerie27.jpg' },

];

export default function Gallery({ onAddToCart }) {
  const { addToCart } = useCart();

  const handleAddToCart = (image) => {
    addToCart(image);
    onAddToCart();
  };

  return (
    <div className="gallery">
      {images.map((image) => (
        <div key={image.id} className="card">
          <img
            src={image.src}
            alt={image.title}
            onClick={() => handleAddToCart(image)}
            style={{ cursor: 'pointer' }}
          />
          <h3>{image.title}</h3>
          <p>{image.price} €</p>
          <button onClick={() => handleAddToCart(image)}>Ajouter au panier</button>
        </div>
      ))}
    </div>
  );
}