import { useCart } from '../context/CartContext';
import '../styles/Gallery.css'; 


export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart">
      <h2>Panier</h2>
      {cartItems.length === 0 ? <p>Panier vide</p> : (
        cartItems.map(item => (
          <div key={item.id}>
            <span>{item.title} - {item.price} €</span>
            <button onClick={() => removeFromCart(item.id)}>Supprimer</button>
          </div>
        ))
      )}
    </div>
  );
}
