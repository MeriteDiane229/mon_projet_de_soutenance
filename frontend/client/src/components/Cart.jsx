import { useCart } from '../context/CartContext';
import '../styles/Gallery.css';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Panier</h2>
      {cartItems.length === 0 ? (
        <p>Panier vide</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Titre</th>
                <th>Prix</th>
                <th>Quantité</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.src} alt={item.title} className="cart-item-img" />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price} €</td>
                  <td>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="cart-remove-btn"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-total">
            <strong>Total : {total} €</strong>
          </div>
        </>
      )}
    </div>
  );
}