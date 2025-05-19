const Reservation = require("../models/Reservation");

// ➕ Créer une réservation
exports.createReservation = async (req, res) => {
  try {
    const { clientNom, clientEmail, clientTelephone, dateReservation, lieu, guide, message } = req.body;
    const nouvelleReservation = new Reservation({
      clientNom,
      clientEmail,
      clientTelephone,
      dateReservation,
      lieu,
      guide,
      message,
    });
    const saved = await nouvelleReservation.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la création de la réservation.", error });
  }
};

// 📋 Obtenir toutes les réservations
exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find()
      .populate("lieu")
      .populate("guide")
      .sort({ createdAt: -1 });
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des réservations.", error });
  }
};

// 🔍 Obtenir une réservation par ID
exports.getReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id)
      .populate("lieu")
      .populate("guide");
    if (!reservation) return res.status(404).json({ message: "Réservation non trouvée." });
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur.", error });
  }
};

// ✏️ Mettre à jour une réservation
exports.updateReservation = async (req, res) => {
  try {
    const updated = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Réservation non trouvée." });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la mise à jour de la réservation.", error });
  }
};

// ❌ Supprimer une réservation
exports.deleteReservation = async (req, res) => {
  try {
    const deleted = await Reservation.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Réservation non trouvée." });
    res.status(200).json({ message: "Réservation supprimée avec succès." });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la suppression.", error });
  }
};
