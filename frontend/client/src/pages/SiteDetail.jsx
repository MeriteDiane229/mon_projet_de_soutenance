import React from 'react';
import { useParams } from 'react-router-dom';
import './SiteDetail.css';

const siteDetails = [
  {
    slug: 'route-esclaves',
    title: 'Route des Esclaves',
    image: '/img/Place-des-encheres.png',
    sections: [
      {
        subtitle: 'La Place des Enchères',
        content: "Au XVIIIe siècle, Africains et Européens s’y échangeaient toutes sortes de marchandises. Les uns vendaient des produits manufacturés, les autres des esclaves (prisonniers de guerre issus d’ethnies rivales, victimes de razzias ou encore coupables d’adultères). 1 pipe valait 5 esclaves, 1 bouteille d’alcool 10 esclaves, 1 canons 15 hommes ou 21 femmes... \n\n De ce marché, il reste aujourd’hui une petite place dénommée « Place Chacha » en l’honneur de Don Francisco de Souza, alia Cha Cha (vite vite), marchand d’esclave brésilien, représentant du Roi auprès des Européens. La plupart des Souza du Bénin sont paraît-il ses descendants. \n\n     «C’est sous cet arbre et en cette place que se tenaient les enchères publiques pendant lesquelles les esclaves destinés aux Amériques étaient troqués contre des marchandises de pacotille »."
        
      },
      {
        subtitle: "La maison fleurie",
        content: "Elle était située juste en face du marché mais a été détruite. Une fois vendu, chaque esclave devait s’y rendre pour y recevoir la marque, au fer rouge, de son acheteur. Puis il entamait sa longue marche, sur la route jusqu’à l’océan."
      },
      {
        subtitle: "L’Arbre de l’Oubli",
        content: "La route des esclaves est jalonnée de 23 magnifiques statues colorées. La plupart ont été réalisée par Cyprien Tokoudagba, peintre et sculpteur béninois reconnu internationalement. Elle représente chacune une part de l’histoire de Ouidah, notamment les symboles des différents rois du Dahomey (l’oiseau, le lion, la hyène, le caméléon, le singe, le serpent, la jambe …) ou encore de la traite des esclaves. \n\n Arrivés à l’Arbre de l’Oubli, les esclaves hommes devaient en faire le tour 9 fois, et les femmes 7 fois de façon à oublier leur famille, leur histoire, leur culture et leur identité et devenir des êtres sans aucune volonté. \n\n   « En ce lieu se trouvait l’arbre de l’oubli. Les esclaves mâles devaient tourner autour de lui neuf fois. Les femmes sept fois. Ces tours étant accomplis, les esclaves étaient censés devenir amnésiques. Ils oubliaient complètement leur passé, leurs origines et leur identité culturelle pour devenir des êtres sans aucune volonté de réagir ou de se rebeller. »"
      },
      {
        subtitle: "Les cases Zomaï de Ouidah",
        content: "Les esclaves étaient ensuite conduits dans des sortes d’entrepôts totalement obscures et exigus (« Zomaï » signifiant « que le feu ou la lumière ne s’y attarde pas ») dans lesquels ils étaient enfermés pendant 3 à 4 mois jusqu’à l’arrivée des navires négriers. Des conditions de vie horribles – entassés les uns sur les autres, dans le noir, rarement nourris – qui étaient censées leur donner un avant-goût de ce qui les attendait dans les bateaux. Il ne reste rien de ces cases qui ont été remplacées par des sculptures. \n\n  « En effet, en cet endroit se trouvait une grande case hermétiquement close où les esclaves étaient enfermés dès leur arrivée à Zounbodji. Et d’où ils ne sortaient que pour être transférés vers l’arbre du retour. Cette séquestration absolue désorientait totalement les esclaves et rendait extrêmement difficile toute tentative de fuite ou de rébellion; Ce séjour ici les conditionnait pour la vie de promiscuité et d’obscurité des cales des négriers.» "
      },
      {
        subtitle: "Le Mémorial du Souvenir",
        content: "Les nombreux esclaves qui ne survivaient pas à leurs inhumaines conditions de détention étaient enterrés dans une fosse commune. Un mémorial et a a été érigé à cet endroit. Un mur des lamentations se dresse au milieu."
      },
      {
        subtitle: "L’Arbre du Retour",
        content: "A quelques mètres du mémorial, un arbre généreux, debout depuis 200 ans, trône au milieu d’une placette tel un témoin du passé. Une fois qu’ils quittaient les cases, les esclaves s’y arrêtaient et en faisaient 3 fois le tour. Ce rituel leur garantissait que leur esprit reviendrait sur la terre de leurs ancêtres quoi qu’il arrive et où qu’ils meurent. Dernière volonté accordée à des êtres humains en sursis."
      },
      {
        subtitle: "La porte de Non Retour de Ouidah",
        content: "La Route des Esclaves se termine par une immense porte inaugurée en 1995, symbolisant le passage des esclaves vers l’autre monde et l’impossibilité pour eux de revenir. La mer étant peu profonde, les navires ne pouvaient atteindre les côtes. Des pirogues les attendaient pour les conduire dans les navires. Ultime chance de se donner la mort et d’échapper à ce funeste destin. \n\n La porte de Non Retour a été réalisée par Fortuné BANDEIRA, architecte, décorateur et peintre béninois. "
      }
    ]
  },

   {
    slug: 'porte-non-retour',
    title: 'Porte du Non-Retour',
    image: '/img/porte-non-retour.jpg',
    sections: [
      {
        subtitle: "Un symbole fort",
        content: "Implantée à Ouidah au bord de l’océan Atlantique, la porte du non retour symbolise le lieu d’embarquement des esclaves noirs pour les Amériques. Témoin vivant et douloureux du commerce des noirs, la porte du non retour à Ouidah marque la fin de la route des esclaves.Cette route part de la place aux enchères aussi appelée par ignorance place Chacha au centre ville de Ouidah. Elle est érigée en 1717 par le roi Ghézo d’Abomey qui avait confié à son ami le brésilien de Souza, l’activité de la vente des prisonniers de guerre aux européens.Après des semaines voir des mois de calvaire, le périple sur la terre de leur ancêtres prend fin à la plage de Ouidah. De l’autre côté de l’ouverture et au large des cotes de l’océan atlantique, ils seront transportés par de petites pirogues qui vont les acheminer vers les bateaux négriers.Aujourd’hui rénové, ce lieu inscrit sur la liste des patrimoines de l’Unesco est devenu une touristique. Il faut s’y rendre pour vivre l’émotion que dégage toute cette histoire qui hante la mémoire collective."
      }
    ]
  },

  {
    slug: 'temple-pythons',
    title: 'Temple des Pythons',
    image: '/img/temple-pythons.png',
    sections: [
      {
        subtitle: 'Spiritualité et culture',
        content: "Le temple des pythons est un sanctuaire vodùn situé à Ouidah, qui abrite une multitude de pythons royaux vénérés par les xwédah depuis la fin du XVIIe siècle. Ce magnifique lieu, en face duquel a été construite la basilique de l’Immaculée Conception de Ouidah, témoigne de l’importance de la tolérance interreligieuse au Bénin. \n\n Durant la visite, imprégnez-vous de l’histoire de l’iroko sacré, de la jarre sacrée, de la divinité Lègba et bien évidemment des magnifiques pythons royaux que vous pourrez toucher ou mettre autour du cou."
      }
    ]
  },

  {
    slug: 'musee-histoire',
    title: 'Le fort portugais et le musée d’histoire de Ouidah',
    image: '/img/musee.jpg',
    sections: [
      {
         subtitle: 'Un musée dans un fort portugais',
        content: "Le fort Sao Joao Baptista de Ajuda a été construit en 1721. Il est le seul fort sauvegardé de la ville. Les 4 autres (français, hollandais, anglais et danois) ont été détruits. Il permet de se rendre compte de la dimension militaire du lieu avec le mur d’enceinte, les canons, le logement du gouverneur et des soldats. Mais aussi de commencer à découvrir l’histoire du royaume de Ouidah et de l’esclavage. \n\n Le musée, hébergé au sein du fort, retrace l’histoire des souverains locaux, de leur relation avec les européens et donne à voir les conditions dans lesquelles les esclaves étaient emprisonnés pendant des mois, à l’intérieur du fort, en attendant l’arrivée des navires négriers. On y trouve aussi une très belle exposition de photos de Pierre Verger qui montre la proximité culturelle entre le Bénin et le Brésil (pays de destination de la plupart des esclaves qui ont quitté la région)."
      }
    ]
  },
  
  {
    slug: 'foret-sacree',
    title: 'Forêt sacrée',
    image: '/img/Forêt_sacrée.jpg',
    sections: [
      {
        subtitle: 'Un lieu sacré et symbolique',
        content: "Également connue sous le nom de Kpassèzoun la « forêt de Kpassè » , elle doit sa sacralisation à un épisode mystérieux de la vie du roi Kpassè, deuxième roi de Savi et véritable fondateur du royaume houéda. Vers le milieu du XVIIe siècle, le roi aurait disparu, puis serait réapparu dans un pied d'iroko (Milicia excelsa) au cœur de la forêt. Siège d'un phénomène surnaturel, l'arbre est devenu sacré."
      }
    ]
  },

  {
    slug: 'basilique-immaculee-conception',
    title: "Basilique de l’Immaculée-Conception",
    image: '/img/baselique.jpg',
    sections: [
      {
        subtitle: 'Un lieu de foi emblématique',
        content: "La Basilique de l’Immaculée-Conception de Ouidah est l’un des plus importants édifices religieux chrétiens du Bénin. Construite à l’époque coloniale, elle témoigne de la présence du catholicisme à Ouidah. C’est un lieu de pèlerinage et de recueillement, apprécié pour son architecture sobre et spirituelle."
      }
    ]
  },
  
  {
    slug: 'place-chacha',
    title: "Place Chacha (ou Place des Enchères)",
    image: '/img/Place-des-encheres.png',
    sections: [
      {
        subtitle: 'Un marché d’échanges historiques',
        content: "Au XVIIIe siècle, Africains et Européens s’y échangeaient toutes sortes de marchandises. Les uns vendaient des produits manufacturés, les autres des esclaves. Une pipe valait 5 esclaves, une bouteille d’alcool 10 esclaves, un canon 15 hommes ou 21 femmes...\n\nAujourd’hui, il ne reste qu’une petite place appelée « Place Chacha », en l’honneur de Don Francisco de Souza, un important marchand d’esclaves brésilien. Il représentait le roi du Dahomey auprès des Européens. Une majorité des Souza au Bénin seraient ses descendants."
      }
    ]
  },
  
  {
    slug: 'musee-fondation-zinsou',
    title: 'Musée Fondation Zinsou',
    image: '/img/fondation-zinsou.jpg',
    sections: [
      {
        subtitle: 'Un musée d’art contemporain africain',
        content: "Installée dans une villa coloniale restaurée, la Fondation Zinsou à Ouidah expose des œuvres d’art contemporain africain. C’est un lieu qui promeut la culture, l’éducation et l’ouverture artistique. Le musée accueille des expositions temporaires, des ateliers et des visites éducatives pour les jeunes publics."
      }
    ]
  }
  
  
  

  // Tu peux continuer à ajouter les autres sites ici
];


const SiteDetail = () => {
  const { slug } = useParams();
  const site = siteDetails.find(site => site.slug === slug);

  if (!site) {
    return <h2>Site touristique introuvable.</h2>;
  }

  return (
    <div className="site-detail">
      <h1>{site.title}</h1>
      <img src={site.image} alt={site.title} />
      {site.sections ? (
        site.sections.map((sec, index) => (
          <div key={index}>
            <h3>{sec.subtitle}</h3>
            {sec.content.split('\n\n').map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        ))
      ) : (
        <p>{site.content}</p>
      )}
    </div>
  );
 };  

export default SiteDetail;
