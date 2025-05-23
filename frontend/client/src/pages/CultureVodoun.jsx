import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CultureVodoun.css';

const CultureVodoun = () => {
  return (
    <div className="home-container">
      <section className="intro">
        <h2>Culture Vodoun à Ouidah</h2>
        <p>
          Découvrez la richesse de la culture vodoun, un patrimoine spirituel et culturel unique à Ouidah.
          Plongez dans les traditions, les cérémonies et les lieux sacrés qui façonnent l’identité de la région.
        </p>
      </section>
      <section className="features">
        <div className="feature">
          <img src="/img/ouidah2.jpeg" alt="Cérémonies vodoun" />
          <h3>Cérémonies Traditionnelles</h3>
          <p>
            Participez à des événements vibrants comme la fête du Vodoun, mêlant danses, chants et rituels spirituels.
          </p>
          <Link to="/visite/reservation" className="feature-button">Réserver une visite</Link>
        </div>
        <div className="feature">
          <img src="/img/ouidah1.jpeg" alt="Temples sacrés" />
          <h3>Lieux Sacrés</h3>
          <p>
            Explorez des sites emblématiques comme le Temple des Pythons et la Forêt Sacrée de Kpassè.
          </p>
          <Link to="/visite/site-touristique" className="feature-button">Voir les sites</Link>
        </div>
      </section>
    </div>
  );
};

export default CultureVodoun;