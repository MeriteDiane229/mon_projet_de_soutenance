import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SiteTouristique.css';

const siteLinks = [
  { slug: 'route-esclaves', title: 'Route des Esclaves' },
  { slug: 'porte-non-retour', title: 'Porte du Non-Retour' },
  { slug: 'temple-pythons', title: 'Temple des Pythons' },
  { slug: 'musee-histoire', title: 'Musée d’Histoire de Ouidah' },
  { slug: 'basilique-immaculee-conception', title: "Basilique de l’Immaculée-Conception" },
  { slug: 'place-chacha', title: 'Place Chacha' },
  { slug: 'musee-fondation-zinsou', title: 'Musée Fondation Zinsou' }
];

const SiteList = () => {
  return (
    <div className="site-list">
      <h2>Sites touristiques à découvrir</h2>
      <ul>
        {siteLinks.map(site => (
          <li key={site.slug}>
            <Link to={`/sites/${site.slug}`}>{site.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SiteList;
