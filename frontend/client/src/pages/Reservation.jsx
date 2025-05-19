
import ReservationForm from "../components/ReservationForm";
import guides from "../data/guides";
import "../styles/ReservationForm.css";

const Reservation = () => {
  return (
    <div className="reservation-page">
      {/* <h1>Réservation de Guide Touristique</h1> */}
      <ReservationForm guides={guides} />
    </div>
  );
};

export default Reservation;
