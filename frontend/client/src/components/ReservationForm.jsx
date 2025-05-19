// src/components/ReservationForm.jsx
import { useState } from "react";
import "../styles/ReservationForm.css";


const ReservationForm = ({ guides }) => {
  const [formData, setFormData] = useState({
    visitorName: "",
    guideId: "",
    date: "",
    time: "",
    departure: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Réservation envoyée :", formData);
    setSuccess(true);
  };

  return (
    <div className="reservation-form">
      <h2>Réserver un guide</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="visitorName"
          placeholder="Votre nom"
          value={formData.visitorName}
          onChange={handleChange}
          required
        />
        <select name="guideId" value={formData.guideId} onChange={handleChange} required>
          <option value="">-- Choisissez un guide --</option>
          {guides.map((guide) => (
            <option key={guide.id} value={guide.id}>
              {guide.name} ({guide.city})
            </option>
          ))}
        </select>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        <input
          type="text"
          name="departure"
          placeholder="Lieu de départ (facultatif)"
          value={formData.departure}
          onChange={handleChange}
        />
        <button type="submit">Réserver</button>
      </form>
      {success && <p className="success">Réservation envoyée avec succès ✅</p>}
    </div>
  );
};

export default ReservationForm;
