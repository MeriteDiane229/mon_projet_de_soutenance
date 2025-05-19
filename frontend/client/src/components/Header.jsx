// src/components/Header.jsx
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="top-bar">
        <div className="contact-info">
          <span>+229 0190951092 / 0153532667</span>
          <span>|</span>
          <span>meritediane@gmail.com</span>
        </div>
        <div className="top-actions">
          <Link to="/register" className="btn-outline">Inscription</Link>
          <Link to="/login" className="btn-primary">Connexion</Link>
        </div>
      </div>

      <div className="main-nav">
        <div className="logo">
          <Link to="/">Ouidah Culture</Link>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/a-propos">À propos</Link></li>

            <li className="dropdown">
              <span>
                Visite
                <svg width="10" height="10" viewBox="0 0 320 512">
                  <path fill="#ffff" d="M31.3 192h257.4c28.4 0 42.8 34.5 22.6 54.6l-128.7 128c-12.5 12.5-32.8 12.5-45.3 0L8.7 246.6C-11.6 226.5 2.8 192 31.3 192z"/>
                </svg>
              </span>
              <ul className="dropdown-menu">
                <li><Link to="/guides/site-touristique">Sites touristiques</Link></li>
                <li><Link to="/guides/guide-touristique">Guides touristiques</Link></li>
                <li><Link to="/guides/reservation">Réservation</Link></li>
              </ul>
            </li>

            <li><Link to="/galerie">Galerie</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
