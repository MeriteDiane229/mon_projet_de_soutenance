import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Ouidah Culture</h3>
          <p>
            Une plateforme dédiée à la mise en valeur du patrimoine historique et culturel de la ville de Ouidah.
          </p>
        </div>

        <div className="footer-links">
          <h4>Liens rapides</h4>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/galerie">Galerie</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email : contact@ouidahculture.com</p>
          <p>Téléphone : +229 0190951092 / 0153532667</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ouidah Culture. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
