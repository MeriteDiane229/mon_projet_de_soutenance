
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importer Link
import './Home.css';

const images = [
  '/img/ouidah1.jpeg',
  '/img/ouidah2.jpeg',
  '/img/ouidah3.jpg'
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change every 4s

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-container">
      {/* SLIDESHOW */}
      <div className="slideshow">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide ${index + 1}`}
            className={index === currentIndex ? 'slide active' : 'slide'}
          />
        ))}
        <div className="overlay">
          <h1>Bienvenue à Ouidah Culture</h1>
          <p>Explorez les trésors historiques et culturels de Ouidah</p>
        </div>
      </div>

      {/* INTRO */}
      <section className="intro">
        <h2>Explorez nos trésors</h2>
        <p>
          Ouidah est un lieu emblématique au Bénin. Temple des traditions, carrefour de l’histoire et
          de la spiritualité, laissez-vous emporter par son ambiance unique.
        </p>
      </section>

      {/* FEATURES */}
      <section className="features">
        <Link to="/guides/site-touristique" className="feature">
          <img src="/img/ouidah1.jpeg" alt="Site touristique" />
          <h3>Sites touristiques</h3>
          <p>Visitez des lieux emblématiques comme la Route des Esclaves ou la Porte du Non-Retour.</p>
          <button className="feature-button">Découvrir</button>
        </Link>
        <Link to="/CultureVodoun" className="feature">
          <img src="/img/ouidah2.jpeg" alt="Culture vodoun" />
          <h3>Culture Vodoun</h3>
          <p>Participez aux cérémonies traditionnelles et explorez les croyances endogènes.</p>
          <button className="feature-button">Découvrir</button>
        </Link>
        <Link to="/galerie" className="feature">
          <img src="/img/ouidah3.jpg" alt="Galerie" />
          <h3>Galerie</h3>
          <p>Découvrez des œuvres uniques d’artistes locaux et de photographies culturelles.</p>
          <button className="feature-button">Découvrir</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;