import React from 'react';
import '../styles/CultureVodoun.css';

const CultureVodoun = () => {
  return (
    <div className="culture-vodoun-container">
      <h1>Culture Vodoun à Ouidah</h1>
      <p>
        Découvrez la richesse de la culture vodoun, un patrimoine spirituel et culturel unique à Ouidah.
        Participez aux cérémonies traditionnelles, explorez les temples sacrés et plongez dans les croyances endogènes qui façonnent l’identité de la région.
      </p>
      <section className="vodoun-details">
        <h2>Les Cérémonies Traditionnelles</h2>
        <p>
          Les cérémonies vodoun sont des moments de communion spirituelle, mêlant danses, chants et rituels.
          Assistez à des événements annuels comme la fête du Vodoun pour une expérience immersive.
        </p>
        <h2>Les Temples et Lieux Sacrés</h2>
        <p>
          Visitez des lieux emblématiques comme le Temple des Pythons ou la Forêt Sacrée de Kpassè.
        </p>
      </section>
    </div>
  );
};

export default CultureVodoun;