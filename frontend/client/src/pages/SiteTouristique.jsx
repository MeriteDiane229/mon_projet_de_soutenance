import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SiteTouristique.css';

const sites = [
  {
    slug: 'route-esclaves',
    title: 'Route des Esclaves',
    description: "Un parcours historique retraçant le trajet des esclaves jusqu'à la mer.",
    image: '/img/Place-des-encheres.png'
  },
  {
    slug: 'porte-non-retour',
    title: 'Porte du Non-Retour',
    description: "Un monument émouvant en mémoire de la traite négrière.",
    image: '/img/porte-non-retour.jpg'
  },
  {
    slug: 'temple-pythons',
    title: 'Temple des Pythons',
    description: "Un lieu sacré dédié aux serpents, symbole spirituel fort à Ouidah.",
    image: '/img/temple-pythons.png'
  },
  {
    slug: 'musee-histoire',
    title: 'Musée d’Histoire de Ouidah',
    description: "Installé dans l'ancien fort portugais, il retrace l'histoire de la ville.",
    image: '/img/musee.jpg'
  },
  {
    slug: 'foret-sacree',
    title: 'Forêt sacrée',
    description: "Lieu de rites vodoun dans un cadre naturel mystique.",
    image: '/img/Forêt_sacrée.jpg'
  },
  {
    slug: 'basilique',
    title: "Basilique de l'Immaculée-Conception",
    description: "Lieu religieux emblématique de la ville.",
    image: '/img/baselique.jpg'
  },
  {
    slug: 'place-encheres',
    title: 'Place Chacha ou Place des Enchères',
    description: "Ancienne place des ventes d’esclaves.",
    image: '/img/Place-des-encheres.png'
  },
  {
    slug: 'fondation-zinsou',
    title: 'Musée Fondation Zinsou',
    description: "Musée d’art contemporain africain à Ouidah.",
    image: '/img/fondation-zinsou.jpg'
  }
];

const SiteTouristique = () => {
  return (
    <section className="tourist-section">
      <h1 className="tourist-title">Sites Touristiques de Ouidah</h1>
      <div className="tourist-grid">
        {sites.map((site, index) => (
          <div className="tourist-card" key={index}>
            <img src={site.image} alt={site.title} />
            <Link to={`/site/${site.slug}`}>
              <h3>{site.title}</h3>
            </Link>
            <p>{site.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SiteTouristique;
