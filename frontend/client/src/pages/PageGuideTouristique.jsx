import "../styles/GuideTouristique.css";

function PageGuideTouristique() {
  const guides = [
    {
      id: 1,
      name: "Gildas Lissassi",
      language: "Français, Fon",
      experience: "10 ans d’expérience",
      contact: "gildaslissassi@example.com",
      photo: "/img/guide1.jpg"
    },
    {
      id: 2,
      name: "Gilchrist Deguenon",
      language: "Français, Anglais, Fon",
      experience: "6 ans d’expérience",
      contact: "paul.zai@example.com",
      photo: "/img/guide2.jpg"
    },
    {
      id: 3,
      name: "Akouavi Zounon",
      language: "Français, Anglais",
      experience: "5 ans d’expérience",
      contact: "akouavi.zounon@example.com",
      photo: "/img/guide3.jpg"
    },
    {
      id: 4,
      name: "Thales Dossou",
      language: "Français, Anglais, Fon",
      experience: "8 ans d’expérience",
      contact: "thales.dossou@example.com",
      photo: "/img/guide4.jpg"
    }
  ];

  return (
    <div className="guide-container">
      <h1 className="guide-title">Nos guides touristiques</h1>
      {guides.map((guide) => (
        <div key={guide.id} className="guide-card">
          <img src={guide.photo} alt={guide.name} className="guide-photo" />
          <div className="guide-details">
            <h3 className="guide-name">{guide.name}</h3>
            <p className="guide-info"><strong>Langues :</strong> {guide.language}</p>
            <p className="guide-info"><strong>Expérience :</strong> {guide.experience}</p>
            <p className="guide-info"><strong>Mail :</strong> {guide.contact}</p>
            <a href={`mailto:${guide.contact}`}>
              <button className="guide-button">Contacter</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PageGuideTouristique;
