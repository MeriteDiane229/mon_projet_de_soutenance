import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about-section">
      <h1 className="about-title">À propos de Ouidah Culture</h1>

      <div className="about-content">
        {/* Texte à gauche */}
        <div className="about-text">

          {/* Présentation générale */}
          <div>
            <p>
              Ouidah est une commune et une ville côtière du Bénin, située à 42 kilomètres à l'ouest de Cotonou. Le nom de Ouidah est la variante de Huéda, qui était le nom du royaume auquel cette ville appartenait à l'origine, mais qui fut également appliqué par les Européens à la ville côtière. Ouidah a été au XVIIIe siècle l'un des principaux centres de vente et d'embarquement d'esclaves dans le cadre de la traite occidentale.
            </p>
          </div>

          {/* Description */}
          <div>
            <h2>Description</h2>
            <p>
              La ville n'est pas un port puisqu'elle se trouve à 3,5 kilomètres de la côte. Elle est séparée de l'océan par une lagune. En raison des vagues dangereuses et des bancs de sable, les navires de traite européens ne pouvaient pas approcher du rivage. De petites embarcations étaient utilisées pour convoyer les esclaves et les biens. La commune connut une certaine croissance au XIXe siècle, et comptait 162 034 habitants lors du recensement de 2013.
            </p>
          </div>

          {/* Histoire */}
          <div className="histoire-text">
            <h2>Histoire</h2>

            <div className="image-text">
              <img
                className="about-image"
                src="/img/ouidah1.jpeg"
                alt="Monument historique Ouidah"
              />

              <p>
                En 1727, le royaume de Huéda fut conquis par le royaume du Dahomey. La ville de Ouidah resta assujettie au Dahomey jusqu'à son intégration dans l'empire colonial français sous le nom de « Colonie du Dahomey » en 1894. Celle-ci devient indépendante en 1960 en tant que République du Dahomey.
              </p>
            </div>

            <div className="text-text">
              <p>
                L'importance de Ouidah venait du fait que plusieurs puissances européennes (française, portugaise, anglaise) se disputaient son influence. La présence britannique a atteint son apogée au plus fort de la traite des esclaves (1680-1710). Les années 1830 ont vu un passage à l'huile de palme, dominée par les compagnies françaises. Cela coïncidait avec le déclin de Ouidah au profit de Cotonou.
              </p>
              <p>
                Aujourd'hui, Ouidah est économiquement périphérique et le tourisme culturel basé sur la traite des esclaves reste limité. Contrairement aux véritables ports, Ouidah était à l'intérieur des terres. Les esclaves et les marchandises étaient transportés le long de la "route des esclaves" jusqu'à la plage. Les navires, ne pouvant pas accoster, utilisaient des pirogues pour embarquer.
              </p>
            </div>
          </div>

          {/* Galerie d’images secondaires */}
          <div className="inline-images">
            <img src="/img/ouidah2.jpeg" alt="Route des esclaves" />
            <img src="/img/ouidah1.jpeg" alt="Temple des pythons" />
          </div>

          {/* Conclusion */}
          <p>
            Ouidah est aussi une ville de spiritualité, de fêtes et de rencontres. Venez vivre une immersion culturelle inoubliable !
          </p>
        </div>

        {/* Vidéo à droite */}
        <div className="about-media">
          <div className="about-video">
            <iframe
              src="https://www.youtube.com/embed/2dj4p82hC8c"
              title="Présentation Ouidah"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Image optionnelle */}
          <img
            className="about-image"
            src="/img/ouidah1.jpeg"
            alt="Monument historique Ouidah"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
